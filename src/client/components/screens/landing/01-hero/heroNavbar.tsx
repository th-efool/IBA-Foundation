import Link from "next/link";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";

const navigation = [
    { href: "/fellowship", label: "Fellowship" },
    { href: "/challenges", label: "Challenges" },
    { href: "/programs", label: "Programs" },
    { href: "/showcase", label: "Showcase" },
    { href: "/playbooks", label: "Playbooks" },
    { href: "/locations", label: "Locations" },
    { href: "/values", label: "Values" },
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
                    {/* Official IBA Foundation Brand Mark (03 / COMMON GROUND) */}
                    <CommonGroundLogo
                        href="/"
                        size="md"
                        theme="dark"
                        className="transition-transform duration-200 hover:scale-[1.02]"
                    />

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
