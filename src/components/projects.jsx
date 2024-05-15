import React, { useRef } from "react";
import "./style.css";

const ProjectSection = () => {
  return (
    <div className="projects bg-white text-prussian relative z-0">
      <div className="gridContainer grid grid-cols-2 grid-rows-2 gap-1 p-2 bg-prussian relative">
        {/* Grid items */}
        <div className="grid-item relative hover:cursor-pointer">
          <a href="https://www.heartandseoulfoodco.com">
            <img
              className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
              src="../public/assets/heartandseoul.png"
              alt="Image 1"
            />
          </a>
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <img
            className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
            src="../public/assets/pantry.png"
            alt="Image 2"
          />
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <img
            className="w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-300"
            src="../public/assets/placeholderImage.png"
            alt="Image 3"
          />
        </div>
        <div className="grid-item relative hover:cursor-pointer">
          <img
            className="w-full h-full object-cover hover:scale-105 hover:cursor-pointertransition-transform duration-300"
            src="../public/assets/placeholderImage.png"
            alt="Image 4"
          />
        </div>
        {/* Overlay text */}
        <div className="overlayText absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-24px font-bold text-center z-10 pointer-events-none">
          <div className="opaqueBox bg-[rgba(24,49,79,0.8)] p-8">
            <h3 className="text-3xl">Sample Projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
