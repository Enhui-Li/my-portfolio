'use client';
import { GLOBAL, SIZES, NAV_ITEMS, SOCIALS } from '../config/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className={GLOBAL.container + " py-20 px-16 md:px-24 lg:px-28"}>
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a className="flex items-center space-x-2 mb-8" href="#home">
              <i className="fas fa-code text-emerald-500 text-5xl"></i>
              <span className="font-bold text-5xl">
                <span className="text-emerald-500">&lt;</span>Enhui<span className="text-emerald-500">/&gt;</span>
              </span>
            </a>
            <p className={`${SIZES.small} text-gray-400 mb-8 max-w-3xl`}>
              A passionate software engineer specializing in creating exceptional digital experiences. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-8">
              <a href={SOCIALS.github} target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-github"></i></a>
              <a href={SOCIALS.linkedin} target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-linkedin"></i></a>
              <a href={SOCIALS.instagram} target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-instagram"></i></a>
              <a href={SOCIALS.facebook} target="_blank" className="text-gray-400 hover:text-emerald-500 transition text-5xl"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-8">Quick Links</h3>
            <ul className="space-y-6">
              {NAV_ITEMS.map(([id, label]) => (
                <li key={id}><a className="text-3xl text-gray-400 hover:text-emerald-500 transition" href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-8">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-400"><i className="fas fa-envelope text-emerald-500 text-3xl mr-4"></i><span className="text-3xl">enhuili826@gmail.com</span></li>
              <li className="flex items-center text-gray-400"><i className="fas fa-map-marker-alt text-emerald-500 text-3xl mr-4"></i><span className="text-3xl">Hong Kong</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-3xl text-gray-400 mb-4 md:mb-0">© 2026 Enhui Li. All rights reserved.</p>
          <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="scroll-to-top inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black transition text-2xl">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}