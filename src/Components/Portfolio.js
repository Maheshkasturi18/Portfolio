import React, { useState } from "react";
import { Link } from "react-scroll";
import Footer from "./footer";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Project from "./Projects";
import Skills from "./Skills";
import Home from "./Home";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto px-4 md:px-16 ">
      <nav x-data="{ open: false }">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mahesh <span className="text-yellow-400">.</span>
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 relative focus:outline-none bg-yellow-400 rounded block md:hidden"
          >
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>

          <div
            className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          >
            <ul className=" flex flex-col p-4 md:p-0 mt-4  text-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  bg-transparent">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 cursor-pointer rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-yellow-400 p-0 dark:text-white dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Home />
      <About />
      <Skills />
      <Project />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
