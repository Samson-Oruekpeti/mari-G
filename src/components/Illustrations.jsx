// A small family of warm, hand-drawn line illustrations.
// They share one stroke weight and a two-colour fill rule (ink line + one
// accent) so the whole site reads as a single illustrated hand, the way a
// café's chalkboard art or to-go cup sleeve would.

export function MarigoldMark({ className = "w-8 h-8", color = "#E0A93A" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <g fill={color}>
        <circle cx="32" cy="32" r="7" />
        <ellipse cx="32" cy="16" rx="6" ry="9" />
        <ellipse cx="32" cy="48" rx="6" ry="9" />
        <ellipse cx="16" cy="32" rx="9" ry="6" />
        <ellipse cx="48" cy="32" rx="9" ry="6" />
        <ellipse cx="20.5" cy="20.5" rx="6" ry="9" transform="rotate(-45 20.5 20.5)" />
        <ellipse cx="43.5" cy="20.5" rx="6" ry="9" transform="rotate(45 43.5 20.5)" />
        <ellipse cx="20.5" cy="43.5" rx="6" ry="9" transform="rotate(45 20.5 43.5)" />
        <ellipse cx="43.5" cy="43.5" rx="6" ry="9" transform="rotate(-45 43.5 43.5)" />
      </g>
      <circle cx="32" cy="32" r="5" fill="#2B2017" />
    </svg>
  );
}

// Used in place of generic bullets/numbers — three small marigold heads,
// because the menu and pillars are not a sequence, just a gathering.
export function MarigoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-moss/40" />
      <MarigoldMark className="w-5 h-5" />
      <span className="h-px w-10 bg-moss/40" />
    </div>
  );
}

export function CoffeeCupIllustration({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 360 360" className={className} fill="none">
      {/* steam */}
      <path d="M150 70c-10 14 10 18 0 32s-10 18 0 32" stroke="#3A2A1F" strokeWidth="4" strokeLinecap="round" />
      <path d="M186 60c-10 14 10 18 0 32s-10 18 0 32" stroke="#3A2A1F" strokeWidth="4" strokeLinecap="round" />
      <path d="M222 70c-10 14 10 18 0 32s-10 18 0 32" stroke="#3A2A1F" strokeWidth="4" strokeLinecap="round" />
      {/* saucer */}
      <ellipse cx="180" cy="300" rx="120" ry="16" fill="#E0A93A" opacity="0.18" />
      <ellipse cx="180" cy="296" rx="108" ry="13" stroke="#3A2A1F" strokeWidth="4" fill="#F4ECDC" />
      {/* cup body */}
      <path d="M96 168h168l-14 96a26 26 0 0 1-26 22H136a26 26 0 0 1-26-22l-14-96Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="5" strokeLinejoin="round" />
      {/* coffee surface */}
      <path d="M104 168h152l-3 20H107l-3-20Z" fill="#3A2A1F" />
      {/* handle */}
      <path d="M264 188c30-2 46 16 44 38s-24 34-50 30" stroke="#3A2A1F" strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* rim shading */}
      <path d="M96 168h168" stroke="#3A2A1F" strokeWidth="5" />
    </svg>
  );
}

