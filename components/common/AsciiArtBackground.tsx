import React, { useState, useEffect } from 'react';

interface AsciiArtBackgroundProps {
  frames: string[];
  animationSpeed?: number;
}

export const AsciiArtBackground: React.FC<AsciiArtBackgroundProps> = ({ frames, animationSpeed = 250 }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (frames.length <= 1) return;

    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [frames, animationSpeed]);

  return (
    <pre className="absolute inset-0 flex justify-center items-center text-crt-green/10 text-xl md:text-3xl font-mono select-none z-[-1] overflow-hidden whitespace-pre-wrap text-center">
      {frames[frameIndex]}
    </pre>
  );
};
