import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import MultiLayerParallax from "./parallaxScroll";
import ProjectSection from "./projects";
import SkillSection from "./skills";
import AboutJack from "./aboutJack";
import Experience from "./experience";
import ContactForm from "./contactJack";
import Footer from "./footer.jsx";
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
        <div className="menu position-sticky position-[-webkit-sticky] absolute bottom-0 left-0 z-50 flex w-full flex-col items-center bg-gradient-to-t from-[rgba(24,49,79,0.6)] to-transparent px-6 pb-12 pt-20 text-white">
          <h3 className="p-3 font-bold">Jump to...</h3>
          <ul className="flex list-none flex-wrap justify-center gap-20">
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
      <div ref={projectsRef} className="">
        <ProjectSection />
      </div>
      {/* Other sections */}
      <div ref={skillsRef}>
        <SkillSection />
      </div>
      <div ref={contactRef} className="bg-white text-prussian">
        <ContactForm />
      </div>
      <div className="bg-white text-prussian">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
