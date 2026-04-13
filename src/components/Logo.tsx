"use client";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      width="192"
      height="48"
      viewBox="0 0 192 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SUNY LLC"
    >
      <defs>
        {/* Icon gradient */}
        <linearGradient
          id="suny-icon-grad"
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Glow filter for S */}
        <filter id="suny-s-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip for icon rounded corners */}
        <clipPath id="suny-icon-clip">
          <rect width="48" height="48" rx="13" />
        </clipPath>
      </defs>

      {/* ── ICON MARK ── */}

      {/* Base gradient square */}
      <rect width="48" height="48" rx="13" fill="url(#suny-icon-grad)" />

      {/* Inner border for depth */}
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="12.5"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Top shine overlay */}
      <rect
        x="1"
        y="1"
        width="46"
        height="19"
        rx="12"
        fill="white"
        fillOpacity="0.09"
      />

      {/* Subtle frame ring */}
      <circle
        cx="24"
        cy="24"
        r="18.5"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1"
        fill="none"
      />

      {/* S lettermark — geometric cubic bezier S
          Traces: top-right → top arch → mid-left → diagonal cross → mid-right → bottom arch → bottom-left */}
      <path
        d="M 36 15.5 C 36 8.5 12 8.5 12 20 C 12 27.5 36 20.5 36 32 C 36 39.5 12 39.5 12 32.5"
        stroke="white"
        strokeWidth="3.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#suny-s-glow)"
      />

      {/* Accent dots at S endpoints */}
      <circle cx="36" cy="15.5" r="2.2" fill="white" fillOpacity="0.55" />
      <circle cx="12" cy="32.5" r="2.2" fill="white" fillOpacity="0.55" />

      {/* Corner accent dots (very subtle) */}
      <circle cx="6.5" cy="6.5" r="1.2" fill="white" fillOpacity="0.15" />
      <circle cx="41.5" cy="6.5" r="1.2" fill="white" fillOpacity="0.15" />
      <circle cx="6.5" cy="41.5" r="1.2" fill="white" fillOpacity="0.15" />
      <circle cx="41.5" cy="41.5" r="1.2" fill="white" fillOpacity="0.15" />

      {/* ── WORDMARK ── */}

      {/* SUNY LLC — single text with tspan for colour split */}
      <text
        x="62"
        y="27"
        fontFamily="'Plus Jakarta Sans', Inter, sans-serif"
        fontWeight="800"
        fontSize="19.5"
        letterSpacing="0.4"
      >
        <tspan fill="#F1F5F9">SUNY</tspan>
        <tspan dx="6" fill="#60A5FA" fontWeight="700">
          LLC
        </tspan>
      </text>

      {/* Thin accent line under wordmark */}
      <rect x="62" y="31" width="110" height="1" rx="0.5" fill="#2563EB" fillOpacity="0.35" />

      {/* Tagline */}
      <text
        x="63"
        y="42"
        fontFamily="'Inter', sans-serif"
        fontWeight="400"
        fontSize="8.5"
        fill="#64748B"
        letterSpacing="2.6"
      >
        RETAIL PARTNER
      </text>
    </svg>
  );
}
