"use client";

import { FadeProps } from "@/types";
import { motion, useReducedMotion } from "framer-motion";



export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: FadeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
            }
      }
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}