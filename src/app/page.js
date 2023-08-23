import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <h1>This is Home page</h1> */}
      <Blogs />
      <hr />
      <br />
      <About />
      <hr />
      <Contact />
    </div>
  );
};

export default page;
