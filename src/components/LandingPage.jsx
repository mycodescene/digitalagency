import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Monitor, 
  User, 
  ShoppingCart, 
  RefreshCw, 
  Headphones, 
  Lightbulb, 
  Star, 
  Zap, 
  Play, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { HeroAgencyMockup } from './DeviceMockups';
import { OurLatestWorkDoodle, RealProjectsDoodle, TogetherDoodle } from './HandwrittenDoodles';
import ProjectShowcaseSlider from './ProjectShowcaseSlider';
import TeamSection from './TeamSection';

export default function LandingPage({ setActivePage }) {
  // 5 Dynamic Rich Hero Slides for auto-sliding text, descriptions, and mockups
  const heroSlides = [
    {
      id: 1,
      badgeText: 'Modern Websites + Stronger Brands',
      line1: ['WEBSITES', 'THAT'],
      line2: ['GETTING', 'BETTER'],
      description:
        "I'm Nick, a Squarespace website designer based in the UK. I design bespoke, high-performing websites for bold businesses across the UK, US and beyond, with 250+ launched so far. Hand the whole thing to me on a monthly plan, or have me build it and hand you the keys. Your call.",
      primaryCta: 'Book a free call',
      secondaryCta: 'Send a message',
      doodleText: 'our latest\nwork',
      laptop: {
        siteTitle: 'Creative websites for modern brands.',
        siteSubtitle: 'Beautiful. Fast. Built to grow.',
        siteBtn: 'View work →',
        img1: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=350&q=85',
        img1Tag: 'BOLD',
        img2: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=350&q=85',
        thumb1: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=250&q=85',
        thumb2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=250&q=85',
        thumb3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=250&q=85',
      },
      phone: {
        tag: 'DESIGN AGENCY',
        title: 'Creative websites for modern brands.',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=85',
        btn: 'Start project',
      },
    },
    {
      id: 2,
      badgeText: 'High-Converting Shopify Stores',
      line1: ['HIGH-CONVERTING', 'ONLINE'],
      line2: ['SHOPIFY', 'STORES'],
      description:
        'Turn casual visitors into loyal repeat customers with bespoke, lightning-fast Shopify storefronts. Custom themes, intuitive checkout flows, and seamless app integrations built for maximum revenue.',
      primaryCta: 'Explore Shopify',
      secondaryCta: 'View Store Demos',
      doodleText: 'featured\nstore',
      laptop: {
        siteTitle: 'Build your dream store online.',
        siteSubtitle: 'Premium Themes • Fast • Scalable',
        siteBtn: 'Shop now →',
        img1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&q=85',
        img1Tag: 'SHOP',
        img2: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=350&q=85',
        thumb1: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=250&q=85',
        thumb2: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=250&q=85',
        thumb3: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=250&q=85',
      },
      phone: {
        tag: 'SHOPIFY STORE',
        title: 'Modern Trendy Unique.',
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=250&q=85',
        btn: 'Shop Now',
      },
    },
    {
      id: 3,
      badgeText: 'Scalable SaaS & Web Platforms',
      line1: ['POWERFUL', 'SAAS'],
      line2: ['BUILT', 'TO SCALE'],
      description:
        'From idea to platform — we build full-stack web applications and SaaS products with responsive UI, rock-solid security, real-time analytics, and intuitive UX designed to grow alongside your ambitions.',
      primaryCta: 'Launch Platform',
      secondaryCta: 'View Architecture',
      doodleText: 'cloud\nplatform',
      laptop: {
        siteTitle: 'Smarter workflows for modern teams.',
        siteSubtitle: 'Scalable • Real-Time • Secure',
        siteBtn: 'Launch app →',
        img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=350&q=85',
        img1Tag: 'GROWTH',
        img2: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=350&q=85',
        thumb1: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=250&q=85',
        thumb2: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=250&q=85',
        thumb3: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=250&q=85',
      },
      phone: {
        tag: 'TEAMFLOW SAAS',
        title: 'Real-time platform metrics.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=250&q=85',
        btn: 'View App',
      },
    },
    {
      id: 4,
      badgeText: 'Bespoke Digital Growth Solutions',
      line1: ['DESIGNS', 'THAT'],
      line2: ['DRIVE', 'RESULTS'],
      description:
        'Premium visual design meets conversion engineering. We partner with founders and visionary executives to revamp outdated web presences into modern, authoritative market leaders that outshine competitors.',
      primaryCta: 'Start Redesign',
      secondaryCta: 'View Case Studies',
      doodleText: 'award\nwinning',
      laptop: {
        siteTitle: 'Crafted with precision & purpose.',
        siteSubtitle: 'Minimalist • Aesthetic • Impactful',
        siteBtn: 'Explore works →',
        img1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=350&q=85',
        img1Tag: 'IMPACT',
        img2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=350&q=85',
        thumb1: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=250&q=85',
        thumb2: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=250&q=85',
        thumb3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=250&q=85',
      },
      phone: {
        tag: 'STUDIO ZENTIX',
        title: 'Award-winning digital craft.',
        img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=250&q=85',
        btn: 'View Portfolio',
      },
    },
    {
      id: 5,
      badgeText: 'Amazon VA & Multi-Channel Mastery',
      line1: ['DIGITAL', 'BRANDS'],
      line2: ['READY', 'TO GROW'],
      description:
        'Supercharge your online store performance with end-to-end management, product listing optimization, automated logistics workflows, and dedicated growth support so you can focus completely on scaling your revenue.',
      primaryCta: 'Scale Your Store',
      secondaryCta: 'Book Strategy Call',
      doodleText: '7-figure\nscale',
      laptop: {
        siteTitle: 'Scale your business to 7-figures.',
        siteSubtitle: 'Optimized • Automated • High ROI',
        siteBtn: 'Scale now →',
        img1: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=400&q=85',
        img1Tag: 'SCALE',
        img2: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=350&q=85',
        thumb1: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=250&q=85',
        thumb2: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=250&q=85',
        thumb3: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=250&q=85',
      },
      phone: {
        tag: 'GROWTH METRICS',
        title: '+340% YoY Revenue Boost.',
        img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=250&q=85',
        btn: 'Book Strategy',
      },
    },
  ];

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [typedCount, setTypedCount] = useState(0);

  const currentSlide = heroSlides[activeHeroSlide];
  const allWords = [...currentSlide.line1, ...currentSlide.line2];

  // Auto-play sliding interval (5.2 seconds per slide)
  useEffect(() => {
    if (isHeroPaused) return;
    const autoTimer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5200);
    return () => clearInterval(autoTimer);
  }, [isHeroPaused, heroSlides.length]);

  // Word-by-word typing animation for the current active slide
  useEffect(() => {
    setTypedCount(0);
    const wordTimer = setInterval(() => {
      setTypedCount((prev) => {
        if (prev < allWords.length) {
          return prev + 1;
        }
        clearInterval(wordTimer);
        return prev;
      });
    }, 200);
    return () => clearInterval(wordTimer);
  }, [activeHeroSlide, allWords.length]);

  // Reviews slider state
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design',
    budget: '$1,500 - $3,000',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: 'Website Design', budget: '$1,500 - $3,000', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const reviews = [
    {
      id: 1,
      quote:
        'Nick delivered a stunning website that perfectly captured our brand. The process was smooth, and communication was excellent from start to finish.',
      name: 'Sarah Johnson',
      role: 'Founder, Bloom Co.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      quote:
        'Professional, creative and super easy to work with. Our new site has already brought in more leads and converted visitors into long-term clients!',
      name: 'James Carter',
      role: 'CEO, Vista Digital',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      quote:
        "I couldn't be happier with the results. Nick really understood our vision and brought it to life beyond our expectations. Highly recommended!",
      name: 'Emily Roberts',
      role: 'Marketing Director, PureLine',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
  ];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* ========================================================
          1. HERO SECTION (ROYAL BLUE BLUEPRINT GRID WITH SLIDER)
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
            gridTemplateColumns: '1.05fr 1.35fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Dynamic Headline, Copy & CTAs */}
          <div
            key={activeHeroSlide}
            className="hero-slide-enter"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
          >
            {/* Dynamic Star Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '7px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '999px',
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '26px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ color: '#ffea00', fontSize: '15px' }}>★</span>
              <span>{currentSlide.badgeText}</span>
            </div>

            {/* Dynamic Main Heading with Word-by-Word Typing Effect */}
            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(52px, 6.4vw, 86px)',
                fontWeight: 700,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '26px',
                color: '#ffffff',
              }}
            >
              <div style={{ display: 'inline' }}>
                {currentSlide.line1.map((word, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      marginRight: '14px',
                      opacity: typedCount > i ? 1 : 0.2,
                      transform: typedCount > i ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <br />
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '6px' }}>
                {currentSlide.line2.map((word, i) => {
                  const globalIdx = currentSlide.line1.length + i;
                  return (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        marginRight: '14px',
                        opacity: typedCount > globalIdx ? 1 : 0.2,
                        transform: typedCount > globalIdx ? 'translateY(0)' : 'translateY(8px)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
                {typedCount < allWords.length && <span className="typing-cursor" />}

                {/* Thick Yellow Brush Underline */}
                <svg
                  width="100%"
                  height="18"
                  viewBox="0 0 380 16"
                  fill="none"
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '100%',
                    pointerEvents: 'none',
                  }}
                >
                  <path
                    d="M3 10C95 4 235 3 376 11"
                    stroke="#ffea00"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </h1>

            {/* Dynamic Narrative Body Copy */}
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.94)',
                maxWidth: '560px',
                marginBottom: '36px',
                fontWeight: 400,
                minHeight: '85px',
              }}
            >
              {currentSlide.description}
            </p>

            {/* Dynamic CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <a href="#contact" className="btn-yellow">
                {currentSlide.primaryCta} <ArrowUpRight size={19} />
              </a>
              <a href="#services-overview" className="btn-yellow-outline">
                {currentSlide.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Agency Showcase Mockup + Dynamic Doodle Arrow */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
          >
            {/* Dynamic Yellow Handwritten Doodle */}
            <div
              style={{
                position: 'absolute',
                top: '-36px',
                left: '-24px',
                zIndex: 20,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pointerEvents: 'none' }}>
                <span 
                  style={{ 
                    fontFamily: "'Caveat', cursive", 
                    color: '#ffea00', 
                    fontSize: '32px', 
                    fontWeight: 700,
                    transform: 'rotate(-7deg)',
                    display: 'inline-block',
                    letterSpacing: '0.02em',
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.1,
                  }}
                >
                  {currentSlide.doodleText}
                </span>
                <svg width="84" height="64" viewBox="0 0 70 55" fill="none" style={{ marginTop: '-4px', marginLeft: '14px' }}>
                  <path 
                    d="M12 4C28 12 46 22 52 38C54 44 53 47 50 49" 
                    stroke="#ffea00" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M38 45L51 50L54 36" 
                    stroke="#ffea00" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>

            <HeroAgencyMockup 
              slide={currentSlide}
              activeSlide={activeHeroSlide}
              totalSlides={heroSlides.length}
              onSelectSlide={(idx) => setActiveHeroSlide(idx)}
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SERVICES SECTION (DARK NAVY / BLACK BACKGROUND)
         ======================================================== */}
      <section
        id="services-overview"
        style={{
          backgroundColor: '#090a14',
          padding: '120px 28px',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '340px 1fr',
              gap: '44px',
              alignItems: 'flex-start',
            }}
            className="services-overview-grid"
          >
            {/* Left Header */}
            <div>
              <div className="section-badge badge-white">
                <span className="dot" />
                <span>WHAT I DO</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(42px, 5vw, 60px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  color: '#ffffff',
                }}
              >
                SERVICES
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#94a3b8',
                  marginBottom: '28px',
                }}
              >
                From strategy to launch, I offer end-to-end web design solutions to help your
                brand stand out and grow online.
              </p>
              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-yellow"
                style={{ padding: '12px 24px', fontSize: '15px' }}
              >
                View all services <ArrowUpRight size={17} />
              </button>
            </div>

            {/* Right Cards: 5 Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  title: 'Website Design',
                  desc: 'Custom, modern websites built for performance and conversions.',
                  icon: Monitor,
                  anchor: 'shopify',
                },
                {
                  title: 'UI/UX Design',
                  desc: 'User-centered design that creates seamless experiences.',
                  icon: User,
                  anchor: 'saas',
                },
                {
                  title: 'E-Commerce',
                  desc: 'Powerful online stores that sell and scale.',
                  icon: ShoppingCart,
                  anchor: 'ecommerce',
                },
                {
                  title: 'Website Redesign',
                  desc: 'Refresh your existing site with a modern look and better performance.',
                  icon: RefreshCw,
                  anchor: 'shopify',
                },
                {
                  title: 'Ongoing Support',
                  desc: 'Keep your site updated, secure and running smoothly.',
                  icon: Headphones,
                  anchor: 'amazon',
                },
              ].map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#111424',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '26px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease',
                      minHeight: '230px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 234, 0, 0.4)';
                      e.currentTarget.style.backgroundColor = '#151a30';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.backgroundColor = '#111424';
                    }}
                  >
                    <div>
                      {/* Yellow Circle Icon */}
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          backgroundColor: '#ffea00',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0c1024',
                          marginBottom: '18px',
                        }}
                      >
                        <IconComponent size={22} strokeWidth={2.2} />
                      </div>
                      <h3
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '10px',
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13.5px',
                          lineHeight: 1.55,
                          color: '#94a3b8',
                          marginBottom: '18px',
                        }}
                      >
                        {svc.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setActivePage('services');
                        setTimeout(() => {
                          const el = document.getElementById(svc.anchor);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ffea00',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: 0,
                        textAlign: 'left',
                      }}
                    >
                      Learn more →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3D COVERFLOW PORTFOLIO SHOWCASE SLIDER
         ======================================================== */}
      <ProjectShowcaseSlider />

      {/* ========================================================
          3. ABOUT ME SECTION (CLEAN WHITE BACKGROUND)
         ======================================================== */}
      <section
        id="about"
        style={{
          backgroundColor: '#ffffff',
          padding: '130px 28px',
          color: '#0c1024',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.1fr 1fr',
              gap: '44px',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            {/* Left Column: Story & Stats */}
            <div>
              <div className="section-badge badge-dark">
                <span>ABOUT ME</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  color: '#0c1024',
                }}
              >
                TURNING IDEAS INTO BEAUTIFUL WEBSITES
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.7,
                  color: '#475569',
                  marginBottom: '34px',
                }}
              >
                I'm Nick, a UK-based Squarespace designer with a passion for clean design,
                great user experiences and results. I work with ambitious businesses to
                create websites that look amazing, perform well and help them grow.
              </p>

              {/* 3 Stats Numbers */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '18px',
                  marginBottom: '34px',
                  paddingBottom: '26px',
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '38px',
                      fontWeight: 700,
                      color: '#0c1024',
                      lineHeight: 1,
                    }}
                  >
                    250+
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px', fontWeight: 600 }}>
                    Websites Launched
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '38px',
                      fontWeight: 700,
                      color: '#0c1024',
                      lineHeight: 1,
                    }}
                  >
                    3+
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px', fontWeight: 600 }}>
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '38px',
                      fontWeight: 700,
                      color: '#0c1024',
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px', fontWeight: 600 }}>
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn-yellow" style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
                Learn more about me <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Center Column: Portrait with handwritten doodle overlay */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.14)',
                  position: 'relative',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                  alt="Nick Designer working on high performance website"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Handwritten Doodle Overlay: "Design Build Grow" */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '20px',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.15,
                      display: 'block',
                      textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                    }}
                  >
                    Design<br />Build<br />Grow
                  </span>
                  <svg width="48" height="32" viewBox="0 0 45 30" fill="none">
                    <path d="M6 6 C16 18 28 22 38 12" stroke="#ffea00" strokeWidth="2.8" strokeLinecap="round" />
                    <path d="M30 10 L40 12 L38 22" stroke="#ffea00" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Feature Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {[
                {
                  title: 'Strategy First',
                  desc: 'Every project starts with a plan, not just a design.',
                  icon: Lightbulb,
                },
                {
                  title: 'Clean & Modern Design',
                  desc: 'Simple, beautiful and built for your audience.',
                  icon: Star,
                },
                {
                  title: 'Fast & Reliable',
                  desc: 'Optimized for speed, SEO and conversions.',
                  icon: Zap,
                },
              ].map((feat, i) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '18px',
                      alignItems: 'flex-start',
                      padding: '18px 20px',
                      borderRadius: '14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0b3bfb',
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: '#0c1024',
                          marginBottom: '4px',
                        }}
                      >
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.55 }}>
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. VIDEO SHOWCASE SECTION (ROYAL BLUE BLUEPRINT GRID)
         ======================================================== */}
      <section
        className="blueprint-grid"
        style={{
          padding: '130px 28px',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1.3fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="video-grid"
        >
          {/* Left: Video Card Mockup */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              backgroundColor: '#0c1536',
              aspectRatio: '16 / 10',
            }}
          >
            {/* Background Image / Ambient Studio */}
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              alt="Video Preview Presentation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
            />

            {/* Video overlay badge */}
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                backgroundColor: '#ffea00',
                color: '#0c1024',
                fontSize: '12px',
                fontWeight: 800,
                padding: '5px 12px',
                borderRadius: '6px',
              }}
            >
              Watch Video
            </div>

            {/* Laptop screen inside video with title */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0b3bfb',
                  boxShadow: '0 0 35px rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  marginBottom: '16px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Play size={26} fill="#0b3bfb" style={{ marginLeft: '4px' }} />
              </div>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                }}
              >
                Better Websites. Bigger Dreams.
              </div>
            </div>

            {/* Timestamp Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '18px',
                backgroundColor: 'rgba(0,0,0,0.75)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '5px',
              }}
            >
              2:14
            </div>
          </div>

          {/* Right: Copy + Doodle */}
          <div style={{ position: 'relative' }}>
            <div className="section-badge badge-white">
              <span className="dot" />
              <span>WATCH MY WORK</span>
            </div>
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(40px, 4.8vw, 58px)',
                fontWeight: 700,
                lineHeight: 1.05,
                textTransform: 'uppercase',
                marginBottom: '18px',
                color: '#ffffff',
              }}
            >
              SEE HOW I BRING IDEAS TO LIFE
            </h2>
            <p
              style={{
                fontSize: '16.5px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '32px',
                maxWidth: '480px',
              }}
            >
              Watch a quick video to see how I design, build and launch high-performing
              websites for brands like yours.
            </p>

            <a href="#contact" className="btn-yellow">
              Watch the video <ArrowUpRight size={18} />
            </a>

            {/* Real projects doodle on far right */}
            <div
              style={{
                position: 'absolute',
                right: '-10px',
                top: '20px',
              }}
              className="real-results-doodle"
            >
              <RealProjectsDoodle />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PRICING SECTION (CLEAN WHITE BACKGROUND)
         ======================================================== */}
      <section
        id="pricing"
        style={{
          backgroundColor: '#ffffff',
          padding: '135px 28px',
          color: '#0c1024',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '340px 1fr',
              gap: '44px',
              alignItems: 'flex-start',
            }}
            className="pricing-grid"
          >
            {/* Left Header */}
            <div>
              <div className="section-badge badge-dark">
                <span>PRICING</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  color: '#0c1024',
                }}
              >
                SIMPLE, TRANSPARENT PRICING
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#64748b',
                  marginBottom: '28px',
                }}
              >
                Choose the plan that fits your goals. All plans include a responsive
                design, SEO setup and ongoing support.
              </p>
              <a href="#contact" className="btn-yellow">
                Get started <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Right: 3 Pricing Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '22px',
                alignItems: 'stretch',
              }}
            >
              {/* Starter */}
              <div
                style={{
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0c1024', marginBottom: '4px' }}>
                    Starter
                  </h3>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                    Perfect for small businesses
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#0c1024' }}>
                      $799
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>One-time</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['1-5 pages', 'Responsive design', 'Basic SEO setup', '1 revision'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: '#334155' }}>
                        <Check size={16} style={{ color: '#0b3bfb', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="btn-outline-dark" style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14.5px' }}>
                  Choose plan
                </a>
              </div>

              {/* Business (Most Popular - Yellow Highlight) */}
              <div
                style={{
                  border: '2.5px solid #ffea00',
                  borderRadius: '18px',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 12px 35px rgba(255, 234, 0, 0.25)',
                  position: 'relative',
                  transform: 'scale(1.03)',
                }}
              >
                {/* Most Popular Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#ffea00',
                    color: '#0c1024',
                    fontSize: '12px',
                    fontWeight: 800,
                    padding: '4px 14px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </div>

                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0c1024', marginBottom: '4px' }}>
                    Business
                  </h3>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                    For growing brands
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#0c1024' }}>
                      $1,499
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>One-time</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['Up to 10 pages', 'E-commerce ready', 'Advanced SEO', '3 revisions'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: '#0c1024', fontWeight: 600 }}>
                        <Check size={16} style={{ color: '#0b3bfb', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="btn-yellow" style={{ width: '100%', justifyContent: 'center' }}>
                  Choose plan
                </a>
              </div>

              {/* Pro */}
              <div
                style={{
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0c1024', marginBottom: '4px' }}>
                    Pro
                  </h3>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '18px' }}>
                    For ambitious brands
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#0c1024' }}>
                      $2,499
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>One-time</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['Unlimited pages', 'Custom features', 'Priority support', '5 revisions'].map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '14.5px', color: '#334155' }}>
                        <Check size={16} style={{ color: '#0b3bfb', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="btn-outline-dark" style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14.5px' }}>
                  Choose plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CLIENT REVIEWS SECTION (DARK BLUEPRINT GRID)
         ======================================================== */}
      <section
        id="reviews"
        className="blueprint-grid-dark"
        style={{
          padding: '125px 28px',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '44px',
            }}
          >
            <div>
              <div className="section-badge badge-white">
                <span className="dot" />
                <span>CLIENT REVIEWS</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  color: '#ffffff',
                }}
              >
                WHAT CLIENTS SAY
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '540px' }}>
                Don't just take my word for it. Here's what some of my amazing clients have to say
                about working with me.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a href="#contact" className="btn-yellow" style={{ padding: '11px 22px', fontSize: '14px' }}>
                View all reviews <ArrowUpRight size={16} />
              </a>

              {/* Slider Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handlePrevReview}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Previous review"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextReview}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Next review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  backgroundColor: 'rgba(16, 20, 38, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '18px',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontStyle: 'italic',
                    marginBottom: '26px',
                  }}
                >
                  "{rev.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                        {rev.name}
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#94a3b8' }}>{rev.role}</div>
                    </div>
                  </div>

                  {/* 5 Stars */}
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
          CORE LEADERSHIP TEAM (Hasaan Bin Arif & Shahwaiz Mehdi)
         ======================================================== */}
      <TeamSection />

      {/* ========================================================
          7. GET A QUOTE SECTION (BRIGHT VIBRANT YELLOW BACKGROUND)
         ======================================================== */}
      <section
        id="contact"
        style={{
          backgroundColor: '#ffea00',
          padding: '120px 28px',
          color: '#0c1024',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 1fr',
              gap: '44px',
              alignItems: 'center',
            }}
            className="quote-grid"
          >
            {/* Left Column: Heading & Description */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#0c1024',
                  marginBottom: '14px',
                }}
              >
                <span>⊙</span>
                <span>LET'S WORK TOGETHER</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(40px, 4.6vw, 56px)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  color: '#0c1024',
                }}
              >
                GET A QUOTE FROM ME
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#1e293b',
                  fontWeight: 500,
                }}
              >
                Have the plan the mind? Fill out the form and I'll get back to you within 24
                hours with a custom quote.
              </p>
            </div>

            {/* Middle Column: Interactive Form Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '18px',
                padding: '32px',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.1)',
              }}
            >
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '34px 20px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                    }}
                  >
                    <Check size={30} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0c1024', marginBottom: '8px' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#64748b' }}>
                    Thank you! Nick will review your project and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
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
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '14.5px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <option value="Website Design">Website Design</option>
                        <option value="Shopify Development">Shopify Development</option>
                        <option value="SaaS Solution">SaaS Solution</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="Amazon VA Services">Amazon VA Services</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                        Your Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '14.5px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <option value="Under $1,500">Under $1,500</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Tell me about your project *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your goals, requirements or any inspiration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14.5px',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#0c1024',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '14px 28px',
                      fontSize: '15.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '9px',
                      transition: 'all 0.2s ease',
                      marginTop: '6px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0c1024')}
                  >
                    Send message <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Handwritten Doodle & Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '22px' }}>
              <TogetherDoodle />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', fontWeight: 700, color: '#0c1024' }}>
                  <Mail size={18} />
                  <span>hello@zentix.design</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', fontWeight: 700, color: '#0c1024' }}>
                  <MapPin size={18} />
                  <span>London, UK</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14.5px', fontWeight: 700, color: '#0c1024' }}>
                  <Clock size={18} />
                  <span>Mon - Fri, 9am - 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 980px) {
          .hero-grid, .about-grid, .video-grid, .pricing-grid, .services-overview-grid, .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .real-results-doodle {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
