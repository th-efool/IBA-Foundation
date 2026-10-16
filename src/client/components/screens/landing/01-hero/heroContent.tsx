const pillars = ["IDEAS", "PEOPLE", "OPPORTUNITIES", "IMPACT"];

export function HeroContent() {
    return (
        <div className="relative z-20 flex min-h-screen items-center pointer-events-none">
            <div className="
                mx-auto w-full
                max-w-[1680px] xl:max-w-[2000px] 2xl:max-w-[2400px]
                px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24
                pt-24 sm:pt-28 pb-24 sm:pb-28
            ">
                <div className="max-w-[680px] lg:max-w-[780px] xl:max-w-[920px] 2xl:max-w-[1120px] pointer-events-auto">
                    {/* Spaced Eyebrow: IDEAS   PEOPLE   OPPORTUNITIES   IMPACT */}
                    <div
                        aria-label="IBA Foundation Pillars"
                        className="
                            flex flex-wrap items-center
                            gap-x-4 sm:gap-x-5 xl:gap-x-6 gap-y-2
                            text-[11px] sm:text-xs lg:text-[13px] xl:text-sm 2xl:text-base
                            font-normal
                            tracking-[0.22em]
                            uppercase
                            text-white/90
                            drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
                        "
                    >
                        {pillars.map((pillar) => (
                            <span key={pillar}>{pillar}</span>
                        ))}
                    </div>

                    {/* Editorial Serif Headline: Potential, / put into practice. */}
                    <h1
                        className="
                            mt-4 sm:mt-5 xl:mt-6
                            font-serif
                            text-5xl sm:text-6xl md:text-7xl lg:text-[5.35rem] xl:text-[6.15rem] 2xl:text-[7.2rem]
                            font-medium
                            leading-[1.03]
                            tracking-[-0.015em]
                            text-white
                            drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]
                        "
                    >
                        <span className="block">Potential,</span>
                        <span className="block mt-0.5">
                            put into{" "}
                            <span className="text-primary">practice.</span>
                        </span>
                    </h1>

                    {/* Supporting Institutional Copy */}
                    <p
                        className="
                            mt-5 sm:mt-6 xl:mt-7
                            max-w-[520px] lg:max-w-[580px] xl:max-w-[660px] 2xl:max-w-[780px]
                            text-sm sm:text-base lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.45rem]
                            font-normal
                            leading-[1.55]
                            text-white/90
                            drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]
                        "
                    >
                        We bring ambitious people together to think critically,
                        <br className="hidden sm:inline" />{" "}
                        experiment boldly, and build solutions to real-world problems.
                    </p>

                    {/* Action Buttons: Explore Competitions -> & Our Mission */}
                    <div className="mt-7 sm:mt-9 xl:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                        <a
                            href="#competitions"
                            className="
                                group
                                h-12 sm:h-[52px] xl:h-[56px] 2xl:h-[64px]
                                rounded-[8px]
                                bg-[#F6F1E5]
                                px-6 sm:px-7 xl:px-8 2xl:px-10
                                text-sm sm:text-[15px] xl:text-base 2xl:text-lg
                                font-medium
                                text-[#161513]
                                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                                transition-all duration-300
                                hover:bg-white
                                hover:-translate-y-0.5
                                inline-flex items-center justify-center gap-3.5
                            "
                        >
                            <span>Explore Competitions</span>
                            <span
                                aria-hidden="true"
                                className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </a>

                        <a
                            href="#about"
                            className="
                                h-12 sm:h-[52px] xl:h-[56px] 2xl:h-[64px]
                                rounded-[8px]
                                border border-white/55
                                bg-black/20
                                px-8 sm:px-10 xl:px-12 2xl:px-14
                                text-sm sm:text-[15px] xl:text-base 2xl:text-lg
                                font-normal
                                text-white
                                backdrop-blur-[3px]
                                transition-all duration-300
                                hover:bg-white/10
                                hover:border-white/80
                                inline-flex items-center justify-center
                            "
                        >
                            Our Mission
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
