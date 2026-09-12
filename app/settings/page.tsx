export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          AI Study Assistant
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-4 text-slate-300">
          Manage your study preferences and application settings.
        </p>

        <div className="mt-10 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">
              Study Preferences
            </h2>

            <p className="mt-2 text-slate-400">
              Personalization options will be available here.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">
              AI Settings
            </h2>

            <p className="mt-2 text-slate-400">
              AI model preferences will be available here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}