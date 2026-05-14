'use client';
import { GLOBAL, SIZES, PROJECTS } from '../config/constants';

const SectionProjects = () => {
  return (
    <section id="projects" className={`bg-black ${GLOBAL.sectionPadding}`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold text-white`}>My <span className="text-emerald-500">Projects</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative h-64">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <a href={p.github} target="_blank" className="bg-emerald-500 p-4 rounded-full">
                    <i className="fab fa-github text-xl text-black"></i>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-lg mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.skills.map((tag, i) => (
                    <span key={i} className="bg-gray-800 text-emerald-300 px-3 py-1 rounded text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;