import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, HERO_MEDIA, HERO_METRICS } from '../data/clinicData';
import { CountUpNumber } from './CountUpNumber';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  onContactClick: () => void;
}

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  },
};

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden clinical-surface-gradient pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 clinical-grain opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between lg:col-span-7 lg:py-4"
          >
            <div className="space-y-6 sm:space-y-7">
              <motion.p
                variants={heroItemVariants}
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm"
              >
                <span className="font-semibold text-primary">Fisioterapia Clínica e Regenerativa</span>
                <span aria-hidden="true">·</span>
                <span>RPG</span>
                <span aria-hidden="true">·</span>
                <span>Pilates Clínico</span>
                <span aria-hidden="true">·</span>
                <span>Reabilitação Funcional</span>
              </motion.p>

              <motion.h1
                variants={heroItemVariants}
                className="font-display max-w-3xl text-[clamp(2.85rem,5.4vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground [text-wrap:balance]"
              >
                Precisão clínica para devolver movimento sem dor ao seu corpo.
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="max-w-2xl text-base leading-[1.65] text-muted-foreground sm:text-lg"
              >
                Na <strong className="font-semibold text-foreground">{CLINIC_INFO.brandName}</strong>,
                cada protocolo parte de uma avaliação biomecânica minuciosa. Integramos
                Reeducação Postural Global, Pilates Clínico e terapia manual para restaurar a
                função articular com critério científico e acompanhamento individualizado.
              </motion.p>

              <motion.div
                variants={heroItemVariants}
                className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6"
              >
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-clinical transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-clinical-elevated whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>

                <a
                  href="#especialidades"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-foreground transition-colors duration-150 hover:text-primary whitespace-nowrap shrink-0"
                >
                  <span>Explorar especialidades</span>
                  <ArrowDownRight className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground sm:text-sm"
            >
              <span className="inline-flex items-center gap-2 font-medium text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                Atendimento 100% individualizado por hora marcada
              </span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span>Protocolos baseados em evidências clínicas</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-clinical">
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:flex-1">
                <ImageWithFallback
                  src={HERO_MEDIA.image}
                  alt={HERO_MEDIA.imageAlt}
                  loading="eager"
                  fallbackLabel="Consultório Maiza Cunha Fisioterapia"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-border bg-surface px-5 py-3.5 text-xs text-muted-foreground">
                <span>{HERO_MEDIA.caption}</span>
                <span className="font-display font-semibold text-primary whitespace-nowrap shrink-0">
                  60 min / sessão
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Faixa de métricas clínicas em linha completa abaixo do split principal */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-surface shadow-clinical sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:mt-16 lg:grid-cols-4"
        >
          {HERO_METRICS.map((metric) => (
            <div key={metric.id} className="flex flex-col justify-between gap-2 p-6 sm:p-7">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <CountUpNumber value={metric.value} suffix={metric.suffix} />
                </span>
                <span className="text-xs font-semibold text-primary whitespace-nowrap">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
