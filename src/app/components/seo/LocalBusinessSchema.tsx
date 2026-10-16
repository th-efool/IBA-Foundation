import type { InnovationHubLocation, PostalAddress, GeoCoordinates } from "@/src/types/seo";

export const innovationHubs: InnovationHubLocation[] = [
  {
    id: "hq-bengaluru",
    name: "IBA Foundation Innovation HQ",
    hubType: "Headquarters",
    city: "Bengaluru",
    address: {
      streetAddress: "42 Residency Road, Ashok Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560025",
      addressCountry: "IN",
    },
    geo: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    telephone: "+91-80-4123-8900",
    openingHours: "Mo-Fr 09:00-18:00",
    description:
      "Global headquarters and primary incubation studio for IBA Foundation fellowships, hardware labs, and multidisciplinary challenges.",
    mapUrl: "https://maps.google.com/?q=12.9716,77.5946",
  },
  {
    id: "hub-mumbai",
    name: "IBA Western India Innovation Chapter",
    hubType: "Regional Hub",
    city: "Mumbai",
    address: {
      streetAddress: "Maker Maxity, 4th Floor, Bandra Kurla Complex",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400051",
      addressCountry: "IN",
    },
    geo: {
      latitude: 19.066,
      longitude: 72.8687,
    },
    telephone: "+91-22-6789-4321",
    openingHours: "Mo-Fr 09:30-18:30",
    description:
      "Regional node driving fintech, climate risk modeling, and decentralized computing initiatives across Western India.",
    mapUrl: "https://maps.google.com/?q=19.0660,72.8687",
  },
  {
    id: "hub-delhi",
    name: "IBA North India Innovation Chapter",
    hubType: "Regional Hub",
    city: "New Delhi",
    address: {
      streetAddress: "Innov8 Hub, Connaught Place, Block L",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      latitude: 28.6328,
      longitude: 77.2197,
    },
    telephone: "+91-11-4987-6543",
    openingHours: "Mo-Fr 09:00-18:00",
    description:
      "Public policy, climate engineering, and AI governance accelerator bridging academic research with institutional partners.",
    mapUrl: "https://maps.google.com/?q=28.6328,77.2197",
  },
  {
    id: "hub-hyderabad",
    name: "IBA Telangana Systems Lab",
    hubType: "Regional Hub",
    city: "Hyderabad",
    address: {
      streetAddress: "T-Hub Phase 2, Madhapur, HITEC City",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      latitude: 17.4485,
      longitude: 78.3742,
    },
    telephone: "+91-40-2345-6789",
    openingHours: "Mo-Fr 09:00-18:00",
    description:
      "Specialized systems lab focusing on semiconductor prototyping, robotics hardware, and edge AI acceleration.",
    mapUrl: "https://maps.google.com/?q=17.4485,78.3742",
  },
  {
    id: "chapter-pune",
    name: "IBA Academic Innovation Node - Pune",
    hubType: "University Chapter",
    city: "Pune",
    address: {
      streetAddress: "COEP Technological University Campus, Shivajinagar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411005",
      addressCountry: "IN",
    },
    geo: {
      latitude: 18.5308,
      longitude: 73.8553,
    },
    telephone: "+91-20-2550-7000",
    openingHours: "Mo-Sa 10:00-17:00",
    description:
      "Student-led multidisciplinary sandbox supporting undergraduate fellows, open-source builds, and hardware hackathons.",
    mapUrl: "https://maps.google.com/?q=18.5308,73.8553",
  },
];

export function formatHubToSchema(hub: InnovationHubLocation) {
  const schema: Record<string, unknown> = {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `https://ibafoundation.org/locations#${hub.id}`,
    name: hub.name,
    description: hub.description,
    url: `https://ibafoundation.org/locations#${hub.id}`,
  };

  if (hub.telephone) {
    schema.telephone = hub.telephone;
  }
  if (hub.openingHours) {
    schema.openingHours = hub.openingHours;
  }

  schema.address = {
    "@type": "PostalAddress",
    streetAddress: hub.address.streetAddress,
    addressLocality: hub.address.addressLocality,
    addressRegion: hub.address.addressRegion,
    postalCode: hub.address.postalCode,
    addressCountry: hub.address.addressCountry,
  };

  schema.geo = {
    "@type": "GeoCoordinates",
    latitude: hub.geo.latitude,
    longitude: hub.geo.longitude,
  };

  if (hub.mapUrl) {
    schema.hasMap = hub.mapUrl;
  }

  schema.parentOrganization = {
    "@type": "Organization",
    name: "IBA Foundation",
    url: "https://ibafoundation.org",
  };

  return schema;
}

export interface LocalBusinessSchemaProps {
  hubs?: InnovationHubLocation[];
  hubId?: string;
}

export function LocalBusinessSchema({
  hubs,
  hubId,
}: LocalBusinessSchemaProps = {}) {
  const targetHubs = hubs && hubs.length > 0 ? hubs : innovationHubs;

  let schema: Record<string, unknown> | null = null;

  if (hubId) {
    const singleHub = targetHubs.find((h) => h.id === hubId);
    if (singleHub) {
      schema = {
        "@context": "https://schema.org",
        ...formatHubToSchema(singleHub),
      };
    }
  } else if (targetHubs.length === 1) {
    schema = {
      "@context": "https://schema.org",
      ...formatHubToSchema(targetHubs[0]),
    };
  } else if (targetHubs.length > 1) {
    schema = {
      "@context": "https://schema.org",
      "@graph": targetHubs.map(formatHubToSchema),
    };
  }

  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default LocalBusinessSchema;
