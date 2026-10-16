import type { MetadataRoute } from 'next';

interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
}

const routes: SitemapRoute[] = [
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    path: '/fellowship',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/challenges',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/programs',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/showcase',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/values',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/locations',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/playbooks',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/playbooks/hackathon-to-startup',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/playbooks/hardware-rapid-prototyping',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/playbooks/venture-scale-roadmaps',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/playbooks/ai-agent-production-patterns',
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  {
    path: '/blog',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/blog/potential-is-common-demonstrated-ability-is-rare',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/blog/ideas-are-cheap-execution-is-a-discipline',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/feed.xml',
    priority: 0.8,
    changeFrequency: 'daily',
  },
];



export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ibafoundation.org').replace(/\/+$/, '');
  const now = new Date();

  return routes.map((route) => ({
    url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
