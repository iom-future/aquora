import { useState } from 'react';
import { 
  Activity, 
  AlertCircle, 
  ArrowUpRight, 
  Droplets, 
  Gauge, 
  ShieldCheck 
} from 'lucide-react';
import SatelliteNetworkMap from './SatelliteNetworkMap';

export default function HeroDashboardMockup() {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="relative w-full max-w-full rounded-2xl bg-white/95 p-3 sm:p-5 text-left border border-sky-200/90 overflow-hidden shadow-[0_20px_50px_-12px_rgba(2,132,199,0.14)]">
      {/* Top Header of the Mockup Interface */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-sky-100 w-full max-w-full">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200">
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#0F172A] tracking-wide">AQUORA INTELLIGENCE</span>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-[#64748B] hidden sm:inline">
            ZONE: WEST-AFRICA-METRO-01
          </span>
        </div>

        {/* Views switcher inside dashboard */}
        <div className="flex items-center gap-1 bg-sky-50/80 p-1 rounded-lg border border-sky-200/80 text-xs max-w-full overflow-x-auto scrollbar-none w-full sm:w-auto">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-2.5 sm:px-3 py-1 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
              activeView === 'overview'
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'text-[#475569] hover:text-[#0284C7]'
            }`}
          >
            Network Overview
          </button>
          <button
            onClick={() => setActiveView('monitoring')}
            className={`px-2.5 sm:px-3 py-1 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
              activeView === 'monitoring'
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'text-[#475569] hover:text-[#0284C7]'
            }`}
          >
            Infrastructure Health
          </button>
          <button
            onClick={() => setActiveView('telemetry')}
            className={`px-2.5 sm:px-3 py-1 rounded-md font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
              activeView === 'telemetry'
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'text-[#475569] hover:text-[#0284C7]'
            }`}
          >
            Operational Indicators
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#0D9488] flex-shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Telemetric Integrity: 99.8%</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start w-full max-w-full">
        {/* Left Column: Network Overview Stats */}
        <div className="lg:col-span-3 space-y-3 w-full max-w-full">
          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Network Status</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-50 text-[#0D9488] border border-teal-200">
                Synchronized
              </span>
            </div>
            <div className="text-xl font-bold font-['Manrope'] text-[#0F172A]">348.5 km</div>
            <p className="text-[11px] text-[#64748B] mt-0.5">Monitored pipeline infrastructure</p>
          </div>

          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">Distribution Overview</span>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#334155]">Pumping Stations</span>
                <span className="font-mono text-[#0D9488] font-semibold">14 Online</span>
              </div>
              <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0D9488] h-full w-[94%]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#334155]">Storage Reservoirs</span>
                <span className="font-mono text-[#0284C7] font-semibold">8 Active</span>
              </div>
              <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0284C7] h-full w-[82%]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#334155]">Telemetry Gateways</span>
                <span className="font-mono text-[#0D9488] font-semibold">142 Streaming</span>
              </div>
              <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0D9488] h-full w-[99%]" />
              </div>
            </div>
          </div>

          {/* Operational Alerts Box */}
          <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-amber-700">
                <AlertCircle className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">Operational Alerts</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300/60">
                1 Flagged
              </span>
            </div>
            <div className="text-xs font-medium text-[#0F172A] mb-1">
              Sector 4 Feeder (DMA-04)
            </div>
            <p className="text-[11px] text-[#78350F] leading-snug">
              Unusual night-flow rate deviation (+32% vs baseline). Suggested acoustic survey.
            </p>
          </div>
        </div>

        {/* Center Visual: The Interactive Map */}
        <div className="lg:col-span-6 space-y-3 w-full max-w-full overflow-hidden">
          <SatelliteNetworkMap />
          
          <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#F8FAFC] border border-sky-100 text-[11px] w-full max-w-full">
            <span className="text-[#64748B] truncate">
              Hydraulic Model: <strong className="text-[#0F172A]">EPANET Core</strong>
            </span>
            <span className="font-mono text-[#0284C7]">
              Packet latency: 42ms
            </span>
            <span className="text-[#0D9488]">
              AI Anomaly: Active
            </span>
          </div>
        </div>

        {/* Right Column: Operational Indicators */}
        <div className="lg:col-span-3 space-y-3 w-full max-w-full">
          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">System Flow Rate</span>
              <Activity className="w-3.5 h-3.5 text-[#0D9488]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-[#0F172A]">1,840</span>
              <span className="text-xs text-[#64748B]">m³/h</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#0D9488] mt-1">
              <ArrowUpRight className="w-3 h-3" />
              <span>Within nominal diurnal curve</span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Avg Water Pressure</span>
              <Gauge className="w-3.5 h-3.5 text-[#0284C7]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-[#0F172A]">4.2</span>
              <span className="text-xs text-[#64748B]">bar</span>
            </div>
            <p className="text-[11px] text-[#64748B] mt-1">
              Head pressure stabilized via PRV 02
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Main Reservoir Level</span>
              <Droplets className="w-3.5 h-3.5 text-[#0284C7]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold font-mono text-[#0F172A]">84.6%</span>
              <span className="text-xs text-[#64748B]">capacity</span>
            </div>
            <div className="w-full bg-sky-100 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-[#0284C7] h-full w-[84.6%]" />
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-sky-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Water Quality Telemetry</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-100 text-[#0369A1] font-medium">Where instrumented</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-1 border-t border-sky-100 text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">pH Level</span>
                <span className="font-mono font-semibold text-[#0F172A]">7.35 pH</span>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">Turbidity</span>
                <span className="font-mono font-semibold text-[#0D9488]">0.38 NTU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Illustrative Notice Footer */}
      <div className="mt-4 pt-3 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#64748B] w-full max-w-full">
        <div className="flex items-start sm:items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 sm:mt-0 flex-shrink-0" />
          <span className="font-mono text-amber-800 font-medium">NOTICE: Illustrative dashboard visualization.</span>
          <span className="hidden md:inline">Physical telemetry requires verified hardware integration.</span>
        </div>
        <div className="font-mono text-[10px] text-[#64748B] flex-shrink-0">
          SYSTEM MODEL: V2.4-SIM
        </div>
      </div>
    </div>
  );
}
