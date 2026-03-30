"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export function CountUpStats() {
  return (
    <section
      aria-labelledby="count-up-stats-title"
      className="bg-background py-14 md:py-32"
    >
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <h2
            id="count-up-stats-title"
            className="mb-8 text-center text-2xl leading-snug tracking-tight text-foreground md:mb-16 md:text-3xl"
          >
            Turn attention into growth with social momentum, sharper identity,
            and sites built to convert.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-center justify-center sm:flex-row">
          <Stat
            num={45}
            suffix="%"
            subheading="Average lift in conversion velocity."
          />
          <div className="h-px w-12 bg-zinc-200 sm:h-12 sm:w-px" />
          <Stat
            num={15.5}
            decimals={1}
            suffix="K+"
            subheading="Active community members propelled."
          />
          <div className="h-px w-12 bg-zinc-200 sm:h-12 sm:w-px" />
          <Stat
            num={20}
            suffix="M+"
            subheading="Total brand impressions in orbit."
          />
        </div>
        </Reveal>
      </div>
    </section>
  );
}

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

function Stat({ num, suffix, decimals = 0, subheading }: StatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-zinc-500">{subheading}</p>
    </div>
  );
}
