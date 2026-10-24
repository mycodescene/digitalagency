import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aura Luxe Atelier',
    category: 'Luxury Fashion eCommerce',
    tag: 'Shopify Plus',
    stat: '+340% Conversions',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85',
    color: '#ffea00',
  },
  {
    id: 2,
    title: 'Nova AI Platform',
    category: 'Enterprise SaaS Dashboard',
    tag: 'Next.js & Cloud',
    stat: '120k Active Users',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85',
    color: '#38bdf8',
  },
  {
    id: 3,
    title: 'Bold Streetwear Co.',
    category: 'Urban Apparel Brand',
    tag: 'Squarespace Bespoke',
    stat: '£1.4M Sales Launched',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85',
    color: '#fbbf24',
  },
  {
    id: 4,
    title: 'Kinetic Sound Lab',
    category: 'Creative Audio Technology',
    tag: 'Custom WebGL & UI',
    stat: 'Awwwards Site of the Day',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=85',
    color: '#a855f7',
  },
  {
    id: 5,
    title: 'Zenith Pay Mobile',
    category: 'Fintech & Digital Banking',
    tag: 'Fintech App & Web',
    stat: '$45M Series A',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=85',
    color: '#10b981',
  },
  {
    id: 6,
    title: 'Arc Studio Architects',
    category: 'Spatial Design & Architecture',
    tag: 'Editorial Portfolio',
    stat: 'Global Design Award',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    color: '#f97316',
  },
  {
    id: 7,
    title: 'Pure Organics Botanica',
    category: 'Sustainable DTC Skincare',
    tag: 'Headless Commerce',
    stat: '+210% Retention',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85',
    color: '#ec4899',
  },
];

export default function ProjectShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const lastWheelTime = useRef(0);

  // Auto-sliding continuously every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  // Mouse move parallax tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 18, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Trackpad / Mouse Wheel to slide
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 250) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 15) {
      lastWheelTime.current = now;
      if (delta > 0) handleNext();
      else handlePrev();
    }
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: '#060914',
        backgroundImage:
          'radial-gradient(ellipse at 50% 35%, rgba(11, 59, 251, 0.28) 0%, rgba(6, 9, 20, 0.95) 70%)',
        padding: '100px 20px 110px 20px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Blueprint Grid Lines Accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 20px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 234, 0, 0.12)',
              border: '1.5px solid rgba(255, 234, 0, 0.35)',
              color: '#ffea00',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={15} />
            <span>FEATURED PROJECTS & CLIENT WORK</span>
          </div>

          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              fontWeight: 700,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '14px',
            }}
          >
            PORTFOLIO <span style={{ color: '#ffea00' }}>SHOWCASE</span>
          </h2>

          <p
            style={{
              fontSize: '15.5px',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Hover on any card to bring it to center, tilt with your mouse, or let it auto-slide
            smoothly across our showcase.
          </p>
        </div>

        {/* 3D CURVED FAN COVERFLOW CONTAINER (BIGGER SIZE) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1300px',
            transformStyle: 'preserve-3d',
            userSelect: 'none',
          }}
          className="portfolio-slider-stage"
        >
          {projects.map((proj, idx) => {
            let distance = idx - activeIndex;
            const total = projects.length;

            if (distance > total / 2) distance -= total;
            if (distance < -total / 2) distance += total;

            const isCenter = distance === 0;
            const isVisible = Math.abs(distance) <= 3;

            if (!isVisible) return null;

            // Bigger wide fan geometry:
            const rotateY = distance * -16 + (isCenter ? mouseOffset.x * 0.45 : 0);
            const rotateZ = distance * 5;
            const translateX = distance * 175 + (isCenter ? mouseOffset.x * 1.6 : 0);
            const translateY = Math.abs(distance) * 26 + (isCenter ? mouseOffset.y : 0);
            const translateZ = -Math.abs(distance) * 95;
            const scale = isCenter ? 1.12 : Math.max(0.74, 1 - Math.abs(distance) * 0.09);
            const zIndex = 40 - Math.abs(distance) * 6;
            const opacity = Math.max(0.4, 1 - Math.abs(distance) * 0.2);

            return (
              <div
                key={proj.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '470px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                  transformOrigin: 'center bottom',
                  transition: 'all 0.45s cubic-bezier(0.2, 0.85, 0.3, 1)',
                  zIndex,
                  opacity,
                  boxShadow: isCenter
                    ? '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(255, 234, 0, 0.38), 0 0 0 3px #ffea00'
                    : '0 16px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                  backgroundColor: '#0d1326',
                }}
                className="portfolio-card"
              >
                {/* Background Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: isCenter ? 'scale(1.08)' : 'scale(1)',
                  }}
                />

                {/* Dark Vignette / Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(5, 8, 20, 0.96) 0%, rgba(5, 8, 20, 0.4) 50%, rgba(0,0,0,0.15) 100%)',
                  }}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    right: '18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(5, 8, 20, 0.75)',
                      backdropFilter: 'blur(10px)',
                      color: proj.color,
                      fontSize: '10.5px',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '999px',
                      border: `1.5px solid ${proj.color}50`,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {proj.tag}
                  </span>

                  {isCenter && (
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#ffea00',
                        color: '#0c1024',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(255, 234, 0, 0.5)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <ExternalLink size={16} strokeWidth={2.5} />
                    </div>
                  )}
                </div>

                {/* Bottom Project Details */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    zIndex: 2,
                  }}
                >
                  <div style={{ fontSize: '11.5px', color: '#cbd5e1', fontWeight: 600 }}>
                    {proj.category}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '23px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {proj.title}
                  </h4>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#ffea00',
                      fontWeight: 800,
                      marginTop: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>★</span> {proj.stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTROLS & PAGINATION */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '30px',
          }}
        >
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(255, 255, 255, 0.22)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffea00';
              e.currentTarget.style.color = '#0c1024';
              e.currentTarget.style.borderColor = '#ffea00';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots Indicator with Direct Hover Switching */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: activeIndex === i ? '28px' : '9px',
                  height: '9px',
                  borderRadius: '5px',
                  backgroundColor: activeIndex === i ? '#ffea00' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: 0,
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(255, 255, 255, 0.22)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffea00';
              e.currentTarget.style.color = '#0c1024';
              e.currentTarget.style.borderColor = '#ffea00';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Responsive Styles for Mobile and Tablet */}
      <style>{`
        @media (max-width: 900px) {
          .portfolio-slider-stage {
            height: 480px !important;
          }
          .portfolio-card {
            width: 250px !important;
            height: 400px !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-slider-stage {
            height: 420px !important;
            perspective: 900px !important;
          }
          .portfolio-card {
            width: 220px !important;
            height: 350px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
