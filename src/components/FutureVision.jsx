import { useState } from 'react';
import { 
  Activity, 
  Compass, 
  Droplets, 
  GitBranch, 
  Layers, 
  Sparkles, 
  Zap 
} from 'lucide-react';
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

  const getCapabilityIcon = (id) => {
    switch (id) {
      case "01": return <Activity className="w-5 h-5 text-[#0284C7]" />;
      case "02": return <GitBranch className="w-5 h-5 text-[#0D9488]" />;
      case "03": return <Droplets className="w-5 h-5 text-[#0284C7]" />;
      case "04": return <Layers className="w-5 h-5 text-[#0D9488]" />;
      case "05": return <Compass className="w-5 h-5 text-[#0284C7]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0284C7]" />;
    }
  };

  const getCapabilityBadge = (id) => {
    switch (id) {
      case "01": return "Predictive Health";
      case "02": return "Flow Optimization";
      case "03": return "Quality Synthesis";
      case "04": return "Digital Twins";
      case "05": return "Resource Matrix";
      default: return "Visionary Vector";
    }
  };

  return (
    <section className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{futureVisionData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {futureVisionData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {futureVisionData.description}
          </p>
        </div>

        {/* Large Detailed Digital Water-Network Visualization & Layer Controls */}
        <div className="rounded-3xl bg-[#F8FAFC] border border-sky-200/90 shadow-xl overflow-hidden p-3.5 sm:p-8 mb-16 w-full max-w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-sky-100 w-full">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-semibold block mb-1">
                Multi-Layer Infrastructure Digital Twin Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Manrope'] text-[#0F172A]">
                Network Layer Composition View
              </h3>
            </div>

            {/* Layer Toggles */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 max-w-full overflow-x-auto">
              {futureVisionData.networkLayers.map((layer) => {
                const isActive = activeLayers[layer.id];
                return (
                  <button
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0284C7] text-white border border-sky-300 shadow-sm'
                        : 'bg-white text-[#475569] border border-sky-200 hover:text-[#0284C7] hover:bg-sky-50'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-sky-400'}`} />
                    <span>{layer.label}</span>
                    <span className="text-[10px] opacity-80">({layer.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Network SVG Canvas with Layer Toggles applied */}
          <div className="relative w-full max-w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-[#F0F7FF] border border-sky-200/90 overflow-hidden p-3 sm:p-4">
            <svg viewBox="0 0 1000 420" className="w-full max-w-full h-full object-cover">
              <defs>
                <pattern id="grid-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#BAE6FD" opacity="0.8" />
                </pattern>
              </defs>
              <rect width="1000" height="420" fill="url(#grid-dots)" />

              {/* Layer 1: Pipelines */}
              {activeLayers.pipelines && (
                <g className="transition-opacity duration-300">
                  <path d="M 120,80 L 280,180 L 520,150 L 750,240 L 920,200" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M 280,180 L 360,340 L 640,320 L 750,240" stroke="#0369A1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 520,150 L 620,80 L 840,110" stroke="#0D9488" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                </g>
              )}

              {/* Layer 2: Pressure Indicators */}
              {activeLayers.pressure && (
                <g className="transition-opacity duration-300">
                  <circle cx="280" cy="180" r="16" fill="#BAE6FD" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="3 3" />
                  <text x="280" y="184" textAnchor="middle" fill="#0369A1" fontSize="10" fontFamily="monospace" fontWeight="bold">4.8 bar</text>

                  <circle cx="520" cy="150" r="16" fill="#BAE6FD" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="3 3" />
                  <text x="520" y="154" textAnchor="middle" fill="#0369A1" fontSize="10" fontFamily="monospace" fontWeight="bold">4.2 bar</text>

                  <circle cx="640" cy="320" r="16" fill="#FEF3C7" fillOpacity="0.6" stroke="#D97706" strokeWidth="1.2" strokeDasharray="3 3" />
                  <text x="640" y="324" textAnchor="middle" fill="#B45309" fontSize="10" fontFamily="monospace" fontWeight="bold">2.9 bar</text>
                </g>
              )}

              {/* Layer 3: Reservoir Levels */}
              {activeLayers.reservoirs && (
                <g className="transition-opacity duration-300">
                  <rect x="90" y="50" width="60" height="50" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
                  <rect x="92" y="65" width="56" height="33" rx="4" fill="#BAE6FD" fillOpacity="0.6" />
                  <text x="120" y="85" textAnchor="middle" fill="#0369A1" fontSize="9" fontWeight="bold" fontFamily="monospace">91% VOL</text>

                  <rect x="720" y="215" width="60" height="50" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
                  <rect x="722" y="230" width="56" height="33" rx="4" fill="#BAE6FD" fillOpacity="0.6" />
                  <text x="750" y="250" textAnchor="middle" fill="#0369A1" fontSize="9" fontWeight="bold" fontFamily="monospace">78% VOL</text>
                </g>
              )}

              {/* Layer 4: Monitoring Stations */}
              {activeLayers.stations && (
                <g className="transition-opacity duration-300">
                  <polygon points="360,330 370,350 350,350" fill="#0D9488" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="360" y="365" textAnchor="middle" fill="#0369A1" fontSize="9" fontFamily="monospace" fontWeight="bold">STATION-12</text>

                  <polygon points="620,70 630,90 610,90" fill="#0D9488" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="620" y="105" textAnchor="middle" fill="#0369A1" fontSize="9" fontFamily="monospace" fontWeight="bold">STATION-08</text>
                </g>
              )}

              {/* Layer 5: Infrastructure Assets */}
              {activeLayers.assets && (
                <g className="transition-opacity duration-300">
                  <circle cx="840" cy="110" r="8" fill="#0284C7" stroke="#0D9488" strokeWidth="2" />
                  <text x="840" y="130" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="monospace" fontWeight="semibold">VALVE-A1</text>

                  <circle cx="920" cy="200" r="8" fill="#0284C7" stroke="#0D9488" strokeWidth="2" />
                  <text x="920" y="220" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="monospace" fontWeight="semibold">HYDRANT-C</text>
                </g>
              )}
            </svg>

            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#475569] bg-white/90 border border-sky-200 px-2.5 py-1 rounded shadow-sm font-semibold">
              TOPOLOGICAL SCHEMATIC • TOGGLE LAYERS ABOVE
            </div>
          </div>
        </div>

        {/* 5 Future Capabilities Cards - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {futureVisionData.capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#F8FAFC] hover:bg-white border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 transition-all shadow-[0_4px_16px_-4px_rgba(2,132,199,0.05)] hover:shadow-[0_12px_24px_-6px_rgba(2,132,199,0.1)] flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                    {getCapabilityIcon(cap.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0284C7] px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {getCapabilityBadge(cap.id)}
                  </span>
                </div>

                <div className="mb-2">
                  <h4 className="text-lg font-bold font-['Manrope'] text-[#0F172A]">
                    {cap.title}
                  </h4>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Maturity Phase</span>
                <span className="font-mono text-[#0284C7] font-semibold flex items-center gap-1">
                  <span>Phase II Pipeline</span>
                </span>
              </div>
            </div>
          ))}

          {/* Summary Box */}
          <div className="bg-gradient-to-br from-sky-50 to-[#E0F2FE]/50 border border-sky-200 rounded-2xl p-6 flex flex-col justify-between w-full shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 text-[#0284C7] shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#0369A1] px-3 py-1 rounded-full bg-white border border-sky-200">
                  Ground Truth
                </span>
              </div>

              <div className="mb-2">
                <h4 className="text-lg font-bold font-['Manrope'] text-[#0F172A]">
                  Evidence-Based Evolution
                </h4>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed">
                Capabilities expand as sensor density, operational data history, and verified utility partnerships mature.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200/80 flex items-center gap-2 text-xs text-[#0D9488] font-mono font-semibold">
              <Zap className="w-4 h-4" />
              <span>Grounded in physical telemetry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
