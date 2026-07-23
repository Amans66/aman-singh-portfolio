import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiShield, FiAlertTriangle, FiSearch, FiCheckCircle, FiTerminal, FiDatabase, FiLock } from 'react-icons/fi';

const mockSIEMAlerts = [
  {
    id: 'ALT-1094',
    timestamp: '11:42:05',
    severity: 'CRITICAL',
    rule: 'Malware Persistence via Registry Modification',
    source: '192.168.1.105 (Host: WIN-ANALYST01)',
    mitre: 'T1547.001 - Registry Run Keys',
    description: 'Process reg.exe modified HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run with suspicious executable path in AppData\\Local\\Temp.',
    remediation: '1. Isolate host WIN-ANALYST01 from network.\n2. Kill PID 4812 (reg.exe) and delete temporary binary.\n3. Pull memory dump for deeper malware analysis.',
  },
  {
    id: 'ALT-1093',
    timestamp: '11:39:12',
    severity: 'HIGH',
    rule: 'Nmap SYN Stealth Port Scan Detected',
    source: '10.0.4.88 (External IP)',
    mitre: 'T1046 - Network Service Discovery',
    description: 'IDS triggered on 500+ TCP SYN connection attempts within 5 seconds targeting ports 21, 22, 80, 443, 8080, and 3389.',
    remediation: '1. Add source IP 10.0.4.88 to edge firewall blocklist.\n2. Verify target host port exposure.\n3. Check web application logs for follow-up payloads.',
  },
  {
    id: 'ALT-1092',
    timestamp: '11:35:40',
    severity: 'MEDIUM',
    rule: 'Web Application SQL Injection Attempt',
    source: '172.16.0.45',
    mitre: 'T1190 - Exploit Public-Facing Application',
    description: 'HTTP POST request to /api/login contained SQLi payload: UNION SELECT username, password FROM users --',
    remediation: '1. Confirm web application WAF blocked payload (HTTP 403).\n2. Audit authentication endpoint for parameterized queries.\n3. Flag IP for rate limiting.',
  },
  {
    id: 'ALT-1091',
    timestamp: '11:30:15',
    severity: 'INFO',
    rule: 'Successful SSH Authentication from Authorized Admin IP',
    source: '192.168.1.10 (SOC Admin Workstation)',
    mitre: 'T1078 - Valid Accounts',
    description: 'User aman authenticated successfully via SSH key authentication on management gateway.',
    remediation: 'No remediation required. Regular administrative access verified.',
  },
];

export default function SOCDashboard() {
  const [selectedAlert, setSelectedAlert] = useState(mockSIEMAlerts[0]);
  const [filter, setFilter] = useState('ALL');
  const [liveStream, setLiveStream] = useState(mockSIEMAlerts);

  const filteredAlerts = liveStream.filter((a) => {
    if (filter === 'ALL') return true;
    return a.severity === filter;
  });

  return (
    <section id="soc-dashboard" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">// SOC & SIEM OPERATIONS (L0 ANALYST)</div>
        <h2 className="section-title">
          Live SIEM Alert & <span className="highlight">Triage Console</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      {/* Domain Focus Tags */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(0, 255, 65, 0.08)', border: '1px solid rgba(0, 255, 65, 0.25)', borderRadius: '6px', color: '#00ff41' }}>
          🛡️ SOC Operations & Log Triage
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.25)', borderRadius: '6px', color: '#00f0ff' }}>
          🔍 VAPT (Web & Network Scanning)
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(189, 0, 255, 0.08)', border: '1px solid rgba(189, 0, 255, 0.25)', borderRadius: '6px', color: '#bd00ff' }}>
          📊 SIEM Alerts & MITRE ATT&CK Mapping
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(255, 153, 0, 0.08)', border: '1px solid rgba(255, 153, 0, 0.25)', borderRadius: '6px', color: '#ff9900' }}>
          📡 Network Packet Analysis (Wireshark)
        </span>
      </div>

      {/* Main Grid: Alerts Stream + Alert Details Console */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Left Column: SIEM Alert Feed */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ padding: '1.5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiActivity className="live-dot" /> SIEM ALERT FEED [L0 STREAM]
            </div>

            {/* Severity Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map((sev) => (
                <button
                  key={sev}
                  onClick={() => setFilter(sev)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: filter === sev ? '1px solid var(--neon-green)' : '1px solid rgba(255,255,255,0.1)',
                    background: filter === sev ? 'rgba(0,255,65,0.15)' : 'transparent',
                    color: filter === sev ? 'var(--neon-green)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                  }}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '420px', overflowY: 'auto', paddingRight: '4px' }}>
            {filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => setSelectedAlert(alert)}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: selectedAlert.id === alert.id ? 'rgba(0, 240, 255, 0.12)' : 'rgba(0,0,0,0.4)',
                  border: selectedAlert.id === alert.id ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: alert.severity === 'CRITICAL' ? 'rgba(255, 0, 60, 0.2)' : alert.severity === 'HIGH' ? 'rgba(255, 153, 0, 0.2)' : 'rgba(0, 240, 255, 0.2)',
                    color: alert.severity === 'CRITICAL' ? '#ff003c' : alert.severity === 'HIGH' ? '#ff9900' : '#00f0ff',
                    border: `1px solid ${alert.severity === 'CRITICAL' ? '#ff003c' : alert.severity === 'HIGH' ? '#ff9900' : '#00f0ff'}`,
                  }}>
                    {alert.severity}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                    {alert.timestamp} | {alert.id}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: '#fff', marginBottom: '0.2rem' }}>
                  {alert.rule}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Source: {alert.source}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Alert Triage & Remediation Detail Panel */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 255, 65, 0.2)', paddingBottom: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiTerminal /> L0 TRIAGE ANALYSIS — {selectedAlert.id}
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--neon-green)' }}>
                STATUS: TRIAGED
              </span>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>
                ALERT RULE:
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#fff' }}>
                {selectedAlert.rule}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.4)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
                  MITRE ATT&CK FRAMEWORK:
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00ff9f' }}>
                  {selectedAlert.mitre}
                </div>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.4)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
                  SOURCE ADDRESS:
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00f0ff' }}>
                  {selectedAlert.source}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>
                TELEMETRY & DESCRIPTION:
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', padding: '0.8rem', background: 'rgba(0,0,0,0.5)', borderRadius: '6px', borderLeft: '3px solid var(--neon-green)' }}>
                {selectedAlert.description}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>
                L0 ANALYST REMEDIATION WORKFLOW:
              </div>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00ff41', whiteSpace: 'pre-wrap', margin: 0, padding: '0.8rem', background: 'rgba(0, 15, 10, 0.6)', borderRadius: '6px', border: '1px solid rgba(0, 255, 65, 0.3)', lineHeight: '1.6' }}>
                {selectedAlert.remediation}
              </pre>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            <FiCheckCircle style={{ color: '#00ff41' }} /> Verified with Splunk & Wireshark packet capture logs
          </div>
        </motion.div>

      </div>
    </section>
  );
}
