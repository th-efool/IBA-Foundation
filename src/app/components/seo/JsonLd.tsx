import type { OrganizationMetadata, PostalAddress } from "@/src/types/seo";

export interface JsonLdProps {
  customData?: Partial<OrganizationMetadata>;
}

const DEFAULT_POSTAL_ADDRESS: PostalAddress = {
  streetAddress: "100 Innovation Boulevard",
  addressLocality: "San Francisco",
  addressRegion: "CA",
  postalCode: "94107",
  addressCountry: "US",
};

export function JsonLd({ customData }: { customData?: Partial<OrganizationMetadata> } = {}) {
  const baseUrl = customData?.url
    ? customData.url.replace(/\/+$/, "")
    : "https://ibafoundation.org";
  const orgId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;

  const address = customData?.address ?? DEFAULT_POSTAL_ADDRESS;

  const graphData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "NGO"],
        "@id": orgId,
        name: customData?.name ?? "IBA Foundation",
        alternateName: ["IBA", "IBA Innovation Foundation"],
        legalName: customData?.legalName ?? "IBA Foundation",
        slogan: customData?.slogan ?? "Potential, put into practice.",
        description:
          customData?.description ??
          "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",
        url: baseUrl,
        logo: customData?.logo ?? "https://ibafoundation.org/images/icon-512.png",
        sameAs: customData?.sameAs ?? [
          "https://twitter.com/ibafoundation",
          "https://linkedin.com/company/ibafoundation",
          "https://github.com/ibafoundation",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Robotics & Hardware",
          "Climate & Clean Energy",
          "Open Innovation",
          "Decentralized Systems",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          email: customData?.email ?? "contact@ibafoundation.org",
        },
        ...(customData?.foundingDate ? { foundingDate: customData.foundingDate } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: baseUrl,
        name: customData?.name ?? "IBA Foundation",
        description:
          customData?.description ??
          "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",
        publisher: {
          "@id": orgId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
}
