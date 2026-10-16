import { Hero } from "@/src/client/components/screens/landing/01-hero";
import { ValuesSection } from "@/src/client/components/screens/landing/02-values";
import { InstitutionalFooter } from "@/src/app/components/InstitutionalFooter";

export default function Page() {
    return (
        <main id="main-content" className="relative flex flex-col min-h-screen bg-[#0D0C0A]">
            <Hero />
            <ValuesSection />
            <InstitutionalFooter />
        </main>
    );
}

