import React from 'react';
import { ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

// Official Shopify 3D Green Bag Component
export function Shopify3DBag({ className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        width: '90px',
        height: '95px',
        position: 'relative',
        filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.45))',
        transform: 'rotate(-10deg)',
        ...style,
      }}
    >
      <svg viewBox="0 0 100 110" fill="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        {/* White Handle Loops */}
        <path
          d="M38 28 C38 12, 62 12, 62 28"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M42 28 C42 16, 58 16, 58 28"
          stroke="rgba(0,0,0,0.15)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 3D Bag Body with Gradient */}
        <defs>
          <linearGradient id="shopifyBagGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#96bf48" />
            <stop offset="50%" stopColor="#87b338" />
            <stop offset="100%" stopColor="#688e26" />
          </linearGradient>
          <linearGradient id="bagHighlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Main Bag Silhouette */}
        <path
          d="M24 30 L76 30 L85 98 C85 102, 82 105, 78 105 L22 105 C18 105, 15 102, 15 98 Z"
          fill="url(#shopifyBagGrad)"
        />

        {/* Top Fold / Rim */}
        <path
          d="M23 30 L77 30 L75 35 L25 35 Z"
          fill="#a4cc54"
        />

        {/* Front Highlight sheen */}
        <path
          d="M24 30 L50 30 L45 105 L22 105 Z"
          fill="url(#bagHighlight)"
        />

        {/* Official Shopify 'S' with leaf logo */}
        {/* Leaf */}
        <path
          d="M54 44 C54 44, 48 45, 46 51 C45 54, 46 58, 48 60 C50 56, 54 53, 56 53 C56 53, 57 47, 54 44 Z"
          fill="#5e8e19"
        />
        {/* S */}
        <path
          d="M52 53 C49 53, 44 54, 44 58 C44 64, 57 65, 57 73 C57 80, 50 82, 45 80 C44 79, 43 78, 43 76 L48 76 C48 77, 50 78, 52 78 C54 78, 58 77, 58 72 C58 66, 45 64, 45 57 C45 51, 51 49, 57 51 L55 53 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

