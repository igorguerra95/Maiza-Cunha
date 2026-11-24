import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Quote } from 'lucide-react';
import { SPECIALTIES, TESTIMONIALS } from '../data/clinicData';
import type { BookingSpecialty, SpecialtyId } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialty: BookingSpecialty) => void;
}

export function SpecialtiesSection({
  onSelectSpecialtyForBooking,
}: SpecialtiesSectionProps) {
  const [activeId, setActiveId] = useState<SpecialtyId>('rpg');

  const activeSpecialty =
    SPECIALTIES.find((item) => item.id === activeId) || SPECIALTIES[0];

  return (
    <section
      id="especialidades"
      className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
              Especialidades Clínicas
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground [text-wrap:balance]">
              Condutas terapêuticas desenhadas para a raiz mecânica da dor.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
            Cada especialidade atua em sinergia para corrigir desequilíbrios posturais,
            estabilizar articulações vulneráveis e consolidar ganhos funcionais duradouros.
          </p>
        </motion.div>

        {/* Seletor interativo de protocolo clínico */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 rounded-2xl border border-border bg-surface p-4 shadow-clinical sm:p-6"
        >
          <div
            role="tablist"
            aria-label="Explorar protocolos clínicos por especialidade"
            className="flex flex-wrap gap-2 border-b border-border pb-4"
          >
            {SPECIALTIES.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(item.id)}
                  className={`inline-flex min-h-[40px] items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer sm:text-sm ${
                    isSelected
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-surface-subtle text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="tabular-nums opacity-80">{item.index}.</span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            aria-label={activeSpecialty.title}
            className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center"
          >
            <div className="space-y-4 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">
                  {activeSpecialty.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeSpecialty.duration}</span>
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {activeSpecialty.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {activeSpecialty.description}
              </p>

              <div className="pt-1">
                <p className="text-xs font-semibold text-foreground">
                  Metodologia aplicada
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {activeSpecialty.methodology}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 rounded-xl border border-border bg-surface-subtle p-5 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Principais indicações clínicas
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeSpecialty.indications.map((indication) => (
                    <li
                      key={indication}
                      className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span>{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectSpecialtyForBooking(activeSpecialty.bookingLabel)
                }
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grade assimétrica das especialidades */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SPECIALTIES.map((item, idx) => {
            const colSpanClass =
              idx === 0
                ? 'lg:col-span-7'
                : idx === 1
                ? 'lg:col-span-5'
                : 'lg:col-span-6';

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.06,
                  ease: 'easeOut',
                }}
                className={`${colSpanClass} group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface shadow-clinical transition-all duration-200 hover:-translate-y-1 hover:shadow-clinical-elevated`}
              >
                {item.image && (
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface-subtle">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      loading="lazy"
                      fallbackLabel={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-7">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                      <span className="font-medium text-primary">
                        {item.category}
                      </span>
                      <span className="tabular-nums font-medium">
                        {item.index}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.duration}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        onSelectSpecialtyForBooking(item.bookingLabel)
                      }
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary-hover whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Entrar em contato</span>
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Prova clínica adjacente: Depoimentos de Recuperação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-16 border-t border-border pt-14 sm:mt-20 sm:pt-16"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                Depoimentos de Recuperação
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl [text-wrap:balance]">
                Resultados funcionais acompanhados da primeira avaliação à alta.
              </h3>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Relatos clínicos de pacientes que concluíram protocolos de reabilitação postural,
              ortopédica e Pilates Clínico.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: 'easeOut',
                }}
                className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-6 shadow-clinical transition-all duration-200 hover:-translate-y-1 hover:shadow-clinical-elevated"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium text-primary">
                      {testimonial.specialty}
                    </span>
                    <Quote
                      className="h-4 w-4 text-muted-foreground/60"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-sm leading-relaxed text-foreground">
                    “{testimonial.quote}”
                  </p>
                </div>

                <footer className="space-y-2 border-t border-border pt-4">
                  <p className="text-xs font-medium text-primary">
                    {testimonial.outcome}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                    <cite className="font-semibold not-italic text-foreground">
                      {testimonial.name}
                    </cite>
                    <span aria-hidden="true">·</span>
                    <span>{testimonial.context}</span>
                    <span aria-hidden="true">·</span>
                    <span>{testimonial.timeframe}</span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
