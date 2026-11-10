import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { futureVisionData } from '../data/content';

export default function FutureVision() {
  const [activeLayers, setActiveLayers] = useState({
    pipelines: true,
    pressure: true,
    reservoirs: true,
    stations: false,
    assets: false
  });

  const toggleLayer = (layerId) => {
    setActiveLayers((prev) => ({
      ...prev,
      [layerId]: !prev[layerId]
    }));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#101C2C] border-t border-[#1E375A]/60 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{futureVisionData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {futureVisionData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {futureVisionData.description}
          </p>
        </div>

        {/* Large Detailed Digital Water-Network Visualization & Layer Controls */}
        <div className="rounded-3xl glass-panel-elevated border border-[#3289D6]/30 overflow-hidden p-4 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1E375A]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#42C7B5] block mb-1">
                Multi-Layer Infrastructure Digital Twin Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white">
                Network Layer Composition View
              </h3>
            </div>

            {/* Layer Toggles */}
            <div className="flex flex-wrap gap-2">
              {futureVisionData.networkLayers.map((layer) => {
                const isActive = activeLayers[layer.id];
                return (
                  <button
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#174D78] text-white border border-[#42C7B5] shadow-sm'
                        : 'bg-[#101C2C] text-[#748391] border border-[#1E375A] hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#42C7B5]' : 'bg-[#748391]'}`} />
                    <span>{layer.label}</span>
                    <span className="text-[10px] opacity-70">({layer.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Network SVG Canvas with Layer Toggles applied */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-[#0B131E] border border-[#1E375A] overflow-hidden p-4">
            <svg viewBox="0 0 1000 420" className="w-full h-full object-cover">
              <defs>
                <pattern id="grid-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#1E375A" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="1000" height="420" fill="url(#grid-dots)" />

              {/* Layer 1: Pipelines */}
              {activeLayers.pipelines && (
                <g className="transition-opacity duration-300">
                  <path d="M 120,80 L 280,180 L 520,150 L 750,240 L 920,200" stroke="#3289D6" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M 280,180 L 360,340 L 640,320 L 750,240" stroke="#174D78" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 520,150 L 620,80 L 840,110" stroke="#42C7B5" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                </g>
              )}

              {/* Layer 2: Pressure Indicators */}
              {activeLayers.pressure && (
                <g className="transition-opacity duration-300">
                  <circle cx="280" cy="180" r="16" fill="#3289D6" fillOpacity="0.15" stroke="#3289D6" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="280" y="184" textAnchor="middle" fill="#42C7B5" fontSize="10" fontFamily="monospace">4.8 bar</text>

                  <circle cx="520" cy="150" r="16" fill="#3289D6" fillOpacity="0.15" stroke="#3289D6" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="520" y="154" textAnchor="middle" fill="#42C7B5" fontSize="10" fontFamily="monospace">4.2 bar</text>

                  <circle cx="640" cy="320" r="16" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="640" y="324" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="monospace">2.9 bar</text>
                </g>
              )}

              {/* Layer 3: Reservoir Levels */}
              {activeLayers.reservoirs && (
                <g className="transition-opacity duration-300">
                  <rect x="90" y="50" width="60" height="50" rx="6" fill="#132238" stroke="#3289D6" strokeWidth="1.5" />
                  <rect x="92" y="65" width="56" height="33" rx="4" fill="#3289D6" fillOpacity="0.6" />
                  <text x="120" y="85" textAnchor="middle" fill="#F3F8FA" fontSize="9" fontWeight="bold" fontFamily="monospace">91% VOL</text>

                  <rect x="720" y="215" width="60" height="50" rx="6" fill="#132238" stroke="#3289D6" strokeWidth="1.5" />
                  <rect x="722" y="230" width="56" height="33" rx="4" fill="#3289D6" fillOpacity="0.6" />
                  <text x="750" y="250" textAnchor="middle" fill="#F3F8FA" fontSize="9" fontWeight="bold" fontFamily="monospace">78% VOL</text>
                </g>
              )}

              {/* Layer 4: Monitoring Stations */}
              {activeLayers.stations && (
                <g className="transition-opacity duration-300">
                  <polygon points="360,330 370,350 350,350" fill="#42C7B5" stroke="#101C2C" strokeWidth="1" />
                  <text x="360" y="365" textAnchor="middle" fill="#42C7B5" fontSize="9" fontFamily="monospace">STATION-12</text>

                  <polygon points="620,70 630,90 610,90" fill="#42C7B5" stroke="#101C2C" strokeWidth="1" />
                  <text x="620" y="105" textAnchor="middle" fill="#42C7B5" fontSize="9" fontFamily="monospace">STATION-08</text>
                </g>
              )}

              {/* Layer 5: Infrastructure Assets */}
              {activeLayers.assets && (
                <g className="transition-opacity duration-300">
                  <circle cx="840" cy="110" r="8" fill="#174D78" stroke="#42C7B5" strokeWidth="2" />
                  <text x="840" y="130" textAnchor="middle" fill="#748391" fontSize="9" fontFamily="monospace">VALVE-A1</text>

                  <circle cx="920" cy="200" r="8" fill="#174D78" stroke="#42C7B5" strokeWidth="2" />
                  <text x="920" y="220" textAnchor="middle" fill="#748391" fontSize="9" fontFamily="monospace">HYDRANT-C</text>
                </g>
              )}
            </svg>

            {/* Watermark in viewer */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#748391] bg-[#101C2C]/80 px-2 py-1 rounded">
              TOPOLOGICAL SCHEMATIC • TOGGLE LAYERS ABOVE
            </div>
          </div>
        </div>

        {/* 5 Future Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureVisionData.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="bg-[#132238]/60 hover:bg-[#182B46]/70 border border-[#1E375A] rounded-2xl p-6 transition-all hover:border-[#3289D6]/50 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#42C7B5] px-2.5 py-1 rounded bg-[#101C2C] border border-[#1E375A] inline-block mb-3">
                  ROADMAP {cap.id}
                </span>
                <h4 className="text-lg font-bold font-['Manrope'] text-white mb-2">
                  {cap.title}
                </h4>
                <p className="text-sm text-[#748391] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1E375A]/60 flex items-center justify-between text-[11px] text-[#748391]">
                <span>Maturity Phase</span>
                <span className="font-mono text-[#3289D6]">Phase II Pipeline</span>
              </div>
            </div>
          ))}

          {/* Summary Box */}
          <div className="bg-gradient-to-br from-[#174D78]/40 to-[#132238] border border-[#3289D6]/30 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#42C7B5] px-2.5 py-1 rounded bg-[#101C2C] border border-[#1E375A] inline-block mb-3">
                VISION CRITERIA
              </span>
              <h4 className="text-lg font-bold font-['Manrope'] text-white mb-2">
                Grounded in Ground Truth
              </h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Capabilities expand as sensor density, operational data history, and verified utility partnerships mature.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#1E375A]/60 flex items-center gap-2 text-xs text-[#42C7B5] font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Evidence-based evolution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
