import type { Metadata } from "next";
import Link from "next/link";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  Building2,
  ExternalLink,
  Navigation,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  GraduationCap,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  Cpu,
  Globe,
  Flame,
} from "lucide-react";
import {
  LocalBusinessSchema,
  innovationHubs,
} from "@/src/app/components/seo/LocalBusinessSchema";
import type { InnovationHubLocation } from "@/src/types/seo";

export const metadata: Metadata = {
  title: "Regional Innovation Hubs & Chapters | IBA Foundation",
  description:
    "Explore IBA Foundation headquarters in Bengaluru and regional innovation chapters in Mumbai, New Delhi, Hyderabad, and Pune. Discover physical sandboxes, labs, and fellowship communities.",
  alternates: {
    canonical: "https://ibafoundation.org/locations",
  },
  openGraph: {
    title: "Regional Innovation Hubs & Chapters | IBA Foundation",
    description:
      "Explore IBA Foundation headquarters in Bengaluru and regional innovation chapters in Mumbai, New Delhi, Hyderabad, and Pune. Discover physical sandboxes, labs, and fellowship communities.",
    url: "https://ibafoundation.org/locations",
    siteName: "IBA Foundation",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "IBA Foundation Regional Innovation Hubs & Physical Sandboxes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Innovation Hubs & Chapters | IBA Foundation",
    description:
      "Explore IBA Foundation headquarters in Bengaluru and regional innovation chapters in Mumbai, New Delhi, Hyderabad, and Pune. Discover physical sandboxes, labs, and fellowship communities.",
    images: ["/images/hero-poster.webp"],
  },
};

interface HubAdditionalDetails {
  focusAreas: string[];
  facilities: string[];
  badgeColor: string;
  leadRole?: string;
  regionalHighlight: string;
}

const hubDetailsMap: Record<string, HubAdditionalDetails> = {
  "hq-bengaluru": {
    focusAreas: [
      "AI & Foundation Systems",
      "Hardware Prototyping",
      "Climate Tech Sandboxes",
      "Fellowship Residency",
    ],
    facilities: [
      "Rapid Prototyping Bay",
      "GPU Compute Cluster",
      "Maker Studio & CNC Tools",
      "Public Seminar & Demo Theater",
    ],
    badgeColor: "bg-[#DFB17B]/15 text-[#DFB17B] border-[#DFB17B]/40",
    regionalHighlight: "Primary administrative & technological hub of IBA Foundation.",
  },
  "hub-mumbai": {
    focusAreas: [
      "Fintech Engineering",
      "Climate Risk Modeling",
      "Decentralized Infrastructure",
      "Enterprise Tech Bridges",
    ],
    facilities: [
      "High-Frequency Compute Pod",
      "Collaborative Coworking Hub",
      "Investor Showcase Arena",
      "Peer Residency Labs",
    ],
    badgeColor: "bg-[#DFB17B]/15 text-[#DFB17B] border-[#DFB17B]/40",
    regionalHighlight: "Powering financial systems innovation and distributed computing.",
  },
  "hub-delhi": {
    focusAreas: [
      "AI Governance & Safety",
      "Climate Engineering",
      "Public Policy Sandboxes",
      "Institutional Open Source",
    ],
    facilities: [
      "Policy Salon & Think Tank",
      "Research Workstations",
      "Academic Convening Hall",
      "Prototyping Studio",
    ],
    badgeColor: "bg-[#DFB17B]/15 text-[#DFB17B] border-[#DFB17B]/40",
    regionalHighlight: "Bridging frontier engineering with governance and public impact.",
  },
  "hub-hyderabad": {
    focusAreas: [
      "Semiconductor Prototyping",
      "Robotics Hardware",
      "Edge AI Acceleration",
      "Embedded Systems",
    ],
    facilities: [
      "SMT Assembly Workstations",
      "Robotics Arena & Testing Floor",
      "FPGA & Firmware Workbench",
      "High-Speed Hardware Testing",
    ],
    badgeColor: "bg-[#DFB17B]/15 text-[#DFB17B] border-[#DFB17B]/40",
    regionalHighlight: "Specialized deep-tech hardware and robotics sandbox.",
  },
  "chapter-pune": {
    focusAreas: [
      "Undergraduate Fellowships",
      "Open-Source Builds",
      "Student Hardware Hackathons",
      "Cross-Discipline Maker Labs",
    ],
    facilities: [
      "Student Maker Garage",
      "Electronics Workbench",
      "Mentorship Lounge",
      "Open Hack Room",
    ],
    badgeColor: "bg-[#DFB17B]/15 text-[#DFB17B] border-[#DFB17B]/40",
    regionalHighlight: "Campus-anchored node fostering undergraduate builder culture.",
  },
};

