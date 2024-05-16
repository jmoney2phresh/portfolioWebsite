import React from "react";
import "./fonts.style.css";

const SkillSection = () => {
  return (
    <div className="skillSection px-4 pb-12">
      <div className="skillList gridContainer grid grid-cols-2 grid-rows-2 bg-prussian relative px-8">
        <div className="frontEnd grid-item relative flex items-center justify-end gap-[20%] p-6 px-10 text-right border border-r-1 border-t-0 border-l-0 border-b-1 border-[rgba(24, 49, 79, 0.6)]">
          <h3 className="text-3xl text-right">Front End</h3>
          <div className="skillContainer flex flex-col justify-evenly">
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
        </div>
        <div className="personal grid-item relative flex flex-row-reverse items-center justify-end gap-[20%] p-6 px-10 text-left border border-r-0 border-t-0 border-l-1 border-b-1 border-[rgba(24, 49, 79, 0.6)]">
          <h3 className="text-3xl text-center">Personal</h3>
          <div className="skillContainer flex flex-col justify-evenly">
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
        </div>
        <div className="backEnd grid-item relative flex fflex items-center justify-end gap-[20%] p-6 px-10 text-right border border-r-1 border-t-1 border-l-0 border-b-0 border-[rgba(24, 49, 79, 0.6)]">
          <h3 className="text-3xl text-center">Back End</h3>
          <div className="skillContainer flex flex-col justify-evenly">
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
        </div>
        <div className="design grid-item relative flex flex-row-reverse items-center justify-end gap-[20%] p-6 px-10 text-left border border-r-0 border-t-1 border-l-1 border-b-0 border-[rgba(24, 49, 79, 0.6)]">
          <h3 className="text-3xl text-center">Design</h3>
          <div className="skillContainer flex flex-col justify-evenly">
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
    </div>
  );
};

export default SkillSection;