export function CroissantIllustration({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M6 40c4-18 20-30 38-26 7 1.5 11 6 9 11-1 3-4 4-7 3 3 3 4 7 1 10-2 2-5 2-7 0 1 4-1 7-5 7-3 0-5-2-6-5-2 3-6 4-9 2-2-1-3-3-3-5-3 2-7 1-9-2-2-2-2-5 0-7-3 1-6 0-7-3 0 0 0-1 0-1Z"
        fill="#E0A93A"
        stroke="#3A2A1F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M14 36c8-2 14-8 18-16M24 42c6-3 10-8 13-14M34 46c5-2 8-6 10-11" stroke="#3A2A1F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlantIllustration({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M22 44h20l-3 14H25l-3-14Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 44V20" stroke="#3A2A1F" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 26c-4-10-16-12-20-6 6 8 14 8 20 6Z" fill="#6B7858" stroke="#3A2A1F" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 32c4-12 18-12 22-4-7 7-16 6-22 4Z" fill="#6B7858" stroke="#3A2A1F" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 20c-2-8-10-10-13-6 4 6 9 7 13 6Z" fill="#6B7858" stroke="#3A2A1F" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function MugIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="14" y="22" width="30" height="26" rx="4" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="3" />
      <path d="M44 28c8 0 12 4 12 9s-4 9-12 9" stroke="#3A2A1F" strokeWidth="3" fill="none" />
      <path d="M19 22c0-6 3-8 3-8M29 22c0-6 3-8 3-8M39 22c0-6-3-8-3-8" stroke="#3A2A1F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BowlIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M10 30h44a22 18 0 0 1-44 0Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="32" cy="30" rx="22" ry="6" fill="#F4ECDC" stroke="#3A2A1F" strokeWidth="3" />
      <circle cx="26" cy="29" r="2" fill="#3A2A1F" />
      <circle cx="34" cy="27" r="2" fill="#3A2A1F" />
      <circle cx="40" cy="30" r="2" fill="#3A2A1F" />
    </svg>
  );
}

export function SandwichIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M8 38 32 16l24 22Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="3" strokeLinejoin="round" />
      <rect x="8" y="38" width="48" height="8" rx="2" fill="#6B7858" stroke="#3A2A1F" strokeWidth="3" />
      <path d="M14 38c2-4 4-4 6 0M26 38c2-4 4-4 6 0M38 38c2-4 4-4 6 0" stroke="#3A2A1F" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function StorefrontIllustration({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none">
      {/* building */}
      <rect x="40" y="90" width="320" height="170" fill="#F4ECDC" stroke="#3A2A1F" strokeWidth="5" />
      {/* awning */}
      <path d="M30 90 L60 50 H340 L370 90 Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="5" strokeLinejoin="round" />
      <path d="M30 90h340" stroke="#3A2A1F" strokeWidth="5" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${60 + i * 40} 90 l 10 -40`} stroke="#3A2A1F" strokeWidth="3" opacity="0.5" />
      ))}
      {/* door */}
      <rect x="170" y="150" width="60" height="110" fill="#6B7858" stroke="#3A2A1F" strokeWidth="4" />
      <circle cx="220" cy="205" r="3" fill="#3A2A1F" />
      {/* windows */}
      <rect x="60" y="150" width="80" height="70" fill="#FBF6E9" stroke="#3A2A1F" strokeWidth="4" />
      <rect x="260" y="150" width="80" height="70" fill="#FBF6E9" stroke="#3A2A1F" strokeWidth="4" />
      <path d="M60 185h80M100 150v70" stroke="#3A2A1F" strokeWidth="2" opacity="0.5" />
      <path d="M260 185h80M300 150v70" stroke="#3A2A1F" strokeWidth="2" opacity="0.5" />
      {/* sign */}
      <rect x="130" y="100" width="140" height="34" rx="4" fill="#2B2017" stroke="#3A2A1F" strokeWidth="3" />
      <text x="200" y="123" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill="#EDE6D6">Marigold</text>
      {/* potted plants either side of door */}
      <g transform="translate(150,225)"><rect width="14" height="16" fill="#C28A22" /><path d="M7 0c-6-14-20-16-24-8 8 10 18 10 24 8Z" fill="#6B7858" /></g>
      <g transform="translate(236,225)"><rect width="14" height="16" fill="#C28A22" /><path d="M7 0c6-14 20-16 24-8-8 10-18 10-24 8Z" fill="#6B7858" /></g>
    </svg>
  );
}

export function PinIllustration({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M32 6c12 0 20 9 20 20 0 15-20 32-20 32S12 41 12 26C12 15 20 6 32 6Z" fill="#E0A93A" stroke="#3A2A1F" strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="32" cy="26" r="8" fill="#F4ECDC" stroke="#3A2A1F" strokeWidth="3" />
    </svg>
  );
}

export function ClockIllustration({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="24" fill="#F4ECDC" stroke="#3A2A1F" strokeWidth="3.5" />
      <path d="M32 20v12l9 6" stroke="#3A2A1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="32" r="2.5" fill="#3A2A1F" />
    </svg>
  );
}
