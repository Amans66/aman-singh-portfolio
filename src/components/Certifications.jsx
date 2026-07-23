import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const certs = [
  {
    title: 'RCS CTF (Capture The Flag)',
    issuer: 'RCS Cybersecurity Competition',
    date: '2025',
    credentialId: 'RCS-CTF-2025-VERIFIED',
    desc: 'Demonstrated practical competence in web exploitation, privilege escalation, network triage, and cryptographic challenge solving.',
    link: 'https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link',
  },
  {
    title: 'Cyber Security & Ethical Hacking',
    issuer: 'Techvanto Academy',
    date: '2025',
    credentialId: 'TECHVANTO-SEC-2025',
    desc: 'Comprehensive training covering network penetration testing, VAPT methodologies, system hardening, and web security fundamentals.',
    link: 'https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link',
  },
  {
    title: 'NPTEL – Social Networks',
    issuer: 'NPTEL / IIT',
    date: '2025',
    credentialId: 'NPTEL25-CS-SOCNET',
    desc: 'Advanced analysis of network graphs, information diffusion, structural vulnerabilities, and network security metrics.',
    link: 'https://drive.google.com/drive/folders/10nyIP-jmDWtC1goj-8wSFlDVozgWaKBg?usp=drive_link',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiAward /> // VERIFIED CERTIFICATIONS</div>
        <h2 className="section-title">
          Professional <span className="highlight">Certifications</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary)' }}>
                  <FiAward />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'rgba(0, 255, 157, 0.1)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '12px', color: 'var(--primary)' }}>
                  {cert.date}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#fff', marginBottom: '0.4rem' }}>
                {cert.title}
              </h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--secondary)', marginBottom: '0.8rem' }}>
                {cert.issuer}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                {cert.desc}
              </p>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '0.8rem' }}>
                ID: {cert.credentialId}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '0.45rem 1rem' }}
              >
                <FiCheckCircle /> Verify Credential <FiExternalLink />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
