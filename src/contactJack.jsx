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
    <div
      className="flex flex-col items-center justify-center"
      aria-label="Contact Form"
    >
      <div className="buffer flex min-h-[700px] min-w-[100%] flex-col items-center justify-center bg-gradient-to-t from-transparent to-prussian text-white">
        <h3 className="py-4 text-3xl">Reach Out</h3>
        <hr className="mb-5 h-0.5 w-[50%] bg-white" />
        <form
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          className="flex flex-col justify-center gap-[12px]"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="email" className="hidden">
            Email Field
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-[40px] bg-[rgba(255,255,255,0.9)] text-center"
            aria-label="Email input field"
            aria-required="true"
          />
          <label htmlFor="name" className="hidden">
            Name Field
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-[40px] bg-[rgba(255,255,255,0.9)] text-center"
            aria-label="Name input field"
            aria-required="true"
          />
          <label htmlFor="query" className="hidden">
            Enter a query
          </label>
          <textarea
            name="query"
            placeholder="Enter your query &#10; (at least 50 characters)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            minLength={50}
            className="min-h-[80px] w-[300px] bg-[rgba(255,255,255,0.9)] text-center"
            aria-label="Query input field"
            aria-required="true"
          />
          {errorMessage && <span className="text-red-600">{errorMessage}</span>}
          <input
            type="submit"
            value="Submit"
            className="h-[40px] bg-prussian hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
