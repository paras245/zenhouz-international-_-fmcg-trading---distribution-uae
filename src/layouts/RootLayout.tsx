import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollRestorationHandler } from '../components/ScrollRestorationHandler';

export const RootLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <ScrollRestorationHandler />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};
