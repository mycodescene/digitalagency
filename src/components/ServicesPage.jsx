import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  ShoppingCart,
  ShieldCheck
} from 'lucide-react';
import { 
  YourStoreDoodle, 
  SellMoreDoodle, 
  MoreSalesDoodle, 
  TogetherPaperPlaneDoodle,
  YellowSparksDoodle 
} from './HandwrittenDoodles';
import TeamSection from './TeamSection';

// Exact SVG Icons matching the original design
function ShopifyIcon() {
  return (
    <svg width="22" height="24" viewBox="0 0 24 26" fill="none">
      <path
        d="M8.5 6.5C8.5 3.5 10 2 12 2C14 2 15.5 3.5 15.5 6.5"
        stroke="#0c1024"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M5 7L19 7L21 23C21 24 20 25 19 25L5 25C4 25 3 24 3 23L5 7Z"
        fill="#0c1024"
      />
      <path
        d="M12.5 11C11.5 11 10.5 11.5 10.5 12.8C10.5 14.5 14 14.8 14 17C14 18.8 12.2 19.2 11 19C10 18.8 9.5 18 9.5 18L10.5 17C10.5 17 11 17.5 11.5 17.5C12.2 17.5 12.8 17.2 12.8 16.5C12.8 14.8 9.5 14.5 9.5 12.5C9.5 10.8 11.2 9.8 12.8 10.2L12.5 11Z"
        fill="#ffea00"
      />
    </svg>
  );
}

function SaasIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0c1024" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="#0c1024" />
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0c1024" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1.5" fill="#0c1024" />
      <circle cx="19" cy="21" r="1.5" fill="#0c1024" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" fill="none" />
    </svg>
  );
}

function AmazonIcon() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
      <span style={{ fontSize: '20px', fontWeight: 900, fontFamily: "'Oswald', sans-serif", color: '#0c1024', marginTop: '-2px' }}>
        a
      </span>
      <svg width="22" height="6" viewBox="0 0 24 6" style={{ marginTop: '-4px' }}>
        <path d="M2 1 C8 6 16 6 22 1" stroke="#0c1024" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 1 L22 1 L21 4" fill="#0c1024" />
      </svg>
    </div>
  );
}

function GrowthChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0c1024" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <polyline points="4 9 12 3 20 8" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <span style={{ fontSize: '16px', fontWeight: 900, fontFamily: "'Oswald', sans-serif", color: '#0c1024', letterSpacing: '-0.03em' }}>
      up
    </span>
  );
}

