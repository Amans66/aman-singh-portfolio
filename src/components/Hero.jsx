import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowRight, FiShield, FiTerminal, FiSearch, FiLock } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const rotatingRoles = [
  'SOC Analyst',
  'SIEM Engineer',
  'Threat Hunter',
  'Blue Team Specialist',
  'VAPT Analyst',
  'Incident Responder',
  'Cybersecurity Professional'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = rotatingRoles[roleIndex];
    let timeout;

    if (!isDeleting && typedRole === currentFullRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setTypedRole(
          isDeleting
            ? currentFullRole.substring(0, typedRole.length - 1)
            : currentFullRole.substring(0, typedRole.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '110px', paddingBottom: '60px', overflow: 'hidden' }}>
      
      <div className="section-inner" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1350px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Headline, Bio & Rotating Typewriter */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Indicator */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.45rem 1.1rem', borderRadius: '30px', background: 'rgba(0, 255, 157, 0.08)', border: '1px solid rgba(0, 255, 157, 0.3)', marginBottom: '1.5rem' }}>
              <span className="live-dot" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                AVAILABLE FOR SECURITY AUDITS & SOC ROLES
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: '1.15', fontWeight: 800, marginBottom: '1.2rem', color: '#fff' }}>
              Aman Singh
            </h1>

            {/* Rotating Role Typewriter */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--secondary)', fontWeight: 600, marginBottom: '1.4rem', minHeight: '40px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-dim)', marginRight: '10px' }}>&gt;</span>
              <span>{typedRole}</span>
              <span className="blink-cursor" style={{ display: 'inline-block', width: '3px', height: '1.2em', background: 'var(--primary)', marginLeft: '4px' }} />
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.8rem', maxWidth: '620px' }}>
              Aspiring Cybersecurity Analyst with hands-on experience in <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Vulnerability Assessment & Penetration Testing (VAPT)</span>, malware analysis, network security, and secure software development. Proficient in Burp Suite, OWASP ZAP, Nmap, Nikto, Wireshark, Python, and Kali Linux.
            </p>

            {/* Domain Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(0, 255, 157, 0.08)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '6px', color: 'var(--primary)' }}>
                🛡️ SOC Analyst & SIEM
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(14, 165, 233, 0.3)', borderRadius: '6px', color: 'var(--secondary)' }}>
                🔍 VAPT & Web Security
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(22, 242, 179, 0.08)', border: '1px solid rgba(22, 242, 179, 0.3)', borderRadius: '6px', color: 'var(--accent)' }}>
                🏆 Top 4% TryHackMe
              </span>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
              >
                <FiDownload /> Download Resume
              </a>
              <a href="#contact" className="btn-neon cyan">
                <FiMail /> Contact Me
              </a>
              <a href="#projects" className="btn-neon accent">
                <FiShield /> View Projects <FiArrowRight />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Card + Interactive HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="glass-card" style={{ padding: '2rem', maxWidth: '380px', width: '100%', textCenter: 'center', border: '1px solid rgba(0, 255, 157, 0.3)', boxShadow: '0 0 40px rgba(0, 255, 157, 0.15)' }}>
              
              {/* Profile Avatar */}
              <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 1.5rem', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--primary)', boxShadow: '0 0 25px rgba(0, 255, 157, 0.3)' }}>
                <img
                  src={profileImg}
                  alt="Aman Singh Profile"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,157,0.03) 2px, rgba(0,255,157,0.03) 4px)', pointerEvents: 'none' }} />
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#fff', marginBottom: '0.2rem', textAlign: 'center' }}>
                Aman Singh
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '1.2rem', textAlign: 'center' }}>
                Cybersecurity Analyst
              </div>

              <div style={{ background: 'rgba(5, 8, 22, 0.6)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid var(--secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <span style={{ color: 'var(--primary)' }}>$</span> location & stats<br />
                📍 Rohta, Agra, UP, India<br />
                🎓 B.Tech CSE (Cyber Security) @ LPU
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
