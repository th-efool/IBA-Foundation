export interface ProgrammeMetric {
  icon: 'trophy' | 'users' | 'award' | 'calendar';
  label?: string;
  value: string;
}

export interface ProgrammeItem {
  id: string;
  category: string;
  badge?: {
    text: string;
    variant: 'closed' | 'open' | 'featured';
  };
  title: string;
  subtitle: string;
  image: string;
  leftMetric: ProgrammeMetric;
  rightMetric: ProgrammeMetric;
  href?: string;
}
