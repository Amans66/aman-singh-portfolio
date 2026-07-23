import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Rohta, Agra, Uttar Pradesh',
    href: '#',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'amansinghbhadauria2005@gmail.com',
    href: 'mailto:amansinghbhadauria2005@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91-7291810034',
    href: 'tel:+917291810034',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/Amans66',
    href: 'https://github.com/Amans66',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aman-singh66',
    href: 'https://www.linkedin.com/in/aman-singh66/',
  },
];

// ⚠️ REPLACE THIS with your real access key from https://web3forms.com
const WEB3FORMS_KEY = 'd6ed76b4-9f4c-4fd9-ba2c-0dc6b49df1a9';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// CONTACT</div>
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="glass-card"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--neon-green)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--text-dim)' }}>aman@kali:~$</span> send_message
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">name:</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">email:</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">message:</label>
              <textarea
                id="contact-message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-neon"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={status === 'sending'}
            >
              <FiSend />{' '}
              {status === 'sending'
                ? '[ TRANSMITTING... ]'
                : status === 'sent'
                ? '[ MESSAGE SENT ]'
                : status === 'error'
                ? '[ TRANSMISSION FAILED ]'
                : 'Send Message'}
            </button>
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#28c840',
                  textAlign: 'center',
                }}
              >
                ✓ Message delivered successfully
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#ff4444',
                  textAlign: 'center',
                }}
              >
                ✗ Transmission failed — check your connection
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          className="glass-card"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--neon-cyan)',
            marginBottom: '1.5rem',
          }}>
            // Connection details
          </div>

          <div className="contact-info-list">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                className="contact-info-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="icon">{item.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                    marginBottom: '0.15rem',
                  }}>
                    {item.label}
                  </div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            borderLeft: '3px solid var(--neon-green)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            lineHeight: '1.6',
            color: 'var(--text-dim)',
          }}>
            <span style={{ color: '#00ff9f' }}>$</span> status --availability<br />
            <span style={{ color: '#e0e0e0' }}>Open to internships, freelance security audits, and collaborative projects.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
