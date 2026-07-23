import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiShield } from 'react-icons/fi';

export default function Footer() {
  const [utcTime, setUtcTime] = useState('');
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
      setIstTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Top Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', textCenter: 'left', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          {/* Col 1: Branding & Quote */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', marginBottom: '0.8rem' }}>
              [ AMAN<span style={{ color: 'var(--primary)' }}>_</span>SINGH ]
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Cybersecurity Analyst specializing in VAPT, SOC log triage, malware analysis, and security tool development.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--primary)', fontStyle: 'italic' }}>
              "Securing digital frontiers through defensive rigor."
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--secondary)', marginBottom: '0.8rem', fontWeight: 600 }}>
              // NAVIGATION
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
              <a href="#soc-dashboard" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>SOC Dashboard</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
              <a href="#tools" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Tools</a>
              <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a>
              <a href="#tryhackme" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>TryHackMe</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Col 3: Live System Status & UTC Clock */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.8rem', fontWeight: 600 }}>
              // TELEMETRY & SYSTEM TIME
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="live-dot" /> SYSTEM STATUS: ONLINE
              </span>
              <span>⏱ UTC: {utcTime}</span>
              <span>⏱ IST: {istTime}</span>
              <span style={{ color: 'var(--primary)', marginTop: '0.4rem' }}>✓ Encrypted Session Active</span>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Aman Singh. Built with React & Vite. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.2rem', fontSize: '1.2rem' }}>
            <a href="https://github.com/Amans66" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/aman-singh66/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <FiLinkedin />
            </a>
            <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ color: 'var(--text-secondary)' }}>
              <FiMail />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: '1px solid rgba(0, 255, 157, 0.3)', padding: '0.4rem 0.8rem', borderRadius: '6px', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', cursor: 'pointer' }}
          >
            Back to Top <FiArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
