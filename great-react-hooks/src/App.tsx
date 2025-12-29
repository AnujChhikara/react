import { FlowDiagram } from "./hooks/use-flow";
const SHAPES = [
  {
    id: "client",
    type: "roundedRectangle" as const,
    label: "Client",
    color: "#ec4899",
    width: 120,
    height: 80,
  },
  {
    id: "api",
    type: "diamond" as const,
    label: "API",
    color: "#3b82f6",
    width: 100,
    height: 100,
  },
  {
    id: "server",
    type: "rectangle" as const,
    label: "Server",
    color: "#10b981",
    width: 120,
    height: 80,
  },
  {
    id: "database",
    type: "cylinder" as const,
    label: "DB",
    color: "#8b5cf6",
    width: 100,
    height: 120,
  },
  {
    id: "cache",
    type: "hexagon" as const,
    label: "Cache",
    color: "#f59e0b",
    width: 100,
    height: 100,
  },
];

function App() {
  const connections = [
    "client->api",
    "api->server",
    {
      from: "server",
      to: "database",
      lineStyle: "dotted" as const,
      animated: "flow" as const,
    },
    {
      from: "server",
      to: "cache",
      lineStyle: "dotted" as const,
      animated: "flow" as const,
    },
  ];

  return (
    <FlowDiagram
      shapes={SHAPES}
      connections={connections}
      defaultLineColor="#ffffff"
      defaultAnimated="light"
      gap={80}
    />
  );
}

export default App;
