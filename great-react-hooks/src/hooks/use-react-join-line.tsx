import React from "react";
import type { LineProps } from "./use-react-join.types";

export const Line: React.FC<LineProps> = ({ from, to, config, index }) => {
  const {
    style = "solid",
    color = "#000000",
    width = 2,
    arrowHead = false,
    curveIntensity = 0,
    animationDuration = 2,
    dotCount = 3,
  } = config;

  const x1 = from.x + from.width / 2;
  const y1 = from.y + from.height / 2;
  const x2 = to.x + to.width / 2;
  const y2 = to.y + to.height / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const perpX = distance > 0 ? -dy / distance : 0;
  const perpY = distance > 0 ? dx / distance : 0;
  const curveOffset = distance * curveIntensity * 0.3;
  const cx = midX + perpX * curveOffset;
  const cy = midY + perpY * curveOffset;

  const pathId = `path-${from.id}-${to.id}-${index}`;
  const gradientId = `gradient-${from.id}-${to.id}-${index}`;
  const markerId = `arrow-${from.id}-${to.id}-${index}`;
  const beamGradientId = `beam-gradient-${index}`;
  const glowFilterId = `glow-filter-${index}`;

  const path =
    curveIntensity > 0
      ? `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
      : `M ${x1} ${y1} L ${x2} ${y2}`;

  return (
    <g>
      <defs>
        {/* Arrow marker */}
        {arrowHead && (
          <marker
            id={markerId}
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill={color} />
          </marker>
        )}

        {/* Enhanced Glow filter */}
        <filter
          id={glowFilterId}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feGaussianBlur
            stdDeviation="8"
            in="coloredBlur"
            result="coloredBlur2"
          />
          <feMerge>
            <feMergeNode in="coloredBlur2" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong glow filter for beam */}
        <filter
          id={`${glowFilterId}-strong`}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feGaussianBlur
            stdDeviation="12"
            in="coloredBlur"
            result="coloredBlur2"
          />
          <feMerge>
            <feMergeNode in="coloredBlur2" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Beam gradient - moves along path with proper direction */}
        <linearGradient
          id={beamGradientId}
          gradientUnits="userSpaceOnUse"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        >
          <stop offset="0%" stopColor={color} stopOpacity="0">
            <animate
              attributeName="offset"
              values="-0.5;1.5"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="20%" stopColor={color} stopOpacity="0.3">
            <animate
              attributeName="offset"
              values="-0.3;1.7"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="40%" stopColor={color} stopOpacity="1">
            <animate
              attributeName="offset"
              values="-0.1;1.9"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="60%" stopColor={color} stopOpacity="1">
            <animate
              attributeName="offset"
              values="0.1;2.1"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="80%" stopColor={color} stopOpacity="0.3">
            <animate
              attributeName="offset"
              values="0.3;2.3"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor={color} stopOpacity="0">
            <animate
              attributeName="offset"
              values="0.5;2.5"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Static gradient for the base line */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        >
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0.3} />
        </linearGradient>

        {/* Glow gradient - traveling glow effect */}
        <linearGradient
          id={`${gradientId}-glow`}
          gradientUnits="userSpaceOnUse"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
        >
          <stop offset="0%" stopColor={color} stopOpacity="0">
            <animate
              attributeName="offset"
              values="-0.4;1.4"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="30%" stopColor={color} stopOpacity="0.8">
            <animate
              attributeName="offset"
              values="-0.1;1.7"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor={color} stopOpacity="1">
            <animate
              attributeName="offset"
              values="0.1;1.9"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="70%" stopColor={color} stopOpacity="0.8">
            <animate
              attributeName="offset"
              values="0.3;2.1"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor={color} stopOpacity="0">
            <animate
              attributeName="offset"
              values="0.6;2.4"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      {/* Base line - always visible but dimmed for animated styles */}
      <path
        id={pathId}
        d={path}
        fill="none"
        stroke={
          style === "beam" || style === "pulse" || style === "glow"
            ? `url(#${gradientId})`
            : color
        }
        strokeWidth={width}
        strokeLinecap="round"
        strokeOpacity={
          style === "beam" || style === "pulse" || style === "flowingDots"
            ? 0.2
            : style === "glow"
            ? 0.4
            : 1
        }
        strokeDasharray={
          style === "dotted" ? "4 8" : style === "dashed" ? "12 6" : undefined
        }
        markerEnd={arrowHead ? `url(#${markerId})` : undefined}
      />

      {/* BEAM effect - bright traveling light with strong glow */}
      {style === "beam" && (
        <>
          {/* Outer glow layer */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${beamGradientId})`}
            strokeWidth={width * 4}
            strokeLinecap="round"
            strokeOpacity={0.6}
            filter={`url(#${glowFilterId}-strong)`}
          />
          {/* Main beam */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${beamGradientId})`}
            strokeWidth={width * 2.5}
            strokeLinecap="round"
            filter={`url(#${glowFilterId})`}
          />
          {/* Core bright line */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${beamGradientId})`}
            strokeWidth={width * 1.5}
            strokeLinecap="round"
          />
        </>
      )}

      {/* PULSE effect - glowing orbs traveling along the line */}
      {style === "pulse" && (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              {/* Outer glow */}
              <circle r={width * 3} fill={color} opacity={0.4}>
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.4;0.1;0.4"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                />
                <animate
                  attributeName="r"
                  values={`${width * 2.5};${width * 4};${width * 2.5}`}
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                />
              </circle>
              {/* Main pulse orb */}
              <circle
                r={width * 2}
                fill={color}
                filter={`url(#${glowFilterId})`}
              >
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                />
                <animate
                  attributeName="r"
                  values={`${width * 1.5};${width * 3};${width * 1.5}`}
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                />
              </circle>
              {/* Core bright center */}
              <circle r={width * 1.2} fill={color}>
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="1;0.8;1"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / 3}s`}
                />
              </circle>
            </g>
          ))}
        </>
      )}

      {/* FLOWING DOTS - glowing dots moving along the path */}
      {style === "flowingDots" && (
        <>
          {Array.from({ length: dotCount }).map((_, i) => (
            <g key={i}>
              {/* Outer glow */}
              <circle r={width * 2.5} fill={color} opacity={0.3}>
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="r"
                  values={`${width * 2};${width * 3.5};${width * 2}`}
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.1;0.3"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                />
              </circle>
              {/* Main dot with glow */}
              <circle
                r={width * 1.5}
                fill={color}
                filter={`url(#${glowFilterId})`}
              >
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="r"
                  values={`${width * 1.2};${width * 2.2};${width * 1.2}`}
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                />
              </circle>
              {/* Core bright center */}
              <circle r={width * 0.8} fill={color}>
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * animationDuration) / dotCount}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </>
      )}

      {/* GLOW effect - traveling glow along the line */}
      {style === "glow" && (
        <>
          {/* Outer glow */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${gradientId}-glow)`}
            strokeWidth={width * 5}
            strokeLinecap="round"
            strokeOpacity={0.4}
            filter={`url(#${glowFilterId})`}
          />
          {/* Middle glow */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${gradientId}-glow)`}
            strokeWidth={width * 3}
            strokeLinecap="round"
            strokeOpacity={0.6}
            filter={`url(#${glowFilterId})`}
          />
          {/* Core bright line */}
          <path
            d={path}
            fill="none"
            stroke={`url(#${gradientId}-glow)`}
            strokeWidth={width * 1.5}
            strokeLinecap="round"
          />
        </>
      )}
    </g>
  );
};
