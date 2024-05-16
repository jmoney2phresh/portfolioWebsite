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
      className="w-full h-screen overflow-hidden relative grid place-items-top"
    >
      <motion.div style={{ y: textY }} className="z-10 ml-20">
        <h1 className="font-bold text-white text-5xl md:text-7xl relative pt-20 pb-5">
          Jack Symonds
        </h1>
        <h3 className="font-bold text-white text-3xl md:text-5xl relative">
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
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/assets/nySkyline.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
}