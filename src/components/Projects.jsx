import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal, FiShield, FiCpu, FiLock } from 'react-icons/fi';

const projects = [
  {
    name: 'Threat Detection Suite',
    subtitle: 'Network & Web Security Monitoring System',
    period: 'Jun 2025 – Jul 2025',
    featured: true,
    description: 'Real-time cybersecurity monitoring dashboard designed to analyze network traffic, inspect web application vulnerabilities, and flag malicious telemetry.',
    objective: 'Engineer an integrated security suite to detect TCP SYN scans, web injection payloads, and suspicious network traffic in real time.',
    tech: ['Python', 'Scapy', 'Streamlit', 'Requests', 'Socket'],
    architecture: 'Scapy Packet Sniffer Engine -> Threat Parser -> Streamlit Analytics UI',
    concepts: ['Network Telemetry', 'SYN Scan Detection', 'Web Injection Triage', 'Packet Inspection'],
    github: 'https://github.com/Amans66/Threat-Detection-Suite',
    demoLogs: [
      '[*] Initializing Threat Detection Suite Sniffer...',
      '[+] Socket bound to interface eth0 [PROMISCUOUS MODE]',
      '[ALERT] High packet frequency from 192.168.1.105',
      '[DETECTION] TCP SYN Stealth Scan detected on ports 22, 80, 443',
      '[WAF] Flagged HTTP SQL Injection payload in GET parameter',
      '[✓] Log entry emitted to Threat Feed: STATUS CRITICAL',
    ],
  },
  {
    name: 'ShieldCrypt',
    subtitle: 'Dual-Layer Encryption CLI Security Tool',
    period: 'Apr 2025 – May 2025',
    description: 'CLI tool combining symmetric AES-256 encryption with customizable substitution ciphers for securing confidential data.',
    objective: 'Build a lightweight dual-layer file encryption utility with key management and integrity verification.',
    tech: ['Python', 'PyCryptodome', 'PyFiglet', 'Termcolor'],
    architecture: 'Input Stream -> AES-256 GCM -> Substitution Layer -> Encrypted Binary Payload',
    concepts: ['AES-256 GCM', 'Symmetric Cryptography', 'Key Derivation', 'Integrity Checks'],
    github: 'https://github.com/Amans66/ShieldCrypt',
    demoLogs: [
      '[*] ShieldCrypt v2.1 -- Dual Layer Encryption Engine',
      '[+] Deriving 256-bit AES key via PBKDF2...',
      '[+] Layer 1: Encrypting plaintext payload with AES-GCM-256...',
      '[+] Layer 2: Applying custom cipher substitution layer...',
      '[✓] File encrypted successfully -> output.enc (SHA256 verified)',
    ],
  },
  {
    name: 'Delta – Malware Behavior Analysis Lab',
    subtitle: 'Isolated Sandbox Malware Telemetry Lab',
    period: 'Oct 2025 – Jan 2026',
    description: 'Isolated virtual malware analysis environment configured to observe malware execution, registry persistence, and network beaconing behavior.',
    objective: 'Create a safe sandbox to capture dynamic behavior, process trees, file system modifications, and C2 traffic.',
    tech: ['VMware Workstation', 'Windows VM', 'Kali Linux', 'Wireshark', 'Procmon', 'Autoruns', 'Process Explorer'],
    architecture: 'Host Hypervisor -> Host-Only Network -> Windows Victim VM + Kali Traffic Sink',
    concepts: ['Dynamic Analysis', 'Sysinternals Monitoring', 'Registry Persistence', 'C2 Telemetry'],
    github: 'https://github.com/Amans66/Delta-Malware-Lab',
    demoLogs: [
      '[*] Delta Malware Lab Host-Only Environment Active',
      '[PROCMON] Process created: sample_payload.exe (PID: 3912)',
      '[AUTORUNS] Registry modification: HKLM\\Software\\Microsoft\\Windows\\Run',
      '[WIRESHARK] Outbound DNS query captured: C2.malicious-domain.xyz',
      '[ANALYSIS] Threat classified: Trojan Downloader / Persistence Established',
    ],
  },
];

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section id="projects" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiShield /> // FEATURED SECURITY PROJECTS</div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div>
              <div className="project-header">
                <div className="dot r" />
                <div className="dot y" />
                <div className="dot g" />
                <span className="title">{project.period}</span>
              </div>

              <div className="project-name">{project.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>
                {project.subtitle}
              </div>
              <div className="project-desc">{project.description}</div>

              <div style={{ background: 'rgba(5, 8, 22, 0.6)', padding: '0.8rem', borderRadius: '6px', marginBottom: '1rem', borderLeft: '3px solid var(--secondary)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <strong>Objective:</strong> {project.objective}
              </div>

              <div className="project-tech">
                {project.tech.map((t, ti) => (
                  <span key={ti}>{t}</span>
                ))}
              </div>
            </div>

            <div>
              {/* Interactive Live Demo Trigger */}
              <div style={{ marginTop: '1rem' }}>
                <button
                  onClick={() => setActiveDemo(activeDemo === i ? null : i)}
                  className="btn-neon"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                >
                  <FiTerminal /> {activeDemo === i ? 'Hide Execution Demo' : 'Run Live Demo Simulator'}
                </button>

                {activeDemo === i && (
                  <div className="scan-animation">
                    <div style={{ color: 'var(--secondary)', marginBottom: '0.4rem', fontWeight: 'bold' }}>
                      [SIMULATOR OUTPUT STREAM]
                    </div>
                    {project.demoLogs.map((log, li) => (
                      <div key={li} className="scan-line" style={{ color: log.includes('ALERT') || log.includes('CRITICAL') ? '#ef4444' : 'var(--primary)', marginBottom: '0.2rem' }}>
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-links" style={{ marginTop: '1.2rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> GitHub Repository <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
