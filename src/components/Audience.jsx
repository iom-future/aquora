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
      case 0: return <Building2 className="w-6 h-6 text-[#3289D6]" />;
      case 1: return <Factory className="w-6 h-6 text-[#42C7B5]" />;
      case 2: return <Home className="w-6 h-6 text-[#3289D6]" />;
      case 3: return <FlaskConical className="w-6 h-6 text-[#42C7B5]" />;
      case 4: return <Landmark className="w-6 h-6 text-[#3289D6]" />;
      case 5: return <Network className="w-6 h-6 text-[#42C7B5]" />;
      default: return <Building2 className="w-6 h-6 text-[#3289D6]" />;
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
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#0B131E] border-t border-[#1E375A]/60">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{audienceData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {audienceData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-6">
            {audienceData.subheading}
          </p>

          {/* Regional Market Focus Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#132238]/80 border border-[#3289D6]/30 text-xs text-[#F3F8FA]">
            <MapPin className="w-4 h-4 text-[#42C7B5]" />
            <span>Target Deployment Focus: <strong>Nigeria & Regional Infrastructure Networks</strong></span>
          </div>
        </div>

        {/* 6 Audience Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {audienceData.audiences.map((audience, idx) => (
            <div
              key={audience.title}
              className="group relative bg-[#132238]/60 hover:bg-[#182B46]/70 border border-[#1E375A] hover:border-[#42C7B5]/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#101C2C] border border-[#1E375A] group-hover:scale-105 transition-transform shadow-sm">
                    {getAudienceIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-[#42C7B5] px-3 py-1 rounded-full bg-[#101C2C] border border-[#1E375A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
                    {getAudienceTag(idx)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold font-['Manrope'] text-white group-hover:text-[#F3F8FA]">
                    {audience.title}
                  </h3>
                </div>

                <p className="text-sm text-[#748391] group-hover:text-[#94A3B8] leading-relaxed mb-6">
                  {audience.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E375A]/60 flex items-center justify-between text-xs">
                <span className="text-[#748391]">Key Operational Objective</span>
                <span className="font-mono text-[#42C7B5] font-medium text-right max-w-[60%] truncate flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3289D6] flex-shrink-0" />
                  <span>{audience.focus}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
