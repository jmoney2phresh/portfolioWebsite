import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h3 className="text-3xl py-4">Reach Out</h3>
      <hr className="w-[50%] h-0.5 bg-white" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="contactEmail"
          placeholder="Enter your email"
          onChange={handleChange}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="query"
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          minLength={50} // Set a minimum length for the input
          className="min-h-10" // Tailwind class for minimum height
        />
        <span className="text-red-600">
          {" "}
          {/* Custom error message */}
          {query.length < 50 && "Query must be at least 50 characters long"}
        </span>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
