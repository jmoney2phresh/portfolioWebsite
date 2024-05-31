import React from "react";
import "./fonts.style.css";

const Experience = () => {
  return (
    <div className="experienceSection bg-gradient-to-t from-transparent to-prussian">
      <div className="header">
        <div className="opaqueBox text-white">
          <h2 className="p-8 text-center text-3xl">Key Experience</h2>
        </div>
      </div>
      <div className="skillList gridContainer relative grid grid-cols-2 grid-rows-2 px-20">
        <div className="grid-item border-r-1 border-b-1 border-[rgba(24, 49, 79, 0.6)] relative flex flex-col items-end justify-evenly border border-l-0 border-t-0 p-6 px-10 text-right text-white">
          <div className="imgContainer my-2 flex h-[250px] max-w-[300px] flex-col justify-center overflow-hidden hover:scale-105 hover:cursor-pointer">
            <a href="https://www.ucl.ac.uk">
              <img
                className="self-center justify-self-center object-cover"
                src="/assets/ucl.png"
                alt="University College London Logo"
              />
            </a>
          </div>
          <h3 className="text-xl font-bold">University College London</h3>
          <h5>MSci Biological Sciences</h5>
          <h5>2011-2015</h5>
        </div>
        <div className="grid-item border-l-1 border-b-1 border-[rgba(24, 49, 79, 0.6)] relative flex flex-col items-start justify-evenly border border-r-0 border-t-0 p-6 px-10 text-left text-white">
          <div className="imgContainer my-2 flex h-[250px] max-w-[300px] flex-col justify-center overflow-hidden hover:scale-105 hover:cursor-pointer">
            <a href="https://www.gov.uk/government/organisations/civil-service">
              <img
                className="self-center justify-self-center object-cover"
                src="/assets/civilService.png"
                alt="UK Civil Service logo"
              />
            </a>
          </div>
          <h3 className="text-xl font-bold">UK Civil Service</h3>
          <h5>Various Roles</h5>
          <h5>2016-2022</h5>
        </div>
        <div className="grid-item border-r-1 border-t-1 border-[rgba(24, 49, 79, 0.6)] relative flex flex-col items-end justify-evenly border border-b-0 border-l-0 p-6 px-10 text-right text-prussian">
          <div className="imgContainer my-2 flex h-[250px] max-w-[300px] flex-col justify-center overflow-hidden hover:scale-105 hover:cursor-pointer">
            <a href="https://www.lionheart-education.com">
              <img
                className="self-center justify-self-center object-contain"
                src="/assets/lionheart.png"
                alt="Lionheart Education logo"
              />
            </a>
          </div>
          <h3 className="text-xl font-bold">Lionheart Education</h3>
          <h5>Strategy Director</h5>
          <h5>2022-2023</h5>
        </div>
        <div className="grid-item border-t-1 border-l-1 border-[rgba(24, 49, 79, 0.6)] relative flex flex-col items-start justify-evenly border border-b-0 border-r-0 p-6 px-10 text-left text-prussian">
          <div className="imgContainer my-2 flex max-h-[250px] max-w-[300px] flex-col justify-center overflow-hidden hover:scale-105 hover:cursor-pointer">
            <a href="https://heartandseoulfoodco.com/">
              <img
                className="self-center justify-self-center object-cover"
                src="/assets/heartandseoullogo.webp"
                alt="Heart and Seoul Food Co. sample image"
              />
            </a>
          </div>
          <h3 className="text-xl font-bold">Heart & Seoul Food Co.</h3>
          <h5>Interim Head of Product</h5>
          <h5>2023-</h5>
        </div>
      </div>
      <div className="buffer min-h-[150px]"></div>
    </div>
  );
};

export default Experience;
