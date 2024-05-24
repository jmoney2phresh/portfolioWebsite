import React, { useRef } from "react";
import "./fonts.style.css";

const ProjectSection = () => {
  return (
    <div className="projects bg-gradient-to-t from-prussian to-transparent text-prussian relative z-0">
      <div className="gridContainer max-h-[100vh] grid grid-cols-2 grid-rows-2 gap-1 p-2 relative overflow-hidden">
        {/* Grid items */}
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://www.heartandseoulfoodco.com">
            <img
              className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              src="/assets/heartandseoul.png"
              alt="Image 1"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://glittering-tulumba-c76ddb.netlify.app/">
            <img
              className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              src="/assets/pantry.png"
              alt="Image 2"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer bg-[rgba(255,255,255,0.4)]">
          <a href="https://github.com/jmoney2phresh">
            <img
              className="w-full h-full object-contain hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              src="/assets/github.png"
              alt="Image 3"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://www.jacktakessnaps.com">
            <img
              className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              src="/assets/jacktakessnaps.png"
              alt="Image 4"
            />
          </a>
        </div>
        <div className="overlayText absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-24px font-bold text-center z-10 pointer-events-none">
          <div className="opaqueBox bg-[rgba(24,49,79,0.8)] p-8">
            <h3 className="text-3xl">Sample Projects</h3>
          </div>
        </div>
      </div>
      <div className="h-[200px] flex justify-center"></div>
    </div>
  );
};

export default ProjectSection;