// Hero Agency Showcase Mockup (Laptop + Phone) with dynamic sliding content
export function HeroAgencyMockup({ 
  slide, 
  activeSlide = 0, 
  totalSlides = 5, 
  onSelectSlide, 
  onPrev, 
  onNext, 
  onMouseEnter, 
  onMouseLeave 
}) {
  // Fallback defaults if slide prop not provided
  const laptopData = slide?.laptop || {
    siteTitle: 'Creative websites for modern brands.',
    siteSubtitle: 'Beautiful. Fast. Built to grow.',
    siteBtn: 'View work →',
    img1: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=350&q=85',
    img1Tag: 'BOLD',
    img2: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=350&q=85',
    thumb1: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=250&q=85',
    thumb2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=250&q=85',
    thumb3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=250&q=85',
  };

  const phoneData = slide?.phone || {
    tag: 'DESIGN AGENCY',
    title: 'Creative websites for modern brands.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=85',
    btn: 'Start project',
  };

  return (
    <div 
      style={{ position: 'relative', width: '100%', maxWidth: '820px', margin: '0 auto' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* LAPTOP FRAME */}
      <div
        style={{
          background: '#151821',
          borderRadius: '18px 18px 4px 4px',
          padding: '12px 12px 0 12px',
          boxShadow: '0 35px 80px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.16)',
          position: 'relative',
        }}
      >
        {/* Camera */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#334155' }} />
        </div>

        {/* Screen */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '10px 10px 0 0',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Browser Header */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontWeight: 600, color: '#64748b' }}>
              <span>Home</span>
              <span>Work</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
            <div
              style={{
                backgroundColor: '#0c1024',
                color: '#fff',
                fontSize: '9.5px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '5px',
              }}
            >
              Get in touch
            </div>
          </div>

          {/* Website Inner Content (Dynamic with slide transition) */}
          <div 
            key={activeSlide}
            className="hero-slide-enter"
            style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '18px', alignItems: 'center' }}>
              <div>
                <h4
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '26px',
                    lineHeight: 1.05,
                    textTransform: 'uppercase',
                    color: '#0c1024',
                    margin: '0 0 8px 0',
                  }}
                >
                  {laptopData.siteTitle}
                </h4>
                <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 12px 0' }}>
                  {laptopData.siteSubtitle}
                </p>
                <div
                  style={{
                    backgroundColor: '#ffea00',
                    color: '#0c1024',
                    borderRadius: '5px',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    padding: '5px 12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                  }}
                >
                  {laptopData.siteBtn}
                </div>
              </div>

              {/* Showcase Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div
                  style={{
                    backgroundColor: '#ffc107',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '1 / 1.1',
                  }}
                >
                  <img
                    src={laptopData.img1}
                    alt={laptopData.img1Tag}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '6px',
                      left: '8px',
                      color: '#ffffff',
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                    }}
                  >
                    {laptopData.img1Tag}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#3b82f6',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    aspectRatio: '1 / 1.1',
                  }}
                >
                  <img
                    src={laptopData.img2}
                    alt="Agency Lifestyle"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '12px' }}>
              <div style={{ height: '44px', borderRadius: '5px', background: '#f1f5f9', overflow: 'hidden' }}>
                <img
                  src={laptopData.thumb1}
                  alt="Thumbnail 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ height: '44px', borderRadius: '5px', background: '#f1f5f9', overflow: 'hidden' }}>
                <img
                  src={laptopData.thumb2}
                  alt="Thumbnail 2"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ height: '44px', borderRadius: '5px', background: '#f1f5f9', overflow: 'hidden' }}>
                <img
                  src={laptopData.thumb3}
                  alt="Thumbnail 3"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base */}
      <div
        style={{
          width: '110%',
          marginLeft: '-5%',
          height: '16px',
          background: 'linear-gradient(to bottom, #d1d5db, #9ca3af)',
          borderRadius: '0 0 16px 16px',
          boxShadow: '0 18px 35px rgba(0, 0, 0, 0.45)',
        }}
      >
        <div style={{ width: '70px', height: '5px', backgroundColor: '#6b7280', borderRadius: '0 0 5px 5px', margin: '0 auto' }} />
      </div>

      {/* OVERLAPPING PHONE MOCKUP (Dynamic with slide transition) */}
      <div
        key={`phone-${activeSlide}`}
        className="hero-slide-enter"
        style={{
          position: 'absolute',
          right: '-28px',
          bottom: '-16px',
          width: '175px',
          backgroundColor: '#0c1024',
          borderRadius: '28px',
          padding: '8px',
          boxShadow: '0 24px 55px rgba(0,0,0,0.55), 0 0 0 2.5px rgba(255,255,255,0.18)',
          zIndex: 10,
        }}
      >
        <div style={{ width: '44px', height: '8px', backgroundColor: '#000', borderRadius: '999px', margin: '2px auto 8px auto' }} />
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '9 / 17',
            padding: '12px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '8px', fontWeight: 800, color: '#0c1024', letterSpacing: '0.05em' }}>
              {phoneData.tag}
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', lineHeight: 1.1, color: '#0c1024', marginTop: '2px' }}>
              {phoneData.title}
            </div>
            <div style={{ width: '34px', height: '3.5px', backgroundColor: '#ffea00', margin: '5px 0 10px 0' }} />
          </div>

          <div style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '1 / 1.1' }}>
            <img
              src={phoneData.img}
              alt="Mobile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              backgroundColor: '#ffea00',
              borderRadius: '5px',
              padding: '5px',
              textAlign: 'center',
              fontSize: '8.5px',
              fontWeight: 800,
              color: '#0c1024',
              cursor: 'pointer',
            }}
          >
            {phoneData.btn}
          </div>
        </div>
      </div>

      {/* INTERACTIVE PAGINATION DOTS */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px', 
          marginTop: '18px' 
        }}
      >
        {Array.from({ length: totalSlides }).map((_, i) => {
          const isActive = activeSlide === i;
          return (
            <button
              key={i}
              onClick={() => onSelectSlide && onSelectSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: isActive ? '24px' : '7px',
                height: '7px',
                borderRadius: '999px',
                backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isActive ? '0 0 10px rgba(255, 234, 0, 0.5)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Featured Shopify Development Showcase (With real 3D Shopify Bag & Woman model store)
export function ShopifyStoreMockup() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '620px', margin: '0 auto' }}>
      {/* Background Yellow Glow/Arc */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          left: '20px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          backgroundColor: '#ffea00',
          opacity: 0.85,
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 3D SHOPIFY BAG ELEMENT (BOTTOM LEFT) */}
      <div
        style={{
          position: 'absolute',
          left: '-38px',
          bottom: '22px',
          zIndex: 25,
        }}
      >
        <Shopify3DBag />
      </div>

      {/* LAPTOP CONTAINER */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          background: '#161922',
          borderRadius: '16px 16px 4px 4px',
          padding: '10px 10px 0 10px',
          boxShadow: '0 30px 75px -15px rgba(0, 0, 0, 0.65)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#475569' }} />
        </div>

        {/* Store Screen */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px 8px 0 0',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Shopify Navbar */}
          <div
            style={{
              padding: '7px 14px',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '3px',
                  backgroundColor: '#95bf47',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 900,
                  fontFamily: 'sans-serif',
                }}
              >
                s
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
                shopify
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '9px', fontWeight: 600, color: '#64748b' }}>
              <span>Women</span>
              <span>Men</span>
              <span>Collections</span>
              <span>Sale</span>
            </div>
          </div>

          {/* Hero Banner with smiling female model */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              padding: '12px 18px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '22px',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  color: '#0f172a',
                  marginBottom: '4px',
                }}
              >
                Build Your Dream Store
              </div>
              <div style={{ fontSize: '8.5px', color: '#64748b', marginBottom: '8px' }}>
                Premium Themes | Fast | Scalable
              </div>
              <span
                style={{
                  backgroundColor: '#ffea00',
                  color: '#0c1024',
                  fontSize: '8px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '3px',
                  display: 'inline-block',
                }}
              >
                Shop Now
              </span>
            </div>

            {/* Model Photo matching original screenshot */}
            <div style={{ height: '76px', borderRadius: '6px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85"
                alt="Woman in white shirt using tablet"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Product Cards Row matching screenshot */}
          <div style={{ padding: '10px 14px', flex: 1, backgroundColor: '#ffffff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[
                { title: 'Grey Crewneck', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=85' },
                { title: 'Leather Shoes', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=200&q=85' },
                { title: 'Handbag', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=200&q=85' },
                { title: 'Tote Bag', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=200&q=85' },
              ].map((p, i) => (
                <div key={i} style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid #f1f5f9', background: '#f8fafc' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '42px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div
        style={{
          width: '108%',
          marginLeft: '-4%',
          height: '13px',
          background: 'linear-gradient(to bottom, #cbd5e1, #94a3b8)',
          borderRadius: '0 0 12px 12px',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.45)',
          position: 'relative',
          zIndex: 10,
        }}
      />

      {/* SMARTPHONE MOBILE PREVIEW OVERLAPPING LEFT */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          bottom: '-15px',
          width: '120px',
          backgroundColor: '#0c1024',
          borderRadius: '20px',
          padding: '6px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          zIndex: 20,
        }}
      >
        <div style={{ backgroundColor: '#ffffff', borderRadius: '15px', overflow: 'hidden', padding: '8px 6px' }}>
          <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#0f172a' }}>Shopify Store</div>
          <div style={{ fontSize: '6.5px', color: '#64748b', margin: '2px 0 4px 0' }}>Modern Trendy Unique</div>
          <div style={{ height: '60px', borderRadius: '4px', overflow: 'hidden', marginBottom: '4px' }}>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&q=85"
              alt="Apparel Storefront"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ backgroundColor: '#ffea00', borderRadius: '3px', padding: '3px', textAlign: 'center', fontSize: '6.5px', fontWeight: 800, color: '#0c1024' }}>
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}

// SaaS Solutions UI Mockup (TeamFlow Dashboard)
export function SaasDashboardMockup() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Navbar */}
      <div
        style={{
          borderBottom: '1px solid #f1f5f9',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8fafc',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: '#0b3bfb' }} />
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>TeamFlow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#10b981', fontWeight: 600 }}>
          <ShieldCheck size={13} />
          <span>Scalable & Secure</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', minHeight: '190px' }}>
        {/* Sidebar */}
        <div style={{ borderRight: '1px solid #f1f5f9', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#0b3bfb', padding: '3px 6px', background: '#eff6ff', borderRadius: '4px' }}>Dashboard</div>
          <div style={{ fontSize: '9px', color: '#64748b', padding: '3px 6px' }}>Projects</div>
          <div style={{ fontSize: '9px', color: '#64748b', padding: '3px 6px' }}>Users</div>
          <div style={{ fontSize: '9px', color: '#64748b', padding: '3px 6px' }}>Analytics</div>
        </div>

        {/* Dashboard Main Area */}
        <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Project Overview</div>

          {/* 3 Metrics Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '8px', color: '#64748b' }}>Total Projects</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', fontFamily: "'Oswald', sans-serif" }}>24</div>
            </div>
            <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '8px', color: '#64748b' }}>In Progress</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0b3bfb', fontFamily: "'Oswald', sans-serif" }}>12</div>
            </div>
            <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '8px', color: '#64748b' }}>Completed</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981', fontFamily: "'Oswald', sans-serif" }}>8</div>
            </div>
          </div>

          {/* Vector Line Graph */}
          <div style={{ height: '65px', width: '100%', position: 'relative' }}>
            <svg viewBox="0 0 280 65" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0b3bfb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0b3bfb" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0 50 Q 40 40, 80 44 T 160 25 T 240 18 T 280 10 L 280 65 L 0 65 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0 50 Q 40 40, 80 44 T 160 25 T 240 18 T 280 10"
                fill="none"
                stroke="#0b3bfb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Amazon VA Mockup (Laptop with Seller Central + Real Stacked Kraft Boxes)
export function AmazonVaMockup() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto' }}>
      {/* LAPTOP */}
      <div
        style={{
          background: '#161922',
          borderRadius: '10px 10px 2px 2px',
          padding: '6px 6px 0 6px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        }}
      >
        <div
          style={{
            backgroundColor: '#131921',
            borderRadius: '6px 6px 0 0',
            aspectRatio: '16 / 10',
            overflow: 'hidden',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          {/* Amazon Logo with Smile Curve */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em' }}>
              amazon
            </span>
            <svg width="46" height="12" viewBox="0 0 50 14" style={{ marginTop: '-4px' }}>
              <path d="M4 3 C18 13 32 13 46 3" stroke="#ff9900" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M43 3 L47 3 L45 8" fill="#ff9900" />
            </svg>
          </div>
          <div style={{ fontSize: '9px', color: '#9ca3af', textAlign: 'center' }}>
            Seller Central Dashboard • High Growth Store
          </div>
        </div>
      </div>

      <div
        style={{
          width: '106%',
          marginLeft: '-3%',
          height: '8px',
          background: '#9ca3af',
          borderRadius: '0 0 6px 6px',
        }}
      />

      {/* REALISTIC CARDBOARD PARCEL BOXES IN FRONT */}
      <div
        style={{
          position: 'absolute',
          right: '-12px',
          bottom: '-14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          zIndex: 10,
        }}
      >
        {/* Top small box */}
        <div
          style={{
            width: '90px',
            height: '48px',
            backgroundColor: '#cca374',
            border: '1.5px solid #a67c48',
            borderRadius: '4px',
            boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', height: '8px', backgroundColor: '#dfbe95' }} />
          <svg width="36" height="12" viewBox="0 0 40 14" style={{ position: 'absolute', bottom: '6px' }}>
            <path d="M4 4 C14 10 26 10 36 4" stroke="#232f3e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M33 4 L37 4 L35 8" fill="#232f3e" />
          </svg>
        </div>

        {/* Bottom larger box */}
        <div
          style={{
            width: '130px',
            height: '65px',
            backgroundColor: '#cca374',
            border: '1.5px solid #a67c48',
            borderRadius: '4px',
            boxShadow: '0 12px 25px rgba(0,0,0,0.4)',
            marginTop: '-6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', height: '10px', backgroundColor: '#dfbe95' }} />
          <svg width="48" height="14" viewBox="0 0 45 14" style={{ position: 'absolute', bottom: '10px' }}>
            <path d="M4 4 C16 11 28 11 40 4" stroke="#232f3e" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            <path d="M37 4 L41 4 L39 9" fill="#232f3e" />
          </svg>
        </div>
      </div>
    </div>
  );
}
