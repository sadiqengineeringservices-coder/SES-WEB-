import {
  Sun,
  Fence,
  Layers,
  Warehouse,
  Spline,
  Ruler,
  Flame,
  Cog,
  DoorOpen,
  Sofa,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Sun,
    title: 'Solar Fabrication',
    description: 'Custom-designed elevated mounts engineered for maximum structural integrity and solar yield.',
  },
  {
    icon: Fence,
    title: 'Chain Link Fencing',
    description: 'High-tensile galvanized security fencing built to withstand harsh environments and intrusion.',
  },
  {
    icon: Layers,
    title: 'MS Platform',
    description: 'Heavy-duty industrial staging and access platforms fabricated to precise load specifications.',
  },
  {
    icon: Warehouse,
    title: 'Shades & Canopies',
    description: 'Fiberglass and industrial warehouse shades that protect assets and personnel from the elements.',
  },
  {
    icon: Spline,
    title: 'Barbed & Razor Wire',
    description: 'High-security coiled fencing solutions for perimeters demanding uncompromising deterrence.',
  },
  {
    icon: Ruler,
    title: 'Commercial Racks',
    description: 'Custom SS shelving and warehouse organizers built to maximize storage density and flow.',
  },
  {
    icon: Flame,
    title: 'Custom Arc & MIG Welding',
    description: 'High-durability structural metal fusion and repair performed by certified welders.',
  },
  {
    icon: Cog,
    title: 'Precision Lathe Operations',
    description: 'Turning, threading, and milling of custom metal parts to exacting tolerances.',
  },
  {
    icon: DoorOpen,
    title: 'Ornamental Gates & Grills',
    description: 'Laser-cut safety gates and architectural steel stairs that blend security with aesthetics.',
  },
  {
    icon: Sofa,
    title: 'MS / SS Furniture',
    description: 'Custom-fabricated commercial and residential metal frames finished to premium standards.',
  },
];

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

export const portfolio: PortfolioItem[] = [
  {
    image: 'https://images.pexels.com/photos/4320475/pexels-photo-4320475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Elevated Solar Mounts',
    category: 'Solar Fabrication',
  },
  {
    image: 'https://images.pexels.com/photos/8464643/pexels-photo-8464643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'High-Tensile Fencing',
    category: 'Chain Link Fencing',
  },
  {
    image: 'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Industrial Warehouse Shades',
    category: 'Shades & Canopies',
  },
  {
    image: 'https://images.pexels.com/photos/17389946/pexels-photo-17389946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Ornamental Gate Installation',
    category: 'Gates & Grills',
  },
  {
    image: 'https://images.pexels.com/photos/28752150/pexels-photo-28752150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Precision Lathe Work',
    category: 'Lathe Operations',
  },
  {
    image: 'https://images.pexels.com/photos/5846282/pexels-photo-5846282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Structural Welding',
    category: 'Arc & MIG Welding',
  },
];
