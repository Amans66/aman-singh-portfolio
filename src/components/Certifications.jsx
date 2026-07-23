import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certs = [
  {
    name: 'RCS CTF (2025)',
    issuer: 'RCS Cybersecurity CTF',
    icon: '🏆',
  },
  {
    name: 'Cyber Security & Ethical Hacking (2025)',
    issuer: 'Techvanto Academy',
    icon: '🛡️',
  },
  {
    name: 'Social Networks (2025)',
    issuer: 'NPTEL',
    icon: '📡',
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
        <div className="section-tag">// CERTIFICATIONS</div>
        <h2 className="section-title">
          <span className="highlight">Certifications</span> & Awards
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="cert-list">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            className="glass-card cert-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-info">
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ marginTop: '2rem', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://drive.google.com/drive/folders/1bIL2OHSNNwlUWlXtXbo5AAvEynGsDoiv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon cyan"
        >
          <FiExternalLink /> View Certificates
        </a>
      </motion.div>
    </section>
  );
}
