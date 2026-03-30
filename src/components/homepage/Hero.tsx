"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SpinningBoxText from "./SpinningBoxText";

const heroImages = {
  topRight:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  middleLeft:
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
  bottomRight:
    "https://images.unsplash.com/photo-1675252369719-dd52bc69c3df?auto=format&fit=crop&w=1100&q=80",
};

const revealEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay: number) =>
    ({
      initial: prefersReducedMotion
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 48 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: prefersReducedMotion ? 0 : 0.65,
        ease: revealEase,
        delay: prefersReducedMotion ? 0 : delay,
      },
    }) as const;

  return (
    <section className="relative isolate min-h-screen overflow-x-clip overflow-y-visible bg-background py-16 md:py-20">
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-44 -top-36 h-[640px] w-[640px] text-lime-300 blur-[140px] -z-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 871.151 772.328"
      >
        <path
          d="M798.983,206.928c45.163,149.828-53.049,335.5-194.991,431.561S276.378,741.72,136.587,649.243C-2.488,556.049-96.4,363.925-48.368,210.513-1.054,57.1,188.2-57.6,376.742-57.6S753.82,57.1,798.983,206.928Z"
          transform="translate(61.072 57.6)"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-2 h-[460px] w-[460px] text-lime-300 blur-[100px] -z-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 871.151 772.328"
      >
        <path
          d="M798.983,206.928c45.163,149.828-53.049,335.5-194.991,431.561S276.378,741.72,136.587,649.243C-2.488,556.049-96.4,363.925-48.368,210.513-1.054,57.1,188.2-57.6,376.742-57.6S753.82,57.1,798.983,206.928Z"
          transform="translate(61.072 57.6)"
          fill="currentColor"
        />
      </svg>
      <motion.div
        aria-hidden
        className="absolute left-2 top-1/2 z-10 hidden h-[330px] w-[230px] -translate-y-1/2 overflow-hidden md:block lg:left-52 lg:h-[420px] lg:w-[280px]"
        {...reveal(0)}
      >
        <video
          src="/placeholder-video1.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute right-4 top-20 z-10 h-[240px] w-[170px] overflow-hidden sm:h-[300px] sm:w-[210px] md:right-10 md:h-[360px] md:w-[250px] lg:right-84 lg:h-[420px] lg:w-[300px]"
        {...reveal(0.1)}
      >
        <Image
          src={heroImages.topRight}
          alt=""
          fill
          sizes="(max-width: 640px) 170px, (max-width: 1024px) 250px, 300px"
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-8 right-4 z-10 h-[190px] w-[290px] overflow-hidden sm:h-[230px] sm:w-[350px] md:bottom-12 md:right-10 md:h-[280px] md:w-[430px] lg:bottom-72 lg:right-144 lg:h-[320px] lg:w-[500px]"
        {...reveal(0.2)}
      >
        <video
          src="/placeholder-video2.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      <div className="container relative min-h-screen">
        <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
          <div className="text-center">
            <h1 className="text-[3.2rem] uppercase leading-[0.88] tracking-tight text-foreground sm:text-[4.2rem] md:text-[5.7rem] lg:text-[10rem]">
              For The
              <div className="mt-6">
                <SpinningBoxText />
              </div>
            </h1>
            <button
              type="button"
              className="cursor-pointer mt-10 rounded-full border border-foreground px-6 py-2 font-medium uppercase tracking-[0.18em] text-foreground transition hover:border-zinc-900 hover:text-zinc-950"
            >
              Explore our services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
