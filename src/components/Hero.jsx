import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import bgImg from '../assets/hacker-bg.png';

const terminalSequence = [
  { type: 'prompt', text: '~ $', delay: 300 },
  { type: 'command', text: ' whoami', delay: 400 },
  { type: 'output', text: 'Aman Singh', delay: 1000 },
  { type: 'blank', delay: 1200 },
  { type: 'prompt', text: '~ $', delay: 1400 },
  { type: 'command', text: ' cat role.txt', delay: 1600 },
  { type: 'output', text: 'Cybersecurity Analyst | VAPT | Malware Analysis | Security Tool Developer', delay: 2200 },
  { type: 'blank', delay: 2400 },
  { type: 'prompt', text: '~ $', delay: 2600 },
  { type: 'command', text: ' skills --brief', delay: 2800 },
  { type: 'output', text: 'Burp Suite | Nmap | Wireshark | OWASP Top 10 | Kali Linux | Python', delay: 3400 },
  { type: 'blank', delay: 3600 },
  { type: 'prompt', text: '~ $', delay: 3800 },
  { type: 'command', text: ' ./access_portfolio.sh', delay: 4000 },
  { type: 'access', text: '[ ACCESS GRANTED ]', delay: 4600 },
];

export default function Hero() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timers = [];
    terminalSequence.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
      }, line.delay);
      timers.push(t);
    });

    const btnTimer = setTimeout(() => setShowButtons(true), 5200);
    timers.push(btnTimer);

    return () => timers.forEach(clearTimeout);
  }, []);

  const lines = terminalSequence.slice(0, visibleCount);

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
      {/* Background Hacker Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
        animate={{ opacity: 0.35, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 4, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
          zIndex: 0
        }}
      />
      
      {/* Gradient Overlay for blending */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(3,5,8,0.3) 0%, rgba(3,5,8,0.0) 50%, #030508 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '800px', margin: '0 2rem' }}
      >
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="terminal-title">aman@kali:~/portfolio</span>
        </div>
        <div className="terminal-body">
          {lines.map((line, i) => {
            if (line.type === 'blank') return <div key={i} style={{ height: '0.5rem' }} />;
            if (line.type === 'access') {
              return (
                <motion.div
                  key={i}
                  className="access-granted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ marginTop: '1rem', marginBottom: '1rem', color: '#00ff41', fontWeight: 'bold' }}
                >
                  {line.text}
                </motion.div>
              );
            }
            return (
              <motion.div
                key={i}
                className="terminal-line"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line.type === 'prompt' && (
                  <span className="terminal-prompt">{line.text}</span>
                )}
                {line.type === 'command' && (
                  <span className="terminal-command">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <span className="terminal-output">{line.text}</span>
                )}
              </motion.div>
            );
          })}
          {!showButtons && visibleCount > 0 && (
            <span className="blink-cursor" />
          )}

          {showButtons && (
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#projects" className="btn-neon">
                <FiArrowRight /> Access Portfolio
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
                <FiMail /> Hire Me
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
