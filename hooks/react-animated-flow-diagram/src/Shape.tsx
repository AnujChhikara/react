import { useContext, useRef, useEffect } from "react";
import type { ShapeType, ShapePosition } from "./types";
import { FlowContext, shapeStyles } from "./types";

export interface ShapeProps {
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

