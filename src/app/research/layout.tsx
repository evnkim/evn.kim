import ThemeToggle from "../ThemeToggle";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Minimal header with just theme toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
          <ThemeToggle />
          <div className="h-6 w-0.5 bg-stone-700 dark:bg-stone-200" />
        </div>
      </header>

      {/* Full-width content area */}
      <main>{children}</main>
    </div>
  );
}
