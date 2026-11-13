import { 
  Database, 
  FileCheck, 
  Lock, 
  ShieldCheck, 
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { trustData } from '../data/content';

export default function Trust() {
  const getPrincipleIcon = (index) => {
    switch (index) {
      case 0: return <Database className="w-6 h-6 text-[#3289D6]" />;
      case 1: return <FileCheck className="w-6 h-6 text-[#42C7B5]" />;
      case 2: return <UserCheck className="w-6 h-6 text-[#3289D6]" />;
      case 3: return <Lock className="w-6 h-6 text-[#42C7B5]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#3289D6]" />;
    }
  };

  const getPrincipleBadge = (index) => {
    switch (index) {
      case 0: return "Audited Telemetry";
      case 1: return "Traceable Origins";
      case 2: return "Human In Loop";
      case 3: return "Access Governance";
      default: return "Core Standard";
    }
  };

  const sample = trustData.sampleAssetTelemetry;

  return (
    <section id="trust" className="relative py-24 sm:py-32 bg-[#0B131E] border-t border-[#1E375A]/60">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{trustData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {trustData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {trustData.description}
          </p>
        </div>

        {/* 4 Trust Principles Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustData.principles.map((p, idx) => (
            <div
              key={p.title}
              className="bg-[#132238]/60 border border-[#1E375A] hover:border-[#3289D6]/50 rounded-2xl p-6 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#101C2C] border border-[#1E375A] w-fit group-hover:scale-105 transition-transform shadow-sm">
                    {getPrincipleIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-[#42C7B5] px-2.5 py-1 rounded-full bg-[#101C2C] border border-[#1E375A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
                    {getPrincipleBadge(idx)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold font-['Manrope'] text-white group-hover:text-[#F3F8FA]">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-[#748391] group-hover:text-[#94A3B8] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1E375A]/60 flex items-center justify-between text-[11px] text-[#748391]">
                <span>Operational Trust</span>
                <span className="font-mono text-[#42C7B5] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3289D6]" />
                  <span>Verified Standard</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Example Transparent Telemetry Panel: Clear Distinctions between Measured, Estimated & AI Assessment */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel-elevated border border-[#3289D6]/30 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#1E375A]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#42C7B5] animate-pulse" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#748391] block">
                  Auditable Telemetry Inspector Panel
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-['Manrope'] text-white">
                  {sample.assetName}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#101C2C] text-[#42C7B5] border border-[#1E375A]">
                ASSET: {sample.assetId}
              </span>
            </div>
          </div>

          {/* Telemetry Detail Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Measurement Type</span>
              <span className="text-sm font-semibold text-white block">{sample.measurementType}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#174D78] text-[#42C7B5]">
                Direct Hydrostatic
              </span>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Direct Sensor Value</span>
              <span className="text-base font-mono font-bold text-white block">{sample.measuredValue}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Directly Measured
              </span>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Observation Timestamp</span>
              <span className="text-xs font-mono font-medium text-white block">{sample.observationTimestamp}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#182B46] text-[#3289D6]">
                UTC Atomic NTP Synced
              </span>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Verified Data Source</span>
              <span className="text-xs font-semibold text-white block">{sample.dataSource}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#132238] text-[#748391]">
                RTU Device Authenticated
              </span>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Monitoring Status</span>
              <span className="text-sm font-mono font-semibold text-[#42C7B5] block">{sample.monitoringStatus}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#174D78]/70 text-[#42C7B5]">
                Zero Packet Loss
              </span>
            </div>

            <div className="bg-[#101C2C] p-4 rounded-xl border border-[#1E375A]">
              <span className="text-[10px] font-mono uppercase text-[#748391] block mb-1">Review & Oversight</span>
              <span className="text-sm font-semibold text-amber-300 block">{sample.reviewStatus}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                Operator Action Required
              </span>
            </div>
          </div>

          {/* Clear Distinction Banner: Measured vs AI Assessment */}
          <div className="bg-[#101C2C] p-4 rounded-xl border border-[#3289D6]/40">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3289D6]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3289D6]">
                AI-Generated Algorithmic Assessment (Probabilistic Hypothesis)
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {sample.aiEstimate}
            </p>
          </div>

          <p className="text-[11px] text-[#748391] mt-4 text-center">
            * All telemetry cards explicitly state whether an entry is a direct physical sensor measurement, an empirical hydraulic estimate, or an AI anomaly hypothesis requiring human physical confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
