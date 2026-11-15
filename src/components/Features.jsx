import { 
  Activity, 
  ClockArrowUp, 
  Cpu, 
  Droplets, 
  Gauge, 
  Info, 
  LayoutDashboard, 
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import { featuresData } from '../data/content';

export default function Features() {
  const getFeatureIcon = (id) => {
    switch (id) {
      case "01": return <ShieldAlert className="w-6 h-6 text-[#0284C7]" />;
      case "02": return <Gauge className="w-6 h-6 text-[#0D9488]" />;
      case "03": return <Cpu className="w-6 h-6 text-[#0284C7]" />;
      case "04": return <Droplets className="w-6 h-6 text-[#0D9488]" />;
      case "05": return <ClockArrowUp className="w-6 h-6 text-[#0284C7]" />;
      case "06": return <LayoutDashboard className="w-6 h-6 text-[#0D9488]" />;
      default: return <Activity className="w-6 h-6 text-[#0284C7]" />;
    }
  };

  const getFeatureCategory = (id) => {
    switch (id) {
      case "01": return "Leak Anomaly Engine";
      case "02": return "Hydraulic Telemetry";
      case "03": return "Asset Monitoring";
      case "04": return "Quality Analytics";
      case "05": return "Predictive Insights";
      case "06": return "Unified Oversight";
      default: return "Core Capability";
    }
  };

  return (
    <section id="capabilities" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F0F7FF] border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{featuresData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {featuresData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {featuresData.description}
          </p>
        </div>

        {/* 6 Capabilities Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {featuresData.features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white hover:bg-sky-50/40 border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(2,132,199,0.12)] flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 group-hover:scale-105 transition-transform shadow-sm">
                    {getFeatureIcon(feature.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0284C7] px-3 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {getFeatureCategory(feature.id)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold font-['Manrope'] text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {feature.summary}
                </p>

                {/* Bullets List */}
                <ul className="space-y-2.5 mb-6">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsible Capability Notice / Disclaimer if applicable */}
              {feature.disclaimer ? (
                <div className="mt-4 pt-3 border-t border-sky-100 flex items-start gap-2 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/80">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#78350F] leading-tight">
                    {feature.disclaimer}
                  </p>
                </div>
              ) : (
                <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Telemetry Integration</span>
                  <span className="font-mono text-[#0284C7] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Automated Stream</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
