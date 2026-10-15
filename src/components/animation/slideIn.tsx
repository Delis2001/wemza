"use client";

import { SlideInProps } from "@/types";
import { motion, useReducedMotion } from "framer-motion";


export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.65,
  className,
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = direction === "left" ? -28 : 28;

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: offset,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}