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
    <div
      className="container flex min-w-[100%] flex-col items-center justify-center bg-prussian px-4 text-white sm:px-0"
      aria-label="Key Skills"
    >
      <div className="headerContainer flex flex-col items-center justify-center py-16 text-center">
        <h2 className="header text-center text-3xl text-white">Key Skills</h2>
        <br />
        <span className="text-sm italic">
          Select skill groups from the navigation menu, <br />
          and mouseover for detail
        </span>
      </div>
      <div className="flex min-h-[700px] flex-col justify-evenly lg:flex-row lg:gap-[60px]">
        <div className="side-menu flex w-[180px] flex-wrap items-start justify-start gap-[20px] pt-8 text-left sm:flex-row sm:text-center md:flex-row md:justify-center md:text-center lg:flex-col lg:justify-start xl:flex-col xl:justify-start">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <h3
                key={index}
                className={`menu-item font-poppins text-left text-2xl hover:scale-105 hover:cursor-pointer ${
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
        <div className="skillArea mx-auto mt-8 w-full max-w-[900px] flex-grow md:mt-0">
          {["Front End", "Personal", "Back End", "Design"].map(
            (title, index) => (
              <div
                key={index}
                className={`grid-item ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {activeIndex === index && (
                  <div className="skillContainer font- grid grid-cols-1 gap-8 md:grid-cols-2">
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
                            alt="HTML5 logo"
                          />
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">HTML5</h4>
                            <br />
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
                            alt="CSS logo"
                          />
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">CSS</h4>
                            <br />
                            <p>
                              Accessible and stylish CSS (Bootstrap, Tailwind
                              and vanilla) with animation, transition and
                              advanced design features
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
                            alt="Javascript logo"
                          />
                          <div className="skillText3 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">Javascript</h4>
                            <br />
                            <p>
                              Confident and responsive vanilla, typeScript and
                              ReactJS written for webpages and webapps
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +<br />
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
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            Project
                            <br /> Management
                          </p>
                          <div className="skillText1 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Strong track-record coordinating large teams and
                              budgets with a focus on Lean methodology and
                              creative, collaborative delivery.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            Stakeholder <br /> Engagement
                          </p>
                          <br />
                          <div className="skillText2 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Excelled in roles focused on earning and
                              maintaining customer and investor confidence.
                              Strong experience of user testing, reporting and
                              relationship management.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            Communication
                          </p>
                          <div className="skillText3 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Confident and natural communicator with a
                              particular skill for engaging across technical
                              boundaries and regardless of pre-existing
                              knowledge.
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>team leadership</li>
                            <li>time managment</li>
                            <li>development & wellbeing</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                    {title === "Back End" && (
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
                            src="./assets/python.png"
                            alt="python logo"
                          />
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">python</h4>
                            <br />
                            <p>
                              Significant experience and training in Python for
                              bulk data analysis and data science. Strong
                              knowledge of key libraries (NumPy, Plotly,
                              Pandas).
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
                            src="./assets/sql.png"
                            alt="sql logo"
                          />
                          <div className="skillText2 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">
                              SQL & Data Engineering
                            </h4>
                            <br />
                            <p>
                              Great track record of designing and developing
                              pipelines for data analysis and data engineering.
                              Primarily grounded in SAS and Oracle, with
                              additional experience in MongoDB.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            APIs
                          </p>
                          <div className="skillText3 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Building key skills in API integration and
                              queries. Experience with RESTful APIs.
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>AWS cloud practitioner (pending)</li>
                            <li>Database management & data structures</li>
                          </ul>
                          <br />
                        </div>
                      </>
                    )}
                    {title === "Design" && (
                      <>
                        <div className="skill relative flex h-[300px] items-center justify-center">
                          <img
                            className="z-20 h-[80%] w-[80%] object-contain opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                            src="./assets/adobe.png"
                            alt="adobe logo"
                          />
                          <div className="skillText1 pointer-events-none absolute left-1/4 top-1/4 z-10 flex h-[50%] w-[50%] flex-col items-center justify-center text-center text-white opacity-0">
                            <h4 className="font-bold">
                              Image design <br /> & editing
                            </h4>
                            <p>
                              High-proficiency in Adobe suite, Figma, Canva and
                              image generation AI. Able to create or manipulate
                              engaging, performant images to brief.
                            </p>
                          </div>
                        </div>

                        <div className="skill relative h-[300px]">
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            Responsive Design
                          </p>
                          <div className="skillText2 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Confident in integrating media queries through
                              external CSS and Tailwind. Strong understanding of
                              mobile-first design and composition.
                            </p>
                          </div>
                        </div>
                        <div className="skill relative h-[300px]">
                          <p
                            className="z-20 h-full w-full min-w-[250px] self-center object-contain pt-[30%] text-center text-2xl opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-10"
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
                          >
                            Accessible Design
                          </p>
                          <div className="skillText3 pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">
                            <p className="w-3/4">
                              Conscientious and considered approach to seamless
                              integration of accessible design. Confident user
                              of web accessibility check tools as well as
                              effective use of contrast, content, typeface and
                              screenreader data.
                            </p>
                          </div>
                        </div>
                        <div className="skill flex flex-col items-center justify-center">
                          <h4 className="font-poppins text-center text-xl font-bold">
                            plus <br /> +
                          </h4>
                          <ul className="text-center">
                            <li>composition & color theory</li>
                            <li>UX best-practice principles</li>
                            <li>SEO & content design</li>
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
