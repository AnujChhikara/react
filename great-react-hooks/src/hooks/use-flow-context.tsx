import { useContext } from "react";
import { FlowContext, shapeStyles } from "./flow-types";

export function useFlow() {
  const context = useContext(FlowContext);
  return {
    shapes: shapeStyles,
    setConnections: context?.setConnections || (() => {}),
  };
}

