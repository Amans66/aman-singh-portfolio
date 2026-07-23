import { useState } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import profileImg from './assets/profile.jpg';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-flex">
          <a href="#home" className="nav-logo">
            Aman <span>Singh</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: '#1d4ed8', marginBottom: '1.2rem' }}>
              Cybersecurity Analyst & Pentester
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', color: 'var(--text-main)' }}>
              Hi, I'm Aman Singh
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.8rem', lineHeight: 1.7 }}>
              Cybersecurity Analyst with hands-on experience in Vulnerability Assessment & Penetration Testing (VAPT), malware analysis, network security, and secure software development. Proficient in Burp Suite, OWASP ZAP, Nmap, Wireshark, Python, and Kali Linux.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
              <FiMapPin style={{ color: 'var(--primary)' }} /> Rohta, Agra, Uttar Pradesh, India
            </div>

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
                <FiMail /> Get in Touch
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={profileImg}
              alt="Aman Singh"
              onError={(e) => { e.target.style.display = 'none'; }}
              style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f1f5f9', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="card">
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I specialize in analyzing web applications and internal network systems to identify security vulnerabilities and misconfigurations. Ranked in the top 4% globally on TryHackMe with 101 completed practical security labs covering web exploitation, privilege escalation, networking, and defensive operations.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge">Vulnerability Assessment (VAPT)</span>
              <span className="badge">OWASP Top 10</span>
              <span className="badge">Malware Behavior Analysis</span>
              <span className="badge">TryHackMe Top 4%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  Cyber Security Intern
                </h3>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)', marginTop: '0.2rem' }}>
                  Indian Cyber Security Solutions (ICSS), Kolkata
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0.3rem 0.8rem', background: '#f1f5f9', borderRadius: '20px', color: 'var(--text-muted)' }}>
                Jul 2025 – Oct 2025
              </span>
            </div>

            <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on 10+ web applications and internal systems.</li>
              <li>Identified security misconfigurations, insecure endpoints, outdated software, and OWASP Top 10 vulnerabilities.</li>
              <li>Validated remediation efforts and prepared technical reports following OWASP Top 10 and MITRE ATT&CK guidelines.</li>
              <li>Collaborated with senior security analysts during penetration testing engagements and security assessments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Security Tools
              </h3>
              <div>
                <span className="badge tag-gray">Burp Suite</span>
                <span className="badge tag-gray">OWASP ZAP</span>
                <span className="badge tag-gray">Nmap</span>
                <span className="badge tag-gray">Nikto</span>
                <span className="badge tag-gray">Wireshark</span>
                <span className="badge tag-gray">Metasploit</span>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Programming & Operating Systems
              </h3>
              <div>
                <span className="badge tag-gray">Python</span>
                <span className="badge tag-gray">Kali Linux</span>
                <span className="badge tag-gray">Windows</span>
                <span className="badge tag-gray">MySQL</span>
                <span className="badge tag-gray">MongoDB</span>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Core Concepts
              </h3>
              <div>
                <span className="badge tag-gray">VAPT</span>
                <span className="badge tag-gray">OWASP Top 10</span>
                <span className="badge tag-gray">Malware Analysis</span>
                <span className="badge tag-gray">Networking</span>
                <span className="badge tag-gray">Cryptography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Key Projects</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Threat Detection Suite
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                  Real-time network security monitoring dashboard built with Python and Scapy to sniff network packets, inspect TCP SYN scans, and flag web injection attempts.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge tag-gray">Python</span>
                  <span className="badge tag-gray">Scapy</span>
                  <span className="badge tag-gray">Streamlit</span>
                </div>
                <a href="https://github.com/Amans66/Threat-Detection-Suite" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Repository <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  ShieldCrypt
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                  Dual-layer command-line encryption tool combining AES-256 GCM encryption with custom substitution ciphers for securing sensitive data.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge tag-gray">Python</span>
                  <span className="badge tag-gray">PyCryptodome</span>
                </div>
                <a href="https://github.com/Amans66/ShieldCrypt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Repository <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Delta – Malware Behavior Lab
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                  Isolated Virtual Machine sandbox environment configured for dynamic malware analysis, Sysinternals process tracking, and network C2 traffic logging.
                </p>
              </div>

              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge tag-gray">VMware</span>
                  <span className="badge tag-gray">Wireshark</span>
                  <span className="badge tag-gray">Procmon</span>
                </div>
                <a href="https://github.com/Amans66/Delta-Malware-Lab" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Repository <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Education</h2>
              <div className="card" style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  B.Tech Computer Science & Engineering (Cyber Security)
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Lovely Professional University (2023 – Present)
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  CGPA: 6.83
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Certifications</h2>
              <div className="card" style={{ marginBottom: 0 }}>
                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>RCS CTF (Capture The Flag)</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>RCS Competition (2025)</div>

                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>Cyber Security & Ethical Hacking</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Techvanto Academy (2025)</div>

                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>NPTEL – Social Networks</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>NPTEL / IIT (2025)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ marginBottom: 0 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Contact Details</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                <strong>Email:</strong> <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ color: 'var(--primary)' }}>amansinghbhadauria2005@gmail.com</a>
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                <strong>Phone:</strong> +91-7291810034
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                <strong>Location:</strong> Rohta, Agra, Uttar Pradesh, India
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/Amans66" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}><FiGithub /></a>
                <a href="https://www.linkedin.com/in/aman-singh66/" target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', fontSize: '1.4rem' }}><FiLinkedin /></a>
              </div>
            </div>

            <div className="card" style={{ marginBottom: 0 }}>
              {submitted ? (
                <div style={{ color: '#16a34a', fontWeight: 600, textAlign: 'center', padding: '2rem 0' }}>
                  ✓ Thank you! Your message has been sent.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none' }}
                  />
                  <textarea
                    required
                    rows="3"
                    placeholder="Your Message"
                    style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--text-main)', outline: 'none', resize: 'vertical' }}
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Aman Singh. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
