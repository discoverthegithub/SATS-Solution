import { useEffect } from 'react';

/**
 * Custom hook to trigger reveal animations using Intersection Observer.
 * Automatically adds the 'in' class to elements with the 'reveal' class when they enter the viewport.
 */
export const useReveal = (dependency = []) => {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));

    return () => {
      items.forEach((el) => observer.unobserve(el));
    };
  }, dependency);
};
