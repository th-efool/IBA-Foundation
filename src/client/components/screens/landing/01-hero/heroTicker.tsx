export function HeroTicker() {
    return (
        <div className="
            absolute inset-x-0 bottom-0 z-20
            pb-6 sm:pb-8 lg:pb-10
            px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24
            pointer-events-none
        ">
            <div className="mx-auto w-full max-w-[1680px] xl:max-w-[2000px] 2xl:max-w-[2400px]">
                <div className="flex items-end justify-between gap-6">
                    {/* Bottom-Left: Minimal Mouse Scroll Indicator + SCROLL TO EXPLORE */}
                    <a
                        href="#about"
                        aria-label="Scroll to explore"
                        className="group inline-flex items-center gap-4 sm:gap-5 pointer-events-auto"
                    >
                        <svg
                            width="26"
                            height="48"
                            viewBox="0 0 26 48"
                            fill="none"
                            aria-hidden="true"
                            className="h-10 sm:h-12 w-auto text-[#DFC8A6]/85 transition-transform duration-300 group-hover:translate-y-0.5"
                        >
                            {/* Top lead-in vertical line */}
                            <line
                                x1="13"
                                y1="0"
                                x2="13"
                                y2="17"
                                stroke="currentColor"
                                strokeWidth="1.2"
                            />
                            {/* Mouse outer capsule */}
                            <rect
                                x="2"
                                y="7"
                                width="22"
                                height="39"
                                rx="11"
                                stroke="currentColor"
                                strokeWidth="1.2"
                            />
                            {/* Mouse scroll wheel capsule */}
                            <rect
                                x="11.2"
                                y="14"
                                width="3.6"
                                height="7.5"
                                rx="1.8"
                                stroke="currentColor"
                                strokeWidth="1.1"
                                fill="#0D0C0A"
                            />
                        </svg>

                        <span className="
                            text-[10px] sm:text-[11px] xl:text-xs
                            font-normal
                            tracking-[0.22em]
                            uppercase
                            text-[#EAD8BE]/90
                            transition-colors duration-300
                            group-hover:text-white
                        ">
                            SCROLL TO EXPLORE
                        </span>
                    </a>

                    {/* Bottom-Right: Vertical Rule + 3-Line Institutional Motto */}
                    <div className="
                        hidden sm:flex items-stretch
                        border-l border-[#EAD8BE]/45
                        pl-4 lg:pl-5
                        py-0.5
                    ">
                        <div className="
                            flex flex-col justify-between
                            text-[10px] lg:text-[11px] xl:text-xs
                            font-normal
                            leading-[1.65]
                            tracking-[0.2em]
                            uppercase
                            text-[#EAD8BE]/90
                        ">
                            <span>REAL PROBLEMS.</span>
                            <span>BOLD IDEAS.</span>
                            <span>TANGIBLE OUTCOMES.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
