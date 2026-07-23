import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiShield } from 'react-icons/fi';

const experiences = [
  {
    company: 'Indian Cyber Security Solutions (ICSS), Kolkata',
    position: 'Cyber Security Intern',
    dates: 'Jul 2025 – Oct 2025',
    responsibilities: [
      'Conducted Vulnerability Assessment and Penetration Testing (VAPT) on 10+ web applications and internal systems.',
      'Identified security misconfigurations, insecure endpoints, outdated software, and common web vulnerabilities.',
      'Validated remediation efforts and prepared technical reports following OWASP Top 10 and MITRE ATT&CK.',
      'Worked with senior analysts during penetration testing engagements and attack simulations.',
    ],
    tools: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Nikto', 'Wireshark', 'OWASP Top 10', 'MITRE ATT&CK'],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiBriefcase /> // WORK EXPERIENCE TIMELINE</div>
        <h2 className="section-title">
          Professional <span className="highlight">Experience</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(0, 255, 157, 0.3)' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ padding: '2rem', marginBottom: '2rem', position: 'relative' }}
          >
            {/* Timeline Dot Indicator */}
            <div style={{ position: 'absolute', left: '-2.25rem', top: '2rem', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#fff', margin: 0 }}>
                  {exp.position}
                </h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--primary)', marginTop: '0.3rem', fontWeight: 600 }}>
                  {exp.company}
                </div>
              </div>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '0.35rem 0.9rem', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', borderRadius: '20px', color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <FiCalendar /> {exp.dates}
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
              // KEY RESPONSIBILITIES & ACHIEVEMENTS:
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {exp.responsibilities.map((resp, ri) => (
                <li key={ri} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                  <FiCheckCircle style={{ color: 'var(--primary)', marginTop: '4px', flexShrink: 0 }} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {exp.tools.map((tool, ti) => (
                <span key={ti} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '0.25rem 0.6rem', background: 'rgba(0, 255, 157, 0.08)', border: '1px solid rgba(0, 255, 157, 0.2)', borderRadius: '4px', color: 'var(--primary)' }}>
                  {tool}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
