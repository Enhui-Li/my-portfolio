'use client';
import { GLOBAL, SIZES, SKILLS_PROFICIENCY } from '../config/constants';

export default function SectionSkills() {
  return (
    <section id="skills" className={`${GLOBAL.sectionPadding} bg-gradient-to-b from-black to-gray-900`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">
            I've worked with a variety of technologies across web, backend, data, and enterprise systems. Here's a snapshot of my technical toolkit — from core languages to key concepts I apply daily.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800 h-full">
              <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-chart-line text-emerald-500"></i> Technical Proficiency</h3>
              <div className="space-y-10"> {/* INCREASED SPACING HERE */}
                {[
                  { label: 'HTML/CSS', pct: 85 },
                  { label: 'Node.js', pct: 85 },
                  { label: 'React', pct: 80 },
                  { label: 'JavaScript', pct: 75 },
                  { label: 'Python', pct: 70 },
                  { label: 'Java', pct: 70 },
                  { label: 'SQL', pct: 65 },
                  { label: 'C / C++', pct: 65 },
                  { label: 'Linux/Unix', pct: 60 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-3">
                      <span className={SIZES.body}>{skill.label}</span>
                      <span className={`${SIZES.body} text-emerald-500`}>{skill.pct}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style={{width:`${skill.pct}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800">
              <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-tools text-emerald-500"></i> Languages & Tools</h3>
              
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-4">
                  {['Python','C','C++','JavaScript','Java','Node.js','React','HTML','CSS','Unix Shell','SQL'].map(l => 
                    <span key={l} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{l}</span>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Development Tools</h4>
                <div className="flex flex-wrap gap-4">
                  {['Eclipse','BlueJ','Visual Paradigm','UE','ACIDE','WinSQL'].map(t => 
                    <span key={t} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{t}</span>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Data & ML Tools</h4>
                <div className="flex flex-wrap gap-4">
                  {['TensorFlow','Weka','Pandas','Data Analysis Tools','Log Analysis Tools'].map(t => 
                    <span key={t} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{t}</span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Banking & Enterprise Platforms</h4>
                <div className="flex flex-wrap gap-4">
                  {['Microservices Platform','Service Governance','ATMP System','Log Platform'].map(i => 
                    <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{i}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-10 rounded-lg border border-gray-800">
              <h3 className={`${SIZES.h3} font-bold flex items-center gap-2 mb-10`}><i className="fas fa-brain text-emerald-500"></i> Key Concepts</h3>
              
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Software & Architecture</h4>
                <div className="flex flex-wrap gap-4">
                  {['Microservices','Service Governance','OOP','Design Patterns','System Integration'].map(c => 
                    <span key={c} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{c}</span>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Banking & Financial Systems</h4>
                <div className="flex flex-wrap gap-4">
                  {['Financial Transaction Processing','Protocol Conversion','Data Tagging','Data Governance'].map(i => 
                    <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{i}</span>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">Data & Machine Learning</h4>
                <div className="flex flex-wrap gap-4">
                  {['Data Preprocessing','Regression','Random Forest','Statistical Modeling','Data Mapping'].map(i => 
                    <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{i}</span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-emerald-400 mb-4">System Operations</h4>
                <div className="flex flex-wrap gap-4">
                  {['Linux/Unix Commands','Log O&M','System Debugging','Database Operations'].map(i => 
                    <span key={i} className="bg-gray-800 px-6 py-3 rounded-full text-xl font-bold border border-gray-700 transition-all duration-300 hover:bg-emerald-100 hover:text-black hover:scale-110">{i}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}