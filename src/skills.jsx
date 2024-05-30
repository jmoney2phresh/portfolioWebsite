import React, { useState } from "react";
import "./fonts.style.css";

const SkillSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (title) => {
    const index = ["Front End", "Personal", "Back End", "Design"].indexOf(
      title,
    );
    setActiveIndex(index);
  };

  return (
    <div className="container flex min-w-[100%] flex-col items-center justify-center bg-prussian px-4 text-white sm:px-0">
      <div className="headerContainer flex flex-col items-center justify-center py-16 text-center">
        <h2 className="header text-center text-3xl text-white">Key Skills</h2>
        <span>
          Select skill groups from the navigation menu, <br />
          and mouseover for extra detail
        </span>
      </div>
      <div className="flex min-h-[700px] flex-col justify-evenly lg:flex-row">
        <div className="side-menu flex flex-wrap items-start justify-start gap-[20px] pt-8 text-left sm:flex-row sm:text-center md:flex-row md:justify-center md:text-center lg:flex-col lg:justify-start xl:flex-col xl:justify-start">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <h3
                key={index}
                className={`menu-item font-poppins text-2xl hover:scale-105 hover:cursor-pointer ${
                  activeIndex === index
                    ? "active text-3xl font-bold text-cambridge"
                    : "text-white"
                }`}
                onClick={() => handleMenuItemClick(title)}
              >
                {title}
              </h3>
            ),
          )}
        </div>
        <div className="skillArea mt-8 flex-grow md:mt-0">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <div
                key={index}
                className={`grid-item ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {activeIndex === index && (
                  <div className="skillContainer grid grid-cols-1 gap-8 md:grid-cols-2">
                    {title === "Front End" && (
                      <>
                        <div className="skill relative h-[300px]">
                          <img
                            className="z-20 h-full w-full object-contain opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText1",
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText1",
                              ).style.opacity = "0")
                            }
                            src="./assets/html.png"
                            alt=""
                          />
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Fluently written in vanilla and through REACT for
                              responsive client-side and server-side design
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <img
                            className="z-20 h-full w-full object-contain opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText2",
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText2",
                              ).style.opacity = "0")
                            }
                            src="./assets/css.png"
                            alt=""
                          />
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>
                              Accessible and stylish CSS written through
                              Bootstrap, Tailwind and vanilla, with animation,
                              transition and advanced design features
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <img
                            className="z-20 h-full w-full object-contain opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
                            onMouseOver={() =>
                              (document.querySelector(
                                ".skillText3",
                              ).style.opacity = "1")
                            }
                            onMouseOut={() =>
                              (document.querySelector(
                                ".skillText3",
                              ).style.opacity = "0")
                            }
                            src="./assets/js.png"
                            alt=""
                          />
                          <div className="skillText3 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>npm</li>
                            <li>git & version control</li>
                            <li>browser developer tools</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                    {title === "Personal" && (
                      <>
                        <div className="skill relative h-[300px]">
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Fluently written in vanilla and through REACT for
                              responsive client-side and server-side design
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>
                              Accessible and stylish CSS written through
                              Bootstrap, Tailwind and vanilla, with animation,
                              transition and advanced design features
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText3 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>npm</li>
                            <li>git & version control</li>
                            <li>browser developer tools</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                    {title === "Back End" && (
                      <>
                        <div className="skill relative h-[300px]">
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Fluently written in vanilla and through REACT for
                              responsive client-side and server-side design
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>
                              Accessible and stylish CSS written through
                              Bootstrap, Tailwind and vanilla, with animation,
                              transition and advanced design features
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText3 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>npm</li>
                            <li>git & version control</li>
                            <li>browser developer tools</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                    {title === "Design" && (
                      <>
                        <div className="skill relative h-[300px]">
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <p>
                              Fluently written in vanilla and through REACT for
                              responsive client-side and server-side design
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <p>
                              Accessible and stylish CSS written through
                              Bootstrap, Tailwind and vanilla, with animation,
                              transition and advanced design features
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <div className="skillText3 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>npm</li>
                            <li>git & version control</li>
                            <li>browser developer tools</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
