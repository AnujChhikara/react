import { Link } from "react-router";
import { FlowDiagram } from "react-animated-flow-diagram";
import CodeBlock from "../../components/CodeBlock";

const DEMO_SHAPES = [
  {
    id: "user",
    type: "roundedRectangle" as const,
    label: "User",
    color: "#6366f1",
    width: 100,
    height: 60,
  },
  {
    id: "api",
    type: "hexagon" as const,
    label: "API",
    color: "#8b5cf6",
    width: 100,
    height: 70,
  },
  {
    id: "db",
    type: "cylinder" as const,
    label: "Database",
    color: "#a855f7",
    width: 100,
    height: 80,
  },
];

export default function FlowDiagramPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary no-underline mb-4 hover:text-text-primary transition-colors"
        >
          ← Back to Hooks
        </Link>
        <h1 className="text-4xl font-semibold text-text-primary mb-2 font-mono">
          FlowDiagram
        </h1>
        <p className="text-base text-text-muted font-mono mb-4">
          react-animated-flow-diagram
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          A React component for creating beautiful, animated flow diagrams with
          customizable shapes, connections, and animations. Perfect for
          visualizing processes, architectures, and workflows.
        </p>
      </header>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Thought Process
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Visualizing system architectures, workflows, and processes is
          essential for documentation and presentations. Existing solutions are
          often complex, require external dependencies, or don't integrate well
          with React.
        </p>
        <p className="text-text-secondary leading-relaxed">
          <strong className="text-text-primary">FlowDiagram</strong> provides a declarative API for creating
          flow diagrams with SVG-based animated connections. Define your shapes
          and connections, and the component handles positioning, line drawing,
          and animations automatically.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          What It Does
        </h2>
        <p className="text-text-secondary mb-4">This component provides:</p>
        <ul className="text-text-secondary ml-6 space-y-2 list-disc">
          <li>
            Multiple shape types (rectangle, rounded rectangle, diamond,
            hexagon, cylinder)
          </li>
          <li>
            Animated connections with flow indicators (dots moving along lines)
          </li>
          <li>Customizable line styles (solid, dashed, dotted)</li>
          <li>Configurable colors, sizes, and gaps</li>
          <li>
            Simple connection syntax (&quot;nodeA-&gt;nodeB&quot; strings)
          </li>
          <li>Responsive layout with flexbox</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          API Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Prop
                </th>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Type
                </th>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    shapes
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    FlowShape[]
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Array of shape definitions
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    connections
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    string[] | Connection[]
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Connections between shapes
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    defaultLineColor
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    string
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Default color for connection lines
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    defaultAnimated
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    &quot;flow&quot; | &quot;pulse&quot; | false
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Default animation type
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    defaultLineStyle
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    &quot;solid&quot; | &quot;dashed&quot; | &quot;dotted&quot;
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Default line style
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    gap
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    number
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Gap between shapes in pixels
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-text-primary">
          Shape Types
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Type
                </th>
                <th className="text-left p-3 bg-bg-secondary text-text-primary font-semibold border-b border-border">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    rectangle
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Standard rectangle shape
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    roundedRectangle
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Rectangle with rounded corners
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    diamond
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Diamond/rhombus shape for decisions
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    hexagon
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Six-sided polygon
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-border text-text-secondary">
                  <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
                    cylinder
                  </code>
                </td>
                <td className="p-3 border-b border-border text-text-secondary">
                  Cylinder shape for databases
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Live Demo
        </h2>
        <div className="bg-bg-secondary border border-border rounded-lg p-6 my-4">
          <div className="text-xs uppercase tracking-wider text-text-secondary mb-4 font-semibold">
            Simple Flow Example
          </div>
          <div className="bg-bg-default rounded-lg min-h-[400px] flex items-center justify-center p-8">
            <FlowDiagram
              shapes={DEMO_SHAPES}
              connections={["user->api", "api->db"]}
              defaultLineColor="#8b5cf6"
              defaultAnimated="flow"
              defaultLineStyle="dashed"
              gap={60}
            />
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          Usage Example
        </h2>
        <CodeBlock
          title="ArchitectureDiagram.tsx"
          code={`import { FlowDiagram } from "react-animated-flow-diagram";

const shapes = [
  {
    id: "client",
    type: "roundedRectangle",
    label: "Client",
    color: "#ec4899",
    width: 120,
    height: 70,
  },
  {
    id: "server",
    type: "hexagon",
    label: "Server",
    color: "#10b981",
    width: 120,
    height: 80,
  },
  {
    id: "database",
    type: "cylinder",
    label: "Database",
    color: "#8b5cf6",
    width: 120,
    height: 100,
  },
];

function ArchitectureDiagram() {
  return (
    <FlowDiagram
      shapes={shapes}
      connections={["client->server", "server->database"]}
      defaultLineColor="#ffffff"
      defaultAnimated="flow"
      defaultLineStyle="dashed"
      gap={80}
    />
  );
}`}
        />
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-text-muted rounded-full"></span>
          useFlow Hook
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          The package also exports a{" "}
          <code className="bg-bg-tertiary px-2 py-1 rounded text-xs font-mono text-text-primary">
            useFlow
          </code>{" "}
          hook for accessing flow diagram context and programmatically setting
          connections:
        </p>
        <CodeBlock
          title="Using useFlow"
          code={`import { useFlow, FlowProvider } from "react-animated-flow-diagram";

function FlowController() {
  const { shapes, setConnections } = useFlow();
  
  const updateConnections = () => {
    setConnections([
      { from: "nodeA", to: "nodeB" },
      { from: "nodeB", to: "nodeC" },
    ]);
  };

  return (
    <button onClick={updateConnections}>
      Update Connections
    </button>
  );
}`}
        />
      </section>
    </div>
  );
}

