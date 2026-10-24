import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Handle URL hash changes for routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('services')) {
        setActivePage('services');
      } else if (hash.includes('home') || hash === '' || hash === '#') {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const switchPage = (page) => {
    setActivePage(page);
    window.location.hash = page;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', margin: 0, padding: 0 }}>
      {/* Floating Demo Page Switcher Pill for quick preview toggle */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          backgroundColor: '#0c1024',
          border: '1.5px solid #ffea00',
          borderRadius: '999px',
          padding: '6px 8px',
          display: 'flex',
          gap: '6px',
          boxShadow: '0 12px 35px rgba(0,0,0,0.45)',
        }}
      >
        <button
          onClick={() => {
            switchPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            padding: '7px 16px',
            borderRadius: '999px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: activePage === 'home' ? '#ffea00' : 'transparent',
            color: activePage === 'home' ? '#0c1024' : '#ffffff',
            transition: 'all 0.2s ease',
          }}
        >
          View Landing Page
        </button>
        <button
          onClick={() => {
            switchPage('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            padding: '7px 16px',
            borderRadius: '999px',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: activePage === 'services' ? '#ffea00' : 'transparent',
            color: activePage === 'services' ? '#0c1024' : '#ffffff',
            transition: 'all 0.2s ease',
          }}
        >
          View Services Page
        </button>
      </div>

      {/* Main Navbar */}
      <Navbar activePage={activePage} setActivePage={switchPage} />

      {/* Active Page View */}
      <main style={{ flex: 1, width: '100%' }}>
        {activePage === 'home' ? (
          <LandingPage setActivePage={switchPage} />
        ) : (
          <ServicesPage setActivePage={switchPage} />
        )}
      </main>

      {/* Shared Footer */}
      <Footer setActivePage={switchPage} />
    </div>
  );
}
