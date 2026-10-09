"use client";

import React, { useState, useEffect, useRef } from "react";
import { INDIA_MAP_VIEWBOX, INDIA_STATES_DATA } from "./indiaMapData";

export interface ReachStateConfig {
  id: string;
  name: string;
  region: string;
  delay: number;
}

export const REACH_STATES: ReachStateConfig[] = [
  { id: "IN-TG", name: "Telangana", region: "South", delay: 0 },
  { id: "IN-AP", name: "Andhra Pradesh", region: "South", delay: 140 },
  { id: "IN-KA", name: "Karnataka", region: "South", delay: 280 },
  { id: "IN-TN", name: "Tamil Nadu", region: "South", delay: 420 },
  { id: "IN-KL", name: "Kerala", region: "South", delay: 560 },
  { id: "IN-MH", name: "Maharashtra", region: "West", delay: 700 },
  { id: "IN-OR", name: "Odisha", region: "East", delay: 840 },
  { id: "IN-JH", name: "Jharkhand", region: "East", delay: 980 },
  { id: "IN-UP", name: "Uttar Pradesh", region: "North", delay: 1120 },
  { id: "IN-BR", name: "Bihar", region: "North", delay: 1260 },
  { id: "IN-DL", name: "Delhi", region: "North", delay: 1400 },
];

const REACH_STATE_IDS = new Set(REACH_STATES.map((s) => s.id));

export interface ReachLabelConfig {
  id: string;
  name: string;
  x: number;
  y: number;
  fontSize: number;
  lines?: string[];
  isCallout?: boolean;
  targetX?: number;
  targetY?: number;
}

// Symmetrically placed labels aligned with geographic centers of mass
export const REACH_STATE_LABELS: ReachLabelConfig[] = [
  // Uttar Pradesh: Symmetrically centered in the northern heartland
  {
    id: "IN-UP",
    name: "Uttar Pradesh",
    x: 248,
    y: 248,
    fontSize: 12,
  },
  // Maharashtra: Centered in the central plateau with balanced margins
  {
    id: "IN-MH",
    name: "Maharashtra",
    x: 178,
    y: 436,
    fontSize: 12,
  },
  // Bihar: Centered in the central plains
  {
    id: "IN-BR",
    name: "Bihar",
    x: 355,
    y: 272,
    fontSize: 11.5,
  },
  // Jharkhand: Centered in the Chota Nagpur plateau
  {
    id: "IN-JH",
    name: "Jharkhand",
    x: 360,
    y: 326,
    fontSize: 10,
  },
  // Andhra Pradesh: Stacked vertically to follow the coastal geography symmetrically
  {
    id: "IN-AP",
    name: "Andhra Pradesh",
    x: 242,
    y: 546,
    fontSize: 11,
    lines: ["Andhra", "Pradesh"],
  },
  // Telangana: Symmetrically centered within the state's natural boundaries
  {
    id: "IN-TG",
    name: "Telangana",
    x: 236,
    y: 457,
    fontSize: 11,
  },
  // Karnataka: Centered along the north-south axis
  {
    id: "IN-KA",
    name: "Karnataka",
    x: 171,
    y: 515,
    fontSize: 11,
  },
  // Odisha: Centered in the coastal and plateau basin
  {
    id: "IN-OR",
    name: "Odisha",
    x: 340,
    y: 405,
    fontSize: 11,
  },
  // Tamil Nadu: Stacked for balanced, symmetric presentation
  {
    id: "IN-TN",
    name: "Tamil Nadu",
    x: 212,
    y: 608,
    fontSize: 10.5,
    lines: ["Tamil", "Nadu"],
  },
  // Kerala: Centered in the narrow southern coastal corridor
  {
    id: "IN-KL",
    name: "Kerala",
    x: 162,
    y: 616,
    fontSize: 8.5,
  },
  // Delhi: Clean leader-line callout badge positioned symmetrically to the west
  {
    id: "IN-DL",
    name: "Delhi",
    x: 126,
    y: 196,
    fontSize: 9.5,
    isCallout: true,
    targetX: 186,
    targetY: 210,
  },
];

interface IndiaVectorMapProps {
  selectedState?: string | null;
  onSelectState?: (stateName: string | null) => void;
  autoPlay?: boolean;
  replayKey?: number;
  onAnimationComplete?: () => void;
  className?: string;
  showTooltip?: boolean;
}

export default function IndiaVectorMap({
  selectedState = null,
  onSelectState,
  autoPlay = true,
  replayKey = 0,
  onAnimationComplete,
  className = "",
  showTooltip = true,
}: IndiaVectorMapProps) {
  const [activeStateIds, setActiveStateIds] = useState<string[]>([]);
  const [hoveredState, setHoveredState] = useState<{
    id: string;
    name: string;
    isReach: boolean;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRefs = useRef<NodeJS.Timeout[]>([]);

  // Smooth sequential state activation under 2 seconds total
  const startRevealAnimation = () => {
    timerRefs.current.forEach((t) => clearTimeout(t));
    timerRefs.current = [];

    setActiveStateIds([]);

    REACH_STATES.forEach((state) => {
      const timer = setTimeout(() => {
        setActiveStateIds((prev) => {
          if (prev.includes(state.id)) return prev;
          return [...prev, state.id];
        });
      }, state.delay);
      timerRefs.current.push(timer);
    });

    const completionTimer = setTimeout(() => {
      onAnimationComplete?.();
    }, 1800);
    timerRefs.current.push(completionTimer);
  };

  useEffect(() => {
    if (!autoPlay) {
      setActiveStateIds(REACH_STATES.map((s) => s.id));
      return;
    }

    startRevealAnimation();

    return () => {
      timerRefs.current.forEach((t) => clearTimeout(t));
    };
  }, [replayKey, autoPlay]);

  const handleMouseMove = (
    e: React.MouseEvent<SVGPathElement>,
    stateId: string,
    stateName: string
  ) => {
    if (!showTooltip || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoveredState({
      id: stateId,
      name: stateName,
      isReach: REACH_STATE_IDS.has(stateId),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleClickState = (stateName: string) => {
    if (onSelectState) {
      onSelectState(selectedState === stateName ? null : stateName);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox={INDIA_MAP_VIEWBOX}
        className="w-full h-auto drop-shadow-sm transition-all"
        style={{ overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle drop shadow filter for active reach states */}
          <filter id="reachGlow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow
              dx="0"
              dy="1.5"
              stdDeviation="1.5"
              floodColor="#7F1D1D"
              floodOpacity="0.25"
            />
          </filter>

          <filter id="selectedGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2.5"
              floodColor="#04315D"
              floodOpacity="0.35"
            />
          </filter>
        </defs>

        {/* 1. Neutral / non-reach background states */}
        <g id="base-states" strokeLinecap="round" strokeLinejoin="round">
          {INDIA_STATES_DATA.map((state) => {
            const isReachState = REACH_STATE_IDS.has(state.id);
            if (isReachState) return null;

            const isHovered = hoveredState?.id === state.id;

            return (
              <path
                key={state.id}
                id={state.id}
                d={state.d}
                fill={isHovered ? "#DBD4C6" : "#E6DFD4"}
                stroke="#C6BCAC"
                strokeWidth={0.55}
                className="transition-colors duration-200 cursor-default"
                onMouseMove={(e) => handleMouseMove(e, state.id, state.name)}
                onMouseLeave={handleMouseLeave}
              >
                <title>{state.name}</title>
              </path>
            );
          })}
        </g>

        {/* 2. 10 Active Reach States (100% complete state boundary vector paths) */}
        <g id="reach-states" strokeLinecap="round" strokeLinejoin="round">
          {INDIA_STATES_DATA.filter((state) => REACH_STATE_IDS.has(state.id)).map(
            (state) => {
              const isActive = activeStateIds.includes(state.id);
              const isSelected = selectedState === state.name;
              const isHovered = hoveredState?.id === state.id;

              let fillColor = "#E6DFD4";
              let strokeColor = "#C6BCAC";
              let strokeWidth = 0.55;
              let filter = "none";

              if (isSelected) {
                fillColor = "#96163F";
                strokeColor = "#04315D";
                strokeWidth = 1.6;
                filter = "url(#selectedGlow)";
              } else if (isActive) {
                fillColor = isHovered ? "#CD3232" : "#B92A2A";
                strokeColor = "#8E1D1D";
                strokeWidth = 0.85;
                filter = "url(#reachGlow)";
              } else if (isHovered) {
                fillColor = "#DDD5C7";
                strokeColor = "#B8AC99";
              }

              return (
                <path
                  key={state.id}
                  id={state.id}
                  d={state.d}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  filter={filter}
                  style={{
                    transition:
                      "fill 0.45s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.45s cubic-bezier(0.4, 0, 0.2, 1), stroke-width 0.3s ease",
                  }}
                  className="cursor-pointer"
                  onClick={() => handleClickState(state.name)}
                  onMouseMove={(e) => handleMouseMove(e, state.id, state.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <title>{`${state.name} (Active Implementation)`}</title>
                </path>
              );
            }
          )}
        </g>

        {/* 3. Symmetrically Placed State Names on the Reach Map */}
        <g id="reach-state-labels" className="pointer-events-none select-none">
          {REACH_STATE_LABELS.map((lbl) => {
            const isActive = activeStateIds.includes(lbl.id);
            const isSelected = selectedState === lbl.name;

            // When state colors in red, text becomes bold crisp white with halo stroke for maximum clarity
            const textFill = isActive || isSelected ? "#FFFFFF" : "#57534E";
            const textStroke = isActive || isSelected ? "#5C0E0E" : "transparent";
            const textOpacity = isActive || isSelected ? 1 : 0.65;

            // Delhi callout badge
            if (lbl.isCallout && lbl.targetX && lbl.targetY) {
              return (
                <g
                  key={`lbl-${lbl.id}`}
                  style={{
                    opacity: textOpacity,
                    transition: "opacity 0.45s ease-out",
                  }}
                >
                  {/* Symmetric leader line from label to Delhi */}
                  <line
                    x1={lbl.x + 22}
                    y1={lbl.y}
                    x2={lbl.targetX}
                    y2={lbl.targetY}
                    stroke={isActive ? "#B92A2A" : "#A8A29E"}
                    strokeWidth={1.2}
                    strokeDasharray="2,2"
                    style={{ transition: "stroke 0.45s ease-out" }}
                  />
                  {/* Delhi Pill Badge */}
                  <rect
                    x={lbl.x - 22}
                    y={lbl.y - 10}
                    width={44}
                    height={20}
                    rx={5}
                    fill={isActive ? (isSelected ? "#96163F" : "#B92A2A") : "#E2DDD5"}
                    stroke={isActive ? "#FFFFFF" : "#C6BCAC"}
                    strokeWidth={1}
                    filter={isActive ? "url(#reachGlow)" : "none"}
                    style={{
                      transition: "fill 0.45s ease-out, stroke 0.45s ease-out",
                    }}
                  />
                  <text
                    x={lbl.x}
                    y={lbl.y + 0.5}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={lbl.fontSize}
                    fontWeight="700"
                    fill={isActive ? "#FFFFFF" : "#44403C"}
                    style={{
                      fontFamily:
                        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {lbl.name}
                  </text>
                </g>
              );
            }

            // Stacked state names (Andhra Pradesh, Tamil Nadu) for symmetric alignment
            if (lbl.lines && lbl.lines.length === 2) {
              return (
                <text
                  key={`lbl-${lbl.id}`}
                  x={lbl.x}
                  y={lbl.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={lbl.fontSize}
                  fontWeight="700"
                  fill={textFill}
                  style={{
                    opacity: textOpacity,
                    fontFamily:
                      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    letterSpacing: "0.015em",
                    paintOrder: "stroke fill",
                    stroke: textStroke,
                    strokeWidth: 2.2,
                    strokeLinejoin: "round",
                    transition:
                      "fill 0.45s ease-out, stroke 0.45s ease-out, opacity 0.45s ease-out",
                  }}
                >
                  <tspan x={lbl.x} dy="-6">
                    {lbl.lines[0]}
                  </tspan>
                  <tspan x={lbl.x} dy="13">
                    {lbl.lines[1]}
                  </tspan>
                </text>
              );
            }

            // Single line state names (Uttar Pradesh, Maharashtra, Bihar, etc.)
            return (
              <text
                key={`lbl-${lbl.id}`}
                x={lbl.x}
                y={lbl.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={lbl.fontSize}
                fontWeight="700"
                fill={textFill}
                style={{
                  opacity: textOpacity,
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  letterSpacing: "0.015em",
                  paintOrder: "stroke fill",
                  stroke: textStroke,
                  strokeWidth: 2.2,
                  strokeLinejoin: "round",
                  transition:
                    "fill 0.45s ease-out, stroke 0.45s ease-out, opacity 0.45s ease-out",
                }}
              >
                {lbl.name}
              </text>
            );
          })}
        </g>
      </svg>

      {/* Floating Hover Tooltip (Subtle and non-intrusive) */}
      {hoveredState && (
        <div
          className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-[calc(100%+10px)] transition-all duration-75"
          style={{
            left: `${hoveredState.x}px`,
            top: `${hoveredState.y}px`,
          }}
        >
          <div
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shadow-md backdrop-blur-sm whitespace-nowrap flex items-center gap-1.5 border ${
              hoveredState.isReach
                ? "bg-[#04315D]/95 text-white border-white/20"
                : "bg-white/95 text-[#475569] border-[#E8E2D7]"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                hoveredState.isReach ? "bg-[#E53E3E]" : "bg-[#94A3B8]"
              }`}
            />
            <span className="font-semibold">{hoveredState.name}</span>
            {hoveredState.isReach && (
              <span className="text-[10px] uppercase font-mono tracking-wider opacity-85 text-red-200">
                · Reach
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
