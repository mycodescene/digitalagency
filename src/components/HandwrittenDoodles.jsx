import React from 'react';

// Handwritten annotations & doodle arrows matching the exact design
export function OurLatestWorkDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-start ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '32px', 
          fontWeight: 700,
          transform: 'rotate(-7deg)',
          display: 'inline-block',
          letterSpacing: '0.02em',
          textShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
      >
        our latest<br />work
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
  );
}

export function RealProjectsDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-end ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '28px', 
          fontWeight: 700,
          transform: 'rotate(-5deg)',
          textAlign: 'right',
          lineHeight: '1.2'
        }}
      >
        Real projects.<br />Real results.
      </span>
      <svg width="55" height="45" viewBox="0 0 60 50" fill="none" style={{ marginTop: '2px', marginRight: '24px' }}>
        <path 
          d="M48 4C42 20 30 35 12 40" 
          stroke="#ffea00" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
        />
        <path 
          d="M24 33L10 40L16 48" 
          stroke="#ffea00" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function YourStoreDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-start ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '26px', 
          fontWeight: 700,
          transform: 'rotate(-4deg)',
          lineHeight: '1.2',
          textAlign: 'left'
        }}
      >
        Your Store<br />Our Expertise
      </span>
      <svg width="60" height="40" viewBox="0 0 65 45" fill="none" style={{ marginTop: '2px' }}>
        <path 
          d="M52 8C36 12 20 20 12 34" 
          stroke="#ffea00" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
        />
        <path 
          d="M24 31L10 34L14 42" 
          stroke="#ffea00" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function SellMoreDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '24px', 
          fontWeight: 700,
          transform: 'rotate(-10deg)'
        }}
      >
        Sell<br />More
      </span>
      <svg width="45" height="40" viewBox="0 0 50 45" fill="none">
        <path 
          d="M38 6C30 18 24 28 14 36" 
          stroke="#ffea00" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
        />
        <path 
          d="M24 35L12 37L16 43" 
          stroke="#ffea00" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function MoreSalesDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '24px', 
          fontWeight: 700,
          transform: 'rotate(-4deg)',
          textAlign: 'center',
          lineHeight: '1.2'
        }}
      >
        More Sales<br />Less Hassle
      </span>
      <svg width="45" height="40" viewBox="0 0 50 45" fill="none" style={{ marginTop: '2px' }}>
        <path 
          d="M36 6C28 18 20 28 10 35" 
          stroke="#ffea00" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
        />
        <path 
          d="M22 34L10 36L14 43" 
          stroke="#ffea00" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function TogetherDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#0c1024', 
          fontSize: '26px', 
          fontWeight: 700,
          transform: 'rotate(-5deg)',
          textAlign: 'center',
          lineHeight: '1.25'
        }}
      >
        Let's create<br />something great<br />together!
      </span>
      <svg width="50" height="40" viewBox="0 0 55 45" fill="none" style={{ marginTop: '4px' }}>
        <path 
          d="M12 8C24 16 34 24 40 34" 
          stroke="#0c1024" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
        />
        <path 
          d="M28 34L41 36L39 24" 
          stroke="#0c1024" 
          strokeWidth="2.4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function TogetherPaperPlaneDoodle({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ pointerEvents: 'none' }}>
      <span 
        style={{ 
          fontFamily: "'Caveat', cursive", 
          color: '#ffea00', 
          fontSize: '26px', 
          fontWeight: 700,
          transform: 'rotate(-6deg)',
          textAlign: 'center',
          lineHeight: '1.2'
        }}
      >
        Let's build<br />something amazing<br />together!
      </span>
      <svg width="55" height="45" viewBox="0 0 60 50" fill="none" style={{ marginTop: '8px' }}>
        <path 
          d="M10 38C22 34 32 26 44 14" 
          stroke="#ffea00" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
        />
        <path 
          d="M48 10L35 15L42 22L48 10Z" 
          fill="#ffea00" 
          stroke="#ffea00" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export function YellowSparksDoodle({ className = '', style = {} }) {
  return (
    <svg width="36" height="30" viewBox="0 0 36 30" fill="none" className={className} style={{ pointerEvents: 'none', ...style }}>
      <line x1="6" y1="26" x2="2" y2="12" stroke="#ffea00" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="24" x2="18" y2="4" stroke="#ffea00" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="26" x2="34" y2="12" stroke="#ffea00" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
