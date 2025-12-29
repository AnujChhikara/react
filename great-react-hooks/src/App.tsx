import { FlowProvider, Shape, Connectors } from "./hooks/use-flow";

function App() {
  return (
    <FlowProvider
      connections={[
        {
          from: "client",
          to: "api",
          color: "#ffffff",
          strokeWidth: 2,
          lineStyle: "dashed",
          animated: "flow",
          flowDirection: "rtl",
        },
        {
          from: "api",
          to: "server",
          color: "#ffffff",
          strokeWidth: 2,
          lineStyle: "dotted",
          animated: "flow",
          flowDirection: "rtl",
        },
        {
          from: "server",
          to: "database",
          color: "#ffffff",
          strokeWidth: 2,
          lineStyle: "dotted",
          animated: "flow",
          flowDirection: "rtl",
        },
        {
          from: "server",
          to: "cache",
          color: "#ffffff",
          strokeWidth: 2,
          lineStyle: "dotted",
          animated: "flow",
          flowDirection: "rtl",
        },
      ]}
    >
      <Connectors />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "80px",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          minHeight: "100vh",
        }}
      >
        <Shape
          id="client"
          type="roundedRectangle"
          style={{ backgroundColor: "#ec4899", width: 120, height: 80 }}
        >
          <span style={{ color: "#fff", fontWeight: "bold" }}>Client</span>
        </Shape>

        <Shape
          id="api"
          type="diamond"
          style={{ backgroundColor: "#3b82f6", width: 100, height: 100 }}
        >
          <span style={{ color: "#fff", fontWeight: "bold" }}>API</span>
        </Shape>

        <Shape
          id="server"
          type="rectangle"
          style={{ backgroundColor: "#10b981", width: 120, height: 80 }}
        >
          <span style={{ color: "#fff", fontWeight: "bold" }}>Server</span>
        </Shape>

        <Shape
          id="database"
          type="cylinder"
          style={{ backgroundColor: "#8b5cf6", width: 100, height: 120 }}
        >
          <span style={{ color: "#fff", fontWeight: "bold" }}>DB</span>
        </Shape>

        <Shape
          id="cache"
          type="hexagon"
          style={{ backgroundColor: "#f59e0b", width: 100, height: 100 }}
        >
          <span style={{ color: "#fff", fontWeight: "bold" }}>Cache</span>
        </Shape>
      </div>
    </FlowProvider>
  );
}

export default App;
