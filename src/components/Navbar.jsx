import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target, sectionId = null) => {
    setActivePage(target);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        transition: 'all 0.3s ease',
        backgroundColor: '#0b3bfb',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.25)' : 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px 28px',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* LOGO */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1,
            userSelect: 'none',
            flexShrink: 0,
          }}
          aria-label="ZENTIX Homepage"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '38px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              ZENTIX
            </span>
            <span
              style={{
                display: 'inline-block',
                padding: '3px 10px',
                backgroundColor: 'rgba(0, 0, 0, 0.28)',
                border: '2px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '999px',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.09em',
              }}
            >
              STUDIO
            </span>
          </div>
        </button>

        {/* DESKTOP NAV PILL */}
        <nav
          className="desktop-nav"
          style={{
            backgroundColor: '#ffffff',
            padding: '6px 10px',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
          }}
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              padding: '9px 20px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
              backgroundColor: activePage === 'home' ? '#0c1b4d' : 'transparent',
              color: activePage === 'home' ? '#ffffff' : '#334155',
            }}
          >
            Home
          </button>

          {/* Services with Dropdown / Direct Link */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => handleNavClick('services')}
              onMouseEnter={() => setServicesDropdown(true)}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s ease',
                backgroundColor: activePage === 'services' ? '#0c1b4d' : 'transparent',
                color: activePage === 'services' ? '#ffffff' : '#334155',
              }}
            >
              Services <ChevronDown size={15} style={{ opacity: 0.8 }} />
            </button>

            {servicesDropdown && (
              <div
                onMouseLeave={() => setServicesDropdown(false)}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '10px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '10px',
                  minWidth: '230px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 120,
                }}
              >
                {[
                  { name: 'Shopify Development', anchor: 'featured-shopify' },
                  { name: 'SaaS Solutions', anchor: 'saas-section' },
                  { name: 'Ecommerce Solutions', anchor: 'ecommerce-section' },
                  { name: 'Amazon VA Services', anchor: 'amazon-section' },
                  { name: 'Business Development', anchor: 'business-section' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick('services', item.anchor)}
                    style={{
                      padding: '9px 14px',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#0f172a',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('home', 'portfolio')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNavClick('home', 'pricing')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            Pricing
          </button>

          <button
            onClick={() => handleNavClick('home', 'about')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('home', 'reviews')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            Reviews
          </button>

          <button
            onClick={() => handleNavClick(activePage, 'team')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            Team
          </button>

          <button
            onClick={() => handleNavClick(activePage, 'contact')}
            style={{
              padding: '9px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'inherit',
              backgroundColor: 'transparent',
              color: '#334155',
              transition: 'all 0.2s ease',
            }}
          >
            Contact
          </button>
        </nav>

        {/* RIGHT CTA: AVATAR + BOOK A CALL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(activePage, 'contact');
            }}
            style={{
              backgroundColor: '#ffffff',
              padding: '6px 20px 6px 8px',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.22)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.16)';
            }}
          >
            {/* Nick's Avatar */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Nick - Lead Designer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #ffea00',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#0c1024',
                letterSpacing: '-0.01em',
              }}
            >
              Book a call
            </span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              padding: '8px',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#0c163b',
            padding: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              borderRadius: '8px',
              background: activePage === 'home' ? 'var(--primary-blue)' : 'transparent',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Home (Landing Page)
          </button>
          <button
            onClick={() => handleNavClick('services')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              borderRadius: '8px',
              background: activePage === 'services' ? 'var(--primary-blue)' : 'transparent',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Services Page
          </button>
          <button
            onClick={() => handleNavClick('home', 'pricing')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px',
              fontWeight: 500,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px',
              fontWeight: 500,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            About Me
          </button>
          <button
            onClick={() => handleNavClick('home', 'reviews')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px',
              fontWeight: 500,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            Client Reviews
          </button>
          <button
            onClick={() => handleNavClick(activePage, 'team')}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px',
              fontWeight: 500,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            Team
          </button>
          <button
            onClick={() => handleNavClick(activePage, 'contact')}
            style={{
              padding: '12px 18px',
              backgroundColor: '#ffea00',
              color: '#0c1024',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            Book a call / Get Quote <ArrowUpRight size={16} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
