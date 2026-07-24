import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiMapPin,
  FiShield, FiBriefcase, FiCode, FiAward, FiBookOpen, FiCopy, FiCheck,
  FiTerminal, FiClock, FiArrowUp, FiSearch, FiCheckCircle, FiActivity
} from 'react-icons/fi';
import profileImg from './assets/profile.jpg';

const rotatingRoles = [
  'SOC Analyst',
  'VAPT Analyst',
  'Threat Hunter',
  'Malware Analyst',
  'Security Engineer',
  'Cybersecurity Professional'
];

const projectsData = [
  {
    id: 'threat-suite',
    category: 'vapt',
    name: 'Threat Detection Suite',
    subtitle: 'Network Packet Sniffer & Web Vulnerability Triage System',
    period: 'Jun 2025 – Jul 2025',
    desc: 'Real-time cybersecurity monitoring dashboard designed to analyze network traffic, inspect TCP SYN stealth scans, and flag web injection payloads.',
    tech: ['Python', 'Scapy', 'Streamlit', 'Requests', 'Socket'],
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
    id: 'shieldcrypt',
    category: 'tools',
    name: 'ShieldCrypt',
    subtitle: 'Dual-Layer AES-256 GCM CLI Encryption Tool',
    period: 'Apr 2025 – May 2025',
    desc: 'Command-line security utility combining symmetric AES-256 GCM encryption with custom substitution ciphers for confidential file protection.',
    tech: ['Python', 'PyCryptodome', 'PyFiglet', 'Termcolor'],
    github: 'https://github.com/Amans66/ShieldCrypt',
    demoLogs: [
      '[*] ShieldCrypt v2.1 -- Dual Layer Encryption Engine',
      '[+] Deriving 256-bit AES key via PBKDF2...',
      '[+] Layer 1: Encrypting payload with AES-GCM-256...',
      '[+] Layer 2: Applying custom cipher substitution layer...',
      '[✓] File encrypted successfully -> output.enc (SHA256 verified)',
    ],
  },
  {
    id: 'delta-lab',
    category: 'malware',
    name: 'Delta – Malware Behavior Lab',
    subtitle: 'Isolated Virtual Machine Sandbox Telemetry Lab',
    period: 'Oct 2025 – Jan 2026',
    desc: 'Isolated virtual analysis lab configured for dynamic malware execution monitoring, Sysinternals process tracking, and C2 network traffic logging.',
    tech: ['VMware Workstation', 'Wireshark', 'Procmon', 'Autoruns', 'Process Explorer'],
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

function AnimatedCounter({ target, suffix = '', inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
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

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  
  // Rotating Typewriter
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Copy Feedback
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filters & Demos
  const [skillFilter, setSkillFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDemo, setActiveDemo] = useState(null);

  // Clocks
  const [utcTime, setUtcTime] = useState('');
  const [istTime, setIstTime] = useState('');

  // Intersection Observers for Scroll Counting
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  // Scroll Progress & Active Nav Tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowTopBtn(window.scrollY > 400);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveNav(sec.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating Typewriter Effect
  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    let timer;

    if (!isDeleting && typedRole === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timer = setTimeout(() => {
        setTypedRole(
          isDeleting
            ? currentRole.substring(0, typedRole.length - 1)
            : currentRole.substring(0, typedRole.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  // Clock Timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
      setIstTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillsData = [
    { name: 'Burp Suite', cat: 'vapt' },
    { name: 'OWASP ZAP', cat: 'vapt' },
    { name: 'Nmap', cat: 'vapt' },
    { name: 'Nikto', cat: 'vapt' },
    { name: 'Wireshark', cat: 'vapt' },
    { name: 'Metasploit', cat: 'vapt' },
    { name: 'Python', cat: 'code' },
    { name: 'Kali Linux', cat: 'os' },
    { name: 'Windows', cat: 'os' },
    { name: 'MySQL', cat: 'os' },
    { name: 'MongoDB', cat: 'os' },
    { name: 'VAPT Methodology', cat: 'concepts' },
    { name: 'OWASP Top 10', cat: 'concepts' },
    { name: 'Malware Analysis', cat: 'concepts' },
    { name: 'Network Telemetry', cat: 'concepts' },
  ];

  const filteredSkills = skillsData.filter((s) => {
    const matchTab = skillFilter === 'all' || s.cat === skillFilter;
    const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div>
      {/* Top Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Floating Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="scroll-to-top"
            title="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-flex">
          <a href="#home" className="nav-logo">
            Aman <span>Singh</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className={activeNav === 'about' ? 'nav-active' : ''}>About</a></li>
            <li><a href="#experience" className={activeNav === 'experience' ? 'nav-active' : ''}>Experience</a></li>
            <li><a href="#skills" className={activeNav === 'skills' ? 'nav-active' : ''}>Skills</a></li>
            <li><a href="#projects" className={activeNav === 'projects' ? 'nav-active' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeNav === 'contact' ? 'nav-active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Live Status Pill */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', borderRadius: '30px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', marginBottom: '1.2rem' }}>
                <span className="live-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--emerald)', fontWeight: 600 }}>
                  AVAILABLE FOR SECURITY ANALYST ROLES
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', color: '#fff' }}>
                Hi, I'm Aman Singh
              </h1>

              {/* Rotating Typewriter Role */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--cyan)', fontWeight: 600, marginBottom: '1.4rem', minHeight: '40px', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-dim)', marginRight: '8px' }}>&gt;</span>
                <span>{typedRole}</span>
                <span style={{ width: '3px', height: '1.2em', background: 'var(--primary)', marginLeft: '4px', display: 'inline-block' }} />
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.8rem', lineHeight: 1.7, maxWidth: '600px' }}>
                Aspiring Cybersecurity Analyst with hands-on experience in <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Vulnerability Assessment & Penetration Testing (VAPT)</span>, malware analysis, network security, and secure software development. Proficient in Burp Suite, OWASP ZAP, Nmap, Wireshark, Python, and Kali Linux.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                <FiMapPin style={{ color: 'var(--cyan)' }} /> Rohta, Agra, Uttar Pradesh, India
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FiDownload /> Download Resume
                </a>
                <a href="#contact" className="btn-secondary">
                  <FiMail /> Contact Me
                </a>
              </div>
            </motion.div>

            {/* Profile Avatar Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="card" style={{ width: '100%', maxWidth: '340px', textAlign: 'center', padding: '2rem', marginBottom: 0, borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                <div style={{ position: 'relative', width: '190px', height: '190px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)', boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}>
                  <img
                    src={profileImg}
                    alt="Aman Singh"
                    onError={(e) => { e.target.style.display = 'none'; }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#fff', marginBottom: '0.2rem' }}>
                  Aman Singh
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--cyan)', marginBottom: '1rem' }}>
                  Cybersecurity Analyst
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'left' }}>
                  <span>$ whoami</span><br />
                  <span>🎓 B.Tech CSE @ LPU</span><br />
                  <span>🏆 TryHackMe Top 4%</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About & Stats Counter Section */}
      <section id="about" className="section" ref={statsRef}>
        <div className="container">
          <div className="section-title">
            <FiShield /> About <span>& Background</span>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.8rem' }}>
              Career Profile
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Specializing in auditing web applications and internal network infrastructure to identify security vulnerabilities, endpoints misconfigurations, and OWASP Top 10 flaws. Top 4% ranking on TryHackMe with 101 completed practical security labs covering web exploitation, privilege escalation, networking, and defensive operations.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge">Vulnerability Assessment (VAPT)</span>
              <span className="badge tag-cyan">OWASP Top 10</span>
              <span className="badge">Malware Behavior Analysis</span>
              <span className="badge tag-cyan">TryHackMe Top 4%</span>
            </div>
          </div>

          {/* Animated Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div className="card" style={{ textAlign: 'center', padding: '1.5rem', marginBottom: 0 }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.3rem' }}><FiCode /></div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
                <AnimatedCounter target={101} inView={statsInView} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                THM Rooms Completed
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '1.5rem', marginBottom: 0 }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--cyan)', marginBottom: '0.3rem' }}><FiAward /></div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
                <AnimatedCounter target={11} inView={statsInView} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                TryHackMe Badges
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '1.5rem', marginBottom: 0 }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--emerald)', marginBottom: '0.3rem' }}><FiShield /></div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
                <AnimatedCounter target={10} suffix="+" inView={statsInView} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Systems Audited (VAPT)
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '1.5rem', marginBottom: 0 }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.3rem' }}><FiAward /></div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
                <AnimatedCounter target={3} inView={statsInView} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Certifications
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-title">
            <FiBriefcase /> Work <span>Experience</span>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                  Cyber Security Intern
                </h3>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--cyan)', marginTop: '0.2rem' }}>
                  Indian Cyber Security Solutions (ICSS), Kolkata
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '0.35rem 0.85rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '20px', color: 'var(--cyan)' }}>
                Jul 2025 – Oct 2025
              </span>
            </div>

            <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <li style={{ marginBottom: '0.5rem' }}>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on 10+ web applications and internal systems.</li>
              <li style={{ marginBottom: '0.5rem' }}>Identified security misconfigurations, insecure endpoints, outdated software, and OWASP Top 10 vulnerabilities.</li>
              <li style={{ marginBottom: '0.5rem' }}>Validated remediation efforts and prepared detailed technical reports following OWASP Top 10 and MITRE ATT&CK guidelines.</li>
              <li>Worked with senior analysts during penetration testing engagements and attack simulations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section with Interactive Filter Tabs */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-title">
            <FiCode /> Technical <span>Skills & Toolkit</span>
          </div>

          {/* Interactive Search & Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.8rem' }}>
            <div className="filter-tabs">
              {[
                { id: 'all', label: 'ALL SKILLS' },
                { id: 'vapt', label: 'VAPT & TOOLS' },
                { id: 'code', label: 'PROGRAMMING' },
                { id: 'os', label: 'OS & DATABASES' },
                { id: 'concepts', label: 'CONCEPTS' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillFilter(tab.id)}
                  className={`tab-btn ${skillFilter === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: '100%', maxWidth: '240px' }}>
              <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', fontSize: '0.9rem' }} />
              <input
                type="text"
                placeholder="Filter skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '0.45rem 0.8rem 0.45rem 2.2rem', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {filteredSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className={`badge ${skill.cat === 'vapt' ? 'tag-cyan' : ''}`}
                style={{ fontSize: '0.88rem', padding: '0.5rem 1rem' }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects Section with Live Interactive Scan Simulator */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-title">
            <FiBriefcase /> Key <span>Security Projects</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
            {projectsData.map((project, i) => (
              <div key={project.id} className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '0.4rem' }}>
                    {project.period}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>
                    {project.name}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)', marginBottom: '0.8rem' }}>
                    {project.subtitle}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                    {project.desc}
                  </p>
                  <div style={{ marginBottom: '1.2rem' }}>
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="badge tag-cyan" style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Expandable Live Simulation Box */}
                  <button
                    onClick={() => setActiveDemo(activeDemo === i ? null : i)}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 1rem', marginBottom: '0.8rem' }}
                  >
                    <FiTerminal /> {activeDemo === i ? 'Hide Execution Stream' : 'Run Live Demo Stream'}
                  </button>

                  <AnimatePresence>
                    {activeDemo === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', background: 'rgba(3, 7, 18, 0.95)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '8px', padding: '0.8rem', marginBottom: '1rem', overflow: 'hidden' }}
                      >
                        <div style={{ color: 'var(--cyan)', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                          [SIMULATOR OUTPUT LOG STREAM]
                        </div>
                        {project.demoLogs.map((log, li) => (
                          <div key={li} style={{ color: log.includes('ALERT') || log.includes('CRITICAL') ? '#ef4444' : 'var(--emerald)', marginBottom: '0.25rem' }}>
                            {log}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <FiGithub /> View Code Repository <FiExternalLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <div className="section-title" style={{ fontSize: '1.4rem' }}>
                <FiAward /> Certifications
              </div>
              <div className="card" style={{ marginBottom: 0 }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>RCS CTF (Capture The Flag)</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>RCS Competition (2025)</div>

                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Cyber Security & Ethical Hacking</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>Techvanto Academy (2025)</div>

                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>NPTEL – Social Networks</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>NPTEL / IIT (2025)</div>
              </div>
            </div>

            <div>
              <div className="section-title" style={{ fontSize: '1.4rem' }}>
                <FiBookOpen /> Education
              </div>
              <div className="card" style={{ marginBottom: 0 }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                  B.Tech CSE (Cyber Security)
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Lovely Professional University (2023 – Present)
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  CGPA: 6.83
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-title">
            <FiMail /> Get In <span>Touch</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <div className="card" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.2rem', color: '#fff' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light)' }}>EMAIL</div>
                    <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>
                      amansinghbhadauria2005@gmail.com
                    </a>
                  </div>
                  <button onClick={() => copyText('amansinghbhadauria2005@gmail.com', 'email')} className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    {copiedEmail ? <FiCheck style={{ color: 'var(--emerald)' }} /> : <FiCopy />}
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-light)' }}>PHONE</div>
                    <a href="tel:+917291810034" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>
                      +91-7291810034
                    </a>
                  </div>
                  <button onClick={() => copyText('+917291810034', 'phone')} className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    {copiedPhone ? <FiCheck style={{ color: 'var(--emerald)' }} /> : <FiCopy />}
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/Amans66" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  <FiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/aman-singh66/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0 }}>
              {formSubmitted ? (
                <div style={{ color: 'var(--emerald)', fontWeight: 600, textAlign: 'center', padding: '3rem 1rem' }}>
                  <FiCheckCircle style={{ fontSize: '3rem', marginBottom: '0.8rem' }} />
                  <div>Message Delivered Successfully!</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    Thank you for reaching out. I will reply to your message shortly.
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    style={{ padding: '0.8rem', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.9rem', color: '#fff', outline: 'none' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    style={{ padding: '0.8rem', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.9rem', color: '#fff', outline: 'none' }}
                  />
                  <textarea
                    required
                    rows="3"
                    placeholder="Your Message..."
                    style={{ padding: '0.8rem', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.9rem', color: '#fff', outline: 'none', resize: 'vertical' }}
                  />
                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Live Clocks */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff' }}>
              Aman Singh
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-light)', display: 'flex', gap: '1.2rem' }}>
              <span>⏱ {utcTime}</span>
              <span>⏱ {istTime}</span>
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>
            © {new Date().getFullYear()} Aman Singh. Built with React & Vite.
          </div>
        </div>
      </footer>
    </div>
  );
}
