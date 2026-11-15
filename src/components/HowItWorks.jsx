import { 
  Activity, 
  AlertTriangle, 
  Wrench, 
  Search
} from 'lucide-react';
import { howItWorksData } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="platform" className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 overflow-hidden">
      <div id="how-it-works" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{howItWorksData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {howItWorksData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {howItWorksData.description}
          </p>
        </div>

        {/* The Aquora Platform Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-20 w-full">
          {/* Card 1: Connect (7 Cols) */}
          <div className="lg:col-span-7 group relative rounded-3xl bg-white border border-sky-200/80 hover:border-sky-300 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(2,132,199,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(2,132,199,0.14)] flex flex-col justify-between overflow-hidden">
            {/* Top Stage with Ambient Glow & Floating Console */}
            <div className="relative p-5 sm:p-7 pb-4 bg-gradient-to-b from-sky-50/70 via-slate-50/40 to-transparent border-b border-sky-100 overflow-hidden min-h-[260px] flex items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
              {/* Top ambient blue glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-28 bg-gradient-to-b from-[#0284C7]/30 via-[#38BDF8]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Floating Dark Command Palette Modal */}
              <div className="relative w-full max-w-md rounded-2xl bg-[#0F172A]/95 text-white border border-slate-800 shadow-[0_14px_35px_-8px_rgba(2,132,199,0.25)] p-3.5 sm:p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                {/* Search Bar Row */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60 mb-3">
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs text-slate-400 font-sans">Filter telemetry streams...</span>
                  </div>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-700/90 text-slate-300 text-[10px] font-mono border border-slate-600">⌘K</kbd>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 px-1">
                  Active Data Streams (4 Connected)
                </div>

                {/* Stream Item Rows */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-sky-950/60 border border-sky-800/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                      <span className="text-xs font-medium text-white">Electromagnetic Flow Transducers</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-900/80 text-sky-300 border border-sky-700/70 font-semibold">
                      3,240 msg/s
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-slate-800/40 border border-transparent hover:border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                      <span className="text-xs font-medium text-slate-300">Piezoelectric Pressure Transducers</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      1,820 msg/s
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-slate-800/40 border border-transparent hover:border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-xs font-medium text-slate-300">Pumping Station SCADA Interface</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      420 msg/s
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy: Bold Title + Inline Description */}
            <div className="p-6 sm:p-7">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] font-bold font-['Manrope'] text-base sm:text-lg block sm:inline mr-2">
                  {howItWorksData.steps[0].title}.
                </strong>
                {howItWorksData.steps[0].description}
              </p>
            </div>
          </div>

          {/* Card 2: Monitor (5 Cols) */}
          <div className="lg:col-span-5 group relative rounded-3xl bg-white border border-sky-200/80 hover:border-sky-300 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(2,132,199,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(2,132,199,0.14)] flex flex-col justify-between overflow-hidden">
            {/* Top Stage with Ambient Glow & Floating Gauge */}
            <div className="relative p-5 sm:p-7 pb-4 bg-gradient-to-b from-sky-50/70 via-slate-50/40 to-transparent border-b border-sky-100 overflow-hidden min-h-[260px] flex items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
              {/* Top ambient blue glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-28 bg-gradient-to-b from-[#0284C7]/30 via-[#38BDF8]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Floating Dark Gauge Card */}
              <div className="relative w-full max-w-sm rounded-2xl bg-[#0F172A]/95 text-white border border-slate-800 shadow-[0_14px_35px_-8px_rgba(2,132,199,0.25)] p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-semibold text-white">Line 04 Hydraulic Monitor</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-semibold">
                    Nominal
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="my-2 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white">4.2</span>
                    <span className="text-xs font-mono text-slate-400 ml-1.5">bar</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/50">
                    ±0.08 stability band
                  </span>
                </div>

                {/* Mini Wave Pressure Sparkline */}
                <div className="my-2.5 h-12 w-full">
                  <svg className="w-full h-full" viewBox="0 0 200 40" fill="none">
                    <defs>
                      <linearGradient id="monitor-spark-grad" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0284C7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,25 Q25,18 50,22 T100,19 T150,23 T200,20 L200,40 L0,40 Z"
                      fill="url(#monitor-spark-grad)"
                    />
                    <path
                      d="M0,25 Q25,18 50,22 T100,19 T150,23 T200,20"
                      stroke="#38BDF8"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <span>Flow: 1,840 m³/h</span>
                  <span>Head Loss: 0.12 bar/km</span>
                </div>
              </div>
            </div>

            {/* Bottom Copy: Bold Title + Inline Description */}
            <div className="p-6 sm:p-7">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] font-bold font-['Manrope'] text-base sm:text-lg block sm:inline mr-2">
                  {howItWorksData.steps[1].title}.
                </strong>
                {howItWorksData.steps[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Detect (5 Cols) */}
          <div className="lg:col-span-5 group relative rounded-3xl bg-white border border-sky-200/80 hover:border-sky-300 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(2,132,199,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(2,132,199,0.14)] flex flex-col justify-between overflow-hidden">
            {/* Top Stage with Ambient Glow & Floating Alert Card */}
            <div className="relative p-5 sm:p-7 pb-4 bg-gradient-to-b from-sky-50/70 via-slate-50/40 to-transparent border-b border-sky-100 overflow-hidden min-h-[260px] flex items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
              {/* Top ambient warm/blue glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-28 bg-gradient-to-b from-amber-500/25 via-[#0284C7]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Floating Dark Alert Card */}
              <div className="relative w-full max-w-sm rounded-2xl bg-[#0F172A]/95 text-white border border-slate-800 shadow-[0_14px_35px_-8px_rgba(2,132,199,0.25)] p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                    <AlertTriangle className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                    <span>AI Anomaly Flagged</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded-full border border-rose-800/60">
                    Active
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 my-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-200 mb-1">
                    <span>Sector 04 Night Flow Shift</span>
                    <span className="font-mono text-amber-400 font-bold">+32% Delta</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Unusual continuous draw logged between 02:00 – 04:30.
                  </p>
                </div>

                {/* AI Confidence Meter */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 mb-1.5">
                    <span>AI Confidence Score</span>
                    <span className="font-bold text-sky-400">88% (Verified)</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-[88%] h-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy: Bold Title + Inline Description */}
            <div className="p-6 sm:p-7">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] font-bold font-['Manrope'] text-base sm:text-lg block sm:inline mr-2">
                  {howItWorksData.steps[2].title}.
                </strong>
                {howItWorksData.steps[2].description}
              </p>
            </div>
          </div>

          {/* Card 4: Optimize (7 Cols) */}
          <div className="lg:col-span-7 group relative rounded-3xl bg-white border border-sky-200/80 hover:border-sky-300 transition-all duration-300 shadow-[0_4px_24px_-6px_rgba(2,132,199,0.08)] hover:shadow-[0_16px_40px_-8px_rgba(2,132,199,0.14)] flex flex-col justify-between overflow-hidden">
            {/* Top Stage with Ambient Glow & Floating Action Console */}
            <div className="relative p-5 sm:p-7 pb-4 bg-gradient-to-b from-sky-50/70 via-slate-50/40 to-transparent border-b border-sky-100 overflow-hidden min-h-[260px] flex items-center justify-center">
              <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
              {/* Top ambient blue glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-28 bg-gradient-to-b from-[#0284C7]/30 via-[#38BDF8]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Floating Dark Action Console (with keycaps like screenshot!) */}
              <div className="relative w-full max-w-md rounded-2xl bg-[#0F172A]/95 text-white border border-slate-800 shadow-[0_14px_35px_-8px_rgba(2,132,199,0.25)] p-3.5 sm:p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-semibold text-white">Operations Command</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                    2 Dispatches
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 px-1">
                  Prioritized Actions
                </div>

                {/* Action Rows with Shortcut Badges like screenshot */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-medium text-white block">Dispatch Acoustic Leak Crew</span>
                        <span className="text-[10px] text-slate-400">Sector 4 Junction • High Priority</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] font-mono text-amber-300 px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/50">
                        Dispatched
                      </span>
                      <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px] font-mono border border-slate-600">D</kbd>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-transparent hover:border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-medium text-slate-300 block">Schedule Booster Valve Calibration</span>
                        <span className="text-[10px] text-slate-400">Booster Station 02 • Preventative</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                        Queued
                      </span>
                      <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono border border-slate-700">S</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copy: Bold Title + Inline Description */}
            <div className="p-6 sm:p-7">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] font-bold font-['Manrope'] text-base sm:text-lg block sm:inline mr-2">
                  {howItWorksData.steps[3].title}.
                </strong>
                {howItWorksData.steps[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
