import { useState, useEffect } from 'react';

const logMessages = [
  '[SYS] Memory allocation: 0x7fff5fbff8a0',
  '[NET] Packet received: TCP 192.168.1.44:443',
  '[AUTH] Session token refreshed',
  '[SYS] Process ID: 1337 running',
  '[NET] DNS resolution: portfolio.aman.dev',
  '[SEC] SSL/TLS handshake complete',
  '[SYS] CPU usage: 3.2% | Memory: 512MB',
  '[NET] Outbound connection: api.github.com',
  '[AUTH] Certificate verified: SHA-256',
  '[SYS] Uptime: 99.97% | Latency: 12ms',
  '[NET] WebSocket connection established',
  '[SEC] Firewall rule updated: ALLOW 443',
  '[SYS] Garbage collection: freed 128KB',
  '[NET] HTTP/2 stream opened: /api/repos',
  '[AUTH] MFA verification: PASSED',
  '[SYS] Thread pool: 4/8 active',
  '[NET] Connection pool: 3 active, 5 idle',
  '[SEC] Intrusion detection: All clear',
  '[SYS] Cache hit ratio: 94.2%',
  '[NET] Bandwidth: 24.5 Mbps downstream',
];

export default function SystemLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = logMessages[Math.floor(Math.random() * logMessages.length)];
      const time = new Date().toLocaleTimeString('en-US', { hour12: false });
      setLogs((prev) => [...prev.slice(-8), `${time} ${msg}`]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-logs">
      {logs.map((log, i) => (
        <div
          key={i}
          style={{
            opacity: (i + 1) / logs.length,
            transition: 'opacity 0.3s ease',
          }}
        >
          {log}
        </div>
      ))}
    </div>
  );
}
