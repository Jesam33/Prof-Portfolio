"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHeading() {
  const [index, setIndex] = useState(0);
  const words = ["Software engineer", "Frontend Developer", "Backend Developer", "Android Developer", "Devops"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
          <span className="relative inline-flex h-[60px] w-[380px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full text-center"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    , technical writer & open-source maintainer
    </h1>
    // <h1 className="text-center text-5xl font-bold flex items-center justify-center gap-2">
    //   <span className="relative inline-block h-[60px] w-[180px] overflow-hidden">
    //     <AnimatePresence mode="wait">
    //       <motion.span
    //         key={words[index]}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -20 }}
    //         transition={{ duration: 0.5, ease: "easeInOut" }}
    //         className="absolute w-full text-center"
    //       >
    //         {words[index]}
    //       </motion.span>
    //     </AnimatePresence>
    //   </span>
    //   with Brandisa
    // </h1>
  );
}
