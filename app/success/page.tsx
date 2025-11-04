'use client';

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Félicitations !
          </h1>
          <p className="text-2xl text-white/90 mb-8 drop-shadow">
            Tu as réussi le quiz avec succès !
          </p>
          <p className="text-xl text-white/80 mb-8">
            Clique ci-dessous pour réclamer ton prix ! 🎁
          </p>
          
          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-2xl font-bold text-green-600 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-green-50"
            >
              🎁 Réclamer ton prix !
            </a>
            
            <Link
              href="/"
              className="inline-block px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
