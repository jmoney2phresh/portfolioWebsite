import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import MultiLayerParallax from "./parallaxScroll";
import ProjectSection from "./projects";
import SkillSection from "./skills";
import AboutJack from "./aboutJack";
import Experience from "./experience";
{
  /* import ContactForm from "./contactJack";*/
}
import "./style.css";
import "./fonts.style.css";

const HomePage = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="relative">
      {/* MultiLayerParallax component */}
      <div className="relative">
        <MultiLayerParallax />
        {/* Menu */}
        <div className="menu position-sticky position-[-webkit-sticky] bg-gradient-to-t from-[rgba(24,49,79,0.6)] to-transparent text-white flex flex-col items-center pt-20 pb-12 px-6 absolute bottom-0 left-0 w-full z-50 ">
          <h3 className="font-bold p-3">Jump to...</h3>
          <ul className="list-none flex flex-wrap justify-center gap-20">
            <li>
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                }
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  projectsRef.current.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                }
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  experienceRef.current.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                }
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  skillsRef.current.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                }
              >
                Skills
              </button>
            </li>

            <li>
              <button
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div ref={aboutRef} className="bg-white text-prussian">
        <AboutJack />
      </div>
      <div ref={experienceRef} className="bg-white text-prussian">
        <Experience />
      </div>
      <div ref={projectsRef} className="bg-prussian text-white">
        <ProjectSection />
      </div>
      {/* Other sections */}
      <div ref={skillsRef} className="bg-prussian text-white">
        <SkillSection />
      </div>

      <div ref={contactRef} className="bg-white text-prussian">
        Contact form placeholder
      </div>
    </div>
  );
};

export default HomePage;
