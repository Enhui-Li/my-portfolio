'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionHome() {
  return (
    <section id="home" className={`min-h-screen ${GLOBAL.sectionPadding} flex items-center relative overflow-hidden`}>
      <div className={GLOBAL.container}>
        <div className="grid md:grid-cols-2 gap-100 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-emerald-500/20 text-emerald-500 px-10 py-4 text-3xl border border-emerald-500/20 mb-8 backdrop-blur-sm">
              <i className="fas fa-terminal mr-3"></i> Software Engineer · Open to Work
            </div>

            <h1 className={`${SIZES.h1} font-bold mb-6`}>
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Enhui Li</span>
            </h1>

            <div className="text-4xl text-gray-400 mb-8">
              I build <span className="font-mono text-emerald-500">reliable, real‑world software</span>
            </div>

            <p className={`${SIZES.body} text-gray-400 mb-12 max-w-6xl leading-relaxed`}>
              I’m a Computer Science undergraduate at City University of Hong Kong with practical internship experience in 
              enterprise microservices and banking transaction systems. I have co-authored a published machine learning paper 
              and built data analysis pipelines for real-world scenarios. I focus on writing clean, robust code and am eager 
              to bring value to professional engineering teams.
            </p>

            <div className="flex gap-6 flex-wrap">
              <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-black px-14 py-5 rounded-md text-3xl font-bold transition shadow-md hover:shadow-emerald-500/30">View My Work</a>
              <a href="#contact" className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-14 py-5 rounded-md text-3xl font-bold transition">Contact Me</a>
            </div>
          </div>

          <div className="relative hidden md:block flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="rounded-2xl overflow-hidden border-6 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                <img src="/profile_.png" alt="Profile" className="w-full object-cover" />
              </div>
              <div className="absolute -top-8 -right-8 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">Microservices</div>
              <div className="absolute top-28 -left-8 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">Banking Systems</div>
              <div className="absolute bottom-28 -right-6 bg-gray-900/90 backdrop-blur p-6 rounded-lg text-emerald-500 font-mono text-2xl font-bold border border-emerald-500/40">ML / Data</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-arrow-down text-emerald-500 text-xl"></i>
      </div>
    </section>
  );
}