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
      case 0: return <Database className="w-5 h-5 text-[#3289D6]" />;
      case 1: return <Layers className="w-5 h-5 text-[#42C7B5]" />;
      case 2: return <Cpu className="w-5 h-5 text-amber-400" />;
      case 3: return <Wrench className="w-5 h-5 text-[#3289D6]" />;
      default: return <Zap className="w-5 h-5 text-[#42C7B5]" />;
    }
  };

  const currentTab = howItWorksData.tabs.find((t) => t.id === activeTab) || howItWorksData.tabs[0];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#101C2C] border-t border-[#1E375A]/60">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <span>{howItWorksData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {howItWorksData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {howItWorksData.description}
          </p>
        </div>

        {/* 4-Step Architecture Workflow - No Numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {howItWorksData.steps.map((step, idx) => (
            <div
              key={step.title}
              className="relative bg-[#132238]/60 border border-[#1E375A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#3289D6]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#101C2C] border border-[#1E375A] group-hover:scale-105 transition-transform shadow-sm">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-[#101C2C] text-[#42C7B5] border border-[#1E375A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5]" />
                    {step.badge}
                  </span>
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-bold font-['Manrope'] text-white group-hover:text-[#F3F8FA]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-[#748391] group-hover:text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Protocol Line */}
              <div className="mt-6 pt-3 border-t border-[#1E375A]/60 flex items-center justify-between text-[11px] text-[#748391]">
                <span>Operational Phase</span>
                <span className="font-mono text-[#42C7B5] flex items-center gap-1">
                  <span>Continuous Sync</span>
                  <ArrowRight className="w-3 h-3 text-[#3289D6]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Product Demonstration */}
        <div className="mt-8 rounded-3xl glass-panel-elevated border border-[#3289D6]/30 overflow-hidden p-4 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1E375A]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#42C7B5] block mb-1">
                Interactive Operational Workspace
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Manrope']">
                Explore the Aquora Operator Experience
              </h3>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#101C2C] p-1.5 rounded-xl border border-[#1E375A]">
              {howItWorksData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#174D78] to-[#3289D6] text-white shadow-md'
                      : 'text-[#748391] hover:text-white hover:bg-[#182B46]'
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
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#101C2C]/70 p-4 rounded-xl border border-[#1E375A]">
            <div>
              <h4 className="text-lg font-bold text-white font-['Manrope'] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#42C7B5]" />
                {currentTab.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#748391] mt-1">
                {currentTab.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#748391]">
              <span className="px-2 py-1 rounded bg-[#182B46] text-[#42C7B5]">SIMULATED TELEMETRY</span>
            </div>
          </div>

          {/* Central Interactive Display Canvas */}
          <div className="min-h-[380px] rounded-2xl overflow-hidden border border-[#1E375A] bg-[#0B131E] p-4 sm:p-6">
            {/* View 1: Network Overview */}
            {activeTab === 'network' && (
              <div className="space-y-4">
                <SatelliteNetworkMap />
              </div>
            )}

            {/* View 2: Live Monitoring Indicators */}
            {activeTab === 'monitoring' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#748391]">Trunk Line Pressure</span>
                      <Gauge className="w-4 h-4 text-[#3289D6]" />
                    </div>
                    <div className="text-3xl font-mono font-bold text-white">4.2 <span className="text-base text-[#748391]">bar</span></div>
                    <p className="text-xs text-[#42C7B5] mt-1">±0.15 bar stability band</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#748391] mb-1">
                      <span>0.0 bar</span>
                      <span>Target: 4.0</span>
                      <span>8.0 bar</span>
                    </div>
                    <div className="w-full bg-[#101C2C] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#3289D6] h-full w-[52.5%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#748391]">Volumetric Flow Rate</span>
                      <Activity className="w-4 h-4 text-[#42C7B5]" />
                    </div>
                    <div className="text-3xl font-mono font-bold text-white">1,840 <span className="text-base text-[#748391]">m³/h</span></div>
                    <p className="text-xs text-[#748391] mt-1">Diurnal midday crest</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#748391] mb-1">
                      <span>500 m³/h</span>
                      <span>Capacity: 2,400</span>
                    </div>
                    <div className="w-full bg-[#101C2C] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#42C7B5] h-full w-[76.6%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#748391]">Reservoir Alpha Head</span>
                      <Layers className="w-4 h-4 text-[#3289D6]" />
                    </div>
                    <div className="text-3xl font-mono font-bold text-white">84.6% <span className="text-base text-[#748391]">vol</span></div>
                    <p className="text-xs text-[#3289D6] mt-1">Level: 32.4m static head</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-[#748391] mb-1">
                      <span>Min 30%</span>
                      <span>Overflow: 95%</span>
                    </div>
                    <div className="w-full bg-[#101C2C] h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#174D78] to-[#3289D6] h-full w-[84.6%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono uppercase text-[#748391]">Water Quality Telemetry</span>
                      <CheckCircle2 className="w-4 h-4 text-[#42C7B5]" />
                    </div>
                    <div className="text-3xl font-mono font-bold text-white">7.35 <span className="text-base text-[#748391]">pH</span></div>
                    <p className="text-xs text-[#748391] mt-1">Turbidity: 0.38 NTU (Nominal)</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#1E375A]/60 flex items-center justify-between text-[11px] text-[#748391]">
                    <span>Chlorine Residual</span>
                    <span className="font-mono text-[#42C7B5]">0.85 mg/L</span>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Anomaly Detection */}
            {activeTab === 'anomalies' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-white text-base font-['Manrope']">
                        High Priority: Minimum Night Flow Anomaly (Sector 4 DMA)
                      </h5>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-amber-400/20 text-amber-300 border border-amber-400/40">
                        Investigation Priority: High
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed">
                      Between 02:00 and 04:30 AM, baseline volumetric consumption remained 32% above the statistical 14-day rolling mean without recorded industrial schedule. Potential sub-surface joint breach or open hydrant.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-[#748391]">
                      <span>Sensor Node: <strong className="text-white">DMA-04-PRV</strong></span>
                      <span>Confidence Score: <strong className="text-[#42C7B5]">82%</strong></span>
                      <span>Acoustic Survey: <strong className="text-amber-300">Recommended</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#132238] border border-[#1E375A] flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#101C2C] text-[#3289D6] flex-shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-white text-base font-['Manrope']">
                        Advisory: Booster Pump 03 Vibration Deviation
                      </h5>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#174D78] text-[#42C7B5]">
                        Predictive Flag
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#748391] mt-1.5 leading-relaxed">
                      Transient micro-pulsations in suction pressure indicate potential air entrainment or early impeller cavitation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Operations Center */}
            {activeTab === 'operations' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A]">
                  <h5 className="font-bold text-white text-base font-['Manrope'] mb-3 flex items-center justify-between">
                    <span>Field Inspection Log</span>
                    <span className="text-xs font-mono text-[#42C7B5]">2 Dispatched</span>
                  </h5>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#101C2C] border border-[#1E375A] text-xs">
                      <div className="flex justify-between font-semibold text-white mb-1">
                        <span>WO-2026-089: Acoustic Verification</span>
                        <span className="text-amber-400 font-mono">In Progress</span>
                      </div>
                      <p className="text-[#748391]">Assigned to Crew 2 (Lekki Phase 1 Sector 4 conduit inspection)</p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#101C2C] border border-[#1E375A] text-xs">
                      <div className="flex justify-between font-semibold text-white mb-1">
                        <span>WO-2026-088: Valve Chamber 12 Reseal</span>
                        <span className="text-[#42C7B5] font-mono">Completed</span>
                      </div>
                      <p className="text-[#748391]">Joint gasket replacement verified. Pressure normalized to 4.2 bar.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#132238] p-5 rounded-xl border border-[#1E375A]">
                  <h5 className="font-bold text-white text-base font-['Manrope'] mb-3 flex items-center justify-between">
                    <span>Operational Governance & Audit</span>
                    <span className="text-xs font-mono text-[#3289D6]">Strict Compliance</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-[#94A3B8]">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#42C7B5]" />
                      <span>Every alert requires explicit technician sign-off prior to closure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#42C7B5]" />
                      <span>Telemetry timestamps synced with UTC atomic clock reference</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#42C7B5]" />
                      <span>SCADA integration operates in read-only passive monitoring mode</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Current Tab Live Stats Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currentTab.stats.map((stat) => (
              <div key={stat.label} className="bg-[#101C2C]/80 p-3 rounded-xl border border-[#1E375A]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#748391] block">
                  {stat.label}
                </span>
                <span className="text-lg font-mono font-bold text-white block mt-0.5">
                  {stat.value}
                </span>
                <span className="text-[10px] text-[#42C7B5] font-mono">
                  {stat.status}
                </span>
              </div>
            ))}
          </div>

          {/* Ethical Disclaimer banner */}
          <div className="mt-6 pt-4 border-t border-[#1E375A] flex flex-wrap items-center justify-between gap-3 text-xs text-[#748391]">
            <p>
              * Note: Illustrative operational data. Real-time telemetry monitoring requires physical telemetry instrumentation and compatible sensor integrations.
            </p>
            <div className="font-mono text-[11px] text-[#3289D6]">
              AQUORA SYSTEM V2.4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
