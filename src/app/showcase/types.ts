export type ProjectCategory = "All" | "AI" | "Robotics" | "Climate" | "Systems";

export interface Builder {
  name: string;
  role: string;
  universityOrOrg: string;
  initials: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface AwardInfo {
  title: string;
  tier: "grand" | "distinction" | "honor" | "special";
  year: string;
}

export interface JudgeNote {
  quote: string;
  judgeName: string;
  judgeRole: string;
  institution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI" | "Robotics" | "Climate" | "Systems";
  cohort: string;
  date: string;
  featured?: boolean;
  award: AwardInfo;
  builders: Builder[];
  judgeNotes: JudgeNote;
  techStack: string[];
  metrics: ProjectMetric[];
  links: {
    demoUrl?: string;
    githubUrl?: string;
    paperUrl?: string;
    videoUrl?: string;
  };
  architectureHighlights?: string[];
  problemStatement?: string;
}

export interface ShowcaseStat {
  label: string;
  value: string;
  description: string;
}
