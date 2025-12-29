import { useMemo } from "react";

export type ShapeType = "circle" | "square" | "rectangle" | "cylinder";

export interface UseFlowOptions {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  backgroundColor?: string;
}

export interface FlowStyles extends React.CSSProperties {
  width: string | number;
  height: string | number;
}

export function useFlow(
  shape: ShapeType = "circle",
  options: UseFlowOptions = {}
): FlowStyles {
  const { size = 100, width, height, backgroundColor } = options;

  const shapeStyles = useMemo(() => {
    const baseSize = typeof size === "number" ? `${size}px` : size;

    let finalWidth: string | number = baseSize;
    let finalHeight: string | number = baseSize;

    // For rectangle, use width and height if provided, otherwise use size for both
    if (shape === "rectangle") {
      finalWidth =
        width !== undefined
          ? typeof width === "number"
            ? `${width}px`
            : width
          : baseSize;
      finalHeight =
        height !== undefined
          ? typeof height === "number"
            ? `${height}px`
            : height
          : baseSize;
    }

    const baseStyles: FlowStyles = {
      width: finalWidth,
      height: finalHeight,
    };

    if (backgroundColor) {
      baseStyles.backgroundColor = backgroundColor;
    }

    switch (shape) {
      case "circle":
        return {
          ...baseStyles,
          borderRadius: "50%",
        };

      case "square":
        return baseStyles;

      case "rectangle":
        return baseStyles;

      case "cylinder":
        // Cylinder shape for database representation
        // Uses rounded top and bottom with a 3D effect
        return {
          ...baseStyles,
          borderRadius: "50% / 10%",
          position: "relative" as const,
          boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.1)",
        };

      default:
        return baseStyles;
    }
  }, [shape, size, width, height, backgroundColor]);

  return shapeStyles;
}
