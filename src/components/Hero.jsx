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
    .from('.hero-supporting', {
      opacity: 0,
      duration: 0.8
    }, '-=0.4')
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
      className="relative w-full max-w-full min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#154674] via-[#2563EB]/15 to-white flex flex-col justify-center"
      aria-label="Aquora Platform Introduction"
    >
      {/* Cinematic Ambient Atmosphere: Depth radial glows & technical grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[400px] bg-gradient-to-b from-sky-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Primary Headline - Big on mobile, bold tracking */}
        <h1 className="hero-headline text-[2.65rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-5 break-words">
          Every Drop.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-teal-200">
            Better Understood.
          </span>
        </h1>

        {/* Subheadline - Reduced size, crisp contrast */}
        <p className="hero-subheadline text-xs sm:text-sm md:text-base text-sky-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-7">
          {heroContent.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#pilot-access"
            onClick={scrollToPilot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#154674] bg-white hover:bg-sky-50 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{heroContent.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </a>

          <a
            href="#platform"
            onClick={scrollToPlatform}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md shadow-sm transition-all duration-200"
          >
            <Compass className="w-4 h-4 text-sky-200" />
            <span>{heroContent.ctaSecondary}</span>
          </a>
        </div>

        {/* Supporting Triad Statement - Reduced size */}
        <p className="hero-supporting text-[10px] sm:text-xs font-mono font-medium tracking-wider text-sky-100/80 uppercase mb-8 sm:mb-12">
          {heroContent.supportingText}
        </p>

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
