import { useRef } from 'react';
import { ArrowRight, ChevronDown, Compass } from 'lucide-react';
import { heroContent } from '../data/content';
import HeroDashboardMockup from './visual/HeroDashboardMockup';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-headline', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.1
    })
    .from('.hero-subheadline', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, '-=0.6')
    .from('.hero-ctas', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, '-=0.5')
    .from('.hero-mockup', {
      opacity: 0,
      y: 40,
      duration: 1.1
    }, '-=0.6');
  }, { scope: heroRef });

  const scrollToPilot = (e) => {
    e.preventDefault();
    const el = document.querySelector('#pilot-access');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlatform = (e) => {
    e.preventDefault();
    const el = document.querySelector('#platform');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full max-w-full min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0284C7] via-[#BAE6FD]/30 to-[#F8FAFC] flex flex-col justify-center"
      aria-label="Aquora Platform Introduction"
    >
      {/* Cinematic Ambient Atmosphere: Depth radial glows & technical grid */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[380px] bg-gradient-to-b from-white/20 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Primary Headline - Big on mobile, decorative serif for Better Understood */}
        <h1 className="hero-headline text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-5 break-words">
          Every Drop.{' '}
          <span className="font-['Playfair_Display',Georgia,serif] italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-white to-sky-100 drop-shadow-sm">
            Better Understood.
          </span>
        </h1>

        {/* Subheadline - Reduced size, crisp contrast */}
        <p className="hero-subheadline text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto font-normal leading-relaxed mb-7">
          {heroContent.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#pilot-access"
            onClick={scrollToPilot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#2563EB] shadow-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{heroContent.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#platform"
            onClick={scrollToPlatform}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#0284C7] bg-white border border-sky-200/80 hover:border-sky-300 hover:bg-sky-50/70 shadow-sm hover:shadow-lg hover:shadow-sky-500/15 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#0284C7]" />
            <span>{heroContent.ctaSecondary}</span>
          </a>
        </div>

        {/* Realistic Interactive Geospatial Infrastructure Dashboard Mockup */}
        <div className="hero-mockup max-w-6xl mx-auto w-full">
          <HeroDashboardMockup />
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href="#the-challenge"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#the-challenge')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0284C7] transition-colors"
          aria-label="Scroll to challenge section"
        >
          <span>Discover the Challenge</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
