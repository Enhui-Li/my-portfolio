'use client';
import { GLOBAL, SIZES, SOCIALS } from '../config/constants';

export default function SectionContact() {
  return (
    <section id="contact" className={`${GLOBAL.sectionPadding} bg-black`}>
      <div className={GLOBAL.container}>
        <div className="text-center mb-12">
          <h2 className={`${SIZES.h2} font-bold`}>Get In <span className="text-emerald-500">Touch</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left contact info + Right form — exact original */}
        </div>
      </div>
    </section>
  );
}