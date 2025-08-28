import React, { useRef, useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Navigation } from './components/Navigation';
import { DotIndicator } from './components/DotIndicator';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

export const SECTIONS = ['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'];

const App: React.FC = () => {
    const scrollContainerRef = useHorizontalScroll<HTMLDivElement>();
    const [activeIndex, setActiveIndex] = useState(0);
    
    const scrollToSection = (index: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: window.innerWidth * index,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollTimeout: number;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(() => {
                const newIndex = Math.round(container.scrollLeft / window.innerWidth);
                if (newIndex !== activeIndex) {
                    setActiveIndex(newIndex);
                }
            }, 100);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef, activeIndex]);


    return (
        <div className="crt-screen">
            <Navigation onNavigate={scrollToSection} />
            <main
                ref={scrollContainerRef}
                className="w-full h-screen flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar"
            >
                <HeroSection id="home" />
                <AboutSection id="about" />
                <SkillsSection id="skills" />
                <ExperienceSection id="experience" />
                <PortfolioSection id="portfolio" />
                <ContactSection id="contact" />
            </main>
            <DotIndicator 
                sectionCount={SECTIONS.length} 
                activeIndex={activeIndex}
                onDotClick={scrollToSection} 
            />
        </div>
    );
};

export default App;