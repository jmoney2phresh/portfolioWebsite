import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./style.css";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="place-items-top relative grid h-screen w-full overflow-hidden"
    >
      <motion.div style={{ y: textY }} className="z-10 ml-20">
        <h1 className="relative pb-5 pt-20 text-5xl font-bold text-white md:text-7xl">
          Jack Symonds
        </h1>
        <h3 className="relative text-3xl font-bold text-white md:text-5xl">
          Front-end Developer
        </h3>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/assets/nyFull.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
        role="img"
        aria-label="New York Skyline background"
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/assets/nySkyline.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        role="img"
        aria-label="New York Skyline background"
      ></motion.div>
    </div>
  );
}
