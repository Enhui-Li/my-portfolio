'use client';
import { GLOBAL, SIZES } from '../config/constants';

const SectionAbout = () => {
  return (
    <section id="about" className={`bg-black ${GLOBAL.sectionPadding}`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold text-white`}>About <span className="text-emerald-500">Me</span></h2>
        </div>
        <div className="max-w-4xl mx-auto text-gray-300 text-2xl leading-relaxed text-center">
          <p className="mb-6">
            I'm a Computer Science student at City University of Hong Kong with a passion for software engineering,
            data analytics, and machine learning.
          </p>
          <p>
            I've built real‑world systems in banking microservices, transaction processing, and big data mining.
            I love solving problems with clean, efficient code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;