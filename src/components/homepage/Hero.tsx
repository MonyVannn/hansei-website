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
        className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] text-lime-300 blur-[120px] -z-2 xl:h-[640px] xl:w-[640px] xl:blur-[140px]"
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
        className="pointer-events-none absolute -left-28 bottom-2 h-[360px] w-[360px] text-lime-300 blur-[90px] -z-2 xl:h-[460px] xl:w-[460px] xl:blur-[100px]"
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
        className="absolute left-2 top-1/2 z-10 hidden h-[280px] w-[190px] -translate-y-1/2 overflow-hidden md:block lg:left-14 lg:h-[330px] lg:w-[220px] xl:left-28 xl:h-[380px] xl:w-[255px] 2xl:left-52 2xl:h-[420px] 2xl:w-[280px]"
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
        className="absolute right-3 top-14 z-10 h-[200px] w-[140px] overflow-hidden sm:h-[240px] sm:w-[170px] md:right-8 md:top-16 md:h-[280px] md:w-[200px] lg:right-16 lg:h-[320px] lg:w-[230px] xl:right-28 xl:h-[360px] xl:w-[250px] 2xl:right-40 2xl:h-[420px] 2xl:w-[300px]"
        {...reveal(0.1)}
      >
        <Image
          src={heroImages.topRight}
          alt=""
          fill
          sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, (max-width: 1280px) 230px, (max-width: 1536px) 250px, 300px"
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-8 right-4 z-10 h-[160px] w-[240px] overflow-hidden sm:h-[190px] sm:w-[290px] md:bottom-10 md:right-8 md:h-[220px] md:w-[340px] lg:bottom-16 lg:right-16 lg:h-[250px] lg:w-[390px] xl:bottom-24 xl:right-40 xl:h-[280px] xl:w-[430px] 2xl:bottom-36 2xl:right-72 2xl:h-[320px] 2xl:w-[500px]"
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
          <div className="relative z-30 text-center">
            <h1 className="text-[clamp(3rem,7.2vw,6.5rem)] uppercase leading-[0.9] tracking-tight text-foreground">
              For The
              <div className="mt-4 md:mt-5">
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
