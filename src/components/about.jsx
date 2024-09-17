import React from 'react';
import picture from "../assets/my.png";
import { ABOUT_TEXT } from '../constants/index';
import { motion } from "framer-motion";
import '../index.css';

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  },
});

const About = () => {
  const highlightedWords = ["well-rounded", "creative", "hardworking"];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-black-900 via-purple-800 to-gray-900">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 lg:px-8">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl bg-white bg-opacity-10 rounded-lg shadow-lg p-8 border border-gray-700 flex flex-col items-center"
        >
          <motion.h1
            className="text-center text-4xl lg:text-5xl font-bold text-white"
            whileInView={{ opacity: 1, scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h1>
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 mt-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <img
                src={picture}
                alt="Mariya Shijo"
                className="rounded-lg w-full h-auto max-w-md border-4 border-gray-700 shadow-lg"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <motion.p className="my-4 lg:my-6 max-w-xl lg:max-w-2xl text-lg font-light lg:text-xl text-gray-200 leading-relaxed text-center">
                {ABOUT_TEXT.split(" ").map((word, index) => {
                  const isHighlighted = highlightedWords.includes(word);
                  return (
                    <span
                      key={index}
                      className={isHighlighted ? "ombre-text" : ""}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
