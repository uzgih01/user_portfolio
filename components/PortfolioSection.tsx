import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedHeader } from './common/AnimatedHeader';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { PLAY_FRAMES } from '../constants/asciiArt';

export const PortfolioSection: React.FC<{ id: string }> = ({ id }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  
  return (
    <section id={id} ref={ref} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center text-center p-8 snap-start">
      <AsciiArtBackground frames={PLAY_FRAMES} animationSpeed={500} />
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AnimatedHeader>My Work</AnimatedHeader>
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="max-w-xl text-2xl text-crt-green mb-12">
                Explore a collection of projects that showcase my passion for storytelling and my technical skills in action.
            </p>
            <a
              href={PORTFOLIO_DATA.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-2xl text-crt-green tracking-widest border border-crt-green bg-transparent transition-all duration-200 hover:bg-crt-green hover:text-crt-bg"
            >
              View Showreel
            </a>
        </div>
      </div>
    </section>
  );
};