"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const activeRoute = usePathname();
  return (
    <div className="">
      <ul className="flex m-2 justify-center">
        <li>
          <Link
            className={activeRoute === "/" ? "active-link" : "pending-list"}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              activeRoute === "/about" ? "active-link" : "pending-list"
            }
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={activeRoute === "/blog" ? "active-link" : "pending-list"}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={
              activeRoute === "/contact" ? "active-link" : "pending-list"
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
