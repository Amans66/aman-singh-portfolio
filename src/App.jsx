import { useState } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink, FiShield, FiBriefcase, FiCode, FiAward, FiBookOpen } from 'react-icons/fi';
import profileImg from './assets/profile.jpg';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-flex">
          <a href="#home" className="logo">
            <span>AMAN</span>_SINGH
          </a>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="simple-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-green)', marginBottom: '0.8rem' }}>
              // CYBERSECURITY ANALYST & VAPT SPECIALIST
            </div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.2rem', color: '#fff' }}>
              Hi, I'm Aman Singh
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.8rem', lineHeight: 1.7 }}>
              Aspiring Cybersecurity Analyst with hands-on experience in <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Vulnerability Assessment & Penetration Testing (VAPT)</span>, malware analysis, network security, and secure software development. Proficient in Burp Suite, OWASP ZAP, Nmap, Wireshark, Python, and Kali Linux.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FiDownload /> Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                <FiMail /> Contact Me
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={profileImg}
              alt="Aman Singh"
              onError={(e) => { e.target.style.display = 'none'; }}
              style={{ width: '220px', height: '220px', borderRadius: '20px', objectFit: 'cover', border: '2px solid var(--accent-green)', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* About & Experience */}
      <section id="about" className="simple-section">
        <div className="container">
          <div className="section-heading">
            <FiShield /> <span>About</span> & Experience
          </div>

          <div className="simple-card">
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.8rem' }}>
              Career Profile
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Top 4% ranking on TryHackMe with 101 completed practical security labs covering web exploitation, privilege escalation, networking, and defensive operations. Passionate about identifying security misconfigurations and hardening system infrastructure.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="tag">VAPT & Web Security</span>
              <span className="tag tag-blue">OWASP Top 10</span>
              <span className="tag">Malware Analysis</span>
              <span className="tag tag-blue">TryHackMe Top 4%</span>
            </div>
          </div>

          <div id="experience" className="simple-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>
                Cyber Security Intern
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-blue)' }}>
                Jul 2025 – Oct 2025
              </span>
            </div>
            <div style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Indian Cyber Security Solutions (ICSS), Kolkata
            </div>

            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on 10+ web applications and internal systems.</li>
              <li>Identified security misconfigurations, insecure endpoints, outdated software, and OWASP Top 10 vulnerabilities.</li>
              <li>Validated remediation efforts and prepared technical reports following OWASP Top 10 and MITRE ATT&CK.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="simple-section">
        <div className="container">
          <div className="section-heading">
            <FiCode /> Technical <span>Skills</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h4 style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', marginBottom: '0.8rem' }}>// SECURITY TOOLS</h4>
              <div>
                <span className="tag">Burp Suite</span>
                <span className="tag">OWASP ZAP</span>
                <span className="tag">Nmap</span>
                <span className="tag">Nikto</span>
                <span className="tag">Wireshark</span>
                <span className="tag">Metasploit</span>
              </div>
            </div>

            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h4 style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', marginBottom: '0.8rem' }}>// PROGRAMMING & OS</h4>
              <div>
                <span className="tag tag-blue">Python</span>
                <span className="tag tag-blue">Kali Linux</span>
                <span className="tag tag-blue">Windows</span>
                <span className="tag tag-blue">MySQL</span>
                <span className="tag tag-blue">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="simple-section">
        <div className="container">
          <div className="section-heading">
            <FiBriefcase /> Security <span>Projects</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Threat Detection Suite</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Real-time network security monitoring dashboard designed to analyze traffic, sniff TCP SYN packets, and flag malicious payloads.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <span className="tag">Python</span>
                <span className="tag">Scapy</span>
                <span className="tag">Streamlit</span>
              </div>
              <a href="https://github.com/Amans66/Threat-Detection-Suite" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                GitHub Repo <FiExternalLink />
              </a>
            </div>

            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem' }}>ShieldCrypt</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                CLI security tool combining AES-256 GCM encryption with custom substitution ciphers for confidential file protection.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <span className="tag">Python</span>
                <span className="tag">PyCryptodome</span>
              </div>
              <a href="https://github.com/Amans66/ShieldCrypt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                GitHub Repo <FiExternalLink />
              </a>
            </div>

            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Delta – Malware Lab</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Isolated virtual analysis lab for monitoring malware process execution, registry modifications, and network C2 traffic.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <span className="tag">VMware</span>
                <span className="tag">Wireshark</span>
                <span className="tag">Procmon</span>
              </div>
              <a href="https://github.com/Amans66/Delta-Malware-Lab" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                GitHub Repo <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="simple-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div className="section-heading" style={{ fontSize: '1.4rem' }}>
                <FiAward /> <span>Certifications</span>
              </div>
              <div className="simple-card" style={{ marginBottom: 0 }}>
                <div style={{ fontWeight: 600, color: '#fff' }}>RCS CTF (Capture The Flag)</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>RCS Competition (2025)</div>

                <div style={{ fontWeight: 600, color: '#fff' }}>Cyber Security & Ethical Hacking</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>Techvanto Academy (2025)</div>

                <div style={{ fontWeight: 600, color: '#fff' }}>NPTEL – Social Networks</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>NPTEL / IIT (2025)</div>
              </div>
            </div>

            <div>
              <div className="section-heading" style={{ fontSize: '1.4rem' }}>
                <FiBookOpen /> <span>Education</span>
              </div>
              <div className="simple-card" style={{ marginBottom: 0 }}>
                <div style={{ fontWeight: 600, color: '#fff' }}>B.Tech Computer Science & Engineering (Cyber Security)</div>
                <div style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Lovely Professional University (2023 – Present)</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CGPA: 6.83</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="simple-section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-heading">
            <FiMail /> Get In <span>Touch</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="simple-card" style={{ marginBottom: 0 }}>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Contact Details</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                <strong>Email:</strong> <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ color: 'var(--accent-blue)' }}>amansinghbhadauria2005@gmail.com</a>
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                <strong>Phone:</strong> +91-7291810034
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
                <strong>Location:</strong> Rohta, Agra, Uttar Pradesh, India
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/Amans66" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)', fontSize: '1.3rem' }}><FiGithub /></a>
                <a href="https://www.linkedin.com/in/aman-singh66/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', fontSize: '1.3rem' }}><FiLinkedin /></a>
              </div>
            </div>

            <div className="simple-card" style={{ marginBottom: 0 }}>
              {submitted ? (
                <div style={{ color: 'var(--accent-green)', textAlign: 'center', padding: '2rem 0' }}>
                  ✓ Message Sent Successfully! Thank you.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    style={{ padding: '0.75rem', background: '#0b0f19', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', outline: 'none' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    style={{ padding: '0.75rem', background: '#0b0f19', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', outline: 'none' }}
                  />
                  <textarea
                    required
                    rows="3"
                    placeholder="Your Message"
                    style={{ padding: '0.75rem', background: '#0b0f19', border: '1px solid var(--border-color)', borderRadius: '6px', color: '#fff', outline: 'none' }}
                  />
                  <button type="submit" className="btn btn-primary">
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
          © {new Date().getFullYear()} Aman Singh — Cybersecurity Analyst. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
