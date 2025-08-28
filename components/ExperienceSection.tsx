import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedHeader } from './common/AnimatedHeader';
import { Experience } from '../types';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { FILM_FRAMES } from '../constants/asciiArt';


const ExperienceItem: React.FC<{ experience: Experience, isVisible: boolean, index: number }> = ({ experience, isVisible, index }) => {
  return (
    <div className={`border-b border-crt-green/50 py-6 transition-opacity duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
         style={{ animationDelay: `${100 + index * 150}ms`}}
    >
        <h3 className="text-crt-green text-3xl md:text-4xl">{experience.team}</h3>
        <p className="text-crt-light text-2xl md:text-3xl mb-1">{experience.role}</p>
        <span className="text-lg text-crt-green/80">{experience.year}</span>
    </div>
  );
};

export const ExperienceSection: React.FC<{ id: string }> = ({ id }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    
    return (
    <section id={id} ref={ref} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center py-8 px-4 md:px-16 snap-start">
        <AsciiArtBackground frames={FILM_FRAMES} animationSpeed={300} />
        <div className={`w-full max-w-3xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <AnimatedHeader>Experience</AnimatedHeader>
            <div>
                {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} isVisible={isVisible} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};