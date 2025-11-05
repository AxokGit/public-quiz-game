'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-4">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8 text-center max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 w-full">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-bounce">🎉</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            Félicitations !
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 drop-shadow px-2">
            Tu as réussi le quiz avec succès !
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 px-2">
            Clique ci-dessous pour réclamer ton prix ! 🎁
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-green-600 bg-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 hover:bg-green-50"
            >
              🎁 Réclamer ton prix !
            </a>
            
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
