import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { finalCtaContent } from '../data/content';

export default function FinalCTA() {
  const scrollToPilot = (e) => {
    e.preventDefault();
    const el = document.querySelector('#pilot-access');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#101C2C] border-t border-[#1E375A]/60 w-full max-w-full overflow-hidden">
      {/* Background Radiance & Contours */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[850px] h-[550px] bg-gradient-to-r from-[#174D78]/30 via-[#3289D6]/20 to-[#42C7B5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE INFRASTRUCTURE INTELLIGENCE ERA</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-['Manrope']">
          Every Drop Matters.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42C7B5] via-[#3289D6] to-[#F3F8FA]">
            Every Decision Counts.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10">
          {finalCtaContent.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#pilot-access"
            onClick={scrollToPilot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#174D78] via-[#3289D6] to-[#42C7B5] hover:opacity-95 shadow-xl shadow-[#3289D6]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{finalCtaContent.ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#platform"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#platform')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#F3F8FA] bg-[#132238] hover:bg-[#182B46] border border-[#1E375A] transition-all"
          >
            <Compass className="w-4 h-4 text-[#42C7B5]" />
            <span>Review Platform Capabilities</span>
          </a>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#748391] tracking-wide uppercase">
          {finalCtaContent.supportingLine}
        </p>
      </div>
    </section>
  );
}
