import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="">
      <div className="text-center py-5 bg-gray-100">
        <h1 className="text-3xl font-bold text-red-700">my-Blog</h1>
        <h3 className="text-xl ">Be updated with latest incidents...</h3>
      </div>
      <NavMenu />
      <hr />
    </div>
  );
};

export default Header;
