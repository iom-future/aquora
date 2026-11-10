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

    tl.from('.hero-eyebrow', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2
    })
    .from('.hero-headline', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.5')
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
      className="relative min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#101C2C] flex flex-col justify-center"
      aria-label="Aquora Platform Introduction"
    >
      {/* Cinematic Ambient Atmosphere: Depth radial glows & technical grid */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-b from-[#174D78]/25 via-[#3289D6]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#42C7B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132238]/90 border border-[#3289D6]/30 text-xs sm:text-sm font-mono tracking-widest text-[#42C7B5] uppercase mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#42C7B5] animate-ping" />
          <span>{heroContent.eyebrow}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="hero-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          Every Drop.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42C7B5] via-[#3289D6] to-[#F3F8FA]">
            Better Understood.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline text-lg sm:text-xl lg:text-2xl text-[#94A3B8] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          {heroContent.subheadline}
        </p>

        {/* Action CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#pilot-access"
            onClick={scrollToPilot}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#174D78] via-[#3289D6] to-[#42C7B5] hover:opacity-95 shadow-lg shadow-[#3289D6]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{heroContent.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#platform"
            onClick={scrollToPlatform}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-[#F3F8FA] bg-[#132238] hover:bg-[#182B46] border border-[#1E375A] transition-all duration-200 hover:border-[#3289D6]/50"
          >
            <Compass className="w-4 h-4 text-[#42C7B5]" />
            <span>{heroContent.ctaSecondary}</span>
          </a>
        </div>

        {/* Supporting Triad Statement */}
        <p className="hero-supporting text-xs sm:text-sm font-medium tracking-wide text-[#748391] uppercase mb-12 sm:mb-16">
          {heroContent.supportingText}
        </p>

        {/* Realistic Interactive Geospatial Infrastructure Dashboard Mockup */}
        <div className="hero-mockup max-w-6xl mx-auto transition-transform duration-500">
          <HeroDashboardMockup />
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-12 flex justify-center">
        <a
          href="#the-challenge"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#the-challenge')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs text-[#748391] hover:text-[#42C7B5] transition-colors"
          aria-label="Scroll to challenge section"
        >
          <span>Discover the Challenge</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
