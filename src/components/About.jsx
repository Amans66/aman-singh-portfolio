import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiTarget, FiCode, FiAward, FiUser, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const stats = [
  { icon: <FiCode />, value: 101, suffix: '', label: 'THM Rooms Completed' },
  { icon: <FiTarget />, value: 11, suffix: '', label: 'TryHackMe Badges' },
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
        <div className="section-tag">// ABOUT & EXPERIENCE</div>
        <h2 className="section-title">
          Professional <span className="highlight">Profile</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Profile & Bio Card */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ padding: '2.2rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Profile Avatar Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '210px',
                  height: '210px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid rgba(0, 255, 159, 0.6)',
                  boxShadow: '0 0 30px rgba(0, 255, 159, 0.25), inset 0 0 20px rgba(0,0,0,0.5)',
                  position: 'relative',
                  background: '#0a0f1a'
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
                    background: 'rgba(0, 255, 159, 0.1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff9f',
                    fontSize: '4rem'
                  }}>
                    <FiUser />
                  </div>
                  {/* Scanline layer */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 159, 0.04) 2px, rgba(0, 255, 159, 0.04) 4px)',
                    pointerEvents: 'none',
                  }} />
                </div>
                {/* HUD Bracket Accents */}
                <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '24px', height: '24px', borderTop: '3px solid #00ff9f', borderLeft: '3px solid #00ff9f', borderRadius: '4px 0 0 0' }} />
                <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '24px', height: '24px', borderTop: '3px solid #00ff9f', borderRight: '3px solid #00ff9f', borderRadius: '0 4px 0 0' }} />
                <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '24px', height: '24px', borderBottom: '3px solid #00f0ff', borderLeft: '3px solid #00f0ff', borderRadius: '0 0 0 4px' }} />
                <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '24px', height: '24px', borderBottom: '3px solid #00f0ff', borderRight: '3px solid #00f0ff', borderRadius: '0 0 4px 0' }} />
              </div>
            </div>

            {/* Bio Summary */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#fff', marginBottom: '0.8rem' }}>
                Cybersecurity Analyst & Pentester
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
                Aspiring Cybersecurity Analyst with hands-on experience in <span style={{ color: '#00ff9f', fontWeight: 600 }}>Vulnerability Assessment and Penetration Testing (VAPT)</span>, malware analysis, network security, and secure software development.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Proficient with security toolsets including <span style={{ color: '#00f0ff' }}>Burp Suite</span>, <span style={{ color: '#00f0ff' }}>OWASP ZAP</span>, <span style={{ color: '#00f0ff' }}>Nmap</span>, <span style={{ color: '#00f0ff' }}>Nikto</span>, <span style={{ color: '#00f0ff' }}>Wireshark</span>, and <span style={{ color: '#00f0ff' }}>Kali Linux</span>. Top 4% ranking on TryHackMe with 101 completed practical security labs.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <FiCheckCircle style={{ color: '#00ff9f' }} /> VAPT Web & Internal Systems
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <FiCheckCircle style={{ color: '#00ff9f' }} /> OWASP Top 10 & MITRE ATT&CK
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <FiCheckCircle style={{ color: '#00ff9f' }} /> Malware Analysis & Sysinternals
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  <FiCheckCircle style={{ color: '#00ff9f' }} /> Python Security Tool Automation
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ padding: '2rem' }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00f0ff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiBriefcase /> // WORK EXPERIENCE
          </div>

          <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1.5rem', borderLeft: '4px solid #00f0ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#fff', margin: 0 }}>
                  Cyber Security Intern
                </h4>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#00ff9f', marginTop: '0.2rem' }}>
                  Indian Cyber Security Solutions (ICSS), Kolkata
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '20px', color: '#00f0ff' }}>
                Jul 2025 – Oct 2025
              </span>
            </div>

            <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on 10+ web applications and internal network systems.</li>
              <li>Identified security misconfigurations, insecure endpoints, outdated software, and OWASP Top 10 vulnerabilities.</li>
              <li>Validated remediation efforts and prepared detailed technical reports following OWASP Top 10 and MITRE ATT&CK standards.</li>
              <li>Worked closely with senior security analysts during penetration testing engagements and attack simulations.</li>
            </ul>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div className="glass-card stat-card" key={i}>
              <div style={{ fontSize: '1.6rem', color: '#00f0ff', marginBottom: '0.5rem' }}>
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
