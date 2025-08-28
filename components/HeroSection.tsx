import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { REC_FRAMES } from '../constants/asciiArt';

const BootUpText: React.FC<{ text: string, animationClass: string }> = ({ text, animationClass }) => {
  return (
    <span className={`relative w-max block overflow-hidden whitespace-nowrap border-r-4 border-r-crt-green ${animationClass}`}>
      {text}
    </span>
  );
};


export const HeroSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center text-center p-8 snap-start">
      <AsciiArtBackground frames={REC_FRAMES} animationSpeed={500} />
      <div className="relative">
        <h1 className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] text-crt-green tracking-widest uppercase relative select-none">
          <BootUpText text={PORTFOLIO_DATA.name} animationClass="animate-bootup-name" />
        </h1>
      </div>
      <p className="text-3xl md:text-4xl mt-4 text-crt-green" style={{ animationDelay: '2s' }}>
        <BootUpText text={PORTFOLIO_DATA.profession} animationClass="animate-bootup-prof" />
      </p>

      <div className="absolute top-6 right-6 text-right opacity-0 animate-fade-in" style={{ animationDelay: '3.5s' }}>
         <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="block text-xl text-crt-green hover:bg-crt-green hover:text-crt-bg transition-colors duration-200 px-1">{PORTFOLIO_DATA.contact.email}</a>
         <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="block text-xl text-crt-green hover:bg-crt-green hover:text-crt-bg transition-colors duration-200 px-1">{PORTFOLIO_DATA.contact.phone}</a>
      </div>
      
      <div className="absolute bottom-10 flex flex-col items-center text-crt-green text-xl tracking-widest uppercase opacity-0 animate-fade-in" style={{ animationDelay: '3.5s' }}>
        <span>Drag</span>
        <span className="text-4xl animate-blink">█</span>
      </div>
    </section>
  );
};