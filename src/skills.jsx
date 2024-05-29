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
    <div className="container flex flex-col justify-center items-center">
      <div className="headerContainer flex flex-col justify-center items-center text-center py-16">
        <h2 className="header text-3xl text-white text-center">Key Skills</h2>
        <span>
          Select skill groups from the navigation menu, <br />
          and mouseover for extra detail
        </span>
      </div>
      <div className="container flex flex-col sm:flex-row justify-evenly min-h-[700px]">
        <div className="side-menu flex flex-col justify-start pt-8 text-right gap-5 sm:gap-2">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <h3
                key={index}
                className={`menu-item hover:cursor-pointer hover:scale-105 text-2xl font-poppins ${
                  activeIndex === index
                    ? "active text-cambridge text-3xl font-bold"
                    : "text-white"
                }`}
                onClick={() => handleMenuItemClick(title)}
              >
                {title}
              </h3>
            )
          )}
        </div>
        <div className="skillArea flex flex-col sm:flex-row justify-center items-center sm:items-start">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <div
                key={index}
                className={`grid-item ${
                  activeIndex === index ? "block" : "hidden"
                } w-full sm:w-auto`}
              >
                {activeIndex === index && (
                  <div className="skillContainer grid grid-rows-2 grid-cols-2 gap-4">
                    {title === "Front End" && (
                      <>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "0")
                            }
                            src="./assets/html.png"
                            alt=""
                          />
                          <div className="skillText1 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Fluently written in vanilla and through REACT for
                              responsive client-side and server-side design
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "0")
                            }
                            src="./assets/css.png"
                            alt=""
                          />
                          <div className="skillText2 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>
                              Accessible and stylish CSS written through
                              Bootstrap, Tailwind and vanilla, with animation,
                              transition and advanced design features
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "0")
                            }
                            src="./assets/js.png"
                            alt=""
                          />
                          <div className="skillText3 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col justify-center items-center">
                          <h4 className="font-bold text-xl font-poppins text-center">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>npm</li>
                            <li>git & version control</li>
                            <li>browser developer tools</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {title === "Personal" && (
                      <>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "0")
                            }
                            src="./assets/html.png"
                            alt=""
                          />
                          <div className="skillText1 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "0")
                            }
                            src="./assets/css.png"
                            alt=""
                          />
                          <div className="skillText2 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>Bootstrap, Tailwind</p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "0")
                            }
                            src="./assets/js.png"
                            alt=""
                          />
                          <div className="skillText3 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>React</p>
                          </div>
                        </div>
                        <div className="skill flex flex-col justify-center items-center">
                          <h4 className="font-bold text-xl font-poppins text-left">
                            plus
                          </h4>
                          <ul className="text-left">
                            <li>npm</li>
                            <li>git</li>
                            <li>browser developer tools</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {title === "Back End" && (
                      <>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-3/4 h-3/4 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "0")
                            }
                            src="./assets/python.png"
                            alt=""
                          />
                          <div className="skillText1 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">python</h4>
                            <p>
                              4 years experience of python for bulk data
                              analysis and data science with UK Civil Service.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-3/4 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "0")
                            }
                            src="./assets/sql.png"
                            alt=""
                          />
                          <div className="skillText2 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">SQL</h4>
                            <p>
                              Six years experience of SQL for bulk data analysis
                              and data science with UK Civil Service.
                              Additionally, four years experience of database
                              management and data quality control.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <div className="skillText3 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>React</p>
                          </div>
                        </div>
                        <div className="skill flex flex-col justify-center items-center">
                          <h4 className="font-bold text-xl font-poppins text-left">
                            plus
                          </h4>
                          <ul className="text-left">
                            <li>npm</li>
                            <li>git</li>
                            <li>browser developer tools</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {title === "Design" && (
                      <>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText1"
                              ).style.opacity = "0")
                            }
                            src="./assets/html.png"
                            alt=""
                          />
                          <div className="skillText1 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText2"
                              ).style.opacity = "0")
                            }
                            src="./assets/css.png"
                            alt=""
                          />
                          <div className="skillText2 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>Bootstrap, Tailwind</p>
                          </div>
                        </div>
                        <div className="skill relative h-[150px] sm:h-[300px]">
                          <img
                            className="w-full h-full transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText3"
                              ).style.opacity = "0")
                            }
                            src="./assets/js.png"
                            alt=""
                          />
                          <div className="skillText3 w-[50%] h-[50%] absolute top-1/4 left-1/4 flex flex-col items-center justify-center text-white text-center opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>React</p>
                          </div>
                        </div>
                        <div className="skill flex flex-col justify-center items-center">
                          <h4 className="font-bold text-xl font-poppins text-left">
                            plus
                          </h4>
                          <ul className="text-left">
                            <li>npm</li>
                            <li>git</li>
                            <li>browser developer tools</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
