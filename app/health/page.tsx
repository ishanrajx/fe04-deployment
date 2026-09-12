export default async function HealthPage() {
  const response = await fetch("https://api.github.com/zen", {
    cache: "no-store",
  });

  const message = response.ok
    ? await response.text()
    : "Health service unavailable";

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          AI Study Assistant
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Health Check
        </h1>

        <p className="mt-4 text-slate-300">
          This page verifies that the application can fetch external data.
        </p>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm text-slate-400">
            API Response
          </p>

          <p className="mt-3 text-lg text-green-400">
            {message}
          </p>
        </div>
      </div>
    </main>
  );
}