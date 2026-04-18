export function HeroRuntimeVisual() {
  return (
    <figure
      className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 shadow-xl shadow-slate-950/50 ring-1 ring-inset ring-white/5 backdrop-blur-xl"
      aria-labelledby="hero-runtime-caption"
    >
      <figcaption
        id="hero-runtime-caption"
        className="border-b border-white/5 px-4 py-2.5 text-center text-[11px] font-medium tracking-wide text-slate-500"
      >
        How your code runs — stack, engine, heap, and async work
      </figcaption>
      <div className="aspect-5/3 w-full min-h-[200px] p-3 sm:p-4">
        <svg
          viewBox="0 0 440 220"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
            <filter id="heroSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Zone backgrounds */}
          <rect
            x="8"
            y="28"
            width="118"
            height="168"
            rx="8"
            className="fill-violet-500/6 stroke-violet-500/20"
            strokeWidth="1"
          />
          <rect
            x="156"
            y="28"
            width="130"
            height="168"
            rx="8"
            className="fill-emerald-500/6 stroke-emerald-500/20"
            strokeWidth="1"
          />
          <rect
            x="306"
            y="28"
            width="126"
            height="168"
            rx="8"
            className="fill-sky-500/6 stroke-sky-500/20"
            strokeWidth="1"
          />

          {/* Column titles */}
          <text
            x="67"
            y="48"
            textAnchor="middle"
            fill="currentColor"
            className="fill-slate-500 text-[11px] font-semibold tracking-tight"
          >
            Call stack
          </text>
          <text
            x="221"
            y="48"
            textAnchor="middle"
            fill="currentColor"
            className="fill-slate-500 text-[11px] font-semibold tracking-tight"
          >
            JS engine
          </text>
          <text
            x="369"
            y="48"
            textAnchor="middle"
            fill="currentColor"
            className="fill-slate-500 text-[11px] font-semibold tracking-tight"
          >
            Heap
          </text>

          {/* Call stack frames */}
          <g filter="url(#heroSoftGlow)">
            <rect
              x="22"
              y="62"
              width="90"
              height="26"
              rx="4"
              className="fill-white/6 stroke-white/12"
              strokeWidth="1"
            />
            <text x="38" y="79" fill="currentColor" className="fill-slate-500 font-mono text-[10px]">
              anonymous
            </text>
            <rect
              x="22"
              y="94"
              width="90"
              height="28"
              rx="4"
              className="fill-emerald-500/15 stroke-emerald-400/40"
              strokeWidth="1.2"
            />
            <text x="38" y="112" fill="currentColor" className="fill-emerald-300 font-mono text-[10px]">
              main()
            </text>
            <text x="72" y="112" fill="currentColor" className="fill-emerald-500/80 text-[8px]">
              ← running
            </text>
            <rect
              x="22"
              y="128"
              width="90"
              height="24"
              rx="4"
              className="fill-white/4 stroke-white/10"
              strokeWidth="1"
            />
            <text x="38" y="143" fill="currentColor" className="fill-slate-600 font-mono text-[9px]">
              …
            </text>
          </g>

          {/* Engine: loop + micro cue */}
          <g>
            <circle
              cx="221"
              cy="118"
              r="38"
              fill="none"
              stroke="url(#heroFlow)"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              className="motion-safe:animate-[spin_12s_linear_infinite] motion-reduce:animate-none"
            />
            <circle cx="221" cy="118" r="22" className="fill-violet-500/10 stroke-violet-400/30" strokeWidth="1" />
            <text
              x="221"
              y="114"
              textAnchor="middle"
              fill="currentColor"
              className="fill-slate-400 text-[9px] font-medium"
            >
              event
            </text>
            <text
              x="221"
              y="126"
              textAnchor="middle"
              fill="currentColor"
              className="fill-slate-500 text-[9px] font-medium"
            >
              loop
            </text>
            <text
              x="221"
              y="168"
              textAnchor="middle"
              fill="currentColor"
              className="fill-slate-600 text-[8px]"
            >
              runs one task → drains microtasks
            </text>
          </g>

          {/* Heap objects */}
          <g>
            <rect
              x="320"
              y="70"
              width="72"
              height="36"
              rx="5"
              className="fill-sky-500/10 stroke-sky-400/25"
              strokeWidth="1"
            />
            <text x="332" y="88" fill="currentColor" className="fill-sky-300/90 font-mono text-[9px]">
              {"{ }"}
            </text>
            <text x="332" y="100" fill="currentColor" className="fill-slate-600 text-[8px]">
              object
            </text>
            <path
              d="M 356 118 Q 356 138 356 148"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="text-sky-500/40"
            />
            <rect
              x="320"
              y="152"
              width="72"
              height="32"
              rx="5"
              className="fill-sky-500/8 stroke-sky-400/20"
              strokeWidth="1"
            />
            <text x="332" y="172" fill="currentColor" className="fill-slate-500 font-mono text-[9px]">
              arr, fn, …
            </text>
          </g>

          {/* Flow arrows: stack ↔ engine ↔ heap */}
          <path
            d="M 130 105 L 148 105"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-violet-400/50"
          />
          <polygon points="148,105 142,102 142,108" className="fill-violet-400/50" />
          <path
            d="M 286 105 L 304 105"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-sky-400/45"
          />
          <polygon points="304,105 298,102 298,108" className="fill-sky-400/45" />

          {/* Macrotask queue (async) */}
          <text x="220" y="198" textAnchor="middle" fill="currentColor" className="fill-slate-500 text-[10px]">
            macrotask queue (timers, I/O, …)
          </text>
          <g transform="translate(0 2)">
            <rect
              x="108"
              y="204"
              width="22"
              height="12"
              rx="2"
              className="fill-amber-500/20 stroke-amber-400/35"
              strokeWidth="1"
            />
            <rect
              x="134"
              y="204"
              width="22"
              height="12"
              rx="2"
              className="fill-amber-500/15 stroke-amber-400/30"
              strokeWidth="1"
            />
            <rect
              x="160"
              y="204"
              width="22"
              height="12"
              rx="2"
              className="fill-amber-500/12 stroke-amber-400/25"
              strokeWidth="1"
            />
            <path
              d="M 188 210 H 262"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              className="text-amber-500/40"
            />
            <polygon points="262,210 256,207 256,213" className="fill-amber-500/45" />
          </g>
        </svg>
      </div>
    </figure>
  )
}
