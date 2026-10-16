export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IBA Foundation",
    slogan: "Potential, put into practice.",
    description:
      "We bring ambitious people together to think critically, experiment boldly, and build solutions to real-world problems.",
    url: "https://ibafoundation.org",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
