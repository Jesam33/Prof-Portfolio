"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export const Slide = ({ children, className, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("stop");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, translateY: 10 },
        stop: { opacity: 1, translateY: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: delay,
        stiffness: 0.5,
      }}
      animate={controls}
      initial="start"
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
};
