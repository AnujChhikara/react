import {
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import type {
  ShapeType,
  Connection,
  SimplifiedConnection,
  FlowDiagramProps,
  AnimationType,
  FlowDirection,
} from "./flow-types";
import { shapeStyles, FlowContext } from "./flow-types";

interface FlowProviderProps {
  children: React.ReactNode;
  connections?: Connection[];
}

export function FlowProvider({
  children,
  connections = [],
}: FlowProviderProps) {
  const positionsRef = useRef<
    Map<string, { x: number; y: number; width: number; height: number }>
  >(new Map());
  const [positionsVersion, setPositionsVersion] = useState(0);
  const [currentConnections, setConnections] =
    useState<Connection[]>(connections);

  useEffect(() => {
    setConnections(connections);
  }, [connections]);

  const registerShape = useCallback(
    (
      id: string,
      position: { x: number; y: number; width: number; height: number }
    ) => {
      positionsRef.current.set(id, position);
      setPositionsVersion((v) => v + 1);
    },
    []
  );

  const unregisterShape = useCallback((id: string) => {
    positionsRef.current.delete(id);
    setPositionsVersion((v) => v + 1);
  }, []);

  const getPositions = useCallback(() => positionsRef.current, []);

  const value = useMemo(
    () => ({
      registerShape,
      unregisterShape,
      getPositions,
      positionsVersion,
      connections: currentConnections,
      setConnections,
    }),
    [
      registerShape,
      unregisterShape,
      getPositions,
      positionsVersion,
      currentConnections,
    ]
  );

  return (
    <FlowContext.Provider value={value}>
      <div style={{ position: "relative" }}>{children}</div>
    </FlowContext.Provider>
  );
}

interface ShapeProps {
  id: string;
  type: ShapeType;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Shape({ id, type, style, children }: ShapeProps) {
  const context = useContext(FlowContext);
  const ref = useRef<HTMLDivElement>(null);
  const contextRef = useRef(context);

  useEffect(() => {
    contextRef.current = context;
  }, [context]);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = contextRef.current;
    if (!ctx) return;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const parent = ref.current.offsetParent as HTMLElement;
      const parentRect = parent?.getBoundingClientRect() || { left: 0, top: 0 };

      ctx.registerShape(id, {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
        width: rect.width,
        height: rect.height,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      ctx.unregisterShape(id);
    };
  }, [id]);

  const combinedStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    ...shapeStyles[type],
    ...style,
  };

  return (
    <div ref={ref} style={combinedStyle}>
      {children}
    </div>
  );
}

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

export function Connectors() {
  const context = useContext(FlowContext);

  if (!context) return null;

  const positions = context.getPositions();
  const lines = context.connections
    .map((conn) => {
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
    .filter(Boolean);

  // Build combined path for single light animation through all connectors
  const hasLightAnimation = lines.some(
    (line) => line?.animated && line.animationType === "light"
  );

  let combinedPath: string | null = null;
  if (hasLightAnimation && lines.length > 0) {
    const validLines = lines.filter(
      (line): line is NonNullable<typeof line> => line !== null
    );
    if (validLines.length > 0) {
      // Start at the first connection's start point
      const firstLine = validLines[0];
      const pathParts = [`M ${firstLine.x1} ${firstLine.y1}`];

      // Add each connection's end point
      validLines.forEach((line) => {
        pathParts.push(`L ${line.x2} ${line.y2}`);
      });

      combinedPath = pathParts.join(" ");
    }
  }

  // Get color from first animated light connection, or default
  const lightColor =
    lines.find((line) => line?.animated && line.animationType === "light")
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
      {lines.map(
        (line) =>
          line && (
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
          )
      )}
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
