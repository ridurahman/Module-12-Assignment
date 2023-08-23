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
    alert(JSON.stringify(inputs));
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <h1 className="font-bold text-lg m-3">Contact Us</h1>

      <div
        className="flex flex-col 
                    items-center justify-center border border-gray-100"
      >
        <form onSubmit={handleSubmit}>
          <div className="m-3 ">
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
            />
          </div>
          <div className="m-3">
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
            />
          </div>
          <div className="m-3">
            <input
              type="url"
              name="website"
              value={inputs.website || ""}
              onChange={handleChange}
              placeholder="Enter Your Website URL"
              className="text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
            />
          </div>

          <div className="m-3">
            <textarea
              name="message"
              rows="10"
              value={inputs.message || ""}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
            />
          </div>

          <input
            type="submit"
            className="bg-blue-700 w-full py-2 my-4 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
