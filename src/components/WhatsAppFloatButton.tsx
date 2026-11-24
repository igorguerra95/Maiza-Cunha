import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function WhatsAppFloatButton() {
  const message =
    'Olá! Gostaria de entrar em contato para agendar uma avaliação na Maiza Cunha Fisioterapia.';
  const href = `https://wa.me/${CLINIC_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <div className="relative inline-flex items-center justify-center">
        <span
          aria-hidden="true"
          className="wa-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-primary/40"
        />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Entrar em contato via WhatsApp (${CLINIC_INFO.phone})`}
          title={`WhatsApp: ${CLINIC_INFO.phone}`}
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-clinical-elevated transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-hover sm:h-13 sm:w-auto sm:gap-2.5 sm:px-5"
        >
          <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.85} aria-hidden="true" />
          <span className="hidden text-xs font-semibold whitespace-nowrap sm:inline">
            Entrar em contato
          </span>
        </a>
      </div>
    </div>
  );
}
