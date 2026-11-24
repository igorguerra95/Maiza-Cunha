import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-subtle/70 py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="space-y-2 md:col-span-5">
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              {CLINIC_INFO.brandName}
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Reabilitação funcional, Reeducação Postural Global (RPG) e Pilates
              Clínico com atendimento individualizado e critério científico.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground md:col-span-4"
          >
            <a href="#inicio" className="transition-colors hover:text-foreground">
              Início
            </a>
            <a
              href="#especialidades"
              className="transition-colors hover:text-foreground"
            >
              Especialidades
            </a>
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>

          <div className="space-y-1.5 text-xs text-muted-foreground md:col-span-3 md:text-right">
            <p className="font-medium text-foreground">{CLINIC_INFO.phone}</p>
            <p>{CLINIC_INFO.address}</p>
            <p>Horário: {CLINIC_INFO.hours}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {currentYear} {CLINIC_INFO.brandName}. Todos os direitos reservados.
          </p>
          <p>Fisioterapia Clínica · Atendimento mediante agendamento</p>
        </div>
      </div>
    </footer>
  );
}
