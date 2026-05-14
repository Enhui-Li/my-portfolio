'use client';
import { useState } from 'react';
import { NAV_LINKS, GLOBAL } from '../config/constants';
import MobileMenu from './MobileMenu';
import Button from './UI/Button';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const downloadCV = () => {
    window.open('/CV_.pdf', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-40 border-b border-gray-800">
      <div className={GLOBAL.container}>
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-emerald-500 text-3xl font-bold">Enhui Li</a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-white text-xl hover:text-emerald-500 transition"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={downloadCV}>Download CV</Button>
          </div>

          <button className="md:hidden text-white text-3xl" onClick={() => setMobileOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};

export default Header;