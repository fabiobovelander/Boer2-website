
import { Hammer, Droplets, Zap, Home, ShieldCheck, Ruler } from 'lucide-react';
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bouw',
    title: 'Bouw & Renovatie',
    description: 'Wij verzorgen complete verbouwingen, aanbouw en renovaties. Van het constructieve tekenwerk tot de afwerking van de plinten; wij coördineren het geheel voor een zorgeloos resultaat.',
    icon: 'Hammer'
  },
  {
    id: 'installatie',
    title: 'Installatietechniek',
    description: 'Onze installateurs verzorgen vakkundig loodgieterswerk, centrale verwarming en luxe sanitair. Wij garanderen een veilige installatie die voldoet aan de modernste normen.',
    icon: 'Droplets'
  },
  {
    id: 'elektra',
    title: 'Elektrotechniek',
    description: 'Van het vervangen van uw meterkast tot het aanleggen van complete domotica-systemen. Wij zorgen for een betrouwbaar en toekomstbestendig elektra-netwerk.',
    icon: 'Zap'
  },
  {
    id: 'duurzaam',
    title: 'Verduurzaming',
    description: 'Bespaar op uw energiekosten met onze duurzame oplossingen. Wij adviseren en installeren warmtepompen, zonnepanelen en hybride systemen.',
    icon: 'Home'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Zonnepanelen Installatie',
    category: 'Duurzaamheid',
    image: 'project1.jpg',
    description: 'Dit project omvatte het vakkundig plaatsen en aansluiten van zonnepanelen. Focus op veiligheid, een nette afwerking en een correcte technische installatie.'
  },
  {
    id: '2',
    title: 'Aanbouw / Verbouwing Woning',
    category: 'Bouw',
    image: 'project2.jpg',
    description: 'Realisatie van een woninguitbreiding in de aanbouwfase. Inclusief alle bouwkundige werkzaamheden, constructie en voorbereiding voor verdere afwerking.'
  },
  {
    id: '3',
    title: 'Keukenrenovatie / Installatie',
    category: 'Installatie',
    image: 'project3.jpg',
    description: 'Het plaatsen en installeren van een moderne keuken. Inclusief alle benodigde elektra, professionele afwerking en een functionele indeling.'
  }
];

export const ICON_MAP: Record<string, any> = {
  Hammer: Hammer,
  Droplets: Droplets,
  Zap: Zap,
  Home: Home,
  ShieldCheck: ShieldCheck,
  Ruler: Ruler
};
