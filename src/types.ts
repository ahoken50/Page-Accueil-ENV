import type { LucideIcon } from 'lucide-react';

export interface ServiceLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  colorTheme: 'blue' | 'green' | 'amber' | 'emerald';
}