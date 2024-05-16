import React, { useState } from "react";
import "./fonts.style.css";

const SkillSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (title) => {
    const index = ["Front End", "Personal", "Back End", "Design"].indexOf(
      title
    );
    setActiveIndex(index);
  };

  return (
    <div className="container flex justify-evenly">
      <div className="side-menu flex flex-col justify-start gap-[20px]">
        {["Front End", "Personal", "Back End", "Design"].map((title, index) => (
          <h3
            key={index}
            className={`menu-item hover:cursor-pointer hover:scale-105 text-3xl font-poppins ${
              activeIndex === index
                ? "active text-cambridge text-4xl"
                : "text-white"
            }`}
            onClick={() => handleMenuItemClick(title)}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="grid-container">
        {["Front End", "Personal", "Back End", "Design"].map((title, index) => (
          <div
            key={index}
            className={`grid-item ${
              activeIndex === index ? "active" : "hidden"
            }`}
          >
            {activeIndex === index && (
              <>
                <h3 className={`text-2xl pb-6`}>{title}</h3>
                <div className="skillContainer flex flex-col justify-evenly">
                  {title === "Front End" && (
                    <>
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
                    </>
                  )}
                  {title === "Personal" && (
                    <>
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
                        <h4 className="font-bold">
                          Team & Strategy Leadership
                        </h4>
                        <p>React</p>
                        <br />
                      </div>
                      <div className="skill">
                        <h4 className="font-bold">plus</h4>
                        <p>npm, git, browser developer tools</p>
                        <br />
                      </div>
                    </>
                  )}
                  {title === "Back End" && (
                    <>
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
                    </>
                  )}
                  {title === "Design" && (
                    <>
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
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
