import React from 'react';
import { HERO_CONTENT } from '../constants/index';
import picture from "../assets/picture2.png";
import { motion } from "framer-motion";
import ThreeDScene from './ThreeDScene'; 
const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
<div className="relative h-screen flex flex-col items-center justify-center pt-12 lg:pt-0">
<div className="absolute top-0 left-0 w-full h-full z-0">
        <ThreeDScene />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center justify-center text-white"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-7xl px-4 lg:px-6"
        >
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-8 mt-[-5vh] lg:mt-0">
            <motion.h1
              variants={container(0)}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="pb-4 text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
            >
              Mariya Shijo
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              className="my-4 max-w-xl lg:max-w-2xl py-6 text-lg text-light lg:text-xl font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center lg:pl-8 mt-8 lg:mt-0"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={picture}
              alt="Mariya Shijo"
              className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
