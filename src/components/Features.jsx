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
      case "01": return <ShieldAlert className="w-6 h-6 text-[#3289D6]" />;
      case "02": return <Gauge className="w-6 h-6 text-[#42C7B5]" />;
      case "03": return <Cpu className="w-6 h-6 text-[#3289D6]" />;
      case "04": return <Droplets className="w-6 h-6 text-[#42C7B5]" />;
      case "05": return <ClockArrowUp className="w-6 h-6 text-[#3289D6]" />;
      case "06": return <LayoutDashboard className="w-6 h-6 text-[#42C7B5]" />;
      default: return <Activity className="w-6 h-6 text-[#3289D6]" />;
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
    <section id="platform" className="relative py-24 sm:py-32 bg-[#0B131E] border-t border-[#1E375A]/60">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{featuresData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {featuresData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {featuresData.description}
          </p>
        </div>

        {/* 6 Capabilities Cards Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-[#132238]/60 hover:bg-[#182B46]/70 border border-[#1E375A] hover:border-[#3289D6]/60 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#101C2C] border border-[#1E375A] group-hover:scale-105 transition-transform shadow-sm">
                    {getFeatureIcon(feature.id)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#42C7B5] px-3 py-1 rounded-full bg-[#101C2C] border border-[#1E375A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
                    {getFeatureCategory(feature.id)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold font-['Manrope'] text-white group-hover:text-[#F3F8FA]">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-[#748391] group-hover:text-[#94A3B8] leading-relaxed mb-6">
                  {feature.summary}
                </p>

                {/* Bullets List */}
                <ul className="space-y-2.5 mb-6">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3F8FA]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5] mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsible Capability Notice / Disclaimer if applicable */}
              {feature.disclaimer ? (
                <div className="mt-4 pt-3 border-t border-[#1E375A]/60 flex items-start gap-2 bg-[#101C2C]/60 p-2.5 rounded-lg border border-amber-500/20">
                  <Info className="w-4 h-4 text-amber-400/90 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#748391] leading-tight">
                    {feature.disclaimer}
                  </p>
                </div>
              ) : (
                <div className="mt-4 pt-3 border-t border-[#1E375A]/60 flex items-center justify-between text-[11px] text-[#748391]">
                  <span>Telemetry Integration</span>
                  <span className="font-mono text-[#3289D6] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#42C7B5]" />
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
