import React, { useState } from "react";
import NavbarData from "../data/NavbarData"; // Ensure this path is correct
import { logo } from "../assets"; // Ensure the logo path is correct
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-4 md:px-12 bg-slate-900 shadow-md z-50">
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-10 md:h-12" />{" "}
        {/* Logo height adjusts for medium screens */}
      </div>
      <div className="hidden md:flex space-x-6">
        {/* Desktop Menu */}
        <ul className="flex space-x-6 list-none">
          {NavbarData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link.replace("#", "")} // Remove the hash for scroll target
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll animation
                className="text-gray-200 hover:text-primary transition text-base md:text-lg cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="text-gray-200">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-900 text-gray-200 md:hidden">
          <ul className="flex flex-col space-y-4 p-4 list-none">
            {NavbarData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link.replace("#", "")} // Remove the hash for scroll target
                  smooth={true} // Enable smooth scrolling
                  duration={500} // Duration of the scroll animation
                  onClick={() => {
                    setIsOpen(false); // Close menu on item click
                  }}
                  className="hover:text-primary transition text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
