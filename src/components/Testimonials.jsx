import { Quote, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { testimonialsData } from '../data/content';
import kayodeWebp from '../assets/testimonials/kayode-balogun.webp';
import ngoziWebp from '../assets/testimonials/ngozi-adeleke.webp';
import ibrahimWebp from '../assets/testimonials/ibrahim-sanusi.webp';
import hadizaWebp from '../assets/testimonials/hadiza-mohammed.webp';

import kayodeJpg from '../assets/testimonials/kayode-balogun.jpg';
import ngoziJpg from '../assets/testimonials/ngozi-adeleke.jpg';
import ibrahimJpg from '../assets/testimonials/ibrahim-sanusi.jpg';
import hadizaJpg from '../assets/testimonials/hadiza-mohammed.jpg';

const testimonialWebpImages = {
  t1: kayodeWebp,
  t2: ngoziWebp,
  t3: ibrahimWebp,
  t4: hadizaWebp,
};

const testimonialJpgImages = {
  t1: kayodeJpg,
  t2: ngoziJpg,
  t3: ibrahimJpg,
  t4: hadizaJpg,
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F8FAFC] border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* Subtle ambient light glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85vw] max-w-[800px] h-96 bg-gradient-to-b from-[#BAE6FD]/30 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{testimonialsData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6 font-['Manrope']">
            {testimonialsData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {testimonialsData.description}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {testimonialsData.testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-white border border-sky-200/80 hover:border-sky-300 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_-6px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(2,132,199,0.12)] transition-all duration-300 w-full"
            >
              <div>
                {/* Card Top: Rating Stars + Impact Metric Badge */}
                <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#0369A1] bg-sky-50 border border-sky-200">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{item.impactMetric}</span>
                  </span>
                </div>

                {/* Quote Body */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-sky-200 absolute -top-3 -left-2 -z-0 opacity-60" />
                  <p className="relative z-10 text-sm sm:text-base text-[#334155] leading-relaxed font-normal italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author & Organization Info with Cultural Portrait Avatar */}
              <div className="pt-5 border-t border-sky-100 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-sky-200 bg-gradient-to-br from-sky-100 to-sky-50 shadow-sm">
                    {/* Initials fallback underneath */}
                    <div className="absolute inset-0 flex items-center justify-center text-sky-600 font-bold text-sm font-mono select-none">
                      {item.initials}
                    </div>

                    <picture className="relative z-1 w-full h-full block">
                      <source srcSet={testimonialWebpImages[item.id]} type="image/webp" />
                      <img
                        src={testimonialJpgImages[item.id] || item.image}
                        alt={item.author}
                        width="240"
                        height="240"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="w-full h-full object-cover object-top block"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = 'public';
                            e.currentTarget.src = item.image;
                          }
                        }}
                      />
                    </picture>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] font-['Manrope'] flex items-center gap-1.5 truncate">
                      <span className="truncate">{item.author}</span>
                      <CheckCircle className="w-4 h-4 text-[#0284C7] fill-sky-50 flex-shrink-0" />
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5 font-medium truncate">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#0284C7] font-semibold mt-0.5 truncate">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-slate-100 text-[#475569] border border-slate-200 font-semibold flex-shrink-0 self-start sm:self-center">
                  {item.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

