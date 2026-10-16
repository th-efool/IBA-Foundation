export interface OrganizationMetadata {
  name: string;
  legalName?: string;
  url: string;
  logo: string;
  description: string;
  slogan?: string;
  foundingDate?: string;
  email?: string;
  sameAs: string[];
  address?: PostalAddress;
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface InnovationHubLocation {
  id: string;
  name: string;
  hubType: "Headquarters" | "Regional Hub" | "University Chapter";
  city: string;
  address: PostalAddress;
  geo: GeoCoordinates;
  telephone?: string;
  openingHours?: string;
  description: string;
  mapUrl?: string;
}

export interface ChallengeItem {
  id: string;
  title: string;
  slug: string;
  category: "AI & Systems" | "Climate & Energy" | "Hardware & Robotics" | "Decentralized Tech" | "Open Innovation";
  status: "Open" | "In Review" | "Completed";
  prizePool?: string;
  deadline?: string;
  description: string;
  problemStatement: string;
  eligibility: string[];
}

export interface FellowshipProgram {
  name: string;
  tagline: string;
  duration: string;
  cohort: string;
  stipendOrGrant: string;
  overview: string;
  evaluationCriteria: {
    title: string;
    description: string;
  }[];
  applicationTimeline: {
    phase: string;
    date: string;
  }[];
}

export interface ProjectShowcaseItem {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  challengeRef?: string;
  builders: {
    name: string;
    role: string;
    githubOrProfile?: string;
  }[];
  description: string;
  demoUrl?: string;
  repoUrl?: string;
  impactMetrics: string[];
}
