import { HeroNavbar } from "./heroNavbar";
import { HeroBackground } from "./heroBackground";
import { HeroParallaxLayers } from "./heroParallaxLayers";
import { HeroContent } from "./heroContent";
import { HeroTicker } from "./heroTicker";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-[#0D0C0A]"
        >
            {/* Layer 1: Static Looping Background Video */}
            <HeroBackground />

            {/* Layer 2: Interactive Pseudo-3D Foreground Assets (2B, 2A, 2C) */}
            <HeroParallaxLayers />

            {/* Layer 3: Fixed UI & Typography */}
            <HeroNavbar />
            <HeroContent />
            <HeroTicker />
        </section>
    );
}
