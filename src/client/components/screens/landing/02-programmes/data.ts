import { ProgrammeItem } from './types';

export const PROGRAMMES_DATA: ProgrammeItem[] = [
  {
    id: 'tech-hackathon',
    category: 'COMPETITION',
    title: 'Tech Hackathon',
    subtitle: 'Software × Engineering',
    image: '/images/section2/card1-hackathon.jpg',
    leftMetric: {
      icon: 'trophy',
      label: 'Prize Pool',
      value: '₹5,00,000',
    },
    rightMetric: {
      icon: 'calendar',
      label: 'Registration Closes',
      value: 'Oct 12, 2026',
    },
    href: '/challenges',
  },
  {
    id: 'ideathon',
    category: 'COMPETITION',
    title: 'Ideathon',
    subtitle: 'Ideas × Entrepreneurship',
    image: '/images/section2/card2-ideathon.jpg',
    leftMetric: {
      icon: 'trophy',
      label: 'Prize Pool',
      value: '₹3,00,000',
    },
    rightMetric: {
      icon: 'calendar',
      label: 'Registration Closes',
      value: 'Oct 18, 2026',
    },
    href: '/challenges',
  },
  {
    id: 'fall-residency',
    category: 'RESIDENCY',
    badge: {
      text: 'CLOSED',
      variant: 'closed',
    },
    title: 'IBA × Fall Residency',
    subtitle: 'Research × Product',
    image: '/images/section2/card3-residency.jpg',
    leftMetric: {
      icon: 'users',
      value: '25 Fellows',
    },
    rightMetric: {
      icon: 'calendar',
      label: 'Application Period',
      value: 'Aug 01 – Aug 31, 2026',
    },
    href: '/fellowship',
  },
  {
    id: 'build-fellowship',
    category: 'FELLOWSHIP',
    title: 'Build Fellowship',
    subtitle: 'Hardware × Prototyping',
    image: '/images/section2/card4-fellowship.jpg',
    leftMetric: {
      icon: 'award',
      label: 'Grant Pool',
      value: '₹10,00,000',
    },
    rightMetric: {
      icon: 'calendar',
      label: 'Applications Open',
      value: 'Nov 01, 2026',
    },
    href: '/fellowship',
  },
];
