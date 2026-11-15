import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AquoraLogo from './common/AquoraLogo';
import { navigationLinks } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const sectionIds = navigationLinks.map(link => link.href.replace('#', ''));

    const handleScroll = () => {
      // If currently scrolling via a clicked link, prevent indicator from cycling through intermediate links
      if (isClickScrollingRef.current) return;

      // If user reached bottom of page, activate last link (FAQ)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // If at top in Hero, clear active link
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      const navOffset = 150;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset && rect.bottom > navOffset) {
            current = id;
            break;
          }
        }
      }

      if (!current) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navOffset) {
              current = sectionIds[i];
              break;
            }
          }
        }
      }

      setActiveSection(current);
    };

    // Unlock immediately if the user manually scrolls with mouse wheel or touch
    const handleUserIntervention = () => {
      if (isClickScrollingRef.current) {
        isClickScrollingRef.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    const handleScrollEnd = () => {
      if (isClickScrollingRef.current) {
        isClickScrollingRef.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });
    window.addEventListener('wheel', handleUserIntervention, { passive: true });
    window.addEventListener('touchmove', handleUserIntervention, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('wheel', handleUserIntervention);
      window.removeEventListener('touchmove', handleUserIntervention);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');

    // Immediately appear on the newly clicked section without cycling through intermediate links
    setActiveSection(targetId);
    isClickScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const target = document.querySelector(href);
    if (target) {
      const navHeight = 90;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Release lock after smooth scroll arrives at target
      scrollTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 900);
    } else {
      isClickScrollingRef.current = false;
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
              setActiveSection('');
              isClickScrollingRef.current = true;
              if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
              scrollTimeoutRef.current = setTimeout(() => {
                isClickScrollingRef.current = false;
              }, 900);
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

          {/* Desktop Navigation Links with Active State */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#0284C7] font-semibold bg-sky-100/90 shadow-2xs border border-sky-200/80'
                      : 'text-[#475569] font-medium hover:text-[#0284C7] hover:bg-sky-50/70 border border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10">
                    {link.name}
                  </span>
                </a>
              );
            })}
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
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      isActive
                        ? 'bg-sky-100/90 text-[#0284C7] font-semibold border border-sky-200/80'
                        : 'text-[#0F172A] hover:bg-sky-50 hover:text-[#0284C7] font-medium'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
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
