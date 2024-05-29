import React from "react";
import "./fonts.style.css";

const Experience = () => {
  return (
    <div className="experienceSection bg-gradient-to-t to-prussian from-transparent">
      <div className="header">
        <div className="opaqueBox text-white">
          <h2 className="text-3xl text-center p-8">Key Experience</h2>
        </div>
      </div>
      <div className="skillList gridContainer grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 relative px-20">
        <div className="grid-item relative flex flex-col justify-evenly items-end p-6 px-10 text-right text-white">
          <div className="imgContainer w-[150px] sm:w-[300px] h-[125px] sm:h-[250px] my-2 overflow-hidden flex flex-col justify-center hover:scale-105 hover:cursor-pointer">
            <a href="https://www.ucl.ac.uk">
              <img
                className="object-cover justify-self-center self-center "
                src="/assets/ucl.png"
                alt=""
              />
            </a>
          </div>
          <h3 className="font-bold text-xl">University College London</h3>
          <h5>MSci Biological Sciences</h5>
          <h5>2011-2015</h5>
        </div>
        <div className="grid-item relative flex flex-col justify-evenly items-start p-6 px-10 text-left text-white">
          <div className="imgContainer w-[150px] sm:w-[300px] h-[125px] sm:h-[250px] my-2 overflow-hidden flex flex-col justify-center hover:scale-105 hover:cursor-pointer">
            <a href="https://www.gov.uk/government/organisations/civil-service">
              <img
                className="object-cover justify-self-center self-center "
                src="/assets/civilService.png"
                alt=""
              />
            </a>
          </div>
          <h3 className="font-bold text-xl">UK Civil Service</h3>
          <h5>Various Roles</h5>
          <h5>2016-2022</h5>
        </div>
        <div className="grid-item relative flex flex-col justify-evenly items-end p-6 px-10 text-right text-prussian">
          <div className="imgContainer w-[150px] sm:w-[300px] h-[125px] sm:h-[250px] my-2 overflow-hidden flex flex-col justify-center hover:scale-105 hover:cursor-pointer">
            <a href="https://www.lionheart-education.com">
              <img
                className="object-contain justify-self-center self-center "
                src="/assets/lionheart.png"
                alt=""
              />
            </a>
          </div>
          <h3 className="font-bold text-xl">Lionheart Education</h3>
          <h5>Strategy Director</h5>
          <h5>2022-2023</h5>
        </div>
        <div className="grid-item relative flex flex-col justify-evenly items-start p-6 px-10 text-left text-prussian">
          <div className="imgContainer w-[150px] sm:w-[300px] h-[125px] sm:h-[250px] my-2 overflow-hidden flex flex-col justify-center hover:scale-105 hover:cursor-pointer">
            <a href="https://heartandseoulfoodco.com/">
              <img
                className="object-cover justify-self-center self-center "
                src="/assets/heartandseoullogo.webp"
                alt=""
              />
            </a>
          </div>
          <h3 className="font-bold text-xl">Heart & Seoul Food Co.</h3>
          <h5>Interim Head of Product</h5>
          <h5>2023-</h5>
        </div>
      </div>
      <div className="buffer min-h-[150px]"></div>
    </div>
  );
};

export default Experience;
