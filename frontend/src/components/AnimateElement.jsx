import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Motion Wrapper: Adds inertial physics to elements with strict visibility triggers.
 */
export const AnimateElement = ({ children, type = "fade", delay = 0, className = "" }) => {
  const ref = useRef(null);
  // Safer margin for mobile/laptop triggers
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const springSpec = {
    type: "spring",
    mass: 0.4,
    stiffness: 90,
    damping: 20
  };

  const variants = {
    fade: {
      hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" }
    },
    slice: {
      hidden: { opacity: 0, x: -40, clipPath: "inset(0 100% 0 0)" },
      visible: { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.98, filter: "blur(5px)" },
      visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[type]}
      transition={{ ...springSpec, delay }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};


