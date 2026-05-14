'use client';
import { NAV_ITEMS, SOCIALS } from '../config/constants';

export default function MobileMenu({ open, closeMenu, downloadResume }) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-black/95 backdrop-blur-md flex flex-col space-y-4 px-6 py-4 border-t border-gray-800">
      {NAV_ITEMS.map(([id, label]) => (
        <a key={id} href={`#${id}`} className="text-white text-xl" onClick={closeMenu}>
          {label}
        </a>
      ))}

      <div className="flex space-x-6 pt-2">
        <a href={SOCIALS.github} target="_blank"><i className="fab fa-github text-xl text-gray-300 hover:text-emerald-500"></i></a>
        <a href={SOCIALS.linkedin} target="_blank"><i className="fab fa-linkedin text-xl text-gray-300 hover:text-emerald-500"></i></a>
        <a href={SOCIALS.instagram} target="_blank"><i className="fab fa-instagram text-xl text-gray-300 hover:text-emerald-500"></i></a>
        <a href={SOCIALS.facebook} target="_blank"><i className="fab fa-facebook text-xl text-gray-300 hover:text-emerald-500"></i></a>
      </div>

      <button onClick={() => { downloadResume(); closeMenu(); }} className="bg-emerald-500 text-black py-3 rounded-md text-xl font-semibold">
        Resume
      </button>
    </div>
  );
}