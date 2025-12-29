import type { CSSProperties, RefObject } from "react";

export type Shape =
  | "square"
  | "circle"
  | "diamond"
  | "hexagon"
  | "rectangle"
  | "rounded"
  | "pill";

export type LineStyle =
  | "solid"
  | "dotted"
  | "dashed"
  | "beam"
  | "flowingDots"
  | "glow"
  | "pulse";

export type LineDirection = "horizontal" | "vertical" | "auto" | "curved";

export interface JoinLineConfig {
  style?: LineStyle;
  color?: string;
  width?: number;
  animationDuration?: number;
  arrowHead?: boolean;
  curveIntensity?: number;
  dotCount?: number;
}

export interface UseReactJoinOptions {
  name: string;
  line?: JoinLineConfig;
}

export interface NodeProps {
  id: string;
  ref: (el: HTMLElement | null) => void;
  style: CSSProperties;
  "data-join-node": string;
  "data-join-index": number;
}

export interface NodeInfo {
  id: string;
  index: number;
  element: HTMLElement;
}

export interface NodePosition {
  id: string;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LineProps {
  from: NodePosition;
  to: NodePosition;
  config: JoinLineConfig;
  index: number;
}

export interface JoinLinesInternalProps {
  nodes: Map<number, NodeInfo>;
  config: JoinLineConfig;
  containerRef: RefObject<HTMLElement | null>;
}
