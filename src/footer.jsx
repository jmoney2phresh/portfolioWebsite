import React from "react";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6"
      aria-label="Page footer"
    >
      <h3 className="text-l p-2 font-bold">website by Jack Symonds, 2024</h3>
      <p className="text-xs">
        hosted with Netlify. Content in REACTjs with Tailwind CSS. Bundled with
        Vite.{" "}
      </p>
    </div>
  );
};

export default Footer;
