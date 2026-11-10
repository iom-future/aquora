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
    <section id="faq" className="relative py-24 sm:py-32 bg-[#0B131E] border-t border-[#1E375A]/60 scroll-mt-20">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132238] border border-[#1E375A] text-xs font-mono tracking-widest text-[#42C7B5] uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Operational FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Aquora's platform architecture, sensor requirements, telemetry scopes, and pilot deployments.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#748391] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platform questions (e.g. leaks, IoT, sensors)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#101C2C] border border-[#1E375A] text-xs sm:text-sm text-white placeholder-[#748391] focus:outline-none focus:ring-2 focus:ring-[#3289D6] transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#748391]">
              No questions matching "{searchQuery}". Try searching for "sensors" or "pilot".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#132238]/60 border border-[#1E375A] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#182B46]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42C7B5]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold font-['Manrope'] text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-[#101C2C] text-[#42C7B5] border border-[#1E375A] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#174D78] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#1E375A]/50 bg-[#101C2C]/30 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Sub-note */}
        <div className="mt-12 text-center text-xs text-[#748391]">
          Have a specific technical question about custom SCADA or AMR protocols?{' '}
          <a
            href="#pilot-access"
            className="text-[#42C7B5] underline hover:text-white transition-colors"
          >
            Connect with our engineering team
          </a>
        </div>
      </div>
    </section>
  );
}

