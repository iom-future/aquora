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
      case "01": return <Radio className="w-5 h-5 text-[#42C7B5]" />;
      case "02": return <TrendingUp className="w-5 h-5 text-[#3289D6]" />;
      case "03": return <Cpu className="w-5 h-5 text-[#42C7B5]" />;
      case "04": return <CheckCircle2 className="w-5 h-5 text-[#3289D6]" />;
      default: return <Sparkles className="w-5 h-5 text-[#42C7B5]" />;
    }
  };

  const current = intelligenceLoopData.stages[activeStage];

  return (
    <section className="relative py-24 sm:py-32 bg-[#101C2C] border-t border-[#1E375A]/60 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      {/* Subtle circular pulse glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#174D78]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{intelligenceLoopData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {intelligenceLoopData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {intelligenceLoopData.description}
          </p>
        </div>

        {/* Circular / Connected Horizontal Intelligence Diagram - No Numbering */}
        <div className="mb-14">
          {/* Loop Cycle Bar: Connect → Monitor → Understand → Improve → Connect */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            {intelligenceLoopData.stages.map((stage, idx) => (
              <div key={stage.name} className="flex items-center">
                <button
                  onClick={() => setActiveStage(idx)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                    activeStage === idx
                      ? 'bg-gradient-to-r from-[#174D78] to-[#3289D6] text-white border-[#42C7B5] shadow-lg shadow-[#3289D6]/20 scale-105'
                      : 'bg-[#132238] text-[#748391] border-[#1E375A] hover:text-white hover:border-[#3289D6]/40'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeStage === idx ? 'bg-[#42C7B5] animate-ping' : 'bg-[#748391]'}`} />
                  <span>{stage.name}</span>
                </button>

                {/* Arrow connector */}
                {idx < intelligenceLoopData.stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#1E375A] mx-1 sm:mx-2 hidden md:block" />
                )}
                {idx === intelligenceLoopData.stages.length - 1 && (
                  <div className="hidden md:flex items-center text-[#42C7B5] ml-2 text-xs font-mono gap-1">
                    <RotateCw className="w-3.5 h-3.5 animate-spin duration-3000" />
                    <span>Loop Closes</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Central Active Layer Inspector Card */}
          <div className="max-w-4xl mx-auto glass-panel-elevated p-6 sm:p-10 rounded-3xl border border-[#3289D6]/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Detail */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#101C2C] text-[#42C7B5] border border-[#1E375A] flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 text-[#3289D6]" />
                    Continuous Intelligence Cycle
                  </span>
                  <span className="text-xs font-mono text-[#748391]">
                    Stage: {current.name}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Manrope'] text-white">
                  {current.layer}
                </h3>

                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {current.detail}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono text-[#748391] uppercase tracking-wider block mb-2">
                    Key Telemetry & Operational Streams:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#101C2C] text-[#F3F8FA] border border-[#1E375A]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Interactive Architecture Graphic */}
              <div className="md:col-span-5 bg-[#0B131E] rounded-2xl p-6 border border-[#1E375A] relative flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-2xl bg-[#132238] border border-[#3289D6]/40 mb-4 text-[#42C7B5] shadow-inner">
                  {getStageIcon(current.id)}
                </div>

                <div className="text-sm font-mono font-semibold text-white mb-1">
                  {current.name} Process Node
                </div>
                <div className="text-xs text-[#748391] font-mono">
                  Feedback Weight: 100% Adaptive
                </div>

                <div className="w-full mt-4 pt-4 border-t border-[#1E375A]/70 flex items-center justify-between text-[11px] text-[#748391]">
                  <span>Validation Protocol</span>
                  <span className="text-[#42C7B5] font-mono">Continuous Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Overview Grid - No Numbering, With Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {intelligenceLoopData.stages.map((stage, idx) => (
            <div
              key={stage.name}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                activeStage === idx
                  ? 'bg-[#182B46] border-[#42C7B5] shadow-md'
                  : 'bg-[#132238]/50 border-[#1E375A] hover:bg-[#182B46]/60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-1.5 rounded-lg bg-[#101C2C] border border-[#1E375A]">
                  {getStageIcon(stage.id)}
                </div>
                <span className="font-mono text-xs font-bold text-[#42C7B5] px-2 py-0.5 rounded bg-[#101C2C] border border-[#1E375A]">
                  {stage.name}
                </span>
              </div>
              <h4 className="text-base font-bold text-white font-['Manrope'] mb-1">
                {stage.layer}
              </h4>
              <p className="text-xs text-[#748391] line-clamp-2">
                {stage.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
