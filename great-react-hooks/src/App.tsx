import "./App.css";
import { useReactJoin } from "./hooks/use-react-join";
import { useState } from "react";
import type { LineStyle, Shape } from "./hooks/use-react-join.types";

function App() {
  const [lineStyle, setLineStyle] = useState<LineStyle>("beam");
  const [shape, setShape] = useState<Shape>("rounded");

  const { getNodeProps, getContainerProps, JoinLines } = useReactJoin({
    name: "flow",
    line: {
      style: lineStyle,
      color: "#ffffff",
      width: 3,
      arrowHead: false,
      curveIntensity: 0,
      animationDuration: 1.5,
      dotCount: 4,
    },
  });

  return (
    <div className="app">
      <h1>useReactJoin Demo</h1>

      {/* Controls */}
      <div className="controls">
        <label>
          Line Style:
          <select
            value={lineStyle}
            onChange={(e) => setLineStyle(e.target.value as LineStyle)}
          >
            <option value="solid">Solid</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="beam">⚡ Beam (Light travels through)</option>
            <option value="flowingDots">🔵 Flowing Dots</option>
            <option value="pulse">💫 Pulse</option>
            <option value="glow">✨ Glow</option>
          </select>
        </label>

        <label>
          Shape:
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value as Shape)}
          >
            <option value="square">Square</option>
            <option value="circle">Circle</option>
            <option value="diamond">Diamond</option>
            <option value="hexagon">Hexagon</option>
            <option value="rectangle">Rectangle</option>
            <option value="rounded">Rounded</option>
            <option value="pill">Pill</option>
          </select>
        </label>
      </div>

      {/* Horizontal Flow */}
      <h2 className="section-title">Horizontal Flow</h2>
      <div {...getContainerProps()} className="flow-container horizontal">
        <JoinLines />

        <div {...getNodeProps(0, { shape, size: 100 })} className="node">
          <span className={shape === "diamond" ? "diamond-content" : ""}>
            Start
          </span>
        </div>

        <div {...getNodeProps(1, { shape, size: 100 })} className="node">
          <span className={shape === "diamond" ? "diamond-content" : ""}>
            Process
          </span>
        </div>

        <div {...getNodeProps(2, { shape, size: 100 })} className="node">
          <span className={shape === "diamond" ? "diamond-content" : ""}>
            Review
          </span>
        </div>

        <div {...getNodeProps(3, { shape, size: 100 })} className="node">
          <span className={shape === "diamond" ? "diamond-content" : ""}>
            Done
          </span>
        </div>
      </div>

      {/* Effect Description */}
      <div className="effect-info">
        {lineStyle === "beam" && (
          <p>
            ⚡ <strong>Beam:</strong> A bright light beam travels through the
            line from start to end continuously.
          </p>
        )}
        {lineStyle === "flowingDots" && (
          <p>
            🔵 <strong>Flowing Dots:</strong> Multiple dots flow along the path,
            creating a particle stream effect.
          </p>
        )}
        {lineStyle === "pulse" && (
          <p>
            💫 <strong>Pulse:</strong> Pulsing orbs travel along the line with
            breathing animation.
          </p>
        )}
        {lineStyle === "glow" && (
          <p>
            ✨ <strong>Glow:</strong> Neon glow effect on the connecting line.
          </p>
        )}
        {lineStyle === "solid" && (
          <p>
            ➖ <strong>Solid:</strong> Simple solid connecting line.
          </p>
        )}
        {lineStyle === "dotted" && (
          <p>
            ⋯ <strong>Dotted:</strong> Dotted line pattern.
          </p>
        )}
        {lineStyle === "dashed" && (
          <p>
            ➖ <strong>Dashed:</strong> Dashed line pattern.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
