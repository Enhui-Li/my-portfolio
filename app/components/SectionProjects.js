'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionProjects() {
  return (
    <section id="projects" className={`${GLOBAL.sectionPadding} bg-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>My <span className="text-emerald-500">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full mb-4"></div>
          <p className="text-3xl text-gray-400 max-w-6xl mx-auto leading-relaxed">Here's a selection of my work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 relative group h-[850px] flex flex-col">
            <div className="relative overflow-hidden flex-shrink-0">
              <img src="/tetris.png" alt="Tetris" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <a href="https://github.com/Enhui-Li/tetris-big-data-analysis" target="_blank" className="bg-emerald-500 p-4 rounded-full"><i className="fab fa-github text-xl text-black"></i></a>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className={`${SIZES.h3} font-bold mb-4`}>Big Data Analysis – Competitive Tetris</h3>
              <p className={`${SIZES.body} text-gray-400 leading-relaxed mb-auto`}>Project description...</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Python</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Weka</span>
                <span className="bg-gray-800 text-emerald-300 text-2xl font-bold px-6 py-3 rounded-lg">Data Mining</span>
              </div>
            </div>
          </div>

          {/* 2 more projects identical to your original */}
        </div>
      </div>
    </section>
  );
}