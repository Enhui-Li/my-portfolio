'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionExperience() {
  return (
    <section id="experience" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-gray-900 to-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>Experience & <span className="text-emerald-500">Education</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience (identical to original) */}
          <div>
            <div className="flex items-center gap-2 mb-10">
              <i className="fas fa-briefcase text-emerald-500 text-2xl"></i>
              <h3 className={`${SIZES.h3} font-bold`}>Work Experience</h3>
            </div>
            <div className="space-y-12 relative border-l-2 border-emerald-500/30 pl-6 ml-4">
              <div>
                <div className="absolute -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                <a href="/shenzhou.pdf" target="_blank" className="text-4xl font-bold mb-2 block hover:text-emerald-500">Software Engineer Intern</a>
                <p className="text-emerald-400 text-2xl font-bold mb-4">Shenzhou Digital | Dec 2025 – Jan 2026</p>
                <p className="text-3xl text-gray-400 leading-relaxed">Description...</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Java</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Microservices</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}