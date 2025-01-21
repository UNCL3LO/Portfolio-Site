import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoColor } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex py-2 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex flex-wrap justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoColor} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
          Munene C. | Full Stack Developer
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            toggle ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-white text-[18px] font-normal cursor-pointer p-[5px] px-6 rounded-[50px] shadow-card transition transform
                  ${
                    active === link.title
                      ? "bg-black text-white green-pink-gradient border-purple-400"
                      : "hover:bg-white hover:text-black hover:border hover:scale-105"
                  }`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false); // Close menu after clicking a link
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

