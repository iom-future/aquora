import { AlertOctagon, GitBranch, Layers, DropletOff, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { problemData } from '../data/content';

export default function Problem() {
  const getIcon = (id) => {
    switch (id) {
      case "01":
        return <AlertOctagon className="w-6 h-6 text-amber-400" />;
      case "02":
        return <Layers className="w-6 h-6 text-[#3289D6]" />;
      case "03":
        return <GitBranch className="w-6 h-6 text-[#42C7B5]" />;
      case "04":
        return <DropletOff className="w-6 h-6 text-rose-400" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-[#3289D6]" />;
    }
  };

  return (
    <section id="the-challenge" className="relative w-full max-w-full py-24 sm:py-32 bg-[#0B131E] border-t border-[#1E375A]/60 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{problemData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {problemData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {problemData.description}
          </p>
        </div>

        {/* Problem Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 w-full">
          {problemData.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[#132238]/60 hover:bg-[#182B46]/70 border border-[#1E375A] hover:border-[#3289D6]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B131E]/60 flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#101C2C] border border-[#1E375A] group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-xs font-mono text-[#42C7B5] uppercase tracking-wider px-3 py-1 rounded-full bg-[#101C2C] border border-[#1E375A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
                    {card.metricTag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-['Manrope'] group-hover:text-[#F3F8FA]">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-[#748391] group-hover:text-[#94A3B8] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Pipeline Indicator */}
              <div className="mt-6 pt-4 border-t border-[#1E375A]/50 flex items-center justify-between text-xs text-[#748391]">
                <span>Operational Impact Area</span>
                <span className="font-mono text-[#3289D6] flex items-center gap-1">
                  <span>Unverified Distribution Loss</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Callout */}
        <div className="max-w-4xl mx-auto text-center p-6 sm:p-10 rounded-2xl glass-panel border border-[#3289D6]/30 shadow-lg w-full">
          <p className="text-base sm:text-2xl font-medium text-white font-['Manrope'] italic leading-relaxed">
            "{problemData.closingStatement}"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#42C7B5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
            <span>Aquora Engineering Architectural Principle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
