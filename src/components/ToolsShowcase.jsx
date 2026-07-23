import { motion } from 'framer-motion';
import {
  SiPython, SiBurpsuite, SiWireshark, SiMetasploit, SiKalilinux, SiStreamlit
} from 'react-icons/si';
import {
  FiShield, FiSearch, FiActivity, FiGlobe, FiTerminal, FiCpu, FiLock, FiLayers
} from 'react-icons/fi';

const cvTools = [
  { name: 'Burp Suite', category: 'VAPT', icon: <SiBurpsuite />, color: '#f97316' },
  { name: 'OWASP ZAP', category: 'VAPT', icon: <FiShield />, color: '#00ff9d' },
  { name: 'Nmap', category: 'Recon & Scanning', icon: <FiSearch />, color: '#0ea5e9' },
  { name: 'Nikto', category: 'Web Scanner', icon: <FiTerminal />, color: '#16f2b3' },
  { name: 'Wireshark', category: 'Packet Analysis', icon: <SiWireshark />, color: '#38bdf8' },
  { name: 'Metasploit', category: 'Exploitation', icon: <SiMetasploit />, color: '#ef4444' },
  { name: 'Kali Linux', category: 'OS', icon: <SiKalilinux />, color: '#00ff9d' },
  { name: 'Python', category: 'Scripting', icon: <SiPython />, color: '#eab308' },
  { name: 'Scapy', category: 'Network Scapy', icon: <FiCpu />, color: '#0ea5e9' },
  { name: 'Streamlit', category: 'UI Dashboard', icon: <SiStreamlit />, color: '#ff4b4b' },
  { name: 'PyCryptodome', category: 'Cryptography', icon: <FiLock />, color: '#a855f7' },
  { name: 'VMware Workstation', category: 'Virtualization', icon: <FiLayers />, color: '#64748b' },
  { name: 'Procmon', category: 'Sysinternals', icon: <FiActivity />, color: '#16f2b3' },
  { name: 'Process Explorer', category: 'Sysinternals', icon: <FiActivity />, color: '#0ea5e9' },
  { name: 'Autoruns', category: 'Sysinternals', icon: <FiSearch />, color: '#00ff9d' },
];

export default function ToolsShowcase() {
  return (
    <section id="tools" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag"><FiLayers /> // TOOLKIT SHOWCASE</div>
        <h2 className="section-title">
          Cybersecurity <span className="highlight">Toolbox</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '1.2rem' }}>
        {cvTools.map((tool, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: `0 0 20px ${tool.color}40`, borderColor: tool.color }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            style={{ padding: '1.2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}
          >
            <div style={{ fontSize: '2.2rem', color: tool.color, filter: `drop-shadow(0 0 8px ${tool.color}60)` }}>
              {tool.icon}
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>
              {tool.name}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
              {tool.category}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
