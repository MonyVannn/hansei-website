"use client";

import { motion } from "framer-motion";

const SpinningBoxText = () => {
  return (
    <span className="flex flex-col items-center justify-center gap-4 text-[clamp(2.4rem,6.2vw,4.75rem)] text-background md:flex-row md:gap-3">
      <Box front="Impact" bottom="Growth" back="Future" top="Business" />
    </span>
  );
};

interface BoxProps {
  front: string;
  bottom: string;
  back: string;
  top: string;
}

const Box = ({ front, bottom, back, top }: BoxProps) => {
  const boxHeightRem = 7; // h-28 => 7rem
  const halfDepthPx = (boxHeightRem * 16) / 2;
  const faceOffset = `${boxHeightRem}rem`;

  return (
    <motion.span
      className="relative h-28 w-[min(84vw,22rem)] font-semibold uppercase sm:w-[min(80vw,26rem)] md:w-[min(66vw,30rem)] xl:w-[min(56vw,34rem)]"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: `center center -${halfDepthPx}px`,
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-center border-2 border-lime-400 bg-lime-300 text-background">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: `translateY(${faceOffset}) rotateX(-90deg)` }}
        className="absolute flex h-full w-full origin-top items-center justify-center border-2 border-lime-400 bg-lime-300 text-background"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: `translateY(-${faceOffset}) rotateX(90deg)` }}
        className="absolute flex h-full w-full origin-bottom items-center justify-center border-2 border-lime-400 bg-lime-300 text-background"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: `translateZ(-${faceOffset}) rotateZ(-180deg) rotateY(180deg)`,
        }}
        className="absolute flex h-full w-full origin-center items-center justify-center border-2 border-lime-400 bg-lime-300 text-background"
      >
        {back}
      </span>
    </motion.span>
  );
};

export default SpinningBoxText;
