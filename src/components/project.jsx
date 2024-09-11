import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Project = ({ setCurrentComponent }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLearnMoreClick = (detailsPage) => {
    if (detailsPage) {
      setCurrentComponent(detailsPage);
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4">Projects</h2>
        <p className="text-lg text-gray-300">
          Explore some of the projects I've worked on. Click on a project to learn more.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full max-w-sm bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-semibold text-white mb-2"
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gray-300 text-lg font-light mb-4"
              >
                {project.description}
              </motion.p>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full px-3 py-1 text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <button
                onClick={() => handleLearnMoreClick(project.detailsPage)}
                className="mt-4 inline-block px-4 py-2 bg-purple-700 text-white font-medium rounded-lg transition-transform transform hover:scale-105 hover:bg-cyan-400"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-gray-900 border-b border-black p-8 rounded-lg shadow-lg">
            <h2 className=" text-purple-900 text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg text-purple-700 mb-6">This section is under construction. Stay tuned for updates!</p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-purple-700 text-white font-medium rounded-lg hover:bg-cyan-400 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
