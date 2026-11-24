export type SpecialtyId = 'rpg' | 'pilates' | 'reabilitacao' | 'ergonomia';

export type BookingSpecialty =
  | 'Reeducação Postural Global (RPG)'
  | 'Pilates Clínico Terapêutico'
  | 'Reabilitação Ortopédica e Funcional'
  | 'Avaliação Biomecânica Inicial';

export type BookingPeriod = 'Manhã' | 'Tarde' | 'Noite';

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  unit: string;
  label: string;
}

export interface SpecialtyItem {
  id: SpecialtyId;
  index: string;
  title: string;
  bookingLabel: BookingSpecialty;
  category: string;
  duration: string;
  summary: string;
  description: string;
  indications: string[];
  methodology: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  specialty: string;
  timeframe: string;
  quote: string;
  outcome: string;
}

export interface CredentialItem {
  id: string;
  code: string;
  title: string;
  detail: string;
}

export interface CareStep {
  index: string;
  title: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  specialty: BookingSpecialty;
  period: BookingPeriod;
  preferredDate: string;
  notes: string;
}
