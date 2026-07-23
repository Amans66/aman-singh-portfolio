import { useState } from 'react';
import Bootloader from './components/Bootloader';
import MatrixBackground from './components/MatrixBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import SOCDashboard from './components/SOCDashboard';
import Projects from './components/Projects';
import ToolsShowcase from './components/ToolsShowcase';
import InteractiveTerminal from './components/InteractiveTerminal';
import GithubSection from './components/GithubSection';
import TryHackMeSection from './components/TryHackMeSection';
import CTFSection from './components/CTFSection';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SystemLogs from './components/SystemLogs';
import KonamiEasterEgg from './components/KonamiEasterEgg';

function App() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <Bootloader onComplete={() => setBooted(true)} />;
  }

  return (
    <>
      <div className="cyber-grid" />
      <div className="ambient-glow" />
      <div className="ambient-glow-2" />
      <MatrixBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="global-screen-glitch">
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <SOCDashboard />
        <Projects />
        <ToolsShowcase />
        <InteractiveTerminal />
        <GithubSection />
        <TryHackMeSection />
        <CTFSection />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <SystemLogs />
      <KonamiEasterEgg />
    </>
  );
}

export default App;
