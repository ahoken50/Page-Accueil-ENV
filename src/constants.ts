import { Droplet, Trash2, TriangleAlert, Eye } from 'lucide-react';
import type { ServiceLink } from './types';

export const SERVICE_LINKS: ServiceLink[] = [
  {
    id: 'deversement',
    title: 'Plateforme Déversement',
    description: 'Signalement et gestion des déversements accidentels.',
    url: 'https://plateforme-deversement-vvd.web.app/',
    icon: Droplet,
    colorTheme: 'green'
  },
  {
    id: 'mdr',
    title: 'Gestion des MDR',
    description: 'Gestion des Matières Dangereuses Résiduelles.',
    url: 'https://ahoken50.github.io/Gestion-des-MDR/',
    icon: Trash2,
    colorTheme: 'green'
  },
  {
    id: 'contamine',
    title: 'Registre terrain contaminé',
    description: 'Consultation du registre des terrains contaminés.',
    url: 'https://ahoken50.github.io/R-gistre-terrain-contamin-/',
    icon: TriangleAlert,
    colorTheme: 'green'
  },
  {
    id: 'vigie',
    title: "Vigie verte Val-d'Or",
    description: 'Surveillance et initiatives environnementales.',
    url: 'https://ahoken50.github.io/Vigie-verte-Valdor/',
    icon: Eye,
    colorTheme: 'green'
  }
];