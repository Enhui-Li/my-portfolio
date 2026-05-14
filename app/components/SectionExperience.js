'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionExperience() {
  return (
    <section id="experience" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-gray-900 to-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>Experience & <span className="text-emerald-500">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
            A look at the internships and academic path that built my foundation in software engineering – from microservices to banking systems and beyond.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-10">
              <i className="fas fa-briefcase text-emerald-500 text-2xl"></i>
              <h3 className={`${SIZES.h3} font-bold`}>Work Experience</h3>
            </div>
            <div className="space-y-12 relative border-l-2 border-emerald-500/30 pl-6 ml-4">
              <div>
                <div className="absolute -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                <a href="/shenzhou.pdf" target="_blank" className="text-4xl font-bold mb-2 block hover:text-emerald-500 transition-colors duration-300">Software Engineer Intern</a>
                <p className="text-emerald-400 text-2xl font-bold mb-4">Shenzhou Digital Rongxin Software Co., Ltd. | Beijing, China | Dec 2025 – Jan 2026</p>
                <p className="text-3xl text-gray-400 leading-relaxed mb-6">
                  I participated in developing the enterprise microservices platform for 
                  Heilongjiang Rural Credit Union, responsible for data mapping, protocol 
                  configuration, and core online loan transaction interfaces. I completed 
                  cross-system joint debugging and log maintenance to ensure stable system running.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Java</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Microservices</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">SQL</span>
                </div>
              </div>
              <div>
                <div className="absolute -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                <a href="/FeiJie.pdf" target="_blank" className="text-4xl font-bold mb-2 block hover:text-emerald-500 transition-colors duration-300">Software Engineer Intern</a>
                <p className="text-emerald-400 text-2xl font-bold mb-4">Harbin FeiJie Technology Co., Ltd. | Harbin, China | Jan 2024 – Feb 2024</p>
                <p className="text-3xl text-gray-400 leading-relaxed mb-6">
                  I developed and maintained the bank’s ATMP transaction system, covering the full 
                  workflow from message parsing to system communication. I gained solid experience 
                  with C, banking tools, and Unix, and worked with the team to improve system stability and performance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">C</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Banking systems</span>
                  <span className="bg-gray-800 text-xl font-bold px-6 py-3 rounded-lg text-emerald-300">Unix</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-10">
              <i className="fas fa-graduation-cap text-emerald-500 text-2xl"></i>
              <h3 className={`${SIZES.h3} font-bold`}>Education</h3>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex justify-between flex-wrap items-center mb-6">
                  <h4 className="text-4xl font-bold">BSc Computer Science</h4>
                  <span className="text-emerald-400 text-2xl font-bold">Sep 2024 – June 2028 (Expected)</span>
                </div>
                <p className="text-gray-300 text-xl font-semibold mb-4">City University of Hong Kong</p>
                <p className="text-3xl text-gray-400 leading-relaxed">
                  Full Tuition Scholarship, Dean's List (2024-25), CityU Tiger Talent Award. Tiger Ambassador, Excellence Committee Member. IELTS 8.0.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex justify-between flex-wrap items-center mb-6">
                  <h4 className="text-4xl font-bold">High School (A‑Level)</h4>
                  <span className="text-emerald-400 text-2xl font-bold">Sep 2021 – June 2024</span>
                </div>
                <p className="text-gray-300 text-xl font-semibold mb-4">Harbin No.9 High School International Department</p>
                <p className="text-3xl text-gray-400 leading-relaxed">4A* in Mathematics, Further Mathematics, Physics, Chemistry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}