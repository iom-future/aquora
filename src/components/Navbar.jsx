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
          ? 'bg-[#101C2C]/90 backdrop-blur-md border-b border-[#1E375A] py-3 shadow-lg shadow-[#0B131E]/50'
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
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42C7B5] rounded-lg flex-shrink-0"
            aria-label="Aquora Home"
          >
            <AquoraLogo className="h-8 sm:h-9" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#132238]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#1E375A]/60">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-[#748391] hover:text-[#F3F8FA] hover:bg-[#182B46]/60 rounded-full transition-colors whitespace-nowrap"
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
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#174D78] via-[#3289D6] to-[#42C7B5] hover:opacity-95 shadow-md shadow-[#3289D6]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42C7B5] cursor-pointer whitespace-nowrap"
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
              className="p-2 sm:p-2.5 rounded-xl bg-[#132238] border border-[#1E375A] text-[#748391] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#42C7B5] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101C2C]/98 backdrop-blur-xl border-b border-[#1E375A] px-5 pt-3 pb-6 space-y-4 animate-fade-in shadow-2xl max-w-full">
          <div className="flex flex-col space-y-2 pt-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-[#F3F8FA] hover:bg-[#182B46] hover:text-[#42C7B5] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1E375A]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const formEl = document.querySelector('#pilot-access');
                if (formEl) {
                  formEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#174D78] via-[#3289D6] to-[#42C7B5] shadow-lg shadow-[#3289D6]/25 cursor-pointer"
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
