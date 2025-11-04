import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎯 Défi Quiz
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow">
            Testes tes connaissances et gagnes une surprise !
          </p>
          <Link
            href="/quiz"
            className="inline-block px-12 py-4 text-2xl font-bold text-purple-600 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-purple-50"
          >
            Démarrer le Quiz 🚀
          </Link>
        </div>
      </main>
    </div>
  );
}
