export function HeroRuntimeVisual() {
  return (
    <div
      className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-slate-950/40 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl"
      aria-hidden
    >
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full text-violet-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 40 120 Q 100 40 180 100 T 320 80"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="2"
          className="opacity-80"
          filter="url(#glow)"
        />
        <path
          d="M 40 140 L 160 140 L 200 180 L 360 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="text-violet-500/50"
        />
        <path
          d="M 200 40 L 260 100 L 220 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-emerald-400/80"
        />

        <circle cx="40" cy="120" r="8" className="fill-violet-500 opacity-90" />
        <circle
          cx="180"
          cy="100"
          r="6"
          className="fill-emerald-400 opacity-90 animate-pulse"
        />
        <circle cx="320" cy="80" r="7" className="fill-violet-500/80" />
        <circle cx="200" cy="180" r="5" className="fill-blue-400/70" />
        <circle cx="360" cy="100" r="6" className="fill-emerald-400/85" />

        <rect
          x="120"
          y="52"
          width="56"
          height="28"
          rx="6"
          className="fill-white/5 stroke-white/10"
          strokeWidth="1"
        />
        <text
          x="148"
          y="70"
          textAnchor="middle"
          className="fill-slate-400 text-xs font-sans"
        >
          ctx
        </text>
      </svg>
    </div>
  )
}
