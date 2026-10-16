import Link from "next/link";

const navigation = [
    { href: "#about", label: "About" },
    { href: "#competitions", label: "Competitions" },
    { href: "#initiatives", label: "Initiatives" },
    { href: "#community", label: "Community" },
    { href: "#partners", label: "Partners" },
];

export function HeroNavbar() {
    return (
        <header className="
            absolute inset-x-0 top-0 z-30
            pt-7 sm:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16
            px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24
        ">
            {/* Accessible Skip Link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black shadow-2xl transition-all"
            >
                Skip to main content
            </a>

            <div className="mx-auto w-full max-w-[1680px] xl:max-w-[2000px] 2xl:max-w-[2400px]">
                <div className="flex items-center justify-between md:justify-start gap-8 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {/* Official IBA Foundation Brand Mark (matching FinaLook.png) */}
                    <Link
                        href="/"
                        className="group relative inline-flex flex-col items-center shrink-0 select-none"
                        aria-label="IBA Foundation Home"
                    >
                        <div className="relative flex items-baseline">
                            {/* Golden Orbital Swoosh Arc above I-B-A */}
                            <svg
                                viewBox="0 0 120 42"
                                fill="none"
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute -top-2.5 sm:-top-3 left-2 sm:left-2.5
                                    w-[92%] h-[115%]
                                    overflow-visible
                                "
                            >
                                {/* Outer glowing tapered arc */}
                                <path
                                    d="M 18 22 C 42 -4, 96 -6, 104 8 C 108 15, 92 28, 72 34"
                                    stroke="url(#ibaArcGrad)"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                />
                                {/* Star/node accent near apex */}
                                <circle cx="96" cy="4.5" r="2.6" fill="#F5D7A1" />
                                <defs>
                                    <linearGradient id="ibaArcGrad" x1="18" y1="22" x2="104" y2="8" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#DFB17B" stopOpacity="0.15" />
                                        <stop offset="55%" stopColor="#DFB17B" stopOpacity="0.95" />
                                        <stop offset="85%" stopColor="#F7E1B5" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#DFB17B" stopOpacity="0.35" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span className="
                                relative z-10
                                font-serif
                                text-3xl sm:text-4xl xl:text-[2.65rem] 2xl:text-[3.1rem]
                                font-medium
                                leading-none
                                tracking-[0.04em]
                                text-white
                            ">
                                IBA
                            </span>
                        </div>

                        <span className="
                            mt-1
                            text-[8px] sm:text-[9.5px] xl:text-[10.5px] 2xl:text-xs
                            font-medium
                            tracking-[0.28em]
                             uppercase
                            text-white/90
                            pl-[0.28em]
                        ">
                            FOUNDATION
                        </span>
                    </Link>

                    {/* Desktop & Ultra-Wide Navigation Links (positioned alongside logo per FinaLook.png) */}
                    <nav className="hidden md:block" aria-label="Main Navigation">
                        <ul className="flex items-center gap-7 lg:gap-11 xl:gap-14 2xl:gap-18">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="
                                            text-sm lg:text-[15px] xl:text-base 2xl:text-lg
                                            font-normal
                                            tracking-[0.01em]
                                            text-white/90
                                            drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]
                                            transition-colors duration-300
                                            hover:text-primary
                                        "
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
