import { useMemo } from "react";
import type {
  FlowShape,
  SimplifiedConnection,
  FlowDiagramProps,
  Connection,
  AnimationType,
  FlowDirection,
  LineStyle,
} from "./types";
import { FlowProvider } from "./FlowProvider";
import { Connectors } from "./Connectors";
import { Shape } from "./Shape";

function parseConnection(
  conn: SimplifiedConnection,
  defaults: {
    color?: string;
    strokeWidth?: number;
    lineStyle?: string;
    animated?: boolean | AnimationType;
    flowDirection?: FlowDirection;
  }
): Connection {
  if (typeof conn === "string") {
    const [from, to] = conn.split("->").map((s) => s.trim());
    return {
      from,
      to,
      color: defaults.color,
      strokeWidth: defaults.strokeWidth,
      lineStyle: defaults.lineStyle,
      animated: defaults.animated,
      flowDirection: defaults.flowDirection,
    };
  }
  return {
    ...conn,
    color: conn.color ?? defaults.color,
    strokeWidth: conn.strokeWidth ?? defaults.strokeWidth,
    lineStyle: conn.lineStyle ?? defaults.lineStyle,
    animated: conn.animated ?? defaults.animated,
    flowDirection: conn.flowDirection ?? defaults.flowDirection,
  };
}

export function FlowDiagram({
  shapes,
  connections,
  defaultLineColor = "#000",
  defaultStrokeWidth = 2,
  defaultLineStyle,
  defaultAnimated,
  defaultFlowDirection,
  containerStyle,
  gap = 60,
}: FlowDiagramProps) {
  const parsedConnections = useMemo(
    () =>
      connections.map((conn) =>
        parseConnection(conn, {
          color: defaultLineColor,
          strokeWidth: defaultStrokeWidth,
          lineStyle: defaultLineStyle,
          animated: defaultAnimated,
          flowDirection: defaultFlowDirection,
        })
      ),
    [
      connections,
      defaultLineColor,
      defaultStrokeWidth,
      defaultLineStyle,
      defaultAnimated,
      defaultFlowDirection,
    ]
  );

  // Default container style
  const defaultContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: typeof gap === "number" ? `${gap}px` : gap,
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    minHeight: "100vh",
    ...containerStyle,
  };

  return (
    <FlowProvider connections={parsedConnections}>
      <Connectors />
      <div style={defaultContainerStyle}>
        {shapes.map((shape) => {
          const shapeStyle: React.CSSProperties = {
            backgroundColor: shape.color,
            width: shape.width ?? 120,
            height: shape.height ?? 80,
            ...shape.style,
          };

          return (
            <Shape
              key={shape.id}
              id={shape.id}
              type={shape.type}
              style={shapeStyle}
            >
              {shape.label ? (
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {shape.label}
                </span>
              ) : (
                shape.children
              )}
            </Shape>
          );
        })}
      </div>
    </FlowProvider>
  );
}

