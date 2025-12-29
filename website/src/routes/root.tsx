import { Outlet, Link, useLocation } from "react-router";

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Great React Hooks</span>
          </Link>
          <nav className="nav">
            <Link
              to="/"
              className={`nav-link ${isHome ? "active" : ""}`}
            >
              Hooks
            </Link>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>Built with React • MIT License</p>
      </footer>
    </div>
  );
}

