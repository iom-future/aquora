import { teamData } from '../data/content';
import babatundeImg from '../assets/team/babatunde-adeleke.jpg';
import chiomaImg from '../assets/team/chioma-okonkwo.jpg';
import olumideImg from '../assets/team/olumide-fashola.jpg';
import aminaImg from '../assets/team/amina-bello.jpg';
import chukwumaImg from '../assets/team/chukwuma-eze.jpg';
import folashadeImg from '../assets/team/folashade-adeyemi.jpg';

const teamImages = {
  babatunde: babatundeImg,
  chioma: chiomaImg,
  olumide: olumideImg,
  amina: aminaImg,
  chukwuma: chukwumaImg,
  folashade: folashadeImg,
};

export default function Team() {
  return (
    <section id="about" className="relative w-full max-w-full py-24 sm:py-32 bg-white border-t border-sky-100 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-96 bg-gradient-to-b from-[#E0F2FE]/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{teamData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6 font-['Manrope']">
            {teamData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            {teamData.description}
          </p>
        </div>

        {/* 6-Member Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {teamData.members.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl bg-[#F8FAFC] hover:bg-white border border-sky-200/80 hover:border-sky-300 p-6 flex flex-col justify-between shadow-[0_4px_20px_-6px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(2,132,199,0.12)] transition-all duration-300 w-full overflow-hidden"
            >
              <div>
                {/* Member Portrait Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-sky-200 shadow-inner group-hover:scale-[1.01] transition-transform">
                  <img
                    src={teamImages[member.id] || member.image}
                    alt={member.name}
                    width="1024"
                    height="1024"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 block"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.fallback) {
                        e.currentTarget.dataset.fallback = 'public';
                        e.currentTarget.src = member.image;
                      }
                    }}
                  />

                  {/* Credentials Badge Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md">
                      {member.credentials}
                    </span>
                  </div>
                </div>

                {/* Member Name & Role */}
                <div className="mb-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold font-['Manrope'] text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {member.name}
                    </h3>

                    {/* LinkedIn Link */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-[#0284C7] hover:bg-sky-50 transition-colors flex-shrink-0"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#0284C7] mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Focus Area Pill */}
                <div className="mb-3.5">
                  <span className="inline-block text-[10px] font-mono font-medium text-[#475569] px-2.5 py-1 rounded-md bg-white border border-sky-200/90 shadow-2xs">
                    {member.focus}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-sky-100 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                <span>Nigeria Operations</span>
                <span className="text-[#0284C7] font-semibold">Active Leadership</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

