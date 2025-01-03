import React from "react";
import { FaBars } from "react-icons/fa";
 
function Navbar() {
  return (
//     <nav className="absolute top-0 right-0 w-1/2 bg-white shadow-md flex items-center justify-between px-6 py-4 z-50">
//       {/* Navigation Links */}
//       <ul className="flex gap-6 text-black font-semibold">
//       <ul className="hidden md:flex gap-6 text-black font-semibold">
//   {/* Links */}
// </ul>
// <div className="block md:hidden cursor-pointer">
//   <FaBars className="text-black" size={20} />
// </div>
<nav className="absolute top-0 right-0 w-1/2 bg-white shadow-md flex items-center justify-between px-6 py-4 z-50">
      {/* Navigation Links */}
      <ul className="hidden md:flex flex-1 justify-evenly text-black font-semibold">
 
        <li>
          <a
            href="#home"
            className="hover:text-blue-500 transition duration-300"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-500 transition duration-300"
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:text-blue-500 transition duration-300"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="hover:text-blue-500 transition duration-300"
          >
            GALLERY
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-500 transition duration-300"
          >
            CONTACT
          </a>
        </li>
      </ul>
 
      {/* Burger Icon */}
      <div className="cursor-pointer">
        <FaBars className="text-black" size={20} />
      </div>
    </nav>
  );
}
 
export default Navbar;
 