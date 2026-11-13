export default function AquoraLogo({ className = "h-8", showText = true, textClassName = "text-xl", isDark = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Infrastructure & Flow Symbol */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square flex-shrink-0"
        aria-label="Aquora Logo Symbol"
      >
        <defs>
          <linearGradient id="aquora-flow-1" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D9488" />
            <stop offset="0.55" stopColor="#0284C7" />
            <stop offset="1" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="aquora-flow-2" x1="40" y1="8" x2="8" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" />
            <stop offset="1" stopColor="#0D9488" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#0284C7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Hexagonal Grid Frame / Sensor Perimeter */}
        <polygon
          points="22,3 38.4,12.5 38.4,31.5 22,41 5.6,31.5 5.6,12.5"
          stroke="#BAE6FD"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          fill="none"
          opacity="0.9"
        />

        {/* Primary Intersecting Flow Ribbons (Water & Infrastructure) */}
        <path
          d="M10 22 C14 14, 22 14, 22 22 C22 30, 30 30, 34 22"
          stroke="url(#aquora-flow-1)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6 L22 38"
          stroke="url(#aquora-flow-2)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Diagonal Conduit Vectors */}
        <line x1="12" y1="14" x2="32" y2="30" stroke="#0284C7" strokeWidth="1.6" opacity="0.3" />
        <line x1="32" y1="14" x2="12" y2="30" stroke="#0D9488" strokeWidth="1.6" opacity="0.3" />

        {/* Intelligence Telemetry Nodes */}
        <circle cx="22" cy="22" r="3.8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.4" />
        <circle cx="22" cy="22" r="1.6" fill="#0D9488" />
        
        <circle cx="22" cy="6" r="2.2" fill="#0284C7" />
        <circle cx="22" cy="38" r="2.2" fill="#0369A1" />
        <circle cx="10" cy="22" r="2.2" fill="#0D9488" />
        <circle cx="34" cy="22" r="2.2" fill="#0284C7" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-['Manrope'] font-extrabold tracking-[0.14em] uppercase leading-none ${isDark ? 'text-white' : 'text-[#0F172A]'} ${textClassName}`}>
            AQUORA
          </span>
          <span className={`text-[9px] tracking-[0.24em] uppercase font-semibold mt-1 ${isDark ? 'text-sky-200' : 'text-[#0284C7]'}`}>
            Water Intelligence
          </span>
        </div>
      )}
    </div>
  );
}
