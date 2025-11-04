'use client';

import Link from 'next/link';

export default function FailurePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-rose-600">
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="text-8xl mb-6">😢</div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Oops! Wrong Answer
          </h1>
          <p className="text-2xl text-white/90 mb-8 drop-shadow">
            Don't give up! Try again!
          </p>
          
          <div className="flex flex-col gap-4">
            <Link
              href="/quiz"
              className="inline-block px-12 py-4 text-2xl font-bold text-red-600 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-red-50"
            >
              🔄 Retry Quiz
            </Link>
            
            <Link
              href="/"
              className="inline-block px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
