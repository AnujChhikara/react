import { useContext } from "react";
import type { Connection, FlowDirection, AnimationType } from "./types";
import { FlowContext } from "./types";

function getStrokeDasharray(lineStyle?: string): string | undefined {
  if (!lineStyle) return undefined;

  const styleMap: Record<string, string> = {
    solid: "none",
    dashed: "5,5",
    dotted: "2,2",
  };

  if (styleMap[lineStyle]) {
    return styleMap[lineStyle];
  }

  return lineStyle;
}

interface LineData {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  strokeWidth: number;
  strokeDasharray?: string;
  animated: boolean;
  animationType?: AnimationType;
  dashOffsetStart: number;
  dashOffsetEnd: number;
  pathId: string;
}

export function Connectors() {
  const context = useContext(FlowContext);

  if (!context) return null;

  const positions = context.getPositions();
  const lines = context.connections
    .map((conn): LineData | null => {
      const from = positions.get(conn.from);
      const to = positions.get(conn.to);
      if (!from || !to) return null;

      const strokeDasharray = getStrokeDasharray(conn.lineStyle);
      const isAnimated =
        conn.animated === true ||
        conn.animated === "flow" ||
        conn.animated === "pulse" ||
        conn.animated === "light";
      const animationType =
        conn.animated === "pulse"
          ? "pulse"
          : conn.animated === "light"
          ? "light"
          : "flow";

      // For flow animation, ensure we have a dash pattern
      const finalDashArray =
        isAnimated && animationType === "flow" && !strokeDasharray
          ? "10,5"
          : strokeDasharray;

      // Calculate flow direction
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const flowDirection = conn.flowDirection || "forward";

      let dashOffsetStart = 0;
      let dashOffsetEnd = 20;

      if (animationType === "flow") {
        switch (flowDirection) {
          case "ltr": // left to right
            dashOffsetStart = dx >= 0 ? 0 : 20;
            dashOffsetEnd = dx >= 0 ? 20 : 0;
            break;
          case "rtl": // right to left
            dashOffsetStart = dx >= 0 ? 20 : 0;
            dashOffsetEnd = dx >= 0 ? 0 : 20;
            break;
          case "ttb": // top to bottom
            dashOffsetStart = dy >= 0 ? 0 : 20;
            dashOffsetEnd = dy >= 0 ? 20 : 0;
            break;
          case "btt": // bottom to top
            dashOffsetStart = dy >= 0 ? 20 : 0;
            dashOffsetEnd = dy >= 0 ? 0 : 20;
            break;
          case "reverse": // reverse path direction
            dashOffsetStart = 20;
            dashOffsetEnd = 0;
            break;
          case "forward": // forward path direction (default)
          default:
            dashOffsetStart = 0;
            dashOffsetEnd = 20;
            break;
        }
      }

      const pathId = `path-${conn.from}-${conn.to}`;

      return {
        key: `${conn.from}-${conn.to}`,
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        color: conn.color || "#000",
        strokeWidth: conn.strokeWidth || 2,
        strokeDasharray: finalDashArray,
        animated: isAnimated,
        animationType: isAnimated ? animationType : undefined,
        dashOffsetStart,
        dashOffsetEnd,
        pathId,
      };
    })
    .filter((line): line is LineData => line !== null);

  // Build combined path for single light animation through all connectors
  const hasLightAnimation = lines.some(
    (line) => line.animated && line.animationType === "light"
  );

  let combinedPath: string | null = null;
  if (hasLightAnimation && lines.length > 0) {
    const pathParts = [`M ${lines[0].x1} ${lines[0].y1}`];

    // Add each connection's end point
    lines.forEach((line) => {
      pathParts.push(`L ${line.x2} ${line.y2}`);
    });

    combinedPath = pathParts.join(" ");
  }

  // Get color from first animated light connection, or default
  const lightColor =
    lines.find((line) => line.animated && line.animationType === "light")
      ?.color || "#ffffff";

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {lines.map((line) => (
        <g key={line.key}>
          {/* Define path for light animation */}
          {line.animated && line.animationType === "light" && (
            <path
              id={line.pathId}
              d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
              fill="none"
              stroke="none"
            />
          )}
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth={line.strokeWidth}
            strokeDasharray={line.strokeDasharray}
            opacity={
              line.animated && line.animationType === "pulse"
                ? 1
                : undefined
            }
          >
            {line.animated && line.animationType === "flow" && (
              <animate
                attributeName="stroke-dashoffset"
                values={`${line.dashOffsetStart};${line.dashOffsetEnd}`}
                dur="1s"
                repeatCount="indefinite"
              />
            )}
            {line.animated && line.animationType === "pulse" && (
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </line>
        </g>
      ))}
      {/* Single light dot that travels through all connectors */}
      {hasLightAnimation && combinedPath && (
        <g>
          {/* Glow effect */}
          <circle r={6} fill={lightColor} opacity={0.3}>
            <animateMotion
              dur={`${lines.length * 1.5}s`}
              repeatCount="indefinite"
              path={combinedPath}
            />
          </circle>
          {/* Main light dot */}
          <circle r={4} fill={lightColor} opacity={1}>
            <animateMotion
              dur={`${lines.length * 1.5}s`}
              repeatCount="indefinite"
              path={combinedPath}
            />
          </circle>
        </g>
      )}
    </svg>
  );
}

