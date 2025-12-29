import { useContext } from "react";
import { FlowContext, shapeStyles } from "../types";

export interface UseFlowReturn {
  shapes: typeof shapeStyles;
  setConnections: (connections: Array<{ from: string; to: string }>) => void;
}

/**
 * Hook to access flow diagram context and utilities
 * @returns Object containing shape styles and connection setter
 */
export function useFlow(): UseFlowReturn {
  const context = useContext(FlowContext);
  return {
    shapes: shapeStyles,
    setConnections: context?.setConnections || (() => {}),
  };
}

