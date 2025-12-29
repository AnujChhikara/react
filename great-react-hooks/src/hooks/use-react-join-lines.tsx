import React, { useCallback, useEffect, useState } from "react";
import type {
  JoinLinesInternalProps,
  NodePosition,
} from "./use-react-join.types";
import { Line } from "./use-react-join-line";

export const JoinLinesInternal: React.FC<JoinLinesInternalProps> = ({
  nodes,
  config,
  containerRef,
}) => {
  const [positions, setPositions] = useState<NodePosition[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const updatePositions = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    if (nodes.size === 0) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const newPositions: NodePosition[] = [];

    const sortedNodes = Array.from(nodes.values()).sort(
      (a, b) => a.index - b.index
    );

    sortedNodes.forEach((node) => {
      if (node.element && document.body.contains(node.element)) {
        const nodeRect = node.element.getBoundingClientRect();
        const x = nodeRect.left - containerRect.left;
        const y = nodeRect.top - containerRect.top;

        newPositions.push({
          id: node.id,
          index: node.index,
          x,
          y,
          width: nodeRect.width,
          height: nodeRect.height,
        });
      }
    });

    setPositions(newPositions);
    setSvgSize({
      width: container.offsetWidth || container.scrollWidth,
      height: container.offsetHeight || container.scrollHeight,
    });
  }, [nodes, containerRef]);

  useEffect(() => {
    const handleUpdate = () => {
      requestAnimationFrame(updatePositions);
    };

    handleUpdate();
    const t1 = setTimeout(handleUpdate, 50);
    const t2 = setTimeout(handleUpdate, 150);
    const t3 = setTimeout(handleUpdate, 300);

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true);

    const observer = new MutationObserver(handleUpdate);
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [updatePositions, containerRef]);

  const lines: Array<{ from: NodePosition; to: NodePosition }> = [];
  for (let i = 0; i < positions.length - 1; i++) {
    lines.push({
      from: positions[i],
      to: positions[i + 1],
    });
  }

  if (lines.length === 0) {
    return null;
  }

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: svgSize.width || "100%",
        height: svgSize.height || "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 1,
      }}
    >
      {lines.map(({ from, to }, index) => (
        <Line
          key={`${from.id}-${to.id}`}
          from={from}
          to={to}
          config={config}
          index={index}
        />
      ))}
    </svg>
  );
};
