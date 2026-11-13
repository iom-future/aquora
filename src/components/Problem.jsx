import { AlertOctagon, GitBranch, Layers, DropletOff, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { problemData } from '../data/content';

export default function Problem() {
  const getIcon = (id) => {
    switch (id) {
      case "01":
        return <AlertOctagon className="w-6 h-6 text-amber-500" />;
      case "02":
        return <Layers className="w-6 h-6 text-[#0284C7]" />;
      case "03":
        return <GitBranch className="w-6 h-6 text-[#0D9488]" />;
      case "04":
        return <DropletOff className="w-6 h-6 text-rose-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  return (
    <section id="the-challenge" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm">
            <span>{problemData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {problemData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {problemData.description}
          </p>
        </div>

        {/* Problem Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 w-full">
          {problemData.cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white hover:bg-sky-50/40 border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(2,132,199,0.12)] flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {card.metricTag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 font-['Manrope'] group-hover:text-[#0284C7] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Pipeline Indicator */}
              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-[#64748B]">
                <span>Operational Impact Area</span>
                <span className="font-mono text-[#0284C7] font-semibold flex items-center gap-1">
                  <span>Unverified Distribution Loss</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Callout */}
        <div className="max-w-4xl mx-auto text-center p-6 sm:p-10 rounded-2xl bg-white border border-sky-200 shadow-md w-full">
          <p className="text-base sm:text-2xl font-medium text-[#0F172A] font-['Manrope'] italic leading-relaxed">
            "{problemData.closingStatement}"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#0369A1] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
            <span>Aquora Engineering Architectural Principle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
