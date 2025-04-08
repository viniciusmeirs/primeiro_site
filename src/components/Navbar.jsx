import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">Carros Elétricos</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Início</a>
            <a href="#" className="hover:underline">Notícias</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center px-6">
        <h2 className="text-5xl font-bold mb-6">O futuro é elétrico</h2>
        <p className="text-lg max-w-xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Fique por dentro das últimas novidades, lançamentos e tendências do mundo dos carros elétricos.
        </p>
        <a
          href="#"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Ver notícias
        </a>
      </section>

      {/* Placeholder para futuras seções */}
      <section className="bg-gray-50 dark:bg-zinc-900 py-20 text-center">
        <p className="text-gray-500 dark:text-gray-400">Mais conteúdo em breve...</p>
      </section>
    </div>
  );
}
