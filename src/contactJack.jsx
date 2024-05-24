import React, { useState } from "react";
import "./fonts.style.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          email,
          name,
          query,
        }),
      });
      if (response.ok) {
        // Handle successful submission
        console.log("Form submitted successfully!");
      } else {
        // Handle errors if any
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setErrorMessage("Failed to submit form");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="buffer min-w-[100%] min-h-[700px] bg-gradient-to-t from-transparent to-prussian flex flex-col justify-center items-center text-white">
        <h3 className="text-3xl py-4">Reach Out</h3>
        <hr className="w-[50%] h-0.5 bg-white mb-5" />
        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          className="flex flex-col justify-center gap-[12px]"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-prussian border-solid text-center"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-prussian border-solid text-center"
          />
          <textarea
            name="query"
            placeholder="Enter your query (at least 50 characters)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            minLength={50}
            className="min-h-10 border border-prussian border-solid text-center" // Tailwind class for minimum height
          />
          {errorMessage && <span className="text-red-600">{errorMessage}</span>}
          <input
            type="submit"
            value="Submit"
            className="hover:cursor-pointer bg-prussian"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
