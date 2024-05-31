import React from "react";
import "./fonts.style.css";

const ProjectSection = () => {
  return (
    <div
      className="projects relative z-0 bg-gradient-to-t from-prussian to-transparent text-prussian"
      aria-label="Sample projects"
    >
      <div className="gridContainer relative grid max-h-[100vh] grid-cols-1 grid-rows-4 gap-1 overflow-hidden p-2 sm:grid-cols-2 sm:grid-rows-2">
        {/* Grid items */}
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://www.heartandseoulfoodco.com">
            <img
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              src="/assets/heartandseoul.png"
              alt="link to heart and seoul food co. website"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://glittering-tulumba-c76ddb.netlify.app/">
            <img
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              src="/assets/pantry.png"
              alt="link to pantry website"
            />
          </a>
        </div>
        <div className="grid-item relative bg-[rgba(255,255,255,0.4)] hover:cursor-pointer">
          <a href="https://github.com/jmoney2phresh">
            <img
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              src="/assets/github.png"
              alt="link to github portfolio"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://www.jacktakessnaps.com">
            <img
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              src="/assets/jacktakessnaps.png"
              alt="link to jacktakessnaps photography website"
            />
          </a>
        </div>
        <div className="overlayText font-24px pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center text-center font-bold text-white">
          <div className="opaqueBox bg-[rgba(24,49,79,0.8)] p-8">
            <h3 className="text-3xl">Sample Projects</h3>
          </div>
        </div>
      </div>
      <div className="flex h-[200px] justify-center md:hidden"></div>
    </div>
  );
};

export default ProjectSection;
