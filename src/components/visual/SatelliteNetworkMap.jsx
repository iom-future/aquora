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
    <div className={`relative w-full max-w-full rounded-2xl overflow-hidden border border-sky-200/90 bg-[#F0F7FF] select-none ${className}`}>
      {/* Satellite Topo Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#F0F7FF]/30 to-[#F0F7FF] pointer-events-none" />

      {/* Geospatial Map Canvas / SVG */}
      <div className="relative w-full max-w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        <svg
          viewBox="0 0 920 480"
          className="w-full max-w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="main-aqueduct" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>

            <linearGradient id="anomaly-segment" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            <radialGradient id="lake-catchment" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F0F7FF" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Topographic Contour Contours (Geographic Basin) */}
          <path
            d="M 60,60 Q 220,30 360,90 T 700,70 T 880,110"
            stroke="#BAE6FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 40,120 Q 200,80 400,160 T 740,130 T 900,190"
            stroke="#BAE6FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 50,220 Q 240,180 440,240 T 720,210 T 890,290"
            stroke="#BAE6FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 70,320 Q 260,280 470,340 T 760,310 T 890,410"
            stroke="#BAE6FD"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
            opacity="0.8"
          />

          {/* Natural Catchment / Reservoir Body */}
          <ellipse cx="170" cy="120" rx="95" ry="60" fill="url(#lake-catchment)" />
          <path
            d="M 90,130 C 130,85 210,95 240,140 C 260,170 190,180 140,170 Z"
            fill="#BAE6FD"
            fillOpacity="0.4"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
          <text x="120" y="135" fill="#0369A1" fontSize="9" letterSpacing="1" fontFamily="monospace" fontWeight="600" opacity="0.9">
            RESERVOIR BASIN ALPHA
          </text>

          {/* District Metered Area Boundaries */}
          <polygon
            points="460,260 640,240 690,420 480,440"
            fill="#E0F2FE"
            fillOpacity="0.4"
            stroke="#0284C7"
            strokeWidth="1.2"
            strokeDasharray="5 5"
            opacity="0.7"
          />
          <text x="530" y="380" fill="#0369A1" fontSize="9" letterSpacing="1" fontFamily="monospace" fontWeight="600">
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
            stroke="#0284C7"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
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
            stroke="#0369A1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 180,130 L 290,360 L 520,340"
            stroke="#0369A1"
            strokeWidth="2"
            strokeDasharray="3 3"
            opacity="0.7"
          />

          {/* Animated Water Velocity Indicators along pipelines */}
          <circle cx="280" cy="170" r="2.5" fill="#0D9488">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="185" r="2.5" fill="#0D9488">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="275" r="3" fill="#D97706">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Physical Node Renderings */}
          {nodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            const isAlert = node.status === "warning";
            const color = isAlert ? "#D97706" : "#0284C7";

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
                    stroke="#D97706"
                    strokeWidth="1.5"
                    opacity="0.8"
                    className="animate-ping-slow"
                  />
                )}

                <circle
                  cx={node.coords.x}
                  cy={node.coords.y}
                  r={isSelected ? "14" : "10"}
                  fill="#FFFFFF"
                  stroke={color}
                  strokeWidth={isSelected ? "2.5" : "1.8"}
                  className="transition-all shadow-sm"
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
                  fill="#FFFFFF"
                  stroke="#BAE6FD"
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x={node.coords.x + 16}
                  y={node.coords.y}
                  fill="#0F172A"
                  fontSize="8.5"
                  fontWeight="700"
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
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm bg-white/95 border border-sky-200/90 shadow-xl p-3 sm:p-4 rounded-xl z-20 animate-fade-in max-w-[calc(100%-1rem)] sm:max-w-sm">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${selectedNode.status === 'warning' ? 'bg-amber-500 animate-pulse' : 'bg-[#0D9488]'}`} />
                <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">{selectedNode.id} • {selectedNode.type}</span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-xs text-[#64748B] hover:text-[#0F172A] px-1.5 py-0.5 rounded bg-sky-50 cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <h4 className="font-['Manrope'] font-bold text-sm text-[#0F172A] mb-2">{selectedNode.name}</h4>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="bg-sky-50/70 p-2 rounded-lg border border-sky-100">
                <span className="text-[#64748B] text-[10px] block">Line Pressure</span>
                <span className="font-mono font-semibold text-[#0F172A]">{selectedNode.pressure}</span>
              </div>
              <div className="bg-sky-50/70 p-2 rounded-lg border border-sky-100">
                <span className="text-[#64748B] text-[10px] block">Flow Rate</span>
                <span className="font-mono font-semibold text-[#0D9488]">{selectedNode.flow}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#475569] leading-relaxed mb-2">
              {selectedNode.desc}
            </p>

            <div className="flex items-center justify-between text-[10px] pt-2 border-t border-sky-100 text-[#64748B]">
              <span>Status: <strong className="text-[#0F172A]">{selectedNode.level}</strong></span>
              <span className="text-[#0284C7] font-mono font-medium">Link OK</span>
            </div>
          </div>
        )}

        {/* Live Network Status Indicator Overlay */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2 pointer-events-none max-w-[calc(100%-1.5rem)]">
          <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs border border-sky-200 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0D9488] animate-pulse flex-shrink-0" />
            <span className="font-mono text-[#0F172A] font-semibold truncate">TELEMETRY ACTIVE</span>
          </div>
          <div className="hidden sm:flex bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full items-center gap-2 text-xs text-[#64748B] border border-sky-200 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Click any node to inspect</span>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-sky-200 px-3 py-1.5 rounded-lg text-[11px] text-[#64748B] shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span>Nominal Flow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Anomaly Flagged</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#0284C7]" />
            <span>Trunk Conduit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
