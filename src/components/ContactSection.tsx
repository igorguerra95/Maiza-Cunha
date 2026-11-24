import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import type {
  BookingFormData,
  BookingPeriod,
  BookingSpecialty,
} from '../types';

interface ContactSectionProps {
  selectedSpecialty: BookingSpecialty;
  onSpecialtyChange: (specialty: BookingSpecialty) => void;
}

const SPECIALTY_OPTIONS: BookingSpecialty[] = [
  'Reeducação Postural Global (RPG)',
  'Pilates Clínico Terapêutico',
  'Reabilitação Ortopédica e Funcional',
  'Avaliação Biomecânica Inicial',
];

const PERIOD_OPTIONS: BookingPeriod[] = ['Manhã', 'Tarde', 'Noite'];

function formatBrazilianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({
  selectedSpecialty,
  onSpecialtyChange,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    specialty: selectedSpecialty,
    period: 'Manhã',
    preferredDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});
  const [submittedBooking, setSubmittedBooking] =
    useState<BookingFormData | null>(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      specialty: selectedSpecialty,
    }));
  }, [selectedSpecialty]);

  const validate = (data: BookingFormData) => {
    const nextErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (data.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo (mínimo de 3 caracteres).';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone =
        'Informe um telefone ou WhatsApp válido com DDD.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedBooking({ ...formData });
  };

  const buildWhatsAppHref = (booking?: BookingFormData | null) => {
    if (!booking) {
      const defaultMsg =
        'Olá, gostaria de entrar em contato para agendar uma avaliação na Maiza Cunha Fisioterapia.';
      return `https://wa.me/${CLINIC_INFO.whatsappDigits}?text=${encodeURIComponent(defaultMsg)}`;
    }

    const dateText = booking.preferredDate
      ? `Data preferencial: ${booking.preferredDate.split('-').reverse().join('/')}`
      : 'Data preferencial: a combinar';

    const message = [
      `Olá, gostaria de solicitar agendamento na ${CLINIC_INFO.brandName}.`,
      `Nome: ${booking.name}`,
      `Especialidade: ${booking.specialty}`,
      `Período de preferência: ${booking.period}`,
      dateText,
      `Telefone: ${booking.phone}`,
      booking.notes.trim() ? `Objetivo clínico: ${booking.notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${CLINIC_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      email: '',
      specialty: selectedSpecialty,
      period: 'Manhã',
      preferredDate: '',
      notes: '',
    });
  };

  return (
    <section
      id="contato"
      className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
              Contato e Agendamento Online
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground [text-wrap:balance]">
              Solicite sua avaliação clínica com horário reservado.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
            Selecione a especialidade indicada e o turno de sua preferência para
            iniciar seu agendamento com retorno rápido pelo canal direto da clínica.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Formulário de agendamento online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-2xl border border-border bg-surface p-6 shadow-clinical sm:p-8 lg:col-span-7"
          >
            {submittedBooking ? (
              <div
                role="status"
                aria-live="polite"
                className="space-y-6 py-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary">
                      Solicitação registrada
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">
                      Pré-agendamento estruturado com sucesso.
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      Confira os dados abaixo e conclua o envio pelo WhatsApp da clínica
                      para confirmação imediata do horário disponível.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-surface-subtle p-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-muted-foreground">Paciente</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {submittedBooking.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Telefone</dt>
                    <dd className="mt-0.5 font-medium tabular-nums text-foreground">
                      {submittedBooking.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Especialidade</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {submittedBooking.specialty}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Preferência</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {submittedBooking.period}
                      {submittedBooking.preferredDate
                        ? ` · ${submittedBooking.preferredDate.split('-').reverse().join('/')}`
                        : ''}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={buildWhatsAppHref(submittedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-clinical transition-colors duration-150 hover:bg-primary-hover whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    <span>Confirmar pelo WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-subtle cursor-pointer"
                  >
                    Fazer nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <span className="block text-xs font-semibold text-foreground sm:text-sm">
                    1. Selecione a especialidade desejada
                  </span>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {SPECIALTY_OPTIONS.map((option) => {
                      const active = formData.specialty === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            onSpecialtyChange(option);
                            setFormData((prev) => ({
                              ...prev,
                              specialty: option,
                            }));
                          }}
                          className={`flex min-h-[44px] items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition-all duration-150 cursor-pointer sm:text-sm ${
                            active
                              ? 'border-primary bg-secondary text-secondary-foreground shadow-xs'
                              : 'border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                          }`}
                        >
                          <span className="leading-snug">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold text-foreground sm:text-sm"
                    >
                      Nome completo
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      placeholder="Digite seu nome completo"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-2 min-h-[44px] w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-error">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold text-foreground sm:text-sm"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatBrazilianPhone(e.target.value);
                        setFormData((prev) => ({ ...prev, phone: formatted }));
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder="(00) 00000-0000"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-2 min-h-[44px] w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm tabular-nums text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-error">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-semibold text-foreground sm:text-sm"
                    >
                      E-mail
                    </label>
                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      placeholder="seuemail@exemplo.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-2 min-h-[44px] w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-error">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold text-foreground sm:text-sm"
                    >
                      Data preferencial (opcional)
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="booking-date"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredDate: e.target.value,
                          }))
                        }
                        className="min-h-[44px] w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm tabular-nums text-foreground transition-colors focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-foreground sm:text-sm">
                    Período de preferência
                  </span>
                  <div className="mt-2.5 inline-flex flex-wrap gap-2">
                    {PERIOD_OPTIONS.map((period) => {
                      const active = formData.period === period;
                      return (
                        <button
                          key={period}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, period }))
                          }
                          className={`min-h-[40px] rounded-lg px-4 py-2 text-xs font-medium transition-colors cursor-pointer sm:text-sm ${
                            active
                              ? 'bg-primary text-primary-foreground'
                              : 'border border-border bg-background text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {period}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-semibold text-foreground sm:text-sm"
                  >
                    Objetivo clínico ou sintoma principal (opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="Descreva brevemente sua queixa, região com dor ou encaminhamento médico."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Seus dados são utilizados exclusivamente para retorno do
                    agendamento clínico.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-clinical transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-clinical-elevated whitespace-nowrap shrink-0 cursor-pointer sm:w-auto"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Painel institucional de informações de contato */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-clinical sm:p-8">
              <p className="text-xs font-semibold text-primary">
                Informações de Atendimento
              </p>
              <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {CLINIC_INFO.brandName}
              </h3>

              <dl className="mt-6 space-y-5 border-t border-border pt-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle text-primary">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Endereço do consultório
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground">
                      {CLINIC_INFO.address}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle text-primary">
                    <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Telefone e WhatsApp
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold tabular-nums text-foreground">
                      {CLINIC_INFO.phone}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle text-primary">
                    <Clock className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Horário de atendimento
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground">
                      {CLINIC_INFO.hours}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle text-primary">
                    <Calendar className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground">
                      Modelo de consulta
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-foreground">
                      Atendimento individual com hora marcada
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-7 border-t border-border pt-6">
                <a
                  href={buildWhatsAppHref(null)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Entrar em contato</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
