'use client';

import Link from 'next/link';

export default function FailurePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 p-4">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8 text-center max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 w-full">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">😢</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Oops! Mauvaise réponse
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 drop-shadow px-2">
            N'abandonne pas ! Essaie encore !
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <Link
              href="/quiz"
              className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-red-600 bg-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 hover:bg-red-50"
            >
              🔄 Réessayer le Quiz
            </Link>
            
            <Link
              href="/"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/20 active:scale-95 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
