import React from 'react';

interface DotIndicatorProps {
  sectionCount: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export const DotIndicator: React.FC<DotIndicatorProps> = ({ sectionCount, activeIndex, onDotClick }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4">
      {Array.from({ length: sectionCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 border border-crt-green transition-all duration-200 ${
            activeIndex === index ? 'bg-crt-green' : 'bg-transparent hover:bg-crt-green/50'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};