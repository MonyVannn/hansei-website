"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px 0px -48px 0px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.65,
        ease,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
