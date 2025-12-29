import {
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import type { ShapeType, Connection } from "./flow-types";
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
        conn.animated === "pulse";
      const animationType = conn.animated === "pulse" ? "pulse" : "flow";

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
      };
    })
    .filter(Boolean);

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
    </svg>
  );
}
