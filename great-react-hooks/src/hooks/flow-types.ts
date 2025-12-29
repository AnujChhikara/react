import { createContext } from "react";

export type ShapeType =
  | "square"
  | "rectangle"
  | "circle"
  | "cylinder"
  | "diamond"
  | "roundedRectangle"
  | "parallelogram"
  | "oval"
  | "cloud"
  | "trapezoid"
  | "hexagon"
  | "document";

export const shapeStyles: Record<ShapeType, React.CSSProperties> = {
  square: {},
  rectangle: {},
  circle: { borderRadius: "50%" },
  cylinder: {
    borderRadius: "50% / 10%",
    position: "relative",
    boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.1)",
  },
  diamond: { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },
  roundedRectangle: { borderRadius: "10px" },
  parallelogram: { transform: "skew(-20deg)" },
  oval: { borderRadius: "50%" },
  cloud: {
    borderRadius: "50px",
    clipPath:
      "polygon(0% 60%, 15% 60%, 25% 40%, 40% 30%, 60% 30%, 75% 40%, 85% 60%, 100% 60%, 100% 80%, 85% 80%, 75% 100%, 25% 100%, 15% 80%, 0% 80%)",
  },
  trapezoid: { clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" },
  hexagon: {
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
  },
  document: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 70% 100%, 0% 100%)",
  },
};

interface ShapePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Connection {
  from: string;
  to: string;
  color?: string;
  strokeWidth?: number;
}

export interface FlowContextType {
  registerShape: (id: string, position: ShapePosition) => void;
  unregisterShape: (id: string) => void;
  getPositions: () => Map<string, ShapePosition>;
  positionsVersion: number;
  connections: Connection[];
  setConnections: (connections: Connection[]) => void;
}

export const FlowContext = createContext<FlowContextType | null>(null);

