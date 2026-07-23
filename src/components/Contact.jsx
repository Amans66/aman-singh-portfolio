import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiCopy, FiCheck, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('amansinghbhadauria2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
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
        <div className="section-tag"><FiMail /> // GET IN TOUCH</div>
        <h2 className="section-title">
          Contact <span className="highlight">Security Analyst</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Column: Contact Cards & Quick Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ fontSize: '1.8rem', color: 'var(--primary)' }}><FiMail /></div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>EMAIL ADDRESS</div>
              <a href="mailto:amansinghbhadauria2005@gmail.com" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#fff', textDecoration: 'none' }}>
                amansinghbhadauria2005@gmail.com
              </a>
            </div>
            <button
              onClick={copyEmail}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: copied ? 'var(--primary)' : 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem' }}
              title="Copy Email"
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ fontSize: '1.8rem', color: 'var(--secondary)' }}><FiPhone /></div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>PHONE NUMBER</div>
              <a href="tel:+917291810034" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#fff', textDecoration: 'none' }}>
                +91-7291810034
              </a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ fontSize: '1.8rem', color: 'var(--accent)' }}><FiMapPin /></div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>LOCATION</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#fff' }}>
                Rohta, Agra, Uttar Pradesh, India
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a
              href="https://www.linkedin.com/in/aman-singh66/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon cyan"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FiLinkedin /> LinkedIn Profile
            </a>
            <a
              href="https://github.com/Amans66"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <FiGithub /> GitHub Repos
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ padding: '2rem' }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <FiCheck style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                Transmission Received!
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Thank you for getting in touch. I will respond to your security inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                // SEND DIRECT ENCRYPTED MESSAGE
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Security Recruiter / Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: 'rgba(5, 8, 22, 0.7)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: 'rgba(5, 8, 22, 0.7)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
                  MESSAGE / SECURITY INQUIRY
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Write your message or project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: 'rgba(5, 8, 22, 0.7)', border: '1px solid rgba(0, 255, 157, 0.3)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-neon" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                <FiSend /> Send Secure Message
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
