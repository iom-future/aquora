import { 
  Building2, 
  Factory, 
  FlaskConical, 
  Home, 
  Landmark, 
  MapPin, 
  Network,
  CheckCircle2
} from 'lucide-react';
import { audienceData } from '../data/content';

export default function Audience() {
  const getAudienceIcon = (index) => {
    switch (index) {
      case 0: return <Building2 className="w-6 h-6 text-[#0284C7]" />;
      case 1: return <Factory className="w-6 h-6 text-[#0D9488]" />;
      case 2: return <Home className="w-6 h-6 text-[#0284C7]" />;
      case 3: return <FlaskConical className="w-6 h-6 text-[#0D9488]" />;
      case 4: return <Landmark className="w-6 h-6 text-[#0284C7]" />;
      case 5: return <Network className="w-6 h-6 text-[#0D9488]" />;
      default: return <Building2 className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  const getAudienceTag = (index) => {
    switch (index) {
      case 0: return "Municipal Supply";
      case 1: return "Industrial Circuit";
      case 2: return "Commercial Estate";
      case 3: return "Treatment Facility";
      case 4: return "Civic Authority";
      case 5: return "Infrastructure Fleet";
      default: return "Water Operator";
    }
  };

  return (
    <section id="solutions" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F8FAFC] border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{audienceData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {audienceData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6">
            {audienceData.subheading}
          </p>

          {/* Regional Market Focus Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-sky-200 text-xs text-[#0F172A] max-w-[95%] shadow-sm">
            <MapPin className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
            <span className="truncate">Target Focus: <strong className="text-[#0369A1]">Nigeria & Regional Infrastructure Networks</strong></span>
          </div>
        </div>

        {/* 6 Audience Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {audienceData.audiences.map((audience, idx) => (
            <div
              key={audience.title}
              className="group relative bg-white hover:bg-sky-50/40 border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(2,132,199,0.12)] flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 group-hover:scale-105 transition-transform shadow-sm">
                    {getAudienceIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0284C7] px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {getAudienceTag(idx)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold font-['Manrope'] text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {audience.title}
                  </h3>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {audience.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100 flex items-center justify-between text-xs">
                <span className="text-[#64748B]">Key Objective</span>
                <span className="font-mono text-[#0369A1] font-semibold text-right max-w-[65%] truncate flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" />
                  <span className="truncate">{audience.focus}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
