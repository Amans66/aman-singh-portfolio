import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiTarget, FiCode, FiAward, FiUser } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const stats = [
  { icon: <FiCode />, value: 101, suffix: '', label: 'THM Rooms (Top 4%)' },
  { icon: <FiTarget />, value: 11, suffix: '', label: 'THM Badges' },
  { icon: <FiShield />, value: 10, suffix: '+', label: 'Systems Audited (VAPT)' },
  { icon: <FiAward />, value: 3, suffix: '', label: 'Certifications' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.ceil(target / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// ABOUT ME</div>
        <h2 className="section-title">
          <span className="highlight glitch" data-text="Who">Who</span> Am I?
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ padding: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                flexShrink: 0,
                position: 'relative',
                alignSelf: 'center',
              }}
            >
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid rgba(0,255,159,0.5)',
                boxShadow: '0 0 20px rgba(0,255,159,0.2), 0 0 40px rgba(0,255,159,0.1), inset 0 0 20px rgba(0,0,0,0.3)',
                position: 'relative',
              }}>
                <img
                  src={profileImg}
                  alt="Aman Singh"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,255,159,0.1)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff9f',
                  fontSize: '3rem'
                }}>
                  <FiUser />
                </div>
                {/* Scanline overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,159,0.03) 2px, rgba(0,255,159,0.03) 4px)',
                  pointerEvents: 'none',
                }} />
              </div>
              {/* Decorative corner brackets */}
              <div style={{
                position: 'absolute',
                top: '-6px',
                left: '-6px',
                width: '20px',
                height: '20px',
                borderTop: '2px solid #00ff9f',
                borderLeft: '2px solid #00ff9f',
                borderRadius: '4px 0 0 0',
              }} />
              <div style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                width: '20px',
                height: '20px',
                borderTop: '2px solid #00ff9f',
                borderRight: '2px solid #00ff9f',
                borderRadius: '0 4px 0 0',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                left: '-6px',
                width: '20px',
                height: '20px',
                borderBottom: '2px solid #00eaff',
                borderLeft: '2px solid #00eaff',
                borderRadius: '0 0 0 4px',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                right: '-6px',
                width: '20px',
                height: '20px',
                borderBottom: '2px solid #00eaff',
                borderRight: '2px solid #00eaff',
                borderRadius: '0 0 4px 0',
              }} />
              {/* Status indicator */}
              <div style={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#00ff41',
                border: '2px solid #0a0f1a',
                boxShadow: '0 0 8px #00ff41',
              }} />
            </motion.div>

            {/* Bio Text */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                Aspiring Cybersecurity Analyst with hands-on experience in{' '}
                <span style={{ color: '#00ff9f' }}>Vulnerability Assessment & Penetration Testing (VAPT)</span>,{' '}
                <span style={{ color: '#00eaff' }}>malware analysis</span>, network security, and secure software development.
                Proficient in Burp Suite, OWASP ZAP, Nmap, Nikto, Wireshark, Python, and Kali Linux.
              </p>
              <div style={{
                padding: '1rem',
                background: 'rgba(0,0,0,0.4)',
                borderRadius: '8px',
                borderLeft: '3px solid #00eaff',
                marginBottom: '1rem',
              }}>
                <div style={{ fontFamily: 'var(--font-heading)', color: '#00eaff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Cyber Security Intern – Indian Cyber Security Solutions (ICSS), Kolkata
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                  Jul 2025 – Oct 2025
                </div>
                <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <li>Conducted VAPT on 10+ web applications and internal systems.</li>
                  <li>Identified security misconfigurations, insecure endpoints, outdated software, and OWASP Top 10 vulnerabilities.</li>
                  <li>Validated remediation efforts and prepared technical reports mapped to OWASP Top 10 and MITRE ATT&CK.</li>
                </ul>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
                padding: '0.75rem 1rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '6px',
                borderLeft: '3px solid var(--neon-green)',
              }}>
                <span style={{ color: '#00ff9f' }}>$</span> location & ranking<br />
                <span style={{ color: 'var(--text-secondary)' }}>
                  📍 Rohta, Agra, Uttar Pradesh | 🏆 Top 4% on TryHackMe (50+ Labs Completed)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div className="glass-card stat-card" key={i}>
              <div style={{ fontSize: '1.5rem', color: '#00eaff', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div className="stat-number">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
