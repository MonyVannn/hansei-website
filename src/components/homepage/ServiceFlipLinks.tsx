"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const MotionLink = motion.create(Link);

const services = [
  { label: "Social Media", href: "/services/social-media" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Website", href: "/services/website" },
];

type FlipLinkProps = {
  children: string;
  href: string;
};

export function ServiceFlipLinks() {
  return (
    <div className="flex flex-col items-start gap-2 md:gap-3">
      {services.map((service) => (
        <FlipLink key={service.href} href={service.href}>
          {service.label}
        </FlipLink>
      ))}
    </div>
  );
}

function FlipLink({ children, href }: FlipLinkProps) {
  return (
    <MotionLink
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-light tracking-tight text-foreground md:text-6xl"
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </MotionLink>
  );
}
