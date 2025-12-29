# react-flow-diagram

A production-ready React component library for creating beautiful flow diagrams with animated connections. Perfect for flowcharts, process diagrams, and system architecture visualizations.

## Features

- 🎨 **Multiple Shape Types**: Square, rectangle, circle, diamond, hexagon, and more
- ✨ **Animated Connections**: Flow, pulse, and light animations
- 🎯 **Flexible API**: Simple string-based or detailed object-based connections
- 🎨 **Customizable**: Full control over colors, styles, and animations
- 📦 **TypeScript**: Full TypeScript support with exported types
- ⚡ **Lightweight**: Zero dependencies (except React)
- 🎭 **Direction Control**: Control flow direction (LTR, RTL, TTB, BTT, forward, reverse)

## Installation

```bash
npm install react-animated-flow-diagram
# or
pnpm add react-animated-flow-diagram
# or
yarn add react-animated-flow-diagram
```

## Quick Start

```tsx
import { FlowDiagram } from "react-animated-flow-diagram";

function App() {
  const shapes = [
    {
      id: "start",
      type: "roundedRectangle",
      label: "Start",
      color: "#3b82f6",
    },
    {
      id: "process",
      type: "rectangle",
      label: "Process",
      color: "#10b981",
    },
    {
      id: "end",
      type: "roundedRectangle",
      label: "End",
      color: "#ef4444",
    },
  ];

  const connections = ["start->process", "process->end"];

  return (
    <FlowDiagram
      shapes={shapes}
      connections={connections}
      defaultAnimated="flow"
      defaultLineColor="#ffffff"
    />
  );
}
```

## Components

### FlowDiagram

The main component that renders a complete flow diagram.

```tsx
<FlowDiagram
  shapes={shapes}
  connections={connections}
  defaultLineColor="#000"
  defaultStrokeWidth={2}
  defaultLineStyle="solid"
  defaultAnimated="flow"
  defaultFlowDirection="forward"
  containerStyle={{ padding: "20px" }}
  gap={60}
/>
```

### FlowProvider

Lower-level provider for custom implementations.

```tsx
import { FlowProvider, Shape, Connectors } from "react-animated-flow-diagram";

<FlowProvider connections={connections}>
  <Connectors />
  <Shape id="shape1" type="circle">
    Content
  </Shape>
</FlowProvider>;
```

### useFlow Hook

Access flow context and utilities.

```tsx
import { useFlow } from "react-animated-flow-diagram";

function MyComponent() {
  const { shapes, setConnections } = useFlow();
  // Use shapes and setConnections
}
```

## Shape Types

- `square`
- `rectangle`
- `circle`
- `cylinder`
- `diamond`
- `roundedRectangle`
- `parallelogram`
- `oval`
- `cloud`
- `trapezoid`
- `hexagon`
- `document`

## Connection Animations

- `flow` - Animated dash pattern flowing along the line
- `pulse` - Opacity pulsing animation
- `light` - Light dot traveling along the path

## Flow Directions

- `ltr` - Left to right
- `rtl` - Right to left
- `ttb` - Top to bottom
- `btt` - Bottom to top
- `forward` - Forward along path (default)
- `reverse` - Reverse along path

## Advanced Usage

### Custom Connection Styles

```tsx
const connections = [
  {
    from: "start",
    to: "process",
    color: "#3b82f6",
    strokeWidth: 3,
    lineStyle: "dashed",
    animated: "flow",
    flowDirection: "ltr",
  },
  "process->end", // Simple string format also works
];
```

### Custom Shape Styling

```tsx
const shapes = [
  {
    id: "custom",
    type: "rectangle",
    label: "Custom",
    color: "#8b5cf6",
    width: 200,
    height: 100,
    style: {
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
  },
];
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  FlowShape,
  Connection,
  FlowDiagramProps,
  ShapeType,
  AnimationType,
  FlowDirection,
} from "react-animated-flow-diagram";
```

## License

ISC
