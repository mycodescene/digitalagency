import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    firstName: 'Hasaan',
    lastName: 'Bin Arif',
    role: 'Software Engineer',
    bio: 'Full-Stack Web Architect & Scalable Cloud Systems Specialist.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    tag: 'Engineering & Tech',
    skills: ['React / Next.js', 'Cloud Architecture', 'API Integrations'],
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    firstName: 'Shahwaiz',
    lastName: 'Mehdi',
    role: 'Business Development Executive',
    bio: 'Strategic Partnerships, Enterprise Client Growth & Market Expansion.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    tag: 'Growth & Strategy',
    skills: ['Strategic Partnerships', 'Client Acquisition', 'Revenue Growth'],
    linkedin: 'https://linkedin.com',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{
        backgroundColor: '#070b1c',
        backgroundImage:
          'radial-gradient(circle at 50% 25%, rgba(11, 59, 251, 0.25) 0%, rgba(7, 11, 28, 0.98) 75%)',
        padding: '120px 24px 130px 24px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint Grid Lines */}
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
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 234, 0, 0.12)',
              border: '1.5px solid rgba(255, 234, 0, 0.35)',
              color: '#ffea00',
              fontSize: '11.5px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={15} />
            <span>LEADERSHIP & EXPERTISE</span>
          </div>

          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: 'clamp(38px, 5.2vw, 64px)',
              fontWeight: 700,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '14px',
            }}
          >
            MEET OUR <span style={{ color: '#ffea00' }}>CORE TEAM</span>
          </h2>

          <p
            style={{
              fontSize: '15.5px',
              color: '#94a3b8',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            The dedicated digital minds engineering bespoke web platforms and driving
            exponential business growth for modern ambitious brands.
          </p>
        </div>

        {/* 2 BIG CENTERED CORPORATE PORTRAIT CARDS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '36px',
          }}
          className="team-cards-container"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                position: 'relative',
                width: '400px',
                maxWidth: '100%',
                height: '560px',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow:
                  '0 25px 65px rgba(0, 0, 0, 0.65), 0 0 0 1.5px rgba(255, 255, 255, 0.12)',
                backgroundColor: '#0a1645',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow =
                  '0 35px 85px rgba(0, 0, 0, 0.8), 0 0 45px rgba(255, 234, 0, 0.3), 0 0 0 2px #ffea00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 25px 65px rgba(0, 0, 0, 0.65), 0 0 0 1.5px rgba(255, 255, 255, 0.12)';
              }}
            >
              {/* Blue Studio Backdrop Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 60% 30%, #1545cf 0%, #092078 50%, #050d2e 100%)',
                  zIndex: 1,
                }}
              />

              {/* Company Logo Badge in Top Left (matching reference) */}
              <div
                style={{
                  position: 'absolute',
                  top: '22px',
                  left: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="4" height="16" rx="2" fill="#ffffff" />
                    <rect x="10" y="8" width="4" height="12" rx="2" fill="#ffea00" />
                    <rect x="17" y="2" width="4" height="18" rx="2" fill="#ffffff" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: '14px',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      color: '#ffffff',
                      lineHeight: 1,
                    }}
                  >
                    ZENTIX
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      letterSpacing: '0.04em',
                      fontWeight: 600,
                    }}
                  >
                    STUDIO
                  </div>
                </div>
              </div>

              {/* Top Right Tag */}
              <div
                style={{
                  position: 'absolute',
                  top: '22px',
                  right: '22px',
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(5, 8, 20, 0.65)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffea00',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '5px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 234, 0, 0.35)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {member.tag}
                </span>
              </div>

              {/* Portrait Image of Member */}
              <img
                src={member.image}
                alt={`${member.firstName} ${member.lastName}`}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '92%',
                  height: '84%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  zIndex: 2,
                  filter: 'contrast(1.05)',
                }}
              />

              {/* Deep Bottom Vignette Overlay for Text Legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(4, 8, 26, 0.96) 0%, rgba(4, 8, 26, 0.8) 32%, rgba(4, 8, 26, 0.1) 60%, transparent 100%)',
                  zIndex: 3,
                }}
              />

              {/* Action Circle Icons in Bottom Right (matching reference) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 10,
                }}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffea00';
                    e.currentTarget.style.color = '#0c1024';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  aria-label="LinkedIn Profile"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Bottom Member Identity Info (Exact Bold Large Typography from Reference) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: '65px',
                  padding: '28px 24px',
                  zIndex: 5,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Bold Stacked Name */}
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: 'clamp(34px, 4.5vw, 44px)',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                    textShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {member.firstName}
                  <br />
                  <span style={{ color: '#ffffff' }}>{member.lastName}</span>
                </h3>

                {/* Role / Title */}
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffea00',
                    marginBottom: '6px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {member.role}
                </div>

                {/* Subtitle Bio */}
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.45,
                    color: 'rgba(255, 255, 255, 0.85)',
                    margin: 0,
                  }}
                >
                  {member.bio}
                </p>

                {/* Skills Pill Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 700,
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 860px) {
          .team-cards-container {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
