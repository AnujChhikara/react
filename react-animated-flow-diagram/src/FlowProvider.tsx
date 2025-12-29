import {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import type { Connection, ShapePosition, FlowContextType } from "./types";
import { FlowContext } from "./types";

export interface FlowProviderProps {
  children: React.ReactNode;
  connections?: Connection[];
}

export function FlowProvider({
  children,
  connections = [],
}: FlowProviderProps) {
  const positionsRef = useRef<Map<string, ShapePosition>>(new Map());
  const [positionsVersion, setPositionsVersion] = useState(0);
  const [currentConnections, setConnections] =
    useState<Connection[]>(connections);

  useEffect(() => {
    setConnections(connections);
  }, [connections]);

  const registerShape = useCallback(
    (id: string, position: ShapePosition) => {
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

  const value = useMemo<FlowContextType>(
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

