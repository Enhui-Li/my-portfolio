'use client';
import { useState } from 'react';
import { GLOBAL, SIZES, NAV_ITEMS, SOCIALS } from '../config/constants';
import MobileMenu from './MobileMenu';

export default function Header({ activeSection, downloadResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="w-full max-w-screen-1xl mx-auto px-12 md:px-16 lg:px-50 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2" onClick={closeMobile}>
          <i className="fas fa-code text-emerald-500 text-5xl"></i>
          <span className="font-bold text-5xl">
            <span className="text-emerald-500">&lt;</span>Enhui<span className="text-emerald-500">/&gt;</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`${SIZES.small} font-medium hover:text-emerald-500 ${activeSection === id ? 'text-emerald-500' : 'text-white'}`}>
              {label}
            </a>
          ))}

          <div className="flex items-center space-x-10">
            <a href={SOCIALS.github} target="_blank"><i className="fab fa-github text-4xl text-gray-300 hover:text-emerald-500"></i></a>
            <a href={SOCIALS.linkedin} target="_blank"><i className="fab fa-linkedin text-4xl text-gray-300 hover:text-emerald-500"></i></a>
            <a href={SOCIALS.instagram} target="_blank"><i className="fab fa-instagram text-4xl text-gray-300 hover:text-emerald-500"></i></a>
            <a href={SOCIALS.facebook} target="_blank"><i className="fab fa-facebook text-4xl text-gray-300 hover:text-emerald-500"></i></a>
          </div>

          <button onClick={downloadResume} className="ml-8 bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-md text-3xl font-semibold">
            Resume
          </button>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white text-3xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <MobileMenu open={mobileOpen} closeMenu={closeMobile} downloadResume={downloadResume} />
    </header>
  );
}