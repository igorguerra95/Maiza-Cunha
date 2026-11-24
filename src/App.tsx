import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhatsAppFloatButton } from './components/WhatsAppFloatButton';
import type { BookingSpecialty } from './types';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<BookingSpecialty>(
    'Reeducação Postural Global (RPG)'
  );

  const scrollToContact = () => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('booking-name');
      if (nameInput instanceof HTMLInputElement) {
        window.setTimeout(() => {
          nameInput.focus({ preventScroll: true });
        }, 450);
      }
    }
  };

  const handleSelectSpecialtyForBooking = (specialty: BookingSpecialty) => {
    setSelectedSpecialty(specialty);
    scrollToContact();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Navbar onContactClick={scrollToContact} />

        <main>
          <HeroSection onContactClick={scrollToContact} />
          <SpecialtiesSection
            onSelectSpecialtyForBooking={handleSelectSpecialtyForBooking}
          />
          <AboutSection onContactClick={scrollToContact} />
          <ContactSection
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
          />
        </main>

        <Footer />
        <WhatsAppFloatButton />
      </div>
    </MotionConfig>
  );
}
