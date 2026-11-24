import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import {
  ABOUT_MEDIA,
  ACADEMIC_CREDENTIALS,
  CARE_STEPS,
  CLINIC_INFO,
} from '../data/clinicData';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="border-t border-border bg-surface-subtle/60 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna esquerda: retrato institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-clinical">
              <div className="relative aspect-[3/4] w-full overflow-hidden lg:flex-1">
                <ImageWithFallback
                  src={ABOUT_MEDIA.image}
                  alt={ABOUT_MEDIA.imageAlt}
                  loading="lazy"
                  fallbackLabel={CLINIC_INFO.professionalName}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="space-y-1 border-t border-border bg-surface px-6 py-4">
                <p className="font-display text-base font-semibold text-foreground">
                  {CLINIC_INFO.professionalName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {CLINIC_INFO.roleTitle}
                </p>
              </figcaption>
            </figure>
          </motion.div>

          {/* Coluna direita: formação acadêmica e protocolo clínico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-8 lg:col-span-7"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                Sobre a Profissional
              </p>

              <h2 className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground [text-wrap:balance]">
                Formação acadêmica sólida aliada à escuta clínica atenta.
              </h2>

              <p className="text-sm leading-[1.7] text-muted-foreground sm:text-base">
                A condução clínica de <strong className="font-semibold text-foreground">{CLINIC_INFO.professionalName}</strong> nasce da
                integração entre anatomia aplicada, raciocínio biomecânico e reabilitação
                funcional progressiva. Cada consulta é conduzida diretamente pela
                fisioterapeuta, garantindo continuidade técnica e ajustes precisos a cada
                etapa da recuperação.
              </p>
            </div>

            {/* Grade de formação acadêmica */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-foreground sm:text-sm">
                <GraduationCap className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>Formação Acadêmica e Qualificações</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ACADEMIC_CREDENTIALS.map((cred) => (
                  <div
                    key={cred.id}
                    className="rounded-xl border border-border bg-surface p-5 shadow-clinical transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <p className="text-xs font-semibold text-primary">
                      {cred.code}
                    </p>
                    <h3 className="mt-1.5 font-display text-base font-semibold tracking-tight text-foreground">
                      {cred.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {cred.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocolo em 3 fases */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-clinical">
              <p className="text-xs font-semibold text-foreground sm:text-sm">
                Jornada Clínica Estruturada
              </p>

              <div className="mt-5 grid grid-cols-1 gap-6 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                {CARE_STEPS.map((step, idx) => (
                  <div
                    key={step.index}
                    className={idx > 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''}
                  >
                    <span className="font-display text-xs font-semibold tabular-nums text-primary">
                      {step.index}
                    </span>
                    <h4 className="mt-1.5 font-display text-sm font-semibold text-foreground sm:text-base">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {ABOUT_MEDIA.caption}
                </p>

                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
