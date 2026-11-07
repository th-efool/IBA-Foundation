import Link from "next/link";

export interface CommonGroundMarkProps {
  className?: string;
  theme?: "dark" | "light";
  style?: React.CSSProperties;
}

/**
 * Pure SVG mark for IBA Foundation.
 * Composed of:
 * 1. Electric blue angled beam (#1645FF)
 * 2. Coral center pillar (#FF5035)
 * 3. Ice-white base and rising right arm (#E9EFF8 on dark, #080A10 on light)
 */
export function CommonGroundMark({
  className = "h-8 w-auto aspect-[420/198] shrink-0",
  theme = "dark",
  style,
}: CommonGroundMarkProps) {
  const baseColor = theme === "dark" ? "#E9EFF8" : "#080A10";

  return (
    <svg
      viewBox="0 0 420 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Blue angled arm */}
      <path
        d="M0 0 H54 L154 100 V150 H77 L0 73 Z"
        fill="#1645FF"
      />
      {/* Coral center pillar */}
      <path
        d="M173 42 L252 0 V150 H173 Z"
        fill="#FF5035"
      />
      {/* Shared base and right arm */}
      <path
        d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z"
        fill={baseColor}
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
    sm: "h-6 w-auto aspect-[420/198]",
    md: "h-8 w-auto aspect-[420/198]",
    lg: "h-10 w-auto aspect-[420/198]",
    xl: "h-14 w-auto aspect-[420/198]",
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
                isDark ? "text-white" : "text-[#080A10]"
              } ${vTextConfig.iba} ${textClassName}`}
            >
              IBA
            </span>
            <span
              className={`mt-1 font-sans font-semibold tracking-[0.3em] uppercase leading-none pl-[0.3em] ${
                isDark ? "text-white/80" : "text-[#080A10]/85"
              } ${vTextConfig.foundation}`}
            >
              FOUNDATION
            </span>
          </div>
        </div>
      );
    }

    // Default horizontal lockup
    return (
      <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
        <CommonGroundMark theme={theme} className={markSizeClasses} />
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-sans font-black tracking-[0.04em] uppercase leading-none ${
              isDark ? "text-white" : "text-[#080A10]"
            } ${hTextConfig.iba} ${textClassName}`}
          >
            IBA
          </span>
          <span
            className={`mt-1 font-sans font-semibold tracking-[0.28em] uppercase leading-none pl-[0.28em] ${
              isDark ? "text-white/75" : "text-[#080A10]/80"
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
        className="group inline-flex shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1645FF] rounded-md"
        aria-label="IBA Foundation Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
