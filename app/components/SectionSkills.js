'use client';
import { GLOBAL, SIZES, SKILLS_PROFICIENCY } from '../config/constants';
import ProgressBar from './UI/ProgressBar';

export default function SectionSkills() {
  return (
    <section id="skills" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-black to-gray-900`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
            I've worked with a variety of technologies across web, backend, data, and enterprise systems.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800 h-full">
              <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-chart-line text-emerald-500"></i> Technical Proficiency</h3>
              <div className="space-y-8">
                {SKILLS_PROFICIENCY.map((s) => <ProgressBar key={s.label} label={s.label} pct={s.pct} />)}
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800">
              <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-tools text-emerald-500"></i> Languages & Tools</h3>
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-4">
                  {['Python','C','C++','JavaScript','Node.js','Java','HTML','CSS','R','Unix','Linux'].map(l =>
                    <span key={l} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700">{l}</span>
                  )}
                </div>
              </div>
              {/* Full skills content here — same as original */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}