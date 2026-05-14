'use client';
import { NAV_LINKS } from '../config/constants';

const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center">
      <button onClick={onClose} className="absolute top-8 right-8 text-white text-4xl">
        <i className="fas fa-times"></i>
      </button>
      <div className="flex flex-col gap-6 text-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onClose}
            className="text-white text-3xl hover:text-emerald-500"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;