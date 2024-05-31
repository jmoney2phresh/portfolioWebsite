import React from "react";
import "./fonts.style.css";

const AboutJack = () => {
  return (
    <div
      className="aboutSection flex items-center justify-center bg-prussian text-center text-white"
      aria-label="About Jack"
    >
      <div className="aboutContent w-50 flex flex-col items-center pb-12 pl-4">
        <h3 className="py-4 text-3xl">About Me</h3>
        <hr className="h-0.5 w-[50%] bg-white" />
        <p className="max-w-[800px] pt-4">
          After eight years of incredible experiences as a data specialist and
          technology leader in UK government, and as a strategy director in the
          education sector, I have had the extraordinary opportunity to relocate
          to the United States. Along with the big change of location, I have
          seized on the parallel opportunity to retrain as a front-end
          developer.
          <br />
          <br />
          Retraining has allowed me to sharpen and apply existing coding skills,
          to get to know the production side of a field I love, and to prove
          that I really do learn quickly!
          <br />
          <br />
          I am currently seeking roles which offer me the opportunity to work
          closely with clients, ideally within multi-disciplinary teams. In
          particular, I would love a role in an organisation which prizes
          learning and development, in an environment where staff are passionate
          about their subject matter.
          <br />
          <br />
          Please take some time to explore my portfolio, and don't hesitate to
          ask if there's a skill you'd like to see demonstrated or a project
          you'd like to discuss.
          <br />
          <br />
          Thanks,
        </p>
        <img src="/assets/signature.png" className="w-[300px]" alt="" />
      </div>
    </div>
  );
};

export default AboutJack;
