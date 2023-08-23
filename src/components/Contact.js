"use client";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <h1 className="font-bold text-lg">Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter Your Name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Enter Your Email:
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Enter Your Website URL:
            <iframe
              src="https://www.example.com"
              name="website"
              value={inputs.website || ""}
              onChange={handleChange}
            />
          </label>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
