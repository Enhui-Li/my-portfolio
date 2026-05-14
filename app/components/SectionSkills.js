'use client';
import { GLOBAL, SIZES, SKILLS } from '../config/constants';
import ProgressBar from './UI/ProgressBar';

const SectionSkills = () => {
  return (
    <section id="skills" className={`bg-black ${GLOBAL.sectionPadding}`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold text-white`}>My <span className="text-emerald-500">Skills</span></h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {SKILLS.map((s) => (
            <ProgressBar key={s.name} label={s.name} percent={s.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;