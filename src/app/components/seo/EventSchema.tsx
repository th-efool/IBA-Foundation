import React from "react";
import type { ChallengeItem } from "@/src/types/seo";

export interface EventSchemaLocationAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface VirtualLocationSchema {
  "@type": "VirtualLocation";
  url: string;
}

export interface PhysicalPlaceSchema {
  "@type": "Place";
  name: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export type EventLocationSchema =
  | VirtualLocationSchema
  | PhysicalPlaceSchema
  | (VirtualLocationSchema | PhysicalPlaceSchema)[];

export interface EventSchemaProps {
  /** Optional partial challenge data item */
  challenge?: Partial<ChallengeItem>;
  /** Optional title/name override */
  name?: string;
  /** Optional description override */
  description?: string;
  /** Optional problem statement override */
  problemStatement?: string;
  /** Optional category override */
  category?: ChallengeItem["category"] | string;
  /** Optional status override */
  status?: ChallengeItem["status"] | string;
  /** Canonical or landing page URL */
  url?: string;
  /** Hero or promotional banner image URL */
  image?: string;
  /** ISO 8601 start date */
  startDate?: string;
  /** ISO 8601 end date / deadline */
  endDate?: string;
  /** Schema.org event status enum or string */
  eventStatus?: "EventScheduled" | "EventPostponed" | "EventCancelled" | "EventMovedOnline" | "EventCompleted" | string;
  /** Schema.org event attendance mode enum or string */
  eventAttendanceMode?: "OnlineEventAttendanceMode" | "MixedEventAttendanceMode" | "OfflineEventAttendanceMode" | string;
  /** Flag indicating virtual event (defaults to true) */
  isVirtual?: boolean;
  /** Physical or virtual location name */
  locationName?: string;
  /** URL for virtual event participation */
  locationUrl?: string;
  /** Physical postal address if mixed or offline */
  locationAddress?: EventSchemaLocationAddress;
  /** Stated prize pool or award string (e.g. "$50,000") */
  prizePool?: string;
  /** Custom ticket/registration price override */
  offerPrice?: string | number;
  /** Currency code for offer or prize (defaults to "USD") */
  priceCurrency?: string;
  /** List of eligibility criteria */
  eligibility?: string[];
  /** Organizer organization name */
  organizerName?: string;
  /** Organizer website URL */
  organizerUrl?: string;
}

export function EventSchema(props: EventSchemaProps = {}) {
  const {
    challenge,
    name: overrideName,
    description: overrideDescription,
    problemStatement: overrideProblemStatement,
    category: overrideCategory,
    status: overrideStatus,
    url: overrideUrl,
    image,
    startDate: overrideStartDate,
    endDate: overrideEndDate,
    eventStatus: overrideEventStatus,
    eventAttendanceMode: overrideAttendanceMode,
    isVirtual = true,
    locationName = "IBA Innovation Hub",
    locationUrl: overrideLocationUrl,
    locationAddress,
    prizePool: overridePrizePool,
    offerPrice,
    priceCurrency = "USD",
    eligibility: overrideEligibility,
    organizerName = "IBA Foundation",
    organizerUrl = "https://ibafoundation.org",
  } = props;

  const name = overrideName ?? challenge?.title ?? "IBA Foundation Global Innovation Sprint";
  const slug = challenge?.slug;
  const url =
    overrideUrl ??
    (slug ? `https://ibafoundation.org/challenges/${slug}` : "https://ibafoundation.org/challenges");
  const category = overrideCategory ?? challenge?.category ?? "Open Innovation";
  const problemStatement =
    overrideProblemStatement ??
    challenge?.problemStatement ??
    "Develop cutting-edge technological solutions addressing critical challenges across AI, climate, hardware, and decentralized protocols.";
  const description =
    overrideDescription ??
    challenge?.description ??
    "A global hackathon and innovation sprint hosted by IBA Foundation to build production-grade solutions for real-world problems.";
  const prizePool = overridePrizePool ?? challenge?.prizePool;
  const eligibility = overrideEligibility ?? challenge?.eligibility ?? [
    "Open to builders, researchers, and engineers worldwide",
    "Teams of 1 to 4 individuals",
    "Original open-source or commercial prototypes",
  ];

  const startDate = overrideStartDate ?? "2026-11-01T00:00:00Z";
  const endDate = overrideEndDate ?? challenge?.deadline ?? "2026-11-30T23:59:59Z";

  // Map status to Schema.org EventStatusType
  let rawStatus = "EventScheduled";
  if (overrideEventStatus) {
    rawStatus = overrideEventStatus;
  } else if (challenge?.status === "Completed" || overrideStatus === "Completed") {
    rawStatus = "EventCompleted";
  } else if (challenge?.status === "In Review" || overrideStatus === "In Review") {
    rawStatus = "EventScheduled";
  } else {
    rawStatus = "EventScheduled";
  }
  const eventStatus = rawStatus.startsWith("http") ? rawStatus : `https://schema.org/${rawStatus}`;

  // Map attendance mode
  let rawAttendanceMode = isVirtual ? "OnlineEventAttendanceMode" : "MixedEventAttendanceMode";
  if (overrideAttendanceMode) {
    rawAttendanceMode = overrideAttendanceMode;
  }
  const eventAttendanceMode = rawAttendanceMode.startsWith("http")
    ? rawAttendanceMode
    : `https://schema.org/${rawAttendanceMode}`;

  // Configure location based on mode
  const locationUrl = overrideLocationUrl ?? url;

  const virtualLocation: VirtualLocationSchema = {
    "@type": "VirtualLocation",
    url: locationUrl,
  };

  const physicalLocation: PhysicalPlaceSchema = {
    "@type": "Place",
    name: locationName,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationAddress?.streetAddress ?? "500 Howard Street",
      addressLocality: locationAddress?.addressLocality ?? "San Francisco",
      addressRegion: locationAddress?.addressRegion ?? "CA",
      postalCode: locationAddress?.postalCode ?? "94105",
      addressCountry: locationAddress?.addressCountry ?? "US",
    },
  };

