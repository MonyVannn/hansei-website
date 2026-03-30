"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Si3M,
  SiAbstract,
  SiAirtable,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiNike,
} from "react-icons/si";
import type { IconType } from "react-icons";

export default function ScrollingLogos() {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
    </div>
  );
}

function TranslateWrapper({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: prefersReducedMotion ? "0%" : "-100%" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 50, repeat: Infinity, ease: "linear" }
      }
      className="flex shrink-0 items-center gap-6 px-3"
    >
      {children}
    </motion.div>
  );
}

function LogoItem({ Icon, label }: { Icon: IconType; label: string }) {
  return (
    <span
      aria-label={label}
      className="flex h-12 w-20 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-600 md:h-14 md:w-24"
    >
      <Icon className="text-2xl md:text-3xl" />
    </span>
  );
}

function LogoItems() {
  return (
    <>
      <LogoItem Icon={SiNike} label="Nike" />
      <LogoItem Icon={Si3M} label="3M" />
      <LogoItem Icon={SiAbstract} label="Abstract" />
      <LogoItem Icon={SiAirtable} label="Airtable" />
      <LogoItem Icon={SiBox} label="Box" />
      <LogoItem Icon={SiBytedance} label="Bytedance" />
      <LogoItem Icon={SiChase} label="Chase" />
      <LogoItem Icon={SiCloudbees} label="Cloudbees" />
    </>
  );
}
