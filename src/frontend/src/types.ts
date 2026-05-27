export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface InsightCard {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface PhoneFeature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