  let location: EventLocationSchema = virtualLocation;
  if (rawAttendanceMode.includes("MixedEventAttendanceMode")) {
    location = [virtualLocation, physicalLocation];
  } else if (rawAttendanceMode.includes("OfflineEventAttendanceMode") || !isVirtual) {
    location = physicalLocation;
  } else {
    location = virtualLocation;
  }

  // Determine offer details
  const numericPrize = prizePool ? prizePool.replace(/[^0-9.]/g, "") : "";
  const resolvedPrice = offerPrice !== undefined ? String(offerPrice) : (numericPrize || "0");

  const offers = {
    "@type": "Offer",
    name: prizePool ? "Registration & Prize Pool Eligibility" : "Free Participation",
    price: resolvedPrice,
    priceCurrency: priceCurrency,
    availability: "https://schema.org/InStock",
    url: url,
    validFrom: startDate,
    ...(endDate ? { validThrough: endDate } : {}),
  };

  // Connected organization
  const organizer = {
    "@type": "EducationalOrganization",
    "@id": "https://ibafoundation.org/#organization",
    name: organizerName,
    url: organizerUrl,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Event", "Hackathon"],
    additionalType: "https://schema.org/Hackathon",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    startDate,
    endDate,
    eventAttendanceMode,
    eventStatus,
    location,
    organizer,
    offers,
    ...(prizePool ? { award: prizePool, prizePool } : {}),
    problemStatement,
    eligibility,
    ...(eligibility.length > 0
      ? {
          audience: {
            "@type": "Audience",
            audienceType: eligibility.join(", "),
          },
        }
      : {}),
    about: [
      {
        "@type": "Thing",
        name: category,
        description: problemStatement,
      },
    ],
  };

  const jsonString = JSON.stringify(schema, null, 2).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export default EventSchema;
