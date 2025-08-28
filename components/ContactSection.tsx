import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedHeader } from './common/AnimatedHeader';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { ENVELOPE_FRAMES } from '../constants/asciiArt';

export const ContactSection: React.FC<{ id: string }> = ({ id }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section id={id} ref={ref} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center text-center p-8 snap-start">
      <AsciiArtBackground frames={ENVELOPE_FRAMES} />
      <div
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <AnimatedHeader>Get In Touch</AnimatedHeader>
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-2xl text-crt-light mb-8">
              Have a project in mind or want to connect?
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-2xl text-crt-green hover:bg-crt-green hover:text-crt-bg transition-colors duration-200 px-2">{PORTFOLIO_DATA.contact.email}</a>
                <span className="hidden md:block text-crt-green">/</span>
                <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="text-2xl text-crt-green hover:bg-crt-green hover:text-crt-bg transition-colors duration-200 px-2">{PORTFOLIO_DATA.contact.phone}</a>
            </div>
        </div>
      </div>
      <footer className="absolute bottom-4 text-lg text-crt-green/50">
        &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All Rights Reserved.
      </footer>
    </section>
  );
};