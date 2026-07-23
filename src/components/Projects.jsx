import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal } from 'react-icons/fi';
import { playAccessDenied, playCyberBeep } from '../utils/sounds';

const scanLogs1 = [
  { text: '[*] Initializing Threat Detection Suite...', delay: 0 },
  { text: '[+] Port Scanner & Web Vuln Scanner initialized', delay: 400 },
  { text: '[+] Monitoring network packets via Scapy...', delay: 800 },
  { text: '[!] Intrusion Detection System alert: Suspicious payload detected', delay: 1200 },
  { text: '[+] Streamlit dashboard synchronized.', delay: 1600 },
  { text: '[*] Assessment complete. Report ready.', delay: 2000 },
];

const scanLogs2 = [
  { text: '[*] ShieldCrypt dual-layer encryption tool initialized...', delay: 0 },
  { text: '[+] Applying ROT13 substitution cipher layer...', delay: 400 },
  { text: '[+] Generating AES-128 secure key via PyCryptodome...', delay: 800 },
  { text: '[+] Encrypting payload while preserving data integrity...', delay: 1200 },
  { text: '[✓] Dual-layer encryption & terminal formatting complete.', delay: 1600 },
];

const scanLogs3 = [
  { text: '[*] Initializing Delta - Malware Behavior Analysis Lab...', delay: 0 },
  { text: '[+] Spinning up isolated VMware Workstation environment...', delay: 400 },
  { text: '[+] Attaching Procmon, Process Explorer & Autoruns hooks...', delay: 800 },
  { text: '[!] Executing sample in isolated Windows VM...', delay: 1200 },
  { text: '[*] Captured process creation, registry mods & network traffic in Wireshark', delay: 1600 },
  { text: '[✓] Attacker behavior analysis & signature extraction complete.', delay: 2000 },
];

const projects = [
  {
    name: 'Threat Detection Suite',
    subtitle: 'Network & Web Security System (Jun 2025 – Jul 2025)',
    desc: 'Python-based security toolkit integrating a Port Scanner, Web Vulnerability Scanner, and Intrusion Detection System (IDS) to automate security assessments. Uses Scapy for packet analysis and Streamlit for centralized scan visualization.',
    tech: ['Python', 'Scapy', 'Streamlit', 'Requests', 'Socket'],
    github: 'https://github.com/Amans66',
    logs: scanLogs1,
  },
  {
    name: 'ShieldCrypt',
    subtitle: 'Dual Layer Encryption Tool (Apr 2025 – May 2025)',
    desc: 'Dual-layer encryption application combining ROT13 substitution with AES-128 encryption to improve file confidentiality. Implements key generation and decryption via PyCryptodome with an interactive PyFiglet/Termcolor CLI.',
    tech: ['Python', 'PyCryptodome', 'PyFiglet', 'Termcolor'],
    github: 'https://github.com/Amans66',
    logs: scanLogs2,
  },
  {
    name: 'Delta',
    subtitle: 'Malware Behavior Analysis Lab (Oct 2025 – Jan 2026)',
    desc: 'Isolated malware analysis laboratory using VMware Workstation to safely execute malware samples inside virtual machines. Features deep monitoring of process creation, registry modifications, persistence mechanisms, and network communications via Sysinternals & Wireshark.',
    tech: ['VMware Workstation', 'Windows VM', 'Kali Linux', 'Wireshark', 'Procmon', 'Autoruns', 'Process Explorer'],
    github: '#',
    filename: 'delta_malware_lab.py',
    logs: scanLogs3,
    featured: true,
  },
];

