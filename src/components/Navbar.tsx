import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileCta = () => {
    setMobileOpen(false);
    onContactClick();
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="font-display text-base font-semibold tracking-tight text-foreground whitespace-nowrap shrink-0 sm:text-lg"
          >
            {CLINIC_INFO.brandName}
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-sheet"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-subtle md:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobile-navigation-sheet" aria-label="Menu de navegação">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-foreground/30 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-[84%] max-w-sm flex-col justify-between border-l border-border bg-background p-6 shadow-clinical-elevated"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-display text-base font-semibold tracking-tight text-foreground">
                    {CLINIC_INFO.brandName}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Fechar menu de navegação"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-subtle cursor-pointer"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Links móveis" className="mt-6 flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNav(link.href);
                      }}
                      className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface-subtle"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs tabular-nums text-muted-foreground">
                        0{index + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 border-t border-border pt-5">
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="font-medium text-foreground">Atendimento clínico</p>
                  <p>{CLINIC_INFO.phone}</p>
                  <p>{CLINIC_INFO.address}</p>
                </div>

                <button
                  type="button"
                  onClick={handleMobileCta}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
