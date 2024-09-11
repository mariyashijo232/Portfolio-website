import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20  text-white">
      <div className=" border-gray-700 pb-6">
        <div className="my-12 text-center text-4xl font-bold">
          Experience
        </div>
        <div className="flex flex-col items-center">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-4xl mb-12 p-6  bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between items-start">
                <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  <p className="text-lg text-gray-400">{experience.year}</p>
                </div>
                <div className="w-full lg:w-2/3">
                  <h6 className="mb-2 text-xl font-bold">
                    {experience.role} - 
                    <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-gray-300 text-lg font-light">{experience.description}</p>
                  <div className="flex flex-wrap">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="mr-2 mb-2 rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-purple-400"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
