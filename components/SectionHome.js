'use client';
import { GLOBAL, SIZES } from '../config/constants';
import Button from './UI/Button';

const SectionHome = () => {
  const downloadCV = () => window.open('/CV_.pdf', '_blank');

  return (
    <section id="home" className={`min-h-screen flex items-center ${GLOBAL.sectionPadding}`}>
      <div className={GLOBAL.container}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-500 text-3xl mb-2">Hi, I'm</p>
            <h1 className={`${SIZES.h1} font-bold text-white leading-tight mb-4`}>Enhui Li</h1>
            <p className="text-gray-300 text-3xl mb-8">Software Engineer & Data Science Enthusiast</p>
            <Button onClick={downloadCV}>Download CV</Button>
          </div>
          <div className="flex justify-center">
            <img src="/profile_.png" alt="Profile" className="w-72 h-72 rounded-full object-cover border-4 border-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;