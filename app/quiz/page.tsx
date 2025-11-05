'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load questions from JSON
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setIsLoading(false);
        setStartTime(Date.now()); // Start timer when questions are loaded
      });
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = async () => {
    if (selectedAnswer === null || feedback !== null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    // Show feedback
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      // Increment score for correct answer
      setScore(score + 1);
    }

    // Show the "Next" button
    setShowNextButton(true);
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setFeedback(null);
      setShowNextButton(false);
    } else {
      // Quiz completed - call Discord webhook
      const timeTaken = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
      
      try {
        await fetch('/api/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Quiz completed successfully!',
            score: score,
            totalQuestions: questions.length,
            timeTaken: timeTaken,
          }),
        });
      } catch (error) {
        console.error('Error calling webhook:', error);
      }
      
      // Redirect to success page
      router.push('/success');
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-white text-2xl">Chargement...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-3 sm:p-4 md:p-6">
      <main className="w-full max-w-2xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
          {/* Progress */}
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between text-white mb-2 text-sm sm:text-base">
              <span className="font-semibold">Question {currentQuestionIndex + 1}/{questions.length}</span>
              <span className="font-semibold">Score: {score}/{questions.length}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
              <div 
                className="bg-white h-2 sm:h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center leading-tight">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const showCorrect = feedback && isCorrectAnswer;
              const showIncorrect = feedback === 'incorrect' && isSelected && !isCorrectAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => !feedback && handleAnswerSelect(index)}
                  disabled={feedback !== null}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    showCorrect
                      ? 'bg-green-500 text-white shadow-lg scale-105 ring-2 sm:ring-4 ring-green-300'
                      : showIncorrect
                      ? 'bg-red-500 text-white shadow-lg scale-105 ring-2 sm:ring-4 ring-red-300'
                      : isSelected
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 active:scale-95'
                  } ${feedback ? 'cursor-not-allowed' : ''}`}
                >
                  <span className="mr-2 sm:mr-3 text-base sm:text-lg font-bold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {showCorrect && <span className="ml-2">✓</span>}
                  {showIncorrect && <span className="ml-2">✗</span>}
                </button>
              );
            })}
          </div>

          {/* Submit Button */}
          {!showNextButton ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`w-full py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 ${
                selectedAnswer !== null
                  ? 'bg-white text-purple-600 hover:shadow-xl active:scale-95 cursor-pointer'
                  : 'bg-white/30 text-white/50 cursor-not-allowed'
              }`}
            >
              Valider
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 bg-white text-purple-600 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Terminer le Quiz'}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
