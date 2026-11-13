import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AquoraLogo from './common/AquoraLogo';
import { navigationLinks } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 90;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 w-full max-w-full flex justify-center pointer-events-none">
      <div className="max-w-6xl w-full pointer-events-auto">
        {/* The Entire Floating Glassmorphism Pill Navbar */}
        <div className="w-full bg-white/90 backdrop-blur-xl border border-sky-200/80 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_10px_35px_-5px_rgba(2,132,199,0.12),0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-between gap-4 transition-all">
          {/* Logo on the left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-lg flex-shrink-0"
            aria-label="Aquora Home"
          >
            <AquoraLogo
              className="h-6 sm:h-7"
              textClassName="text-xs sm:text-sm font-extrabold tracking-[0.14em]"
              subtitleClassName="text-[7px] sm:text-[8px] tracking-[0.2em]"
              isDark={false}
            />
          </a>

          {/* Desktop Navigation Links in the center (NOT in an inner pill) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#334155] hover:text-[#0284C7] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA Button on Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => {
                const formEl = document.querySelector('#pilot-access');
                if (formEl) {
                  formEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#2563EB] hover:opacity-95 shadow-sm hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] cursor-pointer whitespace-nowrap"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full bg-sky-50 border border-sky-200 text-[#0F172A] hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-[#0284C7] cursor-pointer transition-colors shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#0F172A]" />
              ) : (
                <Menu className="w-5 h-5 text-[#0F172A]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Floating Card */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 w-full rounded-2xl bg-white/95 backdrop-blur-2xl border border-sky-200/90 shadow-2xl p-4 sm:p-5 space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-sky-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const formEl = document.querySelector('#pilot-access');
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#2563EB] shadow-sm hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
