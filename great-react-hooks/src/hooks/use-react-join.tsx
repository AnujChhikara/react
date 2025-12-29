import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
  type CSSProperties,
} from "react";
import type {
  Shape,
  UseReactJoinOptions,
  NodeProps,
  NodeInfo,
} from "./use-react-join.types";
import { JoinLinesInternal } from "./use-react-join-lines";

const getShapeStyles = (shape: Shape, size?: number): CSSProperties => {
  const baseSize = size ?? 100;

  const baseStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
  };

  switch (shape) {
    case "square":
      return {
        ...baseStyles,
        width: baseSize,
        height: baseSize,
        borderRadius: 0,
      };

    case "circle":
      return {
        ...baseStyles,
        width: baseSize,
        height: baseSize,
        borderRadius: "50%",
      };

    case "diamond":
      return {
        ...baseStyles,
        width: baseSize,
        height: baseSize,
        transform: "rotate(45deg)",
        borderRadius: 4,
      };

    case "hexagon":
      return {
        ...baseStyles,
        width: baseSize,
        height: baseSize * 0.866,
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      };

    case "rectangle":
      return {
        ...baseStyles,
        width: baseSize * 1.5,
        height: baseSize,
        borderRadius: 0,
      };

    case "rounded":
      return {
        ...baseStyles,
        width: baseSize,
        height: baseSize,
        borderRadius: baseSize * 0.15,
      };

    case "pill":
      return {
        ...baseStyles,
        width: baseSize * 1.8,
        height: baseSize * 0.6,
        borderRadius: baseSize * 0.3,
      };

    default:
      return baseStyles;
  }
};

export function useReactJoin(options: UseReactJoinOptions) {
  const { name, line = {} } = options;

  const [nodes, setNodes] = useState<Map<number, NodeInfo>>(new Map());
  const containerRef = useRef<HTMLElement | null>(null);
  const registeredNodesRef = useRef<Map<number, HTMLElement>>(new Map());

  const registerNode = useCallback(
    (index: number, element: HTMLElement | null) => {
      const currentElement = registeredNodesRef.current.get(index);

      if (currentElement === element) {
        return;
      }

      if (element) {
        registeredNodesRef.current.set(index, element);
      } else {
        registeredNodesRef.current.delete(index);
      }

      setNodes((prev) => {
        const next = new Map(prev);
        if (element) {
          const existing = prev.get(index);
          if (!existing || existing.element !== element) {
            next.set(index, {
              id: `${name}-${index + 1}`,
              index,
              element,
            });
            return next;
          }
          return prev;
        } else {
          if (prev.has(index)) {
            next.delete(index);
            return next;
          }
          return prev;
        }
      });
    },
    [name]
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {});

    nodes.forEach((node) => {
      if (node.element) {
        resizeObserver.observe(node.element);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [nodes]);

  const refCallbacksRef = useRef<Map<number, (el: HTMLElement | null) => void>>(
    new Map()
  );

  const getNodeProps = useCallback(
    (
      index: number,
      config: { shape?: Shape; size?: number; style?: CSSProperties } = {}
    ) => {
      const { shape = "square", size, style: customStyle } = config;
      const shapeStyles = getShapeStyles(shape, size);
      const id = `${name}-${index + 1}`;

      if (!refCallbacksRef.current.has(index)) {
        refCallbacksRef.current.set(index, (el: HTMLElement | null) => {
          registerNode(index, el);
        });
      }

      return {
        id,
        ref: refCallbacksRef.current.get(index)!,
        style: { ...shapeStyles, ...customStyle },
        "data-join-node": name,
        "data-join-index": index,
      } as NodeProps;
    },
    [name, registerNode]
  );

  const reset = useCallback(() => {
    registeredNodesRef.current.clear();
    setNodes(new Map());
  }, []);

  const JoinLines = useMemo(() => {
    return function JoinLinesWrapper({ className }: { className?: string }) {
      return (
        <div
          className={className}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <JoinLinesInternal
            nodes={nodes}
            config={line}
            containerRef={containerRef}
          />
        </div>
      );
    };
  }, [nodes, line]);

  const setContainerRef = useCallback((el: HTMLElement | null) => {
    if (containerRef.current === el) {
      return;
    }
    containerRef.current = el;
  }, []);

  const getContainerProps = useCallback(
    (style?: CSSProperties) => ({
      ref: setContainerRef,
      style: {
        position: "relative" as const,
        ...style,
      },
    }),
    [setContainerRef]
  );

  return {
    getNodeProps,
    getContainerProps,
    JoinLines,
    reset,
    nodeCount: nodes.size,
  };
}
