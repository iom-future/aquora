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
      case 0: return <Database className="w-6 h-6 text-[#0284C7]" />;
      case 1: return <FileCheck className="w-6 h-6 text-[#0D9488]" />;
      case 2: return <UserCheck className="w-6 h-6 text-[#0284C7]" />;
      case 3: return <Lock className="w-6 h-6 text-[#0D9488]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#0284C7]" />;
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
    <section id="trust" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F0F7FF] border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{trustData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {trustData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {trustData.description}
          </p>
        </div>

        {/* 4 Trust Principles Grid - No Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {trustData.principles.map((p, idx) => (
            <div
              key={p.title}
              className="bg-white hover:bg-sky-50/40 border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(2,132,199,0.12)] group flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 w-fit group-hover:scale-105 transition-transform shadow-sm">
                    {getPrincipleIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#0284C7] px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {getPrincipleBadge(idx)}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold font-['Manrope'] text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Operational Trust</span>
                <span className="font-mono text-[#0D9488] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Verified Standard</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Example Transparent Telemetry Panel: Clear Distinctions between Measured, Estimated & AI Assessment */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-sky-200 shadow-xl p-4 sm:p-8 w-full max-w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-sky-100 w-full">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-pulse flex-shrink-0" />
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                  Auditable Telemetry Inspector Panel
                </span>
                <h4 className="text-base sm:text-xl font-bold font-['Manrope'] text-[#0F172A]">
                  {sample.assetName}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 font-semibold">
                ASSET: {sample.assetId}
              </span>
            </div>
          </div>

          {/* Telemetry Detail Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 w-full">
            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Measurement Type</span>
              <span className="text-xs sm:text-sm font-semibold text-[#0F172A] block truncate">{sample.measurementType}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 text-[#0369A1] font-medium">
                Direct Hydrostatic
              </span>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Direct Sensor Value</span>
              <span className="text-sm sm:text-base font-mono font-bold text-[#0F172A] block">{sample.measuredValue}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                Directly Measured
              </span>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Observation Timestamp</span>
              <span className="text-xs font-mono font-medium text-[#0F172A] block break-words">{sample.observationTimestamp}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-50 text-[#0284C7] border border-sky-200 font-semibold">
                UTC Atomic Synced
              </span>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Verified Data Source</span>
              <span className="text-xs font-semibold text-[#0F172A] block truncate">{sample.dataSource}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 text-[#64748B] font-semibold">
                RTU Authenticated
              </span>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Monitoring Status</span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-[#0D9488] block">{sample.monitoringStatus}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-teal-50 text-[#0D9488] border border-teal-200 font-semibold">
                Zero Packet Loss
              </span>
            </div>

            <div className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-sky-100">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">Review & Oversight</span>
              <span className="text-xs sm:text-sm font-semibold text-amber-700 block">{sample.reviewStatus}</span>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 font-semibold">
                Action Required
              </span>
            </div>
          </div>

          {/* Clear Distinction Banner: Measured vs AI Assessment */}
          <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200 w-full">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] flex-shrink-0" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0284C7]">
                AI-Generated Algorithmic Assessment (Probabilistic Hypothesis)
              </span>
            </div>
            <p className="text-xs text-[#334155] leading-relaxed">
              {sample.aiEstimate}
            </p>
          </div>

          <p className="text-[11px] text-[#64748B] mt-4 text-center">
            * All telemetry cards explicitly state whether an entry is a direct physical sensor measurement, an empirical hydraulic estimate, or an AI anomaly hypothesis requiring human physical confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
