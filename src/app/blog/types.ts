export interface BlogPostSection {
  id: string;
  heading: string;
  directAnswer: string;
  paragraphs: string[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    text: string;
  };
}

export interface BlogImage {
  url: string;
  alt: string;
  caption: string;
  prompt: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogReference {
  citation: string;
  source: string;
  year: number;
  url: string;
  keyFinding: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  seriesNumber: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  tldr: string[];
  metaDescription: string;
  keywords: string[];
  heroImage: BlogImage;
  inlineImages: BlogImage[];
  sections: BlogPostSection[];
  faqs: BlogFAQ[];
  references: BlogReference[];
}
