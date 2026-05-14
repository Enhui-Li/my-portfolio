'use client';
import { GLOBAL, SIZES } from '../config/constants';

export default function SectionAbout({ downloadResume }) {
  return (
    <section id="about" className={`${GLOBAL.sectionPadding} bg-black/50`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>About <span className="text-emerald-500">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            <div className="relative max-w-3xl">
              <img src="/about_me.jpg" alt="About me" className="rounded-xl shadow-2xl border-6 border-emerald-500/30 w-full" />
            </div>
          </div>
          <div>
            <h3 className={`${SIZES.h3} font-bold mb-6`}><span className="text-emerald-500">&lt;</span> Software Engineer <span className="text-emerald-500">/&gt;</span></h3>
            <p className={`${SIZES.body} text-gray-400 mb-12 max-w-6xl leading-relaxed`}>
              I’m a diligent and practical Computer Science student with hands-on experience in enterprise microservices development
              and banking transaction systems.
            </p>
            <div className="grid grid-cols-2 gap-4 text-2xl font-mono mb-8">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">name</span> = <span className="text-yellow-300">'Enhui Li'</span>;</div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">location</span> = <span className="text-yellow-300">'Hong Kong'</span>;</div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">email</span> = <span className="text-yellow-300">'enhuili826@gmail.com'</span>;</div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800"><span className="text-emerald-500">const</span> <span className="text-purple-400">status</span> = <span className="text-yellow-300">'Open for work'</span>;</div>
            </div>
            <div className="mt-6">
              <button onClick={downloadResume} className="bg-emerald-500 hover:bg-emerald-600 text-black px-14 py-5 rounded-md text-3xl font-bold transition shadow-md hover:shadow-emerald-500/30">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}