import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AquoraLogo from './common/AquoraLogo';
import { navigationLinks } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-sky-100 py-3 shadow-md shadow-sky-900/5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-lg flex-shrink-0"
            aria-label="Aquora Home"
          >
            <AquoraLogo className="h-8 sm:h-9" isDark={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center space-x-1 xl:space-x-2 backdrop-blur-md px-4 py-1.5 rounded-full transition-all ${
            isScrolled
              ? 'bg-white/90 border border-sky-200/80 shadow-sm'
              : 'bg-white/15 border border-white/20'
          }`}>
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  isScrolled
                    ? 'text-[#475569] hover:text-[#0284C7] hover:bg-sky-50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
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
              className={`relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0D9488] text-white shadow-md shadow-[#0284C7]/20 hover:opacity-95'
                  : 'bg-white text-[#154E85] shadow-lg shadow-black/15 hover:bg-sky-50'
              }`}
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#0284C7] cursor-pointer shadow-sm ${
                isScrolled
                  ? 'bg-white border-sky-200 text-[#0F172A] hover:bg-sky-50'
                  : 'bg-white/15 border-white/25 text-white hover:bg-white/25'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-sky-200 px-5 pt-3 pb-6 space-y-4 animate-fade-in shadow-xl max-w-full">
          <div className="flex flex-col space-y-2 pt-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-[#0F172A] hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-sky-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const formEl = document.querySelector('#pilot-access');
                if (formEl) {
                  formEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0D9488] shadow-lg shadow-[#0284C7]/25 cursor-pointer"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
