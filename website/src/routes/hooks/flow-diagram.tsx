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
    <div className="hook-page">
      <header className="hook-header">
        <Link to="/" className="back-link">
          ← Back to Hooks
        </Link>
        <h1 className="hook-title">FlowDiagram</h1>
        <p className="hook-package">react-animated-flow-diagram</p>
        <p className="hook-description">
          A React component for creating beautiful, animated flow diagrams with
          customizable shapes, connections, and animations. Perfect for
          visualizing processes, architectures, and workflows.
        </p>
      </header>

      <section className="content-section">
        <h2>Thought Process</h2>
        <p>
          Visualizing system architectures, workflows, and processes is
          essential for documentation and presentations. Existing solutions are
          often complex, require external dependencies, or don't integrate well
          with React.
        </p>
        <p>
          <strong>FlowDiagram</strong> provides a declarative API for creating
          flow diagrams with SVG-based animated connections. Define your shapes
          and connections, and the component handles positioning, line drawing,
          and animations automatically.
        </p>
      </section>

      <section className="content-section">
        <h2>What It Does</h2>
        <p>This component provides:</p>
        <ul style={{ color: "var(--text-secondary)", marginLeft: "1.5rem" }}>
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

      <section className="content-section">
        <h2>API Reference</h2>
        <table className="api-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>shapes</code>
              </td>
              <td>
                <code>FlowShape[]</code>
              </td>
              <td>Array of shape definitions</td>
            </tr>
            <tr>
              <td>
                <code>connections</code>
              </td>
              <td>
                <code>string[] | Connection[]</code>
              </td>
              <td>Connections between shapes</td>
            </tr>
            <tr>
              <td>
                <code>defaultLineColor</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Default color for connection lines</td>
            </tr>
            <tr>
              <td>
                <code>defaultAnimated</code>
              </td>
              <td>
                <code>&quot;flow&quot; | &quot;pulse&quot; | false</code>
              </td>
              <td>Default animation type</td>
            </tr>
            <tr>
              <td>
                <code>defaultLineStyle</code>
              </td>
              <td>
                <code>&quot;solid&quot; | &quot;dashed&quot; | &quot;dotted&quot;</code>
              </td>
              <td>Default line style</td>
            </tr>
            <tr>
              <td>
                <code>gap</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Gap between shapes in pixels</td>
            </tr>
          </tbody>
        </table>

        <h3
          style={{
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            color: "var(--text-primary)",
          }}
        >
          Shape Types
        </h3>
        <table className="api-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>rectangle</code>
              </td>
              <td>Standard rectangle shape</td>
            </tr>
            <tr>
              <td>
                <code>roundedRectangle</code>
              </td>
              <td>Rectangle with rounded corners</td>
            </tr>
            <tr>
              <td>
                <code>diamond</code>
              </td>
              <td>Diamond/rhombus shape for decisions</td>
            </tr>
            <tr>
              <td>
                <code>hexagon</code>
              </td>
              <td>Six-sided polygon</td>
            </tr>
            <tr>
              <td>
                <code>cylinder</code>
              </td>
              <td>Cylinder shape for databases</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h2>Live Demo</h2>
        <div className="demo-container">
          <div className="demo-title">Simple Flow Example</div>
          <div className="flow-demo-container">
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

      <section className="content-section">
        <h2>Usage Example</h2>
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

      <section className="content-section">
        <h2>useFlow Hook</h2>
        <p>
          The package also exports a <code>useFlow</code> hook for accessing
          flow diagram context and programmatically setting connections:
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

