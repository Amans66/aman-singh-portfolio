import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const [time, setTime] = useState('');
  const [session, setSession] = useState('0m 0s');
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      setTime(ist.toLocaleTimeString('en-US', { hour12: false }));

      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      setSession(`${mins}m ${secs}s`);
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  return (
    <footer className="site-footer">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <a href="https://github.com/Amans66" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'all 0.3s' }} className="footer-social">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/aman-singh66/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'all 0.3s' }} className="footer-social">
          <FiLinkedin />
        </a>
        <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'all 0.3s' }} className="footer-social">
          <FiMail />
        </a>
      </div>

      <div style={{ marginBottom: '0.75rem' }}>
        <span style={{ color: '#00ff9f', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>
          [ AMAN_SINGH ]
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: '#00ff41',
            boxShadow: '0 0 6px #00ff41', display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite'
          }} />
          SYSTEM: ONLINE
        </span>
        <span>⏱ {time} IST</span>
        <span>SESSION: {session}</span>
      </div>
    </footer>
  );
}
