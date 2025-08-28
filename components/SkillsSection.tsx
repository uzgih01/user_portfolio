import React from 'react';
import { SKILLS_DATA } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedHeader } from './common/AnimatedHeader';
import { Skill } from '../types';
import { AsciiArtBackground } from './common/AsciiArtBackground';
import { TOOLKIT_FRAMES } from '../constants/asciiArt';

const SkillCard: React.FC<{ skill: Skill, isVisible: boolean, index: number }> = ({ skill, isVisible, index }) => {
  return (
    <div
      className={`bg-transparent border border-crt-green/50 p-6 flex flex-col items-center justify-center text-center transition-all duration-200 group hover:bg-crt-green hover:text-crt-bg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms`}}
    >
      <div className="text-crt-green mb-4 transition-colors duration-200 group-hover:text-crt-bg text-4xl">
        {skill.icon}
      </div>
      <h3 className="text-crt-green text-2xl group-hover:text-crt-bg">{skill.name}</h3>
    </div>
  );
};

export const SkillsSection: React.FC<{ id: string }> = ({ id }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id={id} ref={ref} className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center p-8 md:p-16 snap-start">
      <AsciiArtBackground frames={TOOLKIT_FRAMES} animationSpeed={200} />
      <div className={`w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AnimatedHeader>Toolkit</AnimatedHeader>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};