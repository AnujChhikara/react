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
    <div>
      <section className="text-center py-16 mb-20">
        <h1 className="text-5xl font-semibold text-text-primary mb-4 tracking-tight">
          Great React Hooks
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A collection of powerful, type-safe React hooks and components for
          building modern web applications.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Available Hooks & Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hooks.map((hook) => (
            <HookCard key={hook.path} {...hook} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Why Use These Hooks?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-bg-secondary rounded-lg border border-border">
            <span className="text-3xl block mb-3">🎯</span>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Type-Safe
            </h3>
            <p className="text-sm text-text-secondary">
              Full TypeScript support with comprehensive type definitions
            </p>
          </div>
          <div className="p-6 bg-bg-secondary rounded-lg border border-border">
            <span className="text-3xl block mb-3">⚡</span>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Lightweight
            </h3>
            <p className="text-sm text-text-secondary">
              Minimal bundle size with zero unnecessary dependencies
            </p>
          </div>
          <div className="p-6 bg-bg-secondary rounded-lg border border-border">
            <span className="text-3xl block mb-3">🔧</span>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Customizable
            </h3>
            <p className="text-sm text-text-secondary">
              Flexible APIs that adapt to your specific needs
            </p>
          </div>
          <div className="p-6 bg-bg-secondary rounded-lg border border-border">
            <span className="text-3xl block mb-3">📚</span>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Well Documented
            </h3>
            <p className="text-sm text-text-secondary">
              Comprehensive documentation with examples
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

