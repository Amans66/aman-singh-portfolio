import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFlag, FiLock, FiCpu, FiCode, FiX } from 'react-icons/fi';

const ctfEntries = [
  {
    event: 'RCS CTF 2026',
    challenges: [
      {
        name: 'Web Fortress',
        category: 'web',
        icon: <FiCode />,
        preview: 'Exploited IDOR vulnerability in the challenge admin panel to access restricted endpoints and retrieve the flag.',
        writeup: `## Web Fortress - RCS CTF 2026

**Category:** Web Exploitation
**Difficulty:** Medium
**Points:** 250

### Challenge Description
A web application with an admin panel that claimed to be "unhackable."

### Solution
1. Identified IDOR vulnerability in the API endpoint
2. Enumerated user IDs through the /api/users endpoint
3. Modified the request to access admin resources
4. Retrieved the flag from /api/admin/flag

### Key Takeaway
Never rely on client-side access controls. Always implement server-side authorization checks.

**Flag:** RCS{1d0r_1s_n0t_s3cur3_4t_4ll}`,
      },
      {
        name: 'CryptoNight',
        category: 'crypto',
        icon: <FiLock />,
        preview: 'Broke a custom XOR encryption scheme with a known plaintext attack to recover the flag from encrypted traffic.',
        writeup: `## CryptoNight - RCS CTF 2026

**Category:** Cryptography
**Difficulty:** Hard
**Points:** 400

### Challenge Description
Intercepted encrypted traffic using a custom cipher.

### Solution
1. Analyzed the cipher - identified as repeating XOR
2. Used known plaintext (HTTP headers) to recover key
3. Key: "SECUREKEYRCS"
4. Decrypted the entire traffic dump
5. Found flag in the POST data

### Key Takeaway
Custom cryptography implementations are almost always weaker than established standards.

**Flag:** RCS{x0r_1s_n0t_3ncrypt10n}`,
      },
      {
        name: 'BinaryGhost',
        category: 'reverse',
        icon: <FiCpu />,
        preview: 'Reverse-engineered an ELF binary that implemented anti-debugging techniques to extract the hidden flag.',
        writeup: `## BinaryGhost - RCS CTF 2026

**Category:** Reverse Engineering
**Difficulty:** Hard
**Points:** 450

### Challenge Description
An ELF binary that seems to do nothing useful.

### Solution
1. Static analysis with Ghidra revealed anti-debug checks
2. Patched ptrace calls to bypass anti-debugging
3. Found string obfuscation using XOR with rolling key
4. Extracted and decoded the hidden strings
5. Reconstructed the flag from decoded segments

### Key Takeaway
Anti-debugging techniques can be bypassed systematically with the right tools.

**Flag:** RCS{gh0st_1n_th3_b1n4ry}`,
      },
    ],
  },
];

export default function CTFSection() {
  const [modal, setModal] = useState(null);

  return (
    <section id="ctf" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">
          <FiFlag /> // CTF & WRITEUPS
        </div>
        <h2 className="section-title">
          Capture The <span className="highlight">Flag</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      {ctfEntries.map((entry, ei) => (
        <div key={ei} style={{ marginBottom: '2rem' }}>
          <motion.div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              color: 'var(--neon-cyan)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiFlag /> {entry.event}
          </motion.div>

          <div className="ctf-cards">
            {entry.challenges.map((ch, ci) => (
              <motion.div
                key={ci}
                className="glass-card ctf-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.15 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setModal(ch)}
                whileHover={{ scale: 1.02 }}
              >
                <span className={`ctf-badge ${ch.category}`}>
                  {ch.icon} {ch.category.toUpperCase()}
                </span>
                <h4 className="ctf-name">{ch.name}</h4>
                <p className="ctf-preview">{ch.preview}</p>
                <div style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--neon-green)',
                  opacity: 0.7,
                }}>
                  → Click to read full writeup
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setModal(null)}>
                <FiX /> Close
              </button>
              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: '1.7',
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                marginTop: '1rem',
              }}>
                {modal.writeup}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
