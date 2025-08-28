import React, { useState } from 'react';
import { SECTIONS } from '../App';

interface NavigationProps {
  onNavigate: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-50 p-2 group border border-crt-green/50 hover:bg-crt-green"
        aria-label="Toggle navigation menu"
      >
        <div className="space-y-2">
            <span className={`block w-8 h-1 bg-crt-green transition-transform duration-300 group-hover:bg-crt-bg ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
            <span className={`block w-8 h-1 bg-crt-green transition-opacity duration-300 group-hover:bg-crt-bg ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-1 bg-crt-green transition-transform duration-300 group-hover:bg-crt-bg ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
        </div>
      </button>

      {isOpen && (
        <nav className="fixed inset-0 bg-crt-bg z-40 flex justify-center items-center animate-fade-in">
          <ul className="text-center">
            {SECTIONS.map((section, index) => (
              <li key={section} className="my-4">
                <button
                  onClick={() => handleLinkClick(index)}
                  className="text-6xl md:text-8xl text-crt-green hover:bg-crt-green hover:text-crt-bg transition-colors duration-200 px-4"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};