export default function ServicesPage({ setActivePage }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Shopify Development',
    details: '',
  });

  const servicesData = [
    {
      id: 'shopify',
      name: 'Shopify Dev',
      badge: 'FLAGSHIP ECOMMERCE',
      badgeColor: '#ffea00',
      title: 'SHOPIFY STOREFRONTS & BESPOKE LIQUID',
      description: 'High-converting custom Shopify stores, tailor-made Liquid themes, 1.2s load speeds, and frictionless checkout optimization that turns visitors into repeat buyers.',
      icon: <ShopifyIcon />,
      image: '/shopify-showcase.jpg',
      targetAnchor: '#featured-shopify',
      anchorLabel: 'Explore Shopify Deep Dive',
      chips: ['+240% Sales Lift', '1.2s Fast Load', 'Top 1% Stores'],
      features: ['Custom Liquid & 2.0 Themes', 'Headless & Custom Apps', 'Checkout CRO Boost'],
      rating: '5.0 ★ (120+ Stores)',
      url: 'zentix.studio/services/shopify'
    },
    {
      id: 'saas',
      name: 'SaaS Platforms',
      badge: 'CLOUD ARCHITECTURE',
      badgeColor: '#38bdf8',
      title: 'SCALABLE SAAS WEB APPLICATIONS',
      description: 'End-to-end cloud platforms built with React, Node.js, real-time analytics, and high-security multi-tenant architectures engineered to handle millions of queries.',
      icon: <SaasIcon />,
      image: '/saas-dashboard-laptop.jpg',
      targetAnchor: '#saas-section',
      anchorLabel: 'Explore SaaS Architecture',
      chips: ['99.99% Uptime', 'Sub-50ms Latency', 'SOC2 Compliant'],
      features: ['Modern React & Node Stack', 'Real-Time WebSockets', 'Multi-Tenant Databases'],
      rating: '5.0 ★ (35+ Platforms)',
      url: 'zentix.studio/services/saas'
    },
    {
      id: 'ecommerce',
      name: 'eCommerce',
      badge: 'OMNICHANNEL SCALE',
      badgeColor: '#fde047',
      title: 'HIGH-VOLUME ECOMMERCE ECOSYSTEMS',
      description: 'Comprehensive digital commerce systems with multi-currency checkout, automated inventory synchronization, and data-driven conversion funnels that maximize lifetime value.',
      icon: <EcommerceIcon />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      targetAnchor: '#saas-section',
      anchorLabel: 'Explore eCommerce Solutions',
      chips: ['3.8x Avg ROAS', 'Multi-Currency', 'Automated Funnels'],
      features: ['Stripe & Global Payments', 'Inventory & ERP Sync', 'Cart Abandonment Engine'],
      rating: '4.9 ★ (80+ Brands)',
      url: 'zentix.studio/services/ecommerce'
    },
    {
      id: 'amazon',
      name: 'Amazon VA',
      badge: 'SELLER ACCELERATOR',
      badgeColor: '#f97316',
      title: 'AMAZON FBA & STORE OPERATIONS',
      description: 'Full-service Amazon store management: high-converting A+ content, aggressive keyword indexing, optimized PPC campaigns, and 24/7 FBA inventory operations.',
      icon: <AmazonIcon />,
      image: '/amazon-va-mockup.jpg',
      targetAnchor: '#amazon-section',
      anchorLabel: 'Explore Amazon VA Suite',
      chips: ['98.4% Buy Box Win', '14.2% PPC ACoS', '24/7 Store Ops'],
      features: ['A+ Content & Brand Story', 'PPC Sponsored Ads', 'Inventory & Shipment Flow'],
      rating: '5.0 ★ (65+ Amazon Stores)',
      url: 'zentix.studio/services/amazon-va'
    },
    {
      id: 'bizdev',
      name: 'Business Dev',
      badge: 'STRATEGIC PARTNERSHIPS',
      badgeColor: '#a855f7',
      title: 'B2B STRATEGIC REVENUE EXPANSION',
      description: 'Targeted executive outreach, high-ticket sales pipelines, strategic joint ventures, and enterprise negotiations that close lucrative long-term contracts.',
      icon: <GrowthChartIcon />,
      image: '/business-handshake.jpg',
      targetAnchor: '#amazon-section',
      anchorLabel: 'Explore Business Development',
      chips: ['$2.4M+ Pipeline', '42% Close Rate', 'Tier-1 Alliances'],
      features: ['C-Suite Outbound Campaigns', 'Channel Partner Programs', 'Enterprise Deal Closing'],
      rating: '5.0 ★ (45+ Corporate Clients)',
      url: 'zentix.studio/services/business-development'
    },
    {
      id: 'upwork',
      name: 'Upwork Engine',
      badge: 'TOP RATED PLUS',
      badgeColor: '#10b981',
      title: 'UPWORK CLIENT ACQUISITION & BIDDING',
      description: 'Battle-tested proposal engineering, strategic client discovery, contract negotiations, and profile positioning that wins premier high-budget enterprise contracts.',
      icon: <UpworkIcon />,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      targetAnchor: '#contact-section',
      anchorLabel: 'Explore Upwork Strategy',
      chips: ['100% Job Success', '$500k+ Won', 'Top 1% Agency'],
      features: ['Tailored Proposal Scripts', 'Rate Card Maximization', 'Client Closing Strategy'],
      rating: '5.0 ★ (100% Job Success)',
      url: 'zentix.studio/services/upwork-engine'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveServiceIdx((prev) => (prev + 1) % servicesData.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPaused, servicesData.length]);

  const activeService = servicesData[activeServiceIdx];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', service: 'Shopify Development', details: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const clientStories = [
    {
      id: 1,
      quote:
        'The team delivered beyond our expectations. Our store traffic and sales increased significantly within 3 months!',
      name: 'Sarah Johnson',
      role: 'Founder, Bloom Co.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      quote:
        'Professional, creative and super easy to work with. Our new site has already brought in more leads!',
      name: 'James Carter',
      role: 'CEO, Vista Digital',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      quote:
        "I couldn't be happier with the results. Nick really understood our vision and brought it to life beyond our expectations.",
      name: 'Emily Roberts',
      role: 'Marketing Director, PureLine',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* ========================================================
          1. SERVICES HERO SECTION (BLUEPRINT GRID)
         ======================================================== */}
      <section
        className="blueprint-grid"
        style={{
          minHeight: 'calc(100vh - 75px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '75px 28px 85px 28px',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="services-hero-grid"
        >
          {/* Left Column: Title & Intro */}
          <div>
            <div className="section-badge badge-white">
              <span className="dot" />
              <span>OUR SERVICES</span>
            </div>

            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(52px, 6vw, 82px)',
                fontWeight: 700,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '26px',
                color: '#ffffff',
              }}
            >
              DIGITAL SOLUTIONS <br />
              THAT DRIVE REAL <br />
              <span style={{ color: '#ffea00' }}>GROWTH</span>
            </h1>

            <p
              style={{
                fontSize: '16.5px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.92)',
                marginBottom: '34px',
                maxWidth: '520px',
              }}
            >
              We offer a complete range of digital services designed to help your business
              grow, scale and succeed. From eCommerce to automation, our expert team delivers
              smart, result-driven solutions.
            </p>

            <a href="#featured-shopify" className="btn-yellow">
              Explore All Services <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Column: Dynamic Interactive Services Studio Console (NOT A BOX GRID!) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              position: 'relative',
              width: '100%',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* 1. TOP INTERACTIVE CAPSULE DOCK (6 TABS) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
                scrollbarWidth: 'none',
              }}
            >
              {servicesData.map((srv, idx) => {
                const isActive = idx === activeServiceIdx;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setActiveServiceIdx(idx)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '7px 14px',
                      borderRadius: '999px',
                      border: isActive ? '1.5px solid #ffea00' : '1px solid rgba(255, 255, 255, 0.16)',
                      backgroundColor: isActive ? '#ffea00' : 'rgba(8, 18, 54, 0.72)',
                      color: isActive ? '#0c1024' : '#ffffff',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      whiteSpace: 'nowrap',
                      boxShadow: isActive ? '0 4px 18px rgba(255, 234, 0, 0.35)' : 'none',
                      transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', filter: isActive ? 'none' : 'invert(1) brightness(2)' }}>
                      <div style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {srv.icon}
                      </div>
                    </span>
                    <span>{srv.name}</span>
                    {isActive && (
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#0c1024',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 2. MAIN 3D SHOWCASE CONSOLE STAGE */}
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(13, 27, 82, 0.96) 0%, rgba(6, 14, 46, 0.98) 100%)',
                border: '1.5px solid rgba(255, 234, 0, 0.35)',
                borderRadius: '24px',
                padding: '24px 26px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(255, 234, 0, 0.12)',
                backdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Ambient Radial Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  backgroundColor: '#ffea00',
                  opacity: 0.1,
                  filter: 'blur(55px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Console Top Bar (Chrome / URL / Navigation) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  <span
                    style={{
                      marginLeft: '8px',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: 'rgba(255, 255, 255, 0.65)',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    https://{activeService.url}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 234, 0, 0.15)',
                      color: '#ffea00',
                      border: '1px solid rgba(255, 234, 0, 0.35)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    ✦ {activeService.badge}
                  </span>

                  {/* Manual prev/next navigation */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveServiceIdx((prev) => (prev - 1 + servicesData.length) % servicesData.length)}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      aria-label="Previous service"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveServiceIdx((prev) => (prev + 1) % servicesData.length)}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      aria-label="Next service"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Console Main Stage: Two Columns (Specs & Details on Left, 3D Realistic Device on Right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.15fr 1fr',
                  gap: '22px',
                  alignItems: 'center',
                }}
              >
                {/* Left Info Pane */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: 'clamp(20px, 1.8vw, 24px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      margin: '0 0 8px 0',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {activeService.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.55,
                      color: 'rgba(255, 255, 255, 0.85)',
                      margin: '0 0 14px 0',
                    }}
                  >
                    {activeService.description}
                  </p>

                  {/* Dynamic Metric Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '14px' }}>
                    {activeService.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '5px',
                          backgroundColor: cIdx === 0 ? 'rgba(255, 234, 0, 0.18)' : 'rgba(255, 255, 255, 0.08)',
                          color: cIdx === 0 ? '#ffea00' : '#ffffff',
                          border: cIdx === 0 ? '1px solid rgba(255, 234, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Feature Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '16px' }}>
                    {activeService.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                        <div
                          style={{
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 234, 0, 0.2)',
                            color: '#ffea00',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={9} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Primary Anchor Link */}
                  <a
                    href={activeService.targetAnchor}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#ffea00',
                      color: '#0c1024',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      padding: '8px 16px',
                      borderRadius: '999px',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(255, 234, 0, 0.35)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 234, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 234, 0, 0.35)';
                    }}
                  >
                    <span>{activeService.anchorLabel}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Right 3D Laptop Device Stage */}
                <div style={{ position: 'relative' }}>
                  {/* Realistic Laptop Bezel */}
                  <div
                    style={{
                      backgroundColor: '#1b2230',
                      borderRadius: '14px',
                      padding: '8px 8px 12px 8px',
                      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65), 0 0 25px rgba(0,0,0,0.5)',
                      border: '1.5px solid rgba(255, 255, 255, 0.16)',
                      position: 'relative',
                    }}
                  >
                    {/* Camera Notch */}
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#0a0d14',
                        margin: '0 auto 6px auto',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />

                    {/* Screen Display */}
                    <div
                      style={{
                        borderRadius: '7px',
                        overflow: 'hidden',
                        height: '195px',
                        position: 'relative',
                        backgroundColor: '#070b1c',
                      }}
                    >
                      <img
                        key={activeService.id}
                        src={activeService.image}
                        alt={activeService.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />

                      {/* In-Screen Floating Mini Tag */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(8, 14, 38, 0.92)',
                          backdropFilter: 'blur(8px)',
                          padding: '3px 8px',
                          borderRadius: '5px',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#ffea00',
                          border: '1px solid rgba(255, 234, 0, 0.3)',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                        }}
                      >
                        {activeService.rating}
                      </div>
                    </div>
                  </div>

                  {/* Laptop Stand Base */}
                  <div
                    style={{
                      width: '100%',
                      height: '7px',
                      backgroundColor: '#262f40',
                      borderRadius: '0 0 8px 8px',
                      margin: '0 auto',
                      boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
                    }}
                  />

                  {/* Floating Satellite Glass Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '-12px',
                      backgroundColor: 'rgba(9, 21, 64, 0.94)',
                      backdropFilter: 'blur(12px)',
                      border: '1.5px solid #ffea00',
                      borderRadius: '10px',
                      padding: '5px 10px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      zIndex: 3,
                    }}
                  >
                    <div
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        boxShadow: '0 0 8px #10b981',
                      }}
                    />
                    <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#ffffff' }}>
                      {activeService.chips[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Animated Progress Bar */}
              <div
                style={{
                  marginTop: '16px',
                  width: '100%',
                  height: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  key={activeServiceIdx}
                  style={{
                    height: '100%',
                    backgroundColor: '#ffea00',
                    width: '100%',
                    animation: isPaused ? 'none' : 'progressBar 4.8s linear forwards',
                    transformOrigin: 'left',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FEATURED SOLUTION: SHOPIFY DEVELOPMENT
         ======================================================== */}
      <section
        id="featured-shopify"
        className="blueprint-grid"
        style={{
          padding: '125px 28px',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.35fr 1fr',
            gap: '44px',
            alignItems: 'center',
          }}
          className="featured-shopify-grid"
        >
          {/* Left: Headline & Body */}
          <div>
            <div className="section-badge badge-white">
              <span className="dot" />
              <span>FEATURED SOLUTION</span>
            </div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(44px, 5.2vw, 68px)',
                fontWeight: 700,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              SHOPIFY <br />
              <span style={{ color: '#ffea00' }}>DEVELOPMENT</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.92)',
                marginBottom: '30px',
              }}
            >
              We build high-converting Shopify stores that are fast, secure and fully
              optimized for sales. From custom themes to app integrations, we create
              eCommerce experiences that bring your brand to life.
            </p>
            <a href="#services-contact" className="btn-yellow">
              Get Started <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Center: Pixel-Perfect Shopify Laptop, Mobile & 3D Bag Asset with Yellow Sun */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '640px', margin: '0 auto' }}>
            {/* Top-left yellow spark doodle */}
            <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 10 }}>
              <YellowSparksDoodle />
            </div>

            <img
              src="/shopify-showcase.jpg"
              alt="Shopify Development Showcase"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '18px',
                filter: 'drop-shadow(0 25px 55px rgba(0, 0, 0, 0.45))',
              }}
            />
          </div>

          {/* Right: Checklist & Doodle */}
          <div style={{ position: 'relative' }}>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {[
                'Custom Store Design',
                'Theme Customization',
                'App Integration',
                'Payment Setup',
                'Ongoing Support',
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '15.5px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#ffea00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0c1024',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Handwritten Doodle: "Your Store Our Expertise" */}
            <div style={{ position: 'relative', marginTop: '12px' }}>
              <YourStoreDoodle />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SAAS SOLUTIONS & ECOMMERCE SOLUTIONS (SINGLE BANNER)
         ======================================================== */}
      <section
        id="saas-section"
        style={{
          backgroundColor: '#ffffff',
          padding: '115px 28px',
          color: '#0c1024',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr 1fr',
            gap: '38px',
            alignItems: 'center',
          }}
          className="featured-shopify-grid"
        >
          {/* LEFT: SAAS SOLUTIONS */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#eff6ff',
                color: '#0b3bfb',
                fontSize: '12px',
                fontWeight: 800,
                padding: '6px 16px',
                borderRadius: '999px',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              <span>⊙</span>
              <span>SAAS SOLUTIONS</span>
            </div>

            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(38px, 4vw, 48px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '14px',
                color: '#0c1024',
                lineHeight: 1,
              }}
            >
              SAAS SOLUTIONS
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
              From idea to platform — we build powerful SaaS products that scale with your vision.
            </p>

            {/* Checklist */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Custom Platform Development',
                'API Integrations',
                'User Authentication & Security',
                'Scalable Architecture',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: '#334155' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#ffea00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0c1024',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#services-contact" className="btn-blue">
              Learn more <ArrowUpRight size={16} />
            </a>
          </div>

          {/* CENTER: TEAMFLOW SAAS DASHBOARD LAPTOP WITH FLOATING WIDGETS & YELLOW ACCENTS */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
            {/* Yellow circle glow at bottom-left */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-25px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundColor: '#ffea00',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* Yellow spark rays at top right */}
            <div style={{ position: 'absolute', top: '-18px', right: '15px', zIndex: 10 }}>
              <YellowSparksDoodle />
            </div>

            {/* Floating Card Left */}
            <div
              style={{
                position: 'absolute',
                left: '-20px',
                top: '38%',
                backgroundColor: '#0b3bfb',
                borderRadius: '12px',
                padding: '12px 14px',
                color: '#ffffff',
                boxShadow: '0 12px 30px rgba(11, 59, 251, 0.25)',
                zIndex: 12,
              }}
            >
              <div style={{ width: '22px', height: '4px', backgroundColor: '#ffffff', borderRadius: '2px', marginBottom: '6px' }} />
              <div style={{ width: '14px', height: '4px', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '2px', marginBottom: '6px' }} />
              <div style={{ width: '18px', height: '4px', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '2px' }} />
            </div>

            {/* TeamFlow Laptop Asset */}
            <img
              src="/saas-dashboard-laptop.jpg"
              alt="TeamFlow SaaS Dashboard Laptop"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                position: 'relative',
                zIndex: 2,
                filter: 'drop-shadow(0 20px 45px rgba(0, 0, 0, 0.12))',
              }}
            />

            {/* Floating Shield Badge Right: "Scalable & Secure" */}
            <div
              style={{
                position: 'absolute',
                right: '-16px',
                top: '52%',
                transform: 'translateY(-50%)',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                border: '1px solid #e2e8f0',
                zIndex: 12,
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  backgroundColor: '#eff6ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0b3bfb',
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#0c1024', lineHeight: 1.2 }}>Scalable</div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#0c1024', lineHeight: 1.2 }}>& Secure</div>
              </div>
            </div>
          </div>

          {/* RIGHT: ECOMMERCE SOLUTIONS */}
          <div id="ecommerce-section" style={{ position: 'relative' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#eff6ff',
                color: '#0b3bfb',
                fontSize: '12px',
                fontWeight: 800,
                padding: '6px 16px',
                borderRadius: '999px',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              <span>⊙</span>
              <span>ECOMMERCE SOLUTIONS</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(38px, 4vw, 48px)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#0c1024',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                ECOMMERCE SOLUTIONS
              </h2>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffea00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0c1024',
                  boxShadow: '0 4px 12px rgba(255, 234, 0, 0.45)',
                  flexShrink: 0,
                }}
              >
                <ShoppingCart size={20} strokeWidth={2.4} />
              </div>
            </div>

            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
              Bring your products to more customers with powerful eCommerce solutions.
              We handle the tech, so you can focus on your business.
            </p>

            {/* Checklist */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Online Store Setup',
                'Product Upload & Management',
                'Payment Gateway Integration',
                'Inventory & Order Management',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: '#334155' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#ffea00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0c1024',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#services-contact" className="btn-blue">
              Learn more <ArrowUpRight size={16} />
            </a>

            {/* Sell More Doodle */}
            <div style={{ position: 'absolute', right: '-15px', bottom: '15px' }}>
              <SellMoreDoodle />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TWO-COLUMN: AMAZON VA SERVICES & BUSINESS DEVELOPMENT
         ======================================================== */}
      <section
        id="amazon-section"
        style={{
          backgroundColor: '#070b1c',
          padding: '125px 28px',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '34px',
          }}
          className="two-col-grid"
        >
          {/* LEFT CARD: AMAZON VA SERVICES */}
          <div
            style={{
              backgroundColor: '#0d132b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '40px 34px',
              display: 'grid',
              gridTemplateColumns: '1.05fr 1.2fr',
              gap: '24px',
              alignItems: 'center',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 234, 0, 0.1)',
                  color: '#ffea00',
                  border: '1px solid rgba(255, 234, 0, 0.3)',
                  fontSize: '12px',
                  fontWeight: 800,
                  padding: '5px 14px',
                  borderRadius: '999px',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                <span>⊙</span>
                <span>AMAZON VA</span>
              </div>

              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  color: '#ffffff',
                  lineHeight: 1.05,
                }}
              >
                AMAZON VA SERVICES
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                We help you manage and grow your Amazon store with expert support, so you
                can focus on scaling your business.
              </p>

              {/* Checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  'Product Listing & Optimization',
                  'Order & Inventory Management',
                  'Customer Support',
                  'Reports & Analytics',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: '#e2e8f0' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ffea00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0c1024',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#services-contact" className="btn-yellow">
                Learn more <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Amazon Laptop & Kraft Boxes Mockup + Doodle */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-38px', right: '10px', zIndex: 10 }}>
                <MoreSalesDoodle />
              </div>
              <img
                src="/amazon-va-mockup.jpg"
                alt="Amazon VA Services Mockup"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>
          </div>

          {/* RIGHT CARD: BUSINESS DEVELOPMENT */}
          <div
            id="business-section"
            style={{
              backgroundColor: '#0d132b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '40px 34px',
              display: 'grid',
              gridTemplateColumns: '1.05fr 1.2fr',
              gap: '24px',
              alignItems: 'center',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 234, 0, 0.1)',
                  color: '#ffea00',
                  border: '1px solid rgba(255, 234, 0, 0.3)',
                  fontSize: '12px',
                  fontWeight: 800,
                  padding: '5px 14px',
                  borderRadius: '999px',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                <span>⊙</span>
                <span>BUSINESS DEVELOPMENT</span>
              </div>

              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '38px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  color: '#ffffff',
                  lineHeight: 1.05,
                }}
              >
                BUSINESS DEVELOPMENT
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                We connect you with the right opportunities, help you build strong partnerships
                and grow your market presence.
              </p>

              {/* Checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  'Market Research & Lead Generation',
                  'Partnership Development',
                  'Client Outreach & Follow Ups',
                  'Sales Support & Strategy',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: '#e2e8f0' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#ffea00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0c1024',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span style={{ fontWeight: 600 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#services-contact" className="btn-yellow">
                Learn more <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Handshake Visual with Yellow Sun matching original design */}
            <div style={{ position: 'relative' }}>
              {/* Bold Yellow Circular Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  top: '-25px',
                  right: '-25px',
                  width: '230px',
                  height: '230px',
                  borderRadius: '50%',
                  backgroundColor: '#ffea00',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
              <img
                src="/business-handshake.jpg"
                alt="Executive Business Handshake with leather portfolio"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CLIENT SUCCESS STORIES (BLUEPRINT GRID)
         ======================================================== */}
      <section
        className="blueprint-grid"
        style={{
          padding: '125px 28px',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            <div>
              <div className="section-badge badge-white">
                <span className="dot" />
                <span>REAL RESULTS</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  color: '#ffffff',
                }}
              >
                CLIENT <span style={{ color: '#ffea00' }}>SUCCESS STORIES</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.88)', maxWidth: '540px' }}>
                Numbers that speak for themselves. See how we've helped businesses like yours
                achieve real results.
              </p>
            </div>

            {/* Slider arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() =>
                  setActiveStoryIdx((prev) => (prev === 0 ? clientStories.length - 1 : prev - 1))
                }
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Previous story"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setActiveStoryIdx((prev) => (prev === clientStories.length - 1 ? 0 : prev + 1))
                }
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Next story"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {clientStories.map((story) => (
              <div
                key={story.id}
                style={{
                  backgroundColor: 'rgba(10, 24, 75, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '18px',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.94)',
                    fontStyle: 'italic',
                    marginBottom: '26px',
                  }}
                >
                  "{story.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={story.avatar}
                      alt={story.name}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                        {story.name}
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}>{story.role}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '3px', color: '#ffea00' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#ffea00" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE TEAM SECTION (Hasaan Bin Arif & Shahwaiz Mehdi)
         ======================================================== */}
      <TeamSection />

      {/* ========================================================
          6. BOTTOM CTA: READY TO GET STARTED? (WITH REAL YELLOW MUG)
         ======================================================== */}
      <section
        id="services-contact"
        style={{
          backgroundColor: '#070c20',
          padding: '120px 28px',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1.6fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
            className="services-cta-grid"
          >
            {/* Left Column: Yellow Mug Photo on Desk with Big Ideas Real Results */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 4.8',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
                  position: 'relative',
                  backgroundColor: '#161c36',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=85"
                  alt="Office Desk with Plant and Lamp"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Exact Yellow Ceramic Mug with "BIG IDEAS REAL RESULTS" typography */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    backgroundColor: '#ffea00',
                    color: '#0c1024',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '16px',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '0.04em',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
                    border: '1.5px solid #0c1024',
                  }}
                >
                  BIG<br />IDEAS<br />REAL<br />RESULTS
                </div>
              </div>
            </div>

            {/* Middle Column: Form */}
            <div>
              <div className="section-badge badge-white">
                <span className="dot" />
                <span>LET'S WORK TOGETHER</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  color: '#ffffff',
                }}
              >
                READY TO <span style={{ color: '#ffea00' }}>GET STARTED?</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '26px' }}>
                Tell us about your project and we'll get back to you within 24 hours with a custom plan and quote.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    borderRadius: '14px',
                    padding: '28px',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#10b981', marginBottom: '8px' }}>
                    Thank You! We Received Your Request.
                  </h3>
                  <p style={{ fontSize: '14px', color: '#cbd5e1' }}>
                    Our team is reviewing your requirements and will reach out shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '14.5px',
                          outline: 'none',
                          color: '#0c1024',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '14.5px',
                          outline: 'none',
                          color: '#0c1024',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Service You're Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14.5px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        color: '#0c1024',
                      }}
                    >
                      <option value="Shopify Development">Shopify Development</option>
                      <option value="SaaS Solutions">SaaS Solutions</option>
                      <option value="Ecommerce Solutions">Ecommerce Solutions</option>
                      <option value="Amazon VA Services">Amazon VA Services</option>
                      <option value="Business Development">Business Development</option>
                      <option value="Upwork Bidding">Upwork Bidding</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about your project..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14.5px',
                        outline: 'none',
                        resize: 'none',
                        color: '#0c1024',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#ffea00',
                      color: '#0c1024',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '9px',
                      transition: 'all 0.2s ease',
                      marginTop: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffd600')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffea00')}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Handwritten Doodle */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TogetherPaperPlaneDoodle />
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 980px) {
          .services-hero-grid, .featured-shopify-grid, .two-col-grid, .services-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .services-pill-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