function ScanAnimation({ logs, featured, onRestrictedClick }) {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [started, setStarted] = useState(false);

  const startScan = () => {
    playCyberBeep();
    if (featured) {
      onRestrictedClick();
      return;
    }
    setStarted(true);
    setVisibleLogs([]);
    logs.forEach((log, i) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log.text]);
      }, log.delay);
    });
    setTimeout(() => setStarted(false), logs[logs.length - 1].delay + 1000);
  };

  return (
    <div className="scan-animation">
      {visibleLogs.length === 0 && !started && (
        <button
          onClick={startScan}
          style={{
            background: 'none',
            border: `1px solid ${featured ? 'rgba(189,0,255,0.3)' : 'rgba(0,255,159,0.3)'}`,
            color: featured ? '#bd00ff' : '#00ff9f',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseOver={(e) => {
            e.target.style.background = featured ? 'rgba(189,0,255,0.1)' : 'rgba(0,255,159,0.1)';
            e.target.style.boxShadow = featured ? '0 0 10px rgba(189,0,255,0.2)' : '0 0 10px rgba(0,255,159,0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'none';
            e.target.style.boxShadow = 'none';
          }}
        >
          ▶ Run Demo
        </button>
      )}
      {visibleLogs.map((log, i) => (
        <div
          key={i}
          className="scan-line"
          style={{
            animationDelay: `${i * 0.1}s`,
            color: log.includes('[!]')
              ? '#ff3e3e'
              : log.includes('[✓]') || log.includes('complete')
              ? '#28c840'
              : '#00ff9f',
          }}
        >
          {log}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [restrictedDelta, setRestrictedDelta] = useState(false);
  const [tiltState, setTiltState] = useState({});

  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTiltState((prev) => ({ ...prev, [idx]: { rotateX, rotateY } }));
  };

  const handleMouseLeave = (idx) => {
    setTiltState((prev) => ({ ...prev, [idx]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// PROJECTS</div>
        <h2 className="section-title">
          Security <span className="highlight">Projects</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`glass-card project-card ${project.featured ? 'featured-project' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
            style={{
              ...(project.featured ? {
                gridColumn: '1 / -1',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(189, 0, 255, 0.15)',
                borderTopColor: 'rgba(189, 0, 255, 0.5)',
                borderLeftColor: 'rgba(189, 0, 255, 0.5)'
              } : {}),
              transform: tiltState[i]
                ? `perspective(1000px) rotateX(${tiltState[i].rotateX}deg) rotateY(${tiltState[i].rotateY}deg)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
              transition: 'transform 0.15s ease-out',
            }}
          >
            <div className="project-header" style={project.featured ? { background: 'linear-gradient(to right, #240b36, #11141b)', borderBottom: '1px solid rgba(189,0,255,0.2)' } : {}}>
              <div className="dot r" />
              <div className="dot y" />
              <div className="dot g" />
              <span className="title" style={project.featured ? { color: '#bd00ff', textShadow: 'var(--glow-purple)' } : {}}>
                <FiTerminal style={{ marginRight: '4px' }} />
                {project.filename || `${project.name.toLowerCase().replace(/\s/g, '_')}.py`}
              </span>
            </div>
            <div style={project.featured ? { display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' } : {}}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="project-name" style={project.featured ? { color: '#fff', textShadow: '0 0 10px rgba(189,0,255,0.5)' } : {}}>{project.name}</h3>
                {project.subtitle && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: project.featured ? '#bd00ff' : '#00eaff', marginBottom: '0.75rem' }}>
                    {project.subtitle}
                  </div>
                )}
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
              {project.tech.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
            <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (project.featured) {
                      playAccessDenied();
                      setRestrictedDelta(true);
                    } else {
                      playCyberBeep();
                    }
                  }}
                  style={project.featured ? { color: '#bd00ff', cursor: 'pointer' } : {}}
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
            <div style={project.featured ? { flex: '1 1 400px', display: 'flex', alignItems: 'center' } : {}}>
              {(project.featured && restrictedDelta) ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                  width: '100%', height: '100%', minHeight: '220px', background: 'rgba(5, 0, 10, 0.8)',
                  border: '1px solid rgba(189,0,255,0.4)', borderRadius: '8px', display: 'flex',
                  flexDirection: 'column', padding: '1.2rem', boxShadow: 'inset 0 0 30px rgba(189,0,255,0.1)'
                }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff3e3e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }}></div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#ff003c', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(255,0,60,0.5)' }}>
                      [!] ACCESS RESTRICTED
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#bd00ff', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      If you want to test this malware,<br/>contact Aman 💀
                    </span>
                  </div>
                </motion.div>
              ) : (
                <ScanAnimation logs={project.logs} featured={project.featured} onRestrictedClick={() => {
                  playAccessDenied();
                  setRestrictedDelta(true);
                }} />
              )}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
