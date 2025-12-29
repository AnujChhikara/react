import HookCard from "../components/HookCard";

const hooks = [
  {
    title: "useScreenshot",
    description:
      "Capture screenshots of React components and DOM elements with ease. Supports PNG/JPEG formats with customizable quality.",
    path: "/hooks/use-screenshot",
    icon: "📸",
    packageName: "great-react-screenshot",
  },
  {
    title: "useViewport",
    description:
      "Track viewport dimensions, breakpoints, orientation, and keyboard visibility in real-time with debounce support.",
    path: "/hooks/use-viewport",
    icon: "📱",
    packageName: "react-use-viewport",
  },
  {
    title: "FlowDiagram",
    description:
      "Create beautiful animated flow diagrams with customizable shapes, connections, and animations.",
    path: "/hooks/flow-diagram",
    icon: "🔄",
    packageName: "react-animated-flow-diagram",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Great React Hooks</h1>
        <p className="hero-subtitle">
          A collection of powerful, type-safe React hooks and components for
          building modern web applications.
        </p>
      </section>

      <section className="hooks-section">
        <h2 className="section-title">Available Hooks & Components</h2>
        <div className="hooks-grid">
          {hooks.map((hook) => (
            <HookCard key={hook.path} {...hook} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Use These Hooks?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Type-Safe</h3>
            <p>Full TypeScript support with comprehensive type definitions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Lightweight</h3>
            <p>Minimal bundle size with zero unnecessary dependencies</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔧</span>
            <h3>Customizable</h3>
            <p>Flexible APIs that adapt to your specific needs</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Well Documented</h3>
            <p>Comprehensive documentation with examples</p>
          </div>
        </div>
      </section>
    </div>
  );
}

