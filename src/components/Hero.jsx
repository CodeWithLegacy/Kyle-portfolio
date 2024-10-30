// eslint-disable-next-line no-unused-vars
import React from "react";
import { PROFILE_DATA } from "../utils/data";
import PROFILE_PIC from "../assets/kyle.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const {
    fullName,
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'src/assets/Resume.pdf'; // Replace with your actual CV file path
    downloadLink.download = 'Resume.pdf'; // Replace with your desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 py-30 mx-auto"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left z-[1]">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-1xl md:text-2xl md:mt-5 text-blue-200 font-thin antialiased "
        >
          Hi, It`s
        </motion.span>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-3xl mt-3 md:text-5xl md:mt-5 antialiased"
        >
          {name}
        </motion.h2>
        <TypeAnimation
          sequence={[
            "BSIT STUDENT FROM WIT_IT",
            1000,
            "Full Stack Developer",
            1000,
            "Software Engineer",
            1000,
            "CyberSecurity",
            1000,
            "Web Designer",
            1000,
            "Network Engineer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="antialiased text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
        />
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8"
        >
          {tagline}
        </motion.p>

        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="primary-btn"
          onClick={handleDownload} // Added onClick handler for download
        >
          Download CV
        </motion.button>
        
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]"
      >
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="hero-img"
              src={PROFILE_PIC}
              alt="img one"
            />
          </div>

          <div className="bg-cardbg rounded-md text-center mt-3 p-4">
            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="text-sm md:text-base text-white"
            >
              {" "}
              {fullName}{" "}
            </motion.h5>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="text-slate-500 text-xs md:font-medium mt-1"
            >
              {" "}
              {jobTitle}{" "}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
              className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-1"
            >
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </motion.div>
          </div>
          <InfoTile
            icon={<FiMail size={20} className="test-sky-400" />}
            text={email}
          />
          <InfoTile
            icon={<MdOutlineBadge size={20} className="test-sky-400" />}
            text={`${yearsOfExperience} Years of Experience`}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex items-center gap-2 flex-wrap my-3"
          >
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <div className="flex items-center gap-2 flex-wrap">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-blue-800/30 p-2 rounded"
            >
              <FaGithub className="text-lg md:text-xl" />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="bg-blue-800/30 p-2 rounded"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-blue-800/30 p-2 rounded"
            >
              <FaTwitter className="text-lg md:text-xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"
      ></motion.div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const InfoTile = ({ icon, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.3 }}
      className="flex items-center gap-4 bg-cardbg p-4 mt-3 rounded-md"
    >
      {icon}
      <motion.p
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
        className="text-xs md-text-sm font-normal"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Hero;
