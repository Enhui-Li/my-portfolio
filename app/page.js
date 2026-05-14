'use client';
import { useState } from 'react';

// THESE PATHS ARE NOW 100% CORRECT FOR YOUR PROJECT
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import SectionHome from '../components/SectionHome';
import SectionAbout from '../components/SectionAbout';
import SectionSkills from '../components/SectionSkills';
import SectionProjects from '../components/SectionProjects';
import SectionExperience from '../components/SectionExperience';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      
      {loaded && (
        <>
          <Header />
          <SectionHome />
          <SectionAbout />
          <SectionSkills />
          <SectionProjects />
          <SectionExperience />
        </>
      )}
    </main>
  );
}