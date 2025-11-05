import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-8 text-center max-w-2xl w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
            🎯 Défi Quiz
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 drop-shadow px-2">
            Testes tes connaissances et gagnes une surprise !
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-purple-600 bg-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 hover:bg-purple-50"
          >
            Démarrer le Quiz 🚀
          </Link>
        </div>
      </main>
    </div>
  );
}
