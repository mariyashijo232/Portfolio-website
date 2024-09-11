import React, { useState } from 'react';
import logo from '../assets/Logo2.png';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative mb-4 flex items-center justify-between py-4 px-4 sm:px-8 shadow-md">
      <div className="flex items-center mb-4 sm:mb-0">
        <img className="w-12 sm:w-16" src={logo} alt="logo" />
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 w-64 bg-black bg-opacity-75 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40`}>
        <div className="flex flex-col items-start p-6">
          <button onClick={toggleMenu} className="text-white text-3xl mb-8">
            <FaTimes />
          </button>
          <div className="flex flex-col items-start gap-4 text-lg font-semibold text-white">
            <a href="#about" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                About
              </span>
            </a>
            <a href="#projects" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                Projects
              </span>
            </a>
            <a href="#experience" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                Experience
              </span>
            </a>
            <a href="#contact" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                Contact
              </span>
            </a>
            {/* Additional Menu Items */}
            <a href="#blog" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                Blog
              </span>
            </a>
            <a href="#services" className="relative group">
              <span className="relative group-hover:text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
                Services
              </span>
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 text-xl text-white mt-8">
            <a href="https://www.linkedin.com/in/mariya-s-b23743290/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mariyashijo232" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-4 text-xl text-white">
        <a href="https://www.linkedin.com/in/mariya-s-b23743290/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mariyashijo232" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
