
import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = <T extends HTMLElement,>(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};
