import { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { faqData } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Operational FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Aquora's platform architecture, sensor requirements, telemetry scopes, and pilot deployments.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative w-full">
            <Search className="w-4 h-4 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platform questions (e.g. leaks, IoT, sensors)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#F8FAFC] border border-sky-200 text-xs sm:text-sm text-[#0F172A] placeholder-[#64748B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 w-full">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#64748B]">
              No questions matching "{searchQuery}". Try searching for "sensors" or "pilot".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#F8FAFC] hover:bg-sky-50/50 border border-sky-200/80 overflow-hidden transition-all duration-200 w-full shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-sky-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base md:text-lg font-bold font-['Manrope'] text-[#0F172A]">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-white text-[#0284C7] border border-sky-200 transition-transform duration-300 flex-shrink-0 shadow-sm ${
                        isOpen ? 'rotate-180 bg-[#0284C7] text-white border-[#0284C7]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed border-t border-sky-100 bg-white/70 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Sub-note */}
        <div className="mt-12 text-center text-xs text-[#64748B]">
          Have a specific technical question about custom SCADA or AMR protocols?{' '}
          <a
            href="#pilot-access"
            className="text-[#0284C7] underline font-semibold hover:text-[#0369A1] transition-colors"
          >
            Connect with our engineering team
          </a>
        </div>
      </div>
    </section>
  );
}
