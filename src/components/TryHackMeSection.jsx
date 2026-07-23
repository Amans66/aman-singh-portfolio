import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp, FiAward, FiCheck, FiActivity, FiExternalLink } from 'react-icons/fi';

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

function generateTHMActivityGrid() {
  const COLS = 52;
  const ROWS = 7;
  const cells = [];
  
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      // COLS 0..12 -> Jan-Mar (mostly empty or occasional 1)
      // COLS 13..24 -> Apr-Jun (heavy activity level 3 & 4)
      // COLS 25..51 -> Jul-Dec (empty/future)
      let val = 0;
      if (col >= 13 && col <= 24) {
        // High density activity like in TryHackMe profile screenshot
        if ((row === 0 || row === 2 || row === 4 || row === 6) && col === 20) {
          val = 2; // slight variation
        } else if (Math.random() > 0.15) {
          val = Math.random() > 0.4 ? 4 : 3;
        } else {
          val = 0;
        }
      } else if (col >= 10 && col <= 12) {
        val = Math.random() > 0.6 ? 1 : 0;
      }
      
      cells.push(val === 0 ? 'thm-cell' : `thm-cell thm-l${val}`);
    }
  }
  return cells;
}

export default function TryHackMeSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [typedText, setTypedText] = useState('');
  const fullText = '[*] Connecting to TryHackMe API...\n[+] User: AmanHacker404\n[+] Rank: Top 4% | Rooms: 101 | Badges: 11\n[✓] Connection established.';
  
  const stats = [
    { icon: <FiTrendingUp />, value: 76550, suffix: '', label: 'Rank (Top 4%)' },
    { icon: <FiAward />, value: 11, suffix: '', label: 'Badges' },
    { icon: <FiCheck />, value: 101, suffix: '', label: 'Rooms' },
    { icon: <FiActivity />, value: 1208, suffix: '', label: 'Events 2026' },
  ];

  const gridCells = generateTHMActivityGrid();

  useEffect(() => {
    if (inView) {
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section id="tryhackme" className="section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// TRYHACKME</div>
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>TryHack<span className="highlight">Me</span> Stats</span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            color: 'var(--neon-green)',
            border: '1px solid var(--neon-green)',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(0, 255, 159, 0.1)'
          }}>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--neon-green)',
                boxShadow: '0 0 8px var(--neon-green)'
              }}
            />
            LIVE
          </span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <motion.div
        className="terminal-window"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(0, 255, 159, 0.3)',
          padding: '1rem',
          borderRadius: '8px',
          fontFamily: 'monospace',
          color: 'var(--neon-green)',
          marginBottom: '2rem',
          minHeight: '100px',
          whiteSpace: 'pre-wrap'
        }}
      >
        {typedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >_</motion.span>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            padding: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid var(--neon-green)',
            boxShadow: '0 0 20px rgba(0, 255, 159, 0.1)',
            backgroundColor: 'rgba(10, 10, 10, 0.8)'
          }}
        >
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=AmanHacker404"
            style={{ border: 'none', width: '350px', height: '250px' }}
            title="TryHackMe Badge"
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{ fontSize: '2rem', color: 'var(--neon-green)' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ padding: '2rem', overflowX: 'auto' }}
      >
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Activity Heatmap</span>
          <a
            href="https://tryhackme.com/p/AmanHacker404"
            target="_blank"
            rel="noopener noreferrer"
            className="hacker-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            View Profile <FiExternalLink />
          </a>
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(52, 1fr)',
          gridTemplateRows: 'repeat(7, 1fr)',
          gap: '4px',
          minWidth: '800px'
        }}>
          {gridCells.map((className, i) => (
            <div
              key={i}
              className={className}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '2px',
                backgroundColor: className.includes('thm-l') ? undefined : 'rgba(255, 255, 255, 0.05)',
                ...(className.includes('thm-l1') && { backgroundColor: 'rgba(0, 255, 159, 0.2)' }),
                ...(className.includes('thm-l2') && { backgroundColor: 'rgba(0, 255, 159, 0.4)' }),
                ...(className.includes('thm-l3') && { backgroundColor: 'rgba(0, 255, 159, 0.7)' }),
                ...(className.includes('thm-l4') && { backgroundColor: 'var(--neon-green)', boxShadow: '0 0 5px var(--neon-green)' }),
              }}
            />
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)'
        }}>
          Less
          <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(0, 255, 159, 0.2)' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(0, 255, 159, 0.4)' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: 'rgba(0, 255, 159, 0.7)' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--neon-green)' }} />
          More
        </div>
      </motion.div>
    </section>
  );
}
