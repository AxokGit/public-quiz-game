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
  const router = useRouter();

  useEffect(() => {
    // Load questions from JSON
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setIsLoading(false);
      });
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = async () => {
    if (selectedAnswer === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    
    // Check if answer is correct
    if (selectedAnswer !== currentQuestion.correctAnswer) {
      // Wrong answer - redirect to failure page
      router.push('/failure');
      return;
    }

    // Correct answer
    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed successfully - call Discord webhook
      try {
        await fetch('/api/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Quiz completed successfully!',
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <main className="w-full max-w-2xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-white mb-2">
              <span className="font-semibold">Question {currentQuestionIndex + 1} sur {questions.length}</span>
              <span className="font-semibold">{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl font-medium transition-all duration-300 ${
                  selectedAnswer === index
                    ? 'bg-white text-purple-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-102'
                }`}
              >
                <span className="mr-3 text-lg font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`w-full py-4 rounded-full font-bold text-xl transition-all duration-300 ${
              selectedAnswer !== null
                ? 'bg-white text-purple-600 hover:shadow-xl hover:scale-105 cursor-pointer'
                : 'bg-white/30 text-white/50 cursor-not-allowed'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Soumettre le Quiz'}
          </button>
        </div>
      </main>
    </div>
  );
}
