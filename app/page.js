'use client';
import { useEffect, useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionSkills from './components/SectionSkills';
import SectionProjects from './components/SectionProjects';
import SectionExperience from './components/SectionExperience';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

export default function Home() {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 10) + 5;
      if (percent > 100) percent = 100;
      setLoadingPercent(percent);
      if (percent === 100) {
        clearInterval(interval);
        setTimeout(() => setLoadingDone(true), 500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) current = section.getAttribute('id');
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = useCallback(() => {
    const a = document.createElement('a');
    a.href = '/CV_.pdf';
    a.download = 'Enhui_Li_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <>
      {!loadingDone && <LoadingScreen loadingPercent={loadingPercent} />}
      {loadingDone && (
        <>
          <Header activeSection={activeSection} downloadResume={downloadResume} />
          <main>
            <SectionHome />
            <SectionAbout downloadResume={downloadResume} />
            <SectionSkills />
            <SectionProjects />
            <SectionExperience />
            <SectionContact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}