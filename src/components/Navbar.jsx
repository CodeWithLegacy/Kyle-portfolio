// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10 antialiased"> 
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-screen-xl backdrop-blur-lg bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6 "
        >
          <ul className="flex items-center gap-14">
            <motion.li
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link to="hero" smooth spy offset={-80} className="menu-item">
                Home
              </Link>
            </motion.li>

            <motion.li
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link to="skills" smooth spy offset={-80} className="menu-item">
                Skills
              </Link>
            </motion.li>

            <motion.li
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className="menu-item"
              >
                Work Experience
              </Link>
            </motion.li>

            <motion.li
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Link to="about" smooth spy offset={50} className="menu-item">
                About Me
              </Link>
            </motion.li>

            <motion.li
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Link to="contact" smooth spy offset={-80} className="menu-item">
                Contact Me
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
