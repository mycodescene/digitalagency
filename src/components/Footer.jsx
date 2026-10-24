import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNav = (page, sectionId = null) => {
    setActivePage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#091b5c',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '36px 24px 28px 24px',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* LOGO */}
        <button
          onClick={() => handleNav('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            lineHeight: 1,
          }}
          aria-label="ZENTIX Footer Logo"
        >
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '24px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            ZENTIX
          </span>
          <span
            style={{
              display: 'inline-block',
              padding: '2px 7px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              borderRadius: '999px',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '10px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            STUDIO
          </span>
        </button>

        {/* NAV LINKS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '20px',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Home
          </button>
          <button
            onClick={() => handleNav('services')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Services
          </button>
          <button
            onClick={() => handleNav('home', 'portfolio')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNav('home', 'pricing')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Pricing
          </button>
          <button
            onClick={() => handleNav('home', 'about')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            About
          </button>
          <button
            onClick={() => handleNav('home', 'reviews')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Reviews
          </button>
          <button
            onClick={() => handleNav('services', 'team')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Team
          </button>
          <button
            onClick={() => handleNav('home', 'contact')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
          >
            Contact
          </button>
        </div>

        {/* SOCIAL ICONS (SVG) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            style={{ color: '#ffffff', opacity: 0.85, transition: 'opacity 0.2s ease', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            style={{ color: '#ffffff', opacity: 0.85, transition: 'opacity 0.2s ease', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#ffffff', opacity: 0.85, transition: 'opacity 0.2s ease', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            style={{ color: '#ffffff', opacity: 0.85, transition: 'opacity 0.2s ease', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1240px',
          margin: '20px auto 0 auto',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span>© {new Date().getFullYear()} ZENTIX Studio. All rights reserved. London, UK.</span>
        <span>Crafted with pixel precision & clean code.</span>
      </div>
    </footer>
  );
}
