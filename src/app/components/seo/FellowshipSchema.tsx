import React from "react";
import type { FellowshipProgram } from "@/src/types/seo";

export interface FellowshipSchemaEvaluationCriterion {
  title: string;
  description: string;
}

export interface FellowshipSchemaTimelineItem {
  phase: string;
  date: string;
}

export interface FellowshipSchemaProps {
  /** Optional partial fellowship program data */
  fellowship?: Partial<FellowshipProgram>;
  /** Program name override */
  name?: string;
  /** Program tagline or slogan */
  tagline?: string;
  /** Program duration string (e.g. "12 Weeks") */
  duration?: string;
  /** Cohort label (e.g. "Cohort 2026-Q4") */
  cohort?: string;
  /** Stipend or monetary grant description (e.g. "$15,000 Equity-Free Grant") */
  stipendOrGrant?: string;
  /** Program overview or detailed description */
  overview?: string;
  /** Program description alias */
  description?: string;
  /** Educational program mode (e.g. "hybrid", "online", "in-person") */
  educationalProgramMode?: string;
  /** Evaluation criteria checklist */
  evaluationCriteria?: FellowshipSchemaEvaluationCriterion[];
  /** Application timeline phases */
  applicationTimeline?: FellowshipSchemaTimelineItem[];
  /** Canonical URL for fellowship landing page */
  url?: string;
  /** ISO currency code for financial aid / grant */
  currency?: string;
  /** Provider name override (defaults to "IBA Foundation") */
  providerName?: string;
  /** Provider URL override */
  providerUrl?: string;
  /** Funder name override (defaults to "IBA Foundation") */
  funderName?: string;
  /** Funder URL override */
  funderUrl?: string;
}

export function FellowshipSchema(props: FellowshipSchemaProps = {}) {
  const {
    fellowship,
    name: overrideName,
    tagline: overrideTagline,
    duration: overrideDuration,
    cohort: overrideCohort,
    stipendOrGrant: overrideStipendOrGrant,
    overview: overrideOverview,
    description: overrideDescription,
    educationalProgramMode = "hybrid",
    evaluationCriteria: overrideEvaluationCriteria,
    applicationTimeline: overrideApplicationTimeline,
    url = "https://ibafoundation.org/fellowship",
    currency = "USD",
    providerName = "IBA Foundation",
    providerUrl = "https://ibafoundation.org",
    funderName = "IBA Foundation",
    funderUrl = "https://ibafoundation.org",
  } = props;

  const name = overrideName ?? fellowship?.name ?? "IBA Foundation Builder Fellowship";
  const tagline =
    overrideTagline ??
    fellowship?.tagline ??
    "Empowering high-conviction founders and engineers with capital, mentorship, and deep-tech incubation.";
  const duration = overrideDuration ?? fellowship?.duration ?? "12 Weeks";
  const cohort = overrideCohort ?? fellowship?.cohort ?? "Cohort 2026-Q4";
  const stipendOrGrant =
    overrideStipendOrGrant ?? fellowship?.stipendOrGrant ?? "$15,000 Equity-Free Grant & Living Stipend";
  const overview =
    overrideDescription ??
    overrideOverview ??
    fellowship?.overview ??
    "The IBA Foundation Builder Fellowship is an intensive equity-free incubation program providing visionary engineers, researchers, and creators with financial grants, dedicated workspace, computing resources, and mentorship to build transformative technology ventures.";

  const evaluationCriteria =
    overrideEvaluationCriteria ??
    fellowship?.evaluationCriteria ?? [
      {
        title: "Technical Rigor & Execution Speed",
        description: "Proven capability to architect and implement complex technological systems with high velocity.",
      },
      {
        title: "Thesis Depth & Problem Conviction",
        description: "Compelling insight into a structural inefficiency, emerging technological frontier, or critical challenge.",
      },
      {
        title: "Founder Resilience & Team Dynamics",
        description: "Relentless perseverance, adaptability, and collaborative problem-solving under ambiguity.",
      },
    ];

  const applicationTimeline =
    overrideApplicationTimeline ??
    fellowship?.applicationTimeline ?? [
      { phase: "Application Period Opens", date: "2026-10-01" },
      { phase: "Application Deadline", date: "2026-11-15" },
      { phase: "Finalist Pitch & Review", date: "2026-11-22" },
      { phase: "Cohort Kickoff & Grant Disbursement", date: "2026-12-01" },
    ];

  const deadlineItem = applicationTimeline.find((item) =>
    /deadline|close|cutoff/i.test(item.phase)
  );
  const kickoffItem = applicationTimeline.find((item) =>
    /kickoff|start|commence|launch/i.test(item.phase)
  );

  const numericAmount = stipendOrGrant.replace(/[^0-9.]/g, "");

  const monetaryGrant = {
    "@type": ["FinancialAid", "MonetaryGrant"],
    "@id": `${url}#financial-aid`,
    name: `${name} Grant & Fellowship Stipend`,
    description: stipendOrGrant,
    ...(numericAmount
      ? {
          amount: {
            "@type": "MonetaryAmount",
            currency: currency,
            value: numericAmount,
          },
        }
      : {}),
    funder: {
      "@type": "EducationalOrganization",
      "@id": "https://ibafoundation.org/#organization",
      name: funderName,
      url: funderUrl,
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": `${url}#program`,
    name,
    slogan: tagline,
    description: overview,
    url,
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://ibafoundation.org/#organization",
      name: providerName,
      url: providerUrl,
    },
    funder: {
      "@type": "EducationalOrganization",
      "@id": "https://ibafoundation.org/#organization",
      name: funderName,
      url: funderUrl,
    },
    timeToComplete: duration,
    termDuration: duration,
    cohort,
    educationalProgramMode,
    financialAidEligible: true,
    financialAid: monetaryGrant,
    stipendOrGrant,
    ...(deadlineItem ? { applicationDeadline: deadlineItem.date } : {}),
    ...(kickoffItem ? { startDate: kickoffItem.date } : {}),
    programPrerequisites: evaluationCriteria.map((criterion) => ({
      "@type": "AlignmentObject",
      alignmentType: "educationalRequirement",
      targetName: criterion.title,
      targetDescription: criterion.description,
    })),
    evaluationCriteria,
    hasPart: applicationTimeline.map((item, index) => ({
      "@type": "Action",
      position: index + 1,
      name: item.phase,
      startTime: item.date,
      description: `${item.phase} for ${cohort}`,
    })),
    applicationTimeline,
  };

  const jsonString = JSON.stringify(schema, null, 2).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export default FellowshipSchema;
