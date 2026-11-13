import { useState } from 'react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Gauge, 
  Layers, 
  Wrench, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { howItWorksData } from '../data/content';
import SatelliteNetworkMap from './visual/SatelliteNetworkMap';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('network');

  const getStepIcon = (index) => {
    switch (index) {
      case 0: return <Database className="w-5 h-5 text-[#0284C7]" />;
      case 1: return <Layers className="w-5 h-5 text-[#0D9488]" />;
      case 2: return <Cpu className="w-5 h-5 text-amber-500" />;
      case 3: return <Wrench className="w-5 h-5 text-[#0284C7]" />;
      default: return <Zap className="w-5 h-5 text-[#0D9488]" />;
    }
  };

  const currentTab = howItWorksData.tabs.find((t) => t.id === activeTab) || howItWorksData.tabs[0];

  return (
    <section id="how-it-works" className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 overflow-hidden">
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

        {/* 4-Step Architecture Workflow - No Numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 w-full">
          {howItWorksData.steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative bg-[#F8FAFC] hover:bg-white border border-sky-200/80 hover:border-sky-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_16px_-4px_rgba(2,132,199,0.05)] hover:shadow-[0_12px_24px_-6px_rgba(2,132,199,0.1)] transition-all group w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white border border-sky-200 group-hover:scale-105 transition-transform shadow-sm">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    {step.badge}
                  </span>
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-bold font-['Manrope'] text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Protocol Line */}
              <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Operational Phase</span>
                <span className="font-mono text-[#0284C7] font-semibold flex items-center gap-1">
                  <span>Continuous Sync</span>
                  <ArrowRight className="w-3 h-3 text-[#0284C7]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Product Demonstration */}
        <div className="mt-8 rounded-3xl bg-white border border-sky-200/90 shadow-xl overflow-hidden p-3.5 sm:p-8 w-full max-w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100 w-full">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-semibold block mb-1">
                Interactive Operational Workspace
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-[#0F172A] font-['Manrope']">
                Explore the Aquora Operator Experience
              </h3>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-sky-50/80 p-1.5 rounded-xl border border-sky-200/80 max-w-full overflow-x-auto">
              {howItWorksData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#0284C7] text-white shadow-md'
                      : 'text-[#475569] hover:text-[#0284C7] hover:bg-white'
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active View Title & Description */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-sky-100 w-full max-w-full">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-['Manrope'] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0D9488] flex-shrink-0" />
                <span>{currentTab.title}</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                {currentTab.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] flex-shrink-0">
              <span className="px-2.5 py-1 rounded bg-sky-100 text-[#0369A1] font-semibold">SIMULATED TELEMETRY</span>
            </div>
          </div>

          {/* Central Interactive Display Canvas */}
          <div className="min-h-[360px] rounded-2xl overflow-hidden border border-sky-200/80 bg-[#F0F7FF] p-3 sm:p-6 w-full max-w-full">
            {/* View 1: Network Overview */}
            {activeTab === 'network' && (
              <div className="space-y-4 w-full max-w-full overflow-hidden">
                <SatelliteNetworkMap />
              </div>
            )}

            {/* View 2: Live Monitoring Indicators */}
            {activeTab === 'monitoring' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#64748B]">Trunk Line Pressure</span>
                      <Gauge className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0F172A]">4.2 <span className="text-base text-[#64748B]">bar</span></div>
                    <p className="text-xs text-[#0D9488] mt-1">±0.15 bar stability band</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#64748B] mb-1">
                      <span>0.0 bar</span>
                      <span>Target: 4.0</span>
                      <span>8.0 bar</span>
                    </div>
                    <div className="w-full bg-sky-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#0284C7] h-full w-[52.5%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#64748B]">Volumetric Flow Rate</span>
                      <Activity className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0F172A]">1,840 <span className="text-base text-[#64748B]">m³/h</span></div>
                    <p className="text-xs text-[#64748B] mt-1">Diurnal midday crest</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#64748B] mb-1">
                      <span>500 m³/h</span>
                      <span>Capacity: 2,400</span>
                    </div>
                    <div className="w-full bg-sky-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#0D9488] h-full w-[76.6%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#64748B]">Reservoir Alpha Head</span>
                      <Layers className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0F172A]">84.6% <span className="text-base text-[#64748B]">vol</span></div>
                    <p className="text-xs text-[#0284C7] mt-1">Level: 32.4m static head</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#64748B] mb-1">
                      <span>Min 30%</span>
                      <span>Overflow: 95%</span>
                    </div>
                    <div className="w-full bg-sky-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#0369A1] to-[#0284C7] h-full w-[84.6%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#64748B]">Water Quality Telemetry</span>
                      <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0F172A]">7.35 <span className="text-base text-[#64748B]">pH</span></div>
                    <p className="text-xs text-[#64748B] mt-1">Turbidity: 0.38 NTU (Nominal)</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B]">
                    <span>Chlorine Residual</span>
                    <span className="font-mono text-[#0D9488] font-semibold">0.85 mg/L</span>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Anomaly Detection */}
            {activeTab === 'anomalies' && (
              <div className="space-y-4 w-full">
                <div className="p-4 sm:p-5 rounded-xl bg-amber-50/90 border border-amber-200/90 flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-100 text-amber-600 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-[#0F172A] text-sm sm:text-base font-['Manrope']">
                        High Priority: Minimum Night Flow Anomaly (Sector 4 DMA)
                      </h5>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-amber-100 text-amber-800 border border-amber-300 font-semibold">
                        Priority: High
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#78350F] mt-1.5 leading-relaxed">
                      Between 02:00 and 04:30 AM, baseline volumetric consumption remained 32% above the statistical 14-day rolling mean without recorded industrial schedule. Potential sub-surface joint breach or open hydrant.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#64748B]">
                      <span>Sensor: <strong className="text-[#0F172A]">DMA-04-PRV</strong></span>
                      <span>Confidence: <strong className="text-[#0D9488]">82%</strong></span>
                      <span>Survey: <strong className="text-amber-700">Recommended</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white border border-sky-200/80 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-sky-50 text-[#0284C7] flex-shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-[#0F172A] text-sm sm:text-base font-['Manrope']">
                        Advisory: Booster Pump 03 Vibration Deviation
                      </h5>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-sky-100 text-[#0369A1] font-semibold">
                        Predictive Flag
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed">
                      Transient micro-pulsations in suction pressure indicate potential air entrainment or early impeller cavitation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Operations Center */}
            {activeTab === 'operations' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm">
                  <h5 className="font-bold text-[#0F172A] text-base font-['Manrope'] mb-3 flex items-center justify-between">
                    <span>Field Inspection Log</span>
                    <span className="text-xs font-mono text-[#0D9488] font-semibold">2 Dispatched</span>
                  </h5>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-sky-50/60 border border-sky-100 text-xs">
                      <div className="flex justify-between font-semibold text-[#0F172A] mb-1">
                        <span>WO-2026-089: Acoustic Survey</span>
                        <span className="text-amber-600 font-mono">In Progress</span>
                      </div>
                      <p className="text-[#475569]">Assigned to Crew 2 (Lekki Phase 1 Sector 4 conduit inspection)</p>
                    </div>

                    <div className="p-3 rounded-lg bg-sky-50/60 border border-sky-100 text-xs">
                      <div className="flex justify-between font-semibold text-[#0F172A] mb-1">
                        <span>WO-2026-088: Valve Chamber Reseal</span>
                        <span className="text-[#0D9488] font-mono">Completed</span>
                      </div>
                      <p className="text-[#475569]">Joint gasket replacement verified. Pressure normalized to 4.2 bar.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-sky-200/80 shadow-sm">
                  <h5 className="font-bold text-[#0F172A] text-base font-['Manrope'] mb-3 flex items-center justify-between">
                    <span>Operational Governance</span>
                    <span className="text-xs font-mono text-[#0284C7] font-semibold">Strict Compliance</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span>Every alert requires explicit technician sign-off prior to closure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span>Telemetry timestamps synced with UTC atomic clock reference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" />
                      <span>SCADA integration operates in read-only passive monitoring mode</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Current Tab Live Stats Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full">
            {currentTab.stats.map((stat) => (
              <div key={stat.label} className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-sky-100">
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#64748B] block truncate">
                  {stat.label}
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-[#0F172A] block mt-0.5">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#0D9488] font-mono font-semibold truncate block">
                  {stat.status}
                </span>
              </div>
            ))}
          </div>

          {/* Ethical Disclaimer banner */}
          <div className="mt-6 pt-4 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#64748B] w-full">
            <p>
              * Note: Illustrative operational data. Real-time telemetry monitoring requires physical telemetry instrumentation and compatible sensor integrations.
            </p>
            <div className="font-mono text-[11px] text-[#0284C7] font-semibold flex-shrink-0">
              AQUORA SYSTEM V2.4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