function formatCoordinates(lat: number, lng: number) {
  const latStr = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? "N" : "S"}`;
  const lngStr = `${Math.abs(lng).toFixed(4)}° ${lng >= 0 ? "E" : "W"}`;
  return `${latStr}, ${lngStr}`;
}

export default function LocationsPage() {
  const hqHub = innovationHubs.find((h) => h.hubType === "Headquarters");
  const regionalHubs = innovationHubs.filter((h) => h.hubType === "Regional Hub");
  const universityChapters = innovationHubs.filter(
    (h) => h.hubType === "University Chapter"
  );

  return (
    <div className="min-h-screen bg-background text-text selection:bg-[#DFB17B]/30 selection:text-white">
      {/* 1. Embed Structured Data Schema (JSON-LD) */}
      <LocalBusinessSchema hubs={innovationHubs} />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Official IBA Foundation Brand Mark (03 / COMMON GROUND) */}
          <CommonGroundLogo
            href="/"
            size="md"
            theme="dark"
            className="transition-transform duration-200 hover:scale-[1.02]"
          />

          {/* Directory Quick Navigation */}
          <nav
            aria-label="Directory Categories"
            className="hidden items-center gap-6 text-sm md:flex text-text-secondary"
          >
            <a
              href="#directory"
              className="transition-colors hover:text-[#DFB17B]"
            >
              All Locations
            </a>
            <a
              href="#headquarters"
              className="transition-colors hover:text-[#DFB17B]"
            >
              Headquarters
            </a>
            <a
              href="#regional-hubs"
              className="transition-colors hover:text-[#DFB17B]"
            >
              Regional Chapters
            </a>
            <a
              href="#university-chapters"
              className="transition-colors hover:text-[#DFB17B]"
            >
              Campus Nodes
            </a>
            <a
              href="#launch-chapter"
              className="transition-colors hover:text-[#DFB17B]"
            >
              Launch Chapter
            </a>
          </nav>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-[#DFB17B]/40 hover:bg-white/10 hover:text-white"
            >
              <span>Main Site</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#DFB17B]" />
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* Glow ambient background effects */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[800px] bg-[radial-gradient(ellipse_at_top,rgba(223,177,123,0.12),transparent_70%)]" />
        </div>

        {/* 2. Hero Section */}
        <section
          id="overview"
          className="mx-auto max-w-7xl px-6 pt-16 pb-14 sm:px-8 sm:pt-20 lg:px-12"
        >
          <div className="flex flex-col items-center text-center">
            {/* Network Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFB17B]/30 bg-[#DFB17B]/10 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide text-[#DFB17B]">
              <Radio className="h-3.5 w-3.5 text-[#DFB17B] animate-pulse" />
              <span>Regional Chapter Network</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl">
              Physical Sandboxes &amp; Innovation Hubs
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-3xl text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-sans">
              From our Bengaluru Headquarters to regional nodes across India, IBA
              Foundation provides collaborative spaces, hardware prototyping labs,
              and multidisciplinary communities.
            </p>

            {/* Key Metrics Bar */}
            <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#161512] p-4 text-center transition-all hover:border-[#DFB17B]/30">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#DFB17B]">
                  5
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-white">
                  Innovation Nodes
                </span>
                <span className="text-[11px] text-text-muted mt-0.5">
                  Sandboxes &amp; Labs
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#161512] p-4 text-center transition-all hover:border-[#DFB17B]/30">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#DFB17B]">
                  4
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-white">
                  Major States
                </span>
                <span className="text-[11px] text-text-muted mt-0.5">
                  National Footprint
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#161512] p-4 text-center transition-all hover:border-[#DFB17B]/30">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#DFB17B]">
                  1,200+
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-white">
                  Active Builders
                </span>
                <span className="text-[11px] text-text-muted mt-0.5">
                  Fellows &amp; Researchers
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#161512] p-4 text-center transition-all hover:border-[#DFB17B]/30">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#DFB17B]">
                  Zero
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-white">
                  Barriers to Build
                </span>
                <span className="text-[11px] text-text-muted mt-0.5">
                  Free Sandbox Access
                </span>
              </div>
            </div>

            {/* Quick Filter Pill Buttons */}
            <div
              id="directory"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 pt-2"
            >
              <a
                href="#all"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#DFB17B]/40 bg-[#DFB17B]/10 px-4 py-1.5 text-xs font-medium text-[#DFB17B] transition hover:bg-[#DFB17B]/20"
              >
                <Compass className="h-3.5 w-3.5" />
                <span>All Locations ({innovationHubs.length})</span>
              </a>
              <a
                href="#headquarters"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary transition hover:border-[#DFB17B]/30 hover:text-white"
              >
                <Building2 className="h-3.5 w-3.5 text-[#DFB17B]" />
                <span>Global HQ (1)</span>
              </a>
              <a
                href="#regional-hubs"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary transition hover:border-[#DFB17B]/30 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5 text-[#DFB17B]" />
                <span>Regional Chapters ({regionalHubs.length})</span>
              </a>
              <a
                href="#university-chapters"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary transition hover:border-[#DFB17B]/30 hover:text-white"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[#DFB17B]" />
                <span>Campus Nodes ({universityChapters.length})</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. Global Headquarters Showcase */}
        {hqHub && (
          <section
            id="headquarters"
            className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#DFB17B]/40 bg-[#161512] p-6 shadow-2xl transition-all sm:p-10 lg:p-12 hover:border-[#DFB17B]/60">
              {/* Subtle gold glow behind card */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DFB17B]/10 blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                {/* Left Information Column */}
                <div className="max-w-3xl space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DFB17B]/50 bg-[#DFB17B]/20 px-3 py-1 text-xs font-medium text-[#DFB17B]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Global Headquarters
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted">
                      Karnataka, India
                    </span>
                    <span className="font-mono text-xs text-text-muted/80">
                      {formatCoordinates(hqHub.geo.latitude, hqHub.geo.longitude)}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                      {hqHub.name}
                    </h2>
                    <p className="mt-2 text-base text-text-secondary leading-relaxed">
                      {hqHub.description}
                    </p>
                  </div>

                  {/* Exact NAP Details */}
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    {/* Address Block */}
                    <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                      <MapPin className="h-5 w-5 text-[#DFB17B] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                          Physical Address
                        </span>
                        <address className="not-italic text-sm text-white mt-1 leading-relaxed">
                          <span className="block font-medium">
                            {hqHub.address.streetAddress}
                          </span>
                          <span className="block text-text-secondary">
                            {hqHub.address.addressLocality},{" "}
                            {hqHub.address.addressRegion} —{" "}
                            {hqHub.address.postalCode}
                          </span>
                          <span className="block text-xs text-text-muted mt-0.5">
                            India (IN)
                          </span>
                        </address>
                      </div>
                    </div>

                    {/* Contact & Hours Block */}
                    <div className="flex flex-col justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3.5">
                      {/* Phone */}
                      {hqHub.telephone && (
                        <div className="flex items-start gap-3">
                          <Phone className="h-4 w-4 text-[#DFB17B] shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                              Direct Telephone
                            </span>
                            <a
                              href={`tel:${hqHub.telephone}`}
                              className="inline-block text-sm font-medium text-white transition hover:text-[#DFB17B]"
                            >
                              {hqHub.telephone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Hours */}
                      {hqHub.openingHours && (
                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-[#DFB17B] shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                              Operating Hours
                            </span>
                            <span className="text-sm text-text-secondary">
                              {hqHub.openingHours} (IST)
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Flagship Facilities & Focus Areas */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#DFB17B]">
                      On-Site Sandboxes &amp; Focus Domains
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {hubDetailsMap[hqHub.id]?.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-md border border-white/10 bg-[#22201B] px-2.5 py-1 text-xs text-text-secondary"
                        >
                          {area}
                        </span>
                      ))}
                      {hubDetailsMap[hqHub.id]?.facilities.map((facility) => (
                        <span
                          key={facility}
                          className="rounded-md border border-[#DFB17B]/20 bg-[#DFB17B]/5 px-2.5 py-1 text-xs text-[#DFB17B]"
                        >
                          ✦ {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Column */}
                <div className="flex shrink-0 flex-col gap-3 lg:w-72">
                  <div className="rounded-xl border border-white/10 bg-[#22201B] p-4 text-center">
                    <span className="block text-xs uppercase tracking-wider text-text-muted">
                      Coordinate Reference
                    </span>
                    <span className="mt-1 block font-mono text-xs font-semibold text-[#DFB17B]">
                      {formatCoordinates(
                        hqHub.geo.latitude,
                        hqHub.geo.longitude
                      )}
                    </span>
                    <span className="mt-2 block text-[11px] text-text-muted">
                      Open to fellows, invited collaborators, and registered builder teams.
                    </span>
                  </div>

                  {hqHub.mapUrl && (
                    <a
                      href={hqHub.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DFB17B] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#CFA066]"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${hqHub.geo.latitude},${hqHub.geo.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-[#DFB17B]/40 hover:bg-white/10"
                  >
                    <Navigation className="h-4 w-4 text-[#DFB17B]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Regional Chapters Section */}
        <section
          id="regional-hubs"
          className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-[#DFB17B] uppercase">
                <Globe className="h-3.5 w-3.5" />
                <span>Regional Nodes</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium text-white">
                Regional Innovation Chapters
              </h2>
              <p className="mt-1 text-sm text-text-secondary max-w-2xl">
                City chapters bridging local engineering ecosystems, institutional
                laboratories, and high-intensity challenge tracks.
              </p>
            </div>
            <div className="text-xs text-text-muted">
              Showing {regionalHubs.length} Active Regional Centers
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regionalHubs.map((hub) => {
              const details = hubDetailsMap[hub.id];
              return (
                <div
                  key={hub.id}
                  id={hub.id}
                  className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#161512] p-6 transition-all duration-200 hover:border-[#DFB17B]/50 hover:shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Card Top: Badges & City */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-[#DFB17B]">
                        {hub.hubType}
                      </span>
                      <span className="font-mono text-[11px] text-text-muted">
                        {hub.city}, {hub.address.addressRegion}
                      </span>
                    </div>

                    {/* Hub Title & Description */}
                    <div>
                      <h3 className="font-serif text-xl font-medium text-white transition group-hover:text-[#DFB17B]">
                        {hub.name}
                      </h3>
                      <p className="mt-2 text-xs text-text-secondary line-clamp-3 leading-relaxed">
                        {hub.description}
                      </p>
                    </div>

                    {/* Exact NAP Details Block */}
                    <div className="space-y-2.5 rounded-lg border border-white/5 bg-[#22201B]/50 p-3.5 text-xs">
                      {/* Address */}
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4 w-4 text-[#DFB17B] shrink-0 mt-0.5" />
                        <address className="not-italic text-text-secondary leading-relaxed">
                          <span className="block font-medium text-white">
                            {hub.address.streetAddress}
                          </span>
                          <span className="block text-text-muted">
                            {hub.address.addressLocality},{" "}
                            {hub.address.addressRegion} — {hub.address.postalCode}
                          </span>
                        </address>
                      </div>

                      {/* Telephone */}
                      {hub.telephone && (
                        <div className="flex items-center gap-2.5 pt-1 border-t border-white/5">
                          <Phone className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                          <a
                            href={`tel:${hub.telephone}`}
                            className="text-white hover:text-[#DFB17B] transition-colors"
                          >
                            {hub.telephone}
                          </a>
                        </div>
                      )}

                      {/* Hours */}
                      {hub.openingHours && (
                        <div className="flex items-center gap-2.5">
                          <Clock className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                          <span className="text-text-muted">
                            {hub.openingHours}
                          </span>
                        </div>
                      )}

                      {/* Geo Coordinates */}
                      <div className="flex items-center gap-2.5 pt-1 border-t border-white/5">
                        <Compass className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                        <span className="font-mono text-[11px] text-text-muted">
                          {formatCoordinates(
                            hub.geo.latitude,
                            hub.geo.longitude
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Focus Domains */}
                    {details && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                          Domain Focus
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {details.focusAreas.map((domain) => (
                            <span
                              key={domain}
                              className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-text-secondary"
                            >
                              {domain}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Maps & Directions CTAs */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                    {hub.mapUrl && (
                      <a
                        href={hub.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white transition hover:border-[#DFB17B]/40 hover:bg-white/10 hover:text-[#DFB17B]"
                      >
                        <span>Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${hub.geo.latitude},${hub.geo.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#DFB17B]/15 px-3 py-2 text-xs font-medium text-[#DFB17B] transition hover:bg-[#DFB17B]/25"
                      title="Get Directions"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. University / Campus Chapters Section */}
        <section
          id="university-chapters"
          className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide text-[#DFB17B] uppercase">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Academic Sandboxes</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl font-medium text-white">
                University &amp; Campus Chapters
              </h2>
              <p className="mt-1 text-sm text-text-secondary max-w-2xl">
                Collaborative sandboxes co-located on premier engineering campuses
                to empower undergraduate fellows, rapid hardware prototyping, and
                open hackathons.
              </p>
            </div>
            <div className="text-xs text-text-muted">
              Higher-Education Partner Node
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {universityChapters.map((chapter) => {
              const details = hubDetailsMap[chapter.id];
              return (
                <div
                  key={chapter.id}
                  id={chapter.id}
                  className="group rounded-xl border border-white/10 bg-[#161512] p-6 sm:p-8 transition-all hover:border-[#DFB17B]/50 hover:shadow-xl"
                >
                  <div className="flex flex-col justify-between h-full space-y-6">
                    <div className="space-y-4">
                      {/* Card Top */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                          {chapter.hubType}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {formatCoordinates(
                            chapter.geo.latitude,
                            chapter.geo.longitude
                          )}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#DFB17B] transition">
                          {chapter.name}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                          {chapter.description}
                        </p>
                      </div>

                      {/* Exact NAP Details Block */}
                      <div className="grid gap-3 sm:grid-cols-2 rounded-lg border border-white/5 bg-[#22201B]/50 p-4 text-xs">
                        {/* Address */}
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4 w-4 text-[#DFB17B] shrink-0 mt-0.5" />
                          <address className="not-italic text-text-secondary leading-relaxed">
                            <span className="block font-medium text-white">
                              {chapter.address.streetAddress}
                            </span>
                            <span className="block text-text-muted">
                              {chapter.address.addressLocality},{" "}
                              {chapter.address.addressRegion} —{" "}
                              {chapter.address.postalCode}
                            </span>
                            <span className="block text-text-muted/70 mt-0.5">
                              India (IN)
                            </span>
                          </address>
                        </div>

                        {/* Telephone & Hours */}
                        <div className="space-y-2">
                          {chapter.telephone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                              <a
                                href={`tel:${chapter.telephone}`}
                                className="text-white hover:text-[#DFB17B] transition-colors"
                              >
                                {chapter.telephone}
                              </a>
                            </div>
                          )}
                          {chapter.openingHours && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                              <span className="text-text-muted">
                                {chapter.openingHours}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Building2 className="h-3.5 w-3.5 text-[#DFB17B] shrink-0" />
                            <span className="text-text-muted">
                              COEP Tech University Partner
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Focus Areas & Amenities */}
                      {details && (
                        <div className="space-y-2 pt-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            Campus Programs &amp; Prototyping Facilities
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {details.focusAreas.map((f) => (
                              <span
                                key={f}
                                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
                              >
                                {f}
                              </span>
                            ))}
                            {details.facilities.map((fac) => (
                              <span
                                key={fac}
                                className="rounded-md border border-[#DFB17B]/20 bg-[#DFB17B]/5 px-2.5 py-1 text-xs text-[#DFB17B]"
                              >
                                ✦ {fac}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      {chapter.mapUrl && (
                        <a
                          href={chapter.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white transition hover:border-[#DFB17B]/40 hover:bg-white/10"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${chapter.geo.latitude},${chapter.geo.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DFB17B]/15 px-4 py-2 text-xs font-medium text-[#DFB17B] transition hover:bg-[#DFB17B]/25"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* University Sandbox Callout */}
            <div className="flex flex-col justify-between rounded-xl border border-dashed border-[#DFB17B]/30 bg-[#161512]/60 p-6 sm:p-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DFB17B]/30 bg-[#DFB17B]/10 px-3 py-1 text-xs font-medium text-[#DFB17B]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Campus Expansion Track
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Bring an IBA Sandbox to Your Campus
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We equip university maker spaces with specialized tooling, grant
                  pools, and direct mentorship from frontier engineers. We support
                  student teams building solutions in AI, Climate, and Robotics.
                </p>
                <ul className="space-y-2 text-xs text-text-secondary pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#DFB17B] shrink-0" />
                    <span>Quarterly prototyping seed grants for student projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#DFB17B] shrink-0" />
                    <span>Access to national GPU clusters and hardware testbeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#DFB17B] shrink-0" />
                    <span>Direct pathway to the IBA Fellowship &amp; Demo Day</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#launch-chapter"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFB17B] transition hover:underline"
                >
                  <span>Learn how to initiate a student node</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Community & Partnership Call-to-Action */}
        <section
          id="launch-chapter"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#161512] to-[#0D0C0A] p-8 sm:p-12 lg:p-16">
            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#DFB17B]/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DFB17B]/30 bg-[#DFB17B]/10 px-3 py-1 text-xs font-mono font-medium text-[#DFB17B]">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                Network Expansion
              </span>

              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                Want to launch an IBA Chapter in your university or city?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
                We collaborate with university departments, research incubators, and
                civic foundations to build open-access hardware labs and fellowship
                cohorts across India and beyond.
              </p>
            </div>

            {/* 3 Guidance Columns */}
            <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-white/10 bg-[#22201B]/60 p-6 transition hover:border-[#DFB17B]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DFB17B]/10 text-[#DFB17B]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-white">
                  Chapter Sponsorship
                </h3>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  Institutional, alumni, and corporate partners can sponsor physical
                  sandbox equipment, rapid prototyping tooling, and compute grants
                  for local builders.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-white/10 bg-[#22201B]/60 p-6 transition hover:border-[#DFB17B]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DFB17B]/10 text-[#DFB17B]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-white">
                  Space Partnerships
                </h3>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  Have an existing makerspace, research park, or lab? Connect with
                  IBA Foundation to run residency tracks, national hackathons, and
                  multidisciplinary builds.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-white/10 bg-[#22201B]/60 p-6 transition hover:border-[#DFB17B]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DFB17B]/10 text-[#DFB17B]">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-white">
                  Student Node Initiation
                </h3>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  Students and faculty can launch official university chapters with
                  starter kits, challenge curriculum, micro-grant pools, and
                  fellowship access.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="relative z-10 mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-[#DFB17B]/30 bg-[#161512] p-6">
              <div>
                <span className="block text-sm font-semibold text-white">
                  Ready to start a conversation?
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  Reach out directly to our regional expansion and chapter team.
                </span>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <a
                      href="mailto:chapters@ibafoundation.org"
                      className="hover:text-white underline decoration-white/30"
                    >
                      chapters@ibafoundation.org
                    </a>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#DFB17B]" />
                    <a
                      href="tel:+91-80-4123-8900"
                      className="hover:text-white"
                    >
                      +91-80-4123-8900
                    </a>
                  </span>
                </div>
              </div>

              <a
                href="mailto:chapters@ibafoundation.org?subject=IBA%20Chapter%20Inquiry%20-%20New%20Location"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#DFB17B] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#CFA066]"
              >
                <span>Initiate Chapter Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Directory Footer */}
      <footer className="border-t border-white/10 bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8 lg:px-12 text-xs text-text-muted">
          <div className="flex items-center gap-3">
            <CommonGroundLogo href="/" size="sm" theme="dark" />
            <span>•</span>
            <span>Potential, put into practice.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <a href="#overview" className="hover:text-white transition">
              Locations Overview
            </a>
            <a href="#headquarters" className="hover:text-white transition">
              Bengaluru HQ
            </a>
            <a
              href="mailto:chapters@ibafoundation.org"
              className="hover:text-white transition"
            >
              Contact Chapter Desk
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} IBA Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
