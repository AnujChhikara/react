import { FlowDiagram } from "react-flow-diagram";
const SHAPES = [
  {
    id: "client",
    type: "roundedRectangle" as const,
    label: "Client",
    color: "#ec4899",
    width: 140,
    height: 80,
  },

  {
    id: "cdn",
    type: "hexagon" as const,
    label: "CDN / Load Balancer",
    color: "#f97316",
    width: 160,
    height: 90,
  },

  {
    id: "api-gateway",
    type: "diamond" as const,
    label: "API Gateway",
    color: "#3b82f6",
    width: 140,
    height: 140,
  },

  {
    id: "auth",
    type: "rectangle" as const,
    label: "Auth / Rate Limit",
    color: "#ef4444",
    width: 160,
    height: 80,
  },

  {
    id: "server",
    type: "rectangle" as const,
    label: "Backend Service",
    color: "#10b981",
    width: 160,
    height: 90,
  },

  {
    id: "cache",
    type: "hexagon" as const,
    label: "Cache (Redis)",
    color: "#f59e0b",
    width: 140,
    height: 90,
  },

  {
    id: "database",
    type: "cylinder" as const,
    label: "Database",
    color: "#8b5cf6",
    width: 140,
    height: 120,
  },
];

function App() {
  const connections = [
    "client->cdn",
    "cdn->api-gateway",
    "api-gateway->auth",
    "auth->server",
    "server->cache",
    "cache->database",
  ];

  return (
    <FlowDiagram
      shapes={SHAPES}
      connections={connections}
      defaultLineColor="#ffffff"
      defaultAnimated="flow"
      defaultFlowDirection="rtl"
      defaultLineStyle="dashed"
      gap={80}
    />
  );
}

export default App;
