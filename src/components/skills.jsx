import React from "react";
import "./style.css";

const SkillSection = () => {
  return (
    <div className="skillSection p-4">
      <div className="header">
        <div className="opaqueBox">
          <h2 className="text-3xl text-center p-8">Key Skills</h2>
        </div>
      </div>
      <div className="skillList gridContainer grid grid-cols-2 grid-rows-2 bg-prussian relative">
        <div className="frontEnd grid-item relative flex flex-col justify-evenly p-6 px-10 text-right border border-r-1 border-t-0 border-l-0 border-b-1 border-white">
          <h3 className="absolute text-3xl left-6 top-1/2 transform -translate-y-1/2 text-center">
            Front End
          </h3>
          <div className="skill">
            <h4 className="font-bold">HTML5</h4>
            <p></p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">CSS</h4>
            <p>Bootstrap, Tailwind</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Javascript</h4>
            <p>React</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">plus</h4>
            <p>npm, git, browser developer tools</p>
            <br />
          </div>
        </div>
        <div className="personal grid-item relative flex flex-col justify-evenly p-6 px-10 text-left border border-r-0 border-t-0 border-l-1 border-b-1 border-white">
          <h3 className="absolute text-3xl right-6 top-1/2 transform -translate-y-1/2 text-center">
            Personal
          </h3>
          <div className="skill">
            <h4 className="font-bold">Requirement Capture</h4>
            <p></p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Project Management</h4>
            <p>Bootstrap, Tailwind</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Team & Strategy Leadership</h4>
            <p>React</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">plus</h4>
            <p>npm, git, browser developer tools</p>
            <br />
          </div>
        </div>
        <div className="backEnd grid-item relative flex flex-col justify-evenly p-6 px-10 text-right border border-r-1 border-t-1 border-l-0 border-b-0 border-white">
          <h3 className="absolute text-3xl left-6 top-1/2 transform -translate-y-1/2 text-center">
            Back End
          </h3>
          <div className="skill">
            <h4 className="font-bold">Analysis & Query Design</h4>
            <p></p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Database Management</h4>
            <p>Bootstrap, Tailwind</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">API</h4>
            <p>React</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">plus</h4>
            <p>npm, git, browser developer tools</p>
            <br />
          </div>
        </div>
        <div className="design grid-item relative flex flex-col justify-evenly p-6 px-10 text-left border border-r-0 border-t-1 border-l-1 border-b-0 border-white">
          <h3 className="absolute text-3xl right-6 top-1/2 transform -translate-y-1/2 text-center">
            Design
          </h3>
          <div className="skill">
            <h4 className="font-bold">Image editing & design</h4>
            <p></p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Responsive design</h4>
            <p>Bootstrap, Tailwind</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">Accessible design</h4>
            <p>React</p>
            <br />
          </div>
          <div className="skill">
            <h4 className="font-bold">plus</h4>
            <p>npm, git, browser developer tools</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
