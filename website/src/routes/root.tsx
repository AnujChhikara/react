import { Outlet, Link, useLocation } from "react-router";

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-bg-default">
      <header className="sticky top-0 z-50 bg-bg-default/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-text-primary font-medium text-lg no-underline hover:text-text-primary transition-colors"
          >
            <span>⚡</span>
            <span>Great React Hooks</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              to="/"
              className={`text-sm text-text-secondary no-underline hover:text-text-primary transition-colors ${
                isHome ? "text-text-primary" : ""
              }`}
            >
              Hooks
            </Link>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <Outlet />
      </main>
      <footer className="border-t border-border py-8 text-center text-text-muted text-sm">
        <p>Built with React • MIT License</p>
      </footer>
    </div>
  );
}

