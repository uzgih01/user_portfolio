import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedHeader } from './common/AnimatedHeader';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { DATA_FRAMES } from '../constants/asciiArt';

export const AboutSection: React.FC<{ id: string }> = ({ id }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  
  return (
    <section id={id} ref={ref} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center p-8 md:p-16 snap-start">
      <AsciiArtBackground frames={DATA_FRAMES} />
      <div className={`w-full max-w-3xl text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AnimatedHeader>About</AnimatedHeader>
        <div className={`transition-opacity duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl text-center leading-relaxed text-crt-green">
              {PORTFOLIO_DATA.summary}
            </p>
        </div>
      </div>
    </section>
  );
};