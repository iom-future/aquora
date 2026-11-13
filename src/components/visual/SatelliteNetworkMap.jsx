import { useState } from 'react';
import { Radio } from 'lucide-react';

export default function SatelliteNetworkMap({ className = "" }) {
  const [selectedNode, setSelectedNode] = useState(null);

  const nodes = [
    {
      id: "INT-01",
      name: "Main Catchment & Reservoir Intake",
      type: "Intake Plant",
      coords: { x: 180, y: 130 },
      pressure: "5.4 bar",
      flow: "1,240 m³/h",
      status: "nominal",
      level: "91% capacity",
      desc: "Primary source intake with ultrasonic multi-path flow meter."
    },
    {
      id: "BST-04",
      name: "High-Lift Booster Pump Station Alpha",
      type: "Pumping Station",
      coords: { x: 380, y: 210 },
      pressure: "6.8 bar",
      flow: "980 m³/h",
      status: "nominal",
      level: "3 Pumps Online",
      desc: "Variable frequency drive booster feed supplying Sector 1 & 2."
    },
    {
      id: "RSV-02",
      name: "Elevated Distribution Reservoir",
      type: "Storage Reservoir",
      coords: { x: 620, y: 160 },
      pressure: "4.1 bar",
      flow: "750 m³/h",
      status: "nominal",
      level: "78% (Head: 32m)",
      desc: "Gravity distribution reservoir with level telemetry & residual chlorine probe."
    },
    {
      id: "DMA-04",
      name: "Sector 4 Feeder & Pressure Reducing Valve",
      type: "District Metered Area",
      coords: { x: 520, y: 340 },
      pressure: "2.9 bar",
      flow: "410 m³/h",
      status: "warning",
      level: "Min Night Flow +32%",
      desc: "Algorithmic anomaly detected: night baseline flow exceeds expected standard deviation."
    },
    {
      id: "TER-08",
      name: "Industrial Terminal Node",
      type: "Commercial Intake",
      coords: { x: 780, y: 280 },
      pressure: "3.6 bar",
      flow: "320 m³/h",
      status: "nominal",
      level: "Continuous Draw",
      desc: "Telemetry node monitoring commercial circuit flow & conductivity."
    },
    {
      id: "MON-12",
      name: "Perimeter Water Quality & Pressure Node",
      type: "Sensor Station",
      coords: { x: 290, y: 360 },
      pressure: "4.4 bar",
      flow: "540 m³/h",
      status: "nominal",
      level: "pH 7.4 | Turbidity 0.4 NTU",
      desc: "Continuous physical sensor streaming hydrostatic pressure and pH."
    }
  ];

  return (
    <div className={`relative w-full max-w-full rounded-2xl overflow-hidden border border-[#1E375A] bg-[#0B131E] select-none ${className}`}>
      {/* Satellite Topo Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0B131E]/40 to-[#0B131E] pointer-events-none" />

      {/* Geospatial Map Canvas / SVG */}
      <div className="relative w-full max-w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        <svg
          viewBox="0 0 920 480"
          className="w-full max-w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="main-aqueduct" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#174D78" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3289D6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#42C7B5" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="anomaly-segment" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3289D6" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <radialGradient id="lake-catchment" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#174D78" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#0B131E" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0B131E" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Topographic Contour Contours (Geographic Basin) */}
          <path
            d="M 60,60 Q 220,30 360,90 T 700,70 T 880,110"
            stroke="#174D78"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M 40,120 Q 200,80 400,160 T 740,130 T 900,190"
            stroke="#174D78"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 50,220 Q 240,180 440,240 T 720,210 T 890,290"
            stroke="#174D78"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M 70,320 Q 260,280 470,340 T 760,310 T 890,410"
            stroke="#174D78"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.3"
          />

          {/* Natural Catchment / Reservoir Body */}
          <ellipse cx="170" cy="120" rx="95" ry="60" fill="url(#lake-catchment)" />
          <path
            d="M 90,130 C 130,85 210,95 240,140 C 260,170 190,180 140,170 Z"
            fill="#174D78"
            fillOpacity="0.25"
            stroke="#3289D6"
            strokeWidth="1.2"
            strokeDasharray="2 4"
          />
          <text x="120" y="135" fill="#42C7B5" fontSize="9" letterSpacing="1" fontFamily="monospace" opacity="0.8">
            RESERVOIR BASIN ALPHA
          </text>

          {/* District Metered Area Boundaries */}
          <polygon
            points="460,260 640,240 690,420 480,440"
            fill="#174D78"
            fillOpacity="0.08"
            stroke="#3289D6"
            strokeWidth="1"
            strokeDasharray="5 5"
            opacity="0.6"
          />
          <text x="530" y="380" fill="#748391" fontSize="9" letterSpacing="1" fontFamily="monospace">
            DMA ZONE 04 [LEKKI CORRIDOR]
          </text>

          {/* Primary Trunk Pipelines (Conduits) */}
          <path
            d="M 180,130 L 380,210"
            stroke="url(#main-aqueduct)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 380,210 L 620,160"
            stroke="url(#main-aqueduct)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 620,160 L 780,280"
            stroke="#3289D6"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 380,210 L 520,340"
            stroke="url(#anomaly-segment)"
            strokeWidth="3"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            d="M 520,340 L 780,280"
            stroke="#174D78"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 180,130 L 290,360 L 520,340"
            stroke="#174D78"
            strokeWidth="2"
            strokeDasharray="3 3"
            opacity="0.7"
          />

          {/* Animated Water Velocity Indicators along pipelines */}
          <circle cx="280" cy="170" r="2.5" fill="#42C7B5">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="185" r="2.5" fill="#42C7B5">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="275" r="3" fill="#F59E0B">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Physical Node Renderings */}
          {nodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            const isAlert = node.status === "warning";
            const color = isAlert ? "#F59E0B" : "#42C7B5";

            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setSelectedNode(node)}
                tabIndex={0}
                role="button"
                aria-label={`${node.name} details`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(node)}
              >
                {isAlert && (
                  <circle
                    cx={node.coords.x}
                    cy={node.coords.y}
                    r="18"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    opacity="0.8"
                    className="animate-ping-slow"
                  />
                )}

                <circle
                  cx={node.coords.x}
                  cy={node.coords.y}
                  r={isSelected ? "14" : "10"}
                  fill={isAlert ? "#78350F" : "#132238"}
                  stroke={color}
                  strokeWidth={isSelected ? "2.5" : "1.8"}
                  className="transition-all"
                />

                <circle
                  cx={node.coords.x}
                  cy={node.coords.y}
                  r="4"
                  fill={color}
                />

                <rect
                  x={node.coords.x + 12}
                  y={node.coords.y - 12}
                  width="54"
                  height="16"
                  rx="3"
                  fill="#101C2C"
                  stroke="#1E375A"
                  strokeWidth="0.8"
                  opacity="0.9"
                />
                <text
                  x={node.coords.x + 16}
                  y={node.coords.y}
                  fill="#F3F8FA"
                  fontSize="8.5"
                  fontWeight="600"
                  fontFamily="monospace"
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Selected Node Telemetry HUD / Inspector */}
        {selectedNode && (
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm glass-panel-elevated p-3 sm:p-4 rounded-xl z-20 animate-fade-in max-w-[calc(100%-1rem)] sm:max-w-sm">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${selectedNode.status === 'warning' ? 'bg-amber-400 animate-pulse' : 'bg-[#42C7B5]'}`} />
                <span className="text-xs font-mono uppercase tracking-wider text-[#748391]">{selectedNode.id} • {selectedNode.type}</span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-xs text-[#748391] hover:text-white px-1.5 py-0.5 rounded bg-[#101C2C]/60 cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <h4 className="font-['Manrope'] font-bold text-sm text-white mb-2">{selectedNode.name}</h4>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="bg-[#101C2C]/70 p-2 rounded-lg border border-[#1E375A]/60">
                <span className="text-[#748391] text-[10px] block">Line Pressure</span>
                <span className="font-mono font-semibold text-white">{selectedNode.pressure}</span>
              </div>
              <div className="bg-[#101C2C]/70 p-2 rounded-lg border border-[#1E375A]/60">
                <span className="text-[#748391] text-[10px] block">Flow Rate</span>
                <span className="font-mono font-semibold text-[#42C7B5]">{selectedNode.flow}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#748391] leading-relaxed mb-2">
              {selectedNode.desc}
            </p>

            <div className="flex items-center justify-between text-[10px] pt-2 border-t border-[#1E375A]/70 text-[#748391]">
              <span>Status: <strong className="text-white">{selectedNode.level}</strong></span>
              <span className="text-[#3289D6] font-mono">Link OK</span>
            </div>
          </div>
        )}

        {/* Live Network Status Indicator Overlay */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2 pointer-events-none max-w-[calc(100%-1.5rem)]">
          <div className="glass-panel px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#42C7B5] animate-pulse flex-shrink-0" />
            <span className="font-mono text-[#F3F8FA] truncate">TELEMETRY ACTIVE</span>
          </div>
          <div className="hidden sm:flex glass-panel px-3 py-1.5 rounded-full items-center gap-2 text-xs text-[#748391]">
            <Radio className="w-3.5 h-3.5 text-[#3289D6]" />
            <span>Click any node to inspect</span>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 hidden md:flex items-center gap-3 glass-panel px-3 py-1.5 rounded-lg text-[11px] text-[#748391]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#42C7B5]" />
            <span>Nominal Flow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Anomaly Flagged</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#3289D6]" />
            <span>Trunk Conduit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
