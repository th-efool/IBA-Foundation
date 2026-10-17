import Link from "next/link";

export interface CommonGroundMarkProps {
  className?: string;
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

/**
 * Pure SVG mark for 03 / COMMON GROUND
 * Composed of:
 * 1. Cobalt Blue angled beam (#3157BC)
 * 2. Terracotta center pillar (#CA6141)
 * 3. Spruce Common Ground base and rising right arm (#4E7873 in dark, #223635 in light)
 */
export function CommonGroundMark({
  className = "h-8 w-auto aspect-[294/139] shrink-0",
  theme = "dark",
  style,
}: CommonGroundMarkProps) {
  const spruceColor = theme === "dark" ? "#4E7873" : "#223635";

  return (
    <svg
      viewBox="0 0 294 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* 01 Blue Angled Arm */}
      <path
        d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z"
        fill="#3157BC"
      />
      {/* 02 Terracotta Center Pillar */}
      <path
        d="M121 30 L176 0 V98 L166 105 H121 Z"
        fill="#CA6141"
      />
      {/* 03 Common Ground Spruce Base and Right Arm */}
      <path
        d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z"
        fill={spruceColor}
      />
    </svg>
  );
}

export interface CommonGroundLogoProps {
  layout?: "horizontal" | "vertical" | "mark-only";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  textClassName?: string;
}

export function CommonGroundLogo({
  layout = "horizontal",
  theme = "dark",
  size = "md",
  href,
  className = "",
  textClassName = "",
}: CommonGroundLogoProps) {
  const isDark = theme === "dark";

  // Mark sizing per scale
  const markSizeClasses = {
    sm: "h-6 w-auto aspect-[294/139]",
    md: "h-8 w-auto aspect-[294/139]",
    lg: "h-10 w-auto aspect-[294/139]",
    xl: "h-14 w-auto aspect-[294/139]",
  }[size];

  // Text sizes for horizontal layout
  const hTextConfig = {
    sm: { iba: "text-lg", foundation: "text-[7.5px]" },
    md: { iba: "text-2xl sm:text-[1.65rem]", foundation: "text-[8px] sm:text-[9px]" },
    lg: { iba: "text-3xl", foundation: "text-[10px]" },
    xl: { iba: "text-4xl sm:text-5xl", foundation: "text-xs" },
  }[size];

  // Text sizes for vertical layout
  const vTextConfig = {
    sm: { iba: "text-xl", foundation: "text-[8px]" },
    md: { iba: "text-2xl sm:text-3xl", foundation: "text-[8.5px] sm:text-[9.5px]" },
    lg: { iba: "text-3xl sm:text-4xl", foundation: "text-[10px] sm:text-[11px]" },
    xl: { iba: "text-4xl sm:text-5xl", foundation: "text-xs sm:text-sm" },
  }[size];

  const content = (() => {
    if (layout === "mark-only") {
      return (
        <CommonGroundMark
          theme={theme}
          className={`${markSizeClasses} ${className}`}
        />
      );
    }

    if (layout === "vertical") {
      return (
        <div className={`inline-flex flex-col items-center select-none ${className}`}>
          <CommonGroundMark theme={theme} className={markSizeClasses} />
          <div className="mt-2.5 flex flex-col items-center">
            <span
              className={`font-sans font-black tracking-[0.04em] uppercase leading-none ${
                isDark ? "text-white" : "text-[#223635]"
              } ${vTextConfig.iba} ${textClassName}`}
            >
              IBA
            </span>
            <span
              className={`mt-1 font-sans font-semibold tracking-[0.3em] uppercase leading-none pl-[0.3em] ${
                isDark ? "text-white/80" : "text-[#223635]/85"
              } ${vTextConfig.foundation}`}
            >
              FOUNDATION
            </span>
          </div>
        </div>
      );
    }

    // Default: Horizontal lockup (matching 03 / COMMON GROUND dark & light cards)
    return (
      <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
        <CommonGroundMark theme={theme} className={markSizeClasses} />
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-sans font-black tracking-[0.04em] uppercase leading-none ${
              isDark ? "text-white" : "text-[#223635]"
            } ${hTextConfig.iba} ${textClassName}`}
          >
            IBA
          </span>
          <span
            className={`mt-1 font-sans font-semibold tracking-[0.28em] uppercase leading-none pl-[0.28em] ${
              isDark ? "text-white/75" : "text-[#223635]/80"
            } ${hTextConfig.foundation}`}
          >
            FOUNDATION
          </span>
        </div>
      </div>
    );
  })();

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-flex shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3157BC] rounded-md"
        aria-label="IBA Foundation Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
