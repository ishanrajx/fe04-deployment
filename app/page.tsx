export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
          AI Study Assistant
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Study smarter with AI.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Understand difficult topics, create summaries, and make your study
          sessions more effective with AI.
        </p>

        <div className="mt-10">
          <a
            href="/study"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Start Studying
          </a>
        </div>
      </section>
    </main>
  );
}