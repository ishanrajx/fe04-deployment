export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          AI Study Assistant
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Study History
        </h1>

        <p className="mt-4 text-slate-300">
          Your previous AI study sessions will appear here.
        </p>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-xl font-semibold">
            No study sessions yet
          </h2>

          <p className="mt-2 text-slate-400">
            Complete a study session and your results will appear here.
          </p>
        </div>
      </div>
    </main>
  );
}