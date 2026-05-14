'use client';
import { GLOBAL, SIZES, EXPERIENCE } from '../config/constants';

const SectionExperience = () => {
  return (
    <section id="experience" className={`bg-black ${GLOBAL.sectionPadding}`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold text-white`}>Work <span className="text-emerald-500">Experience</span></h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="border-l-4 border-emerald-500 pl-6">
              <a
                href={exp.pdf}
                target="_blank"
                className="text-white text-3xl font-bold hover:text-emerald-500 transition"
              >
                {exp.title}
              </a>
              <p className="text-emerald-400 text-xl mt-1 mb-2">{exp.company} | {exp.date}</p>
              <p className="text-gray-300 text-xl mb-4">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s, j) => (
                  <span key={j} className="bg-gray-800 text-emerald-300 px-3 py-1 rounded text-sm">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;