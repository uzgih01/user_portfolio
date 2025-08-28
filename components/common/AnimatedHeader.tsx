import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedHeaderProps {
    children: React.ReactNode;
}

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.5 });

    return (
        <h2 
            ref={ref}
            className={`text-7xl md:text-9xl text-crt-green text-center mb-12 transition-opacity duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
            {children}
        </h2>
    );
}