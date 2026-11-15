import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Radio, 
  RotateCw, 
  Sparkles, 
  TrendingUp 
} from 'lucide-react';
import { intelligenceLoopData } from '../data/content';

export default function IntelligenceLoop() {
  const [activeStage, setActiveStage] = useState(0);

  const getStageIcon = (id) => {
    switch (id) {
      case "01": return <Radio className="w-6 h-6 text-[#0284C7]" />;
      case "02": return <TrendingUp className="w-6 h-6 text-[#0D9488]" />;
      case "03": return <Cpu className="w-6 h-6 text-[#0284C7]" />;
      case "04": return <CheckCircle2 className="w-6 h-6 text-[#0D9488]" />;
      default: return <Sparkles className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  const current = intelligenceLoopData.stages[activeStage];

  return (
    <section id="technology" className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* Subtle circular pulse glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] bg-gradient-to-r from-sky-200/30 via-blue-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{intelligenceLoopData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {intelligenceLoopData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {intelligenceLoopData.description}
          </p>
        </div>

        {/* Circular / Connected Horizontal Intelligence Diagram - No Numbering */}
        <div className="mb-14 w-full">
          {/* Loop Cycle Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 w-full">
            {intelligenceLoopData.stages.map((stage, idx) => (
              <div key={stage.name} className="flex items-center">
                <button
                  onClick={() => setActiveStage(idx)}
                  className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                    activeStage === idx
                      ? 'bg-gradient-to-r from-[#0369A1] to-[#0284C7] text-white border-sky-400 shadow-md shadow-sky-600/20 scale-105'
                      : 'bg-sky-50 text-[#475569] border-sky-200 hover:text-[#0284C7] hover:bg-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeStage === idx ? 'bg-white animate-ping' : 'bg-sky-400'}`} />
                  <span>{stage.name}</span>
                </button>

                {/* Arrow connector */}
                {idx < intelligenceLoopData.stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-sky-300 mx-1 sm:mx-2 hidden md:block" />
                )}
                {idx === intelligenceLoopData.stages.length - 1 && (
                  <div className="hidden md:flex items-center text-[#0D9488] ml-2 text-xs font-mono gap-1 font-semibold">
                    <RotateCw className="w-3.5 h-3.5 animate-spin duration-3000" />
                    <span>Loop Closes</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Central Active Layer Inspector Card */}
          <div className="max-w-4xl mx-auto bg-white p-5 sm:p-10 rounded-3xl border border-sky-200 shadow-xl w-full max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center w-full">
              {/* Left Column: Stage Detail */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center gap-1.5 font-semibold">
                    <RotateCw className="w-3.5 h-3.5 text-[#0284C7]" />
                    Continuous Cycle
                  </span>
                  <span className="text-xs font-mono text-[#64748B]">
                    Stage: {current.name}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Manrope'] text-[#0F172A]">
                  {current.layer}
                </h3>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {current.detail}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2 font-semibold">
                    Key Telemetry & Operational Streams:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono bg-sky-50 text-[#0F172A] border border-sky-200 font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Interactive Architecture Graphic */}
              <div className="md:col-span-5 bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-sky-200/90 relative flex flex-col items-center justify-center text-center w-full shadow-sm">
                <div className="p-4 rounded-2xl bg-white border border-sky-200 mb-4 text-[#0284C7] shadow-sm">
                  {getStageIcon(current.id)}
                </div>

                <div className="text-sm font-mono font-semibold text-[#0F172A] mb-1">
                  {current.name} Process Node
                </div>
                <div className="text-xs text-[#64748B] font-mono">
                  Feedback Weight: 100% Adaptive
                </div>

                <div className="w-full mt-4 pt-4 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Validation Protocol</span>
                  <span className="text-[#0D9488] font-mono font-semibold">Continuous Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
