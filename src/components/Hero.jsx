import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowRight, FiShield, FiTerminal, FiMapPin } from 'react-icons/fi';
import bgImg from '../assets/hacker-bg.png';

const terminalSequence = [
  { type: 'prompt', text: 'aman@kali:~$', delay: 200 },
  { type: 'command', text: ' whoami', delay: 400 },
  { type: 'output', text: 'Aman Singh [Cybersecurity Analyst]', delay: 900 },
  { type: 'blank', delay: 1100 },
  { type: 'prompt', text: 'aman@kali:~$', delay: 1300 },
  { type: 'command', text: ' cat focus_areas.json', delay: 1500 },
  { type: 'output', text: '{\n  "vapt": "Web & Internal Systems",\n  "malware_analysis": "VMware & Sysinternals",\n  "tryhackme": "Top 4% (101 Rooms)",\n  "status": "Available for Audits"\n}', delay: 2200 },
  { type: 'blank', delay: 2400 },
  { type: 'prompt', text: 'aman@kali:~$', delay: 2600 },
  { type: 'command', text: ' ./launch_portfolio.sh --mode=interactive', delay: 2800 },
  { type: 'access', text: '[ SYSTEM READY — ACCESS GRANTED ]', delay: 3400 },
];

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = [];
    terminalSequence.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
      }, line.delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const lines = terminalSequence.slice(0, visibleCount);

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '60px', overflow: 'hidden' }}>
      
      {/* Background Cyber Grid & Ambient Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      
      <div className="section-inner" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: Bio & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(0, 255, 159, 0.08)', border: '1px solid rgba(0, 255, 159, 0.3)', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff41', boxShadow: '0 0 8px #00ff41', animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00ff9f', fontWeight: 600 }}>
                CYBERSECURITY ANALYST & VAPT SPECIALIST
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', fontWeight: 800, marginBottom: '1.2rem', color: '#fff' }}>
              Hi, I'm <span className="highlight glitch" data-text="Aman Singh">Aman Singh</span>
            </h1>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.8rem', maxWidth: '580px' }}>
              Specializing in <span style={{ color: '#00ff9f', fontWeight: 600 }}>Vulnerability Assessment & Penetration Testing (VAPT)</span>, malware behavior analysis, and secure software development. Experienced with Burp Suite, OWASP ZAP, Nmap, Wireshark, Python, and Kali Linux.
            </p>

            {/* Quick Specs Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.25)', borderRadius: '6px', color: '#00f0ff' }}>
                📍 Rohta, Agra, UP
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(0, 255, 159, 0.08)', border: '1px solid rgba(0, 255, 159, 0.25)', borderRadius: '6px', color: '#00ff9f' }}>
                🏆 Top 4% TryHackMe
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.35rem 0.8rem', background: 'rgba(189, 0, 255, 0.08)', border: '1px solid rgba(189, 0, 255, 0.25)', borderRadius: '6px', color: '#bd00ff' }}>
                🛡️ ICSS Intern
              </span>
            </div>

            {/* Call to Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-neon">
                <FiShield /> View Security Projects <FiArrowRight />
              </a>
              <a
                href="https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon cyan"
              >
                <FiDownload /> Resume
              </a>
              <a href="#contact" className="btn-neon purple">
                <FiMail /> Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Column: Cyber Console Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="terminal-window" style={{ background: 'rgba(5, 8, 15, 0.95)', border: '1px solid rgba(0, 255, 65, 0.3)', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,255,65,0.1)' }}>
              <div className="terminal-header" style={{ background: 'rgba(15, 22, 35, 0.9)', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(0, 255, 65, 0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="terminal-dot red" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div className="terminal-dot yellow" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div className="terminal-dot green" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                <span className="terminal-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
                  <FiTerminal style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  aman@kali:~/sys_audit
                </span>
              </div>

              <div className="terminal-body" style={{ padding: '1.25rem', minHeight: '300px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                {lines.map((line, i) => {
                  if (line.type === 'blank') return <div key={i} style={{ height: '0.4rem' }} />;
                  if (line.type === 'access') {
                    return (
                      <div key={i} style={{ marginTop: '0.75rem', marginBottom: '0.75rem', color: '#00ff41', fontWeight: 'bold', textShadow: '0 0 10px #00ff41' }}>
                        {line.text}
                      </div>
                    );
                  }
                  return (
                    <div key={i} style={{ marginBottom: '0.2rem' }}>
                      {line.type === 'prompt' && <span style={{ color: '#00ff9f', fontWeight: 'bold', marginRight: '6px' }}>{line.text}</span>}
                      {line.type === 'command' && <span style={{ color: '#fff' }}>{line.text}</span>}
                      {line.type === 'output' && <pre style={{ color: '#00f0ff', margin: 0, fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>{line.text}</pre>}
                    </div>
                  );
                })}
                <span className="blink-cursor" style={{ display: 'inline-block', width: '8px', height: '15px', background: '#00ff41', marginLeft: '4px', verticalAlign: 'middle' }} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
