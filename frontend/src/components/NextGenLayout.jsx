import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Master Page Wrapper: Enforces structural integrity and hosts the Kinetic Anchor.
 */
export const NextGenLayout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Luxury Spring Physics Spec
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothY, [0, 1], [0, 360]);
  const scale = useTransform(smoothY, [0, 0.5, 1], [1, 1.4, 0.9]);
  const yPos = useTransform(smoothY, [0, 1], ["5vh", "75vh"]);
  const opacity = useTransform(smoothY, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  return (
    <div className="relative min-h-screen noise-overlay bg-obsidian overflow-hidden">
      {/* Structural Monolithic Grid */}
      <div className="fixed inset-0 monolithic-grid pointer-events-none z-0" />

      {/* THE KINETIC ANCHOR: Fluid Morphing Aura */}
      <motion.div
        style={{ y: yPos, rotate, scale, opacity }}
        className="fixed -right-32 w-[600px] h-[600px] bg-accent/20 blur-[140px] rounded-full animate-morph z-0 pointer-events-none mix-blend-screen hidden lg:block"
      />

      <motion.div
        style={{ y: yPos, x: "-20%", rotate: -rotate, scale: 0.8, opacity: opacity }}
        className="fixed -left-32 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full animate-morph z-0 pointer-events-none mix-blend-screen hidden lg:block"
      />

      {/* Content Enforcer */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-[1920px]">
          {children}
        </div>
      </main>

      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[1001] origin-left shadow-[0_0_15px_rgba(0,98,255,0.5)]"
      />
    </div>
  );
};


