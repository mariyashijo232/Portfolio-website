import React from 'react';
import picture from "../assets/projects/star.jpg";
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  },
});

const Velli = () => {
  return (
    <section className='min-h-screen bg-gradient-to-r from-black-900 via-purple-800 to-gray-900 flex items-center justify-center py-12'>
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className='w-full max-w-5xl bg-white bg-opacity-10 rounded-lg shadow-lg p-12 border border-gray-700'
      >
        <h1 className='text-center text-5xl font-bold text-white mb-8'>
          Velli - Planning/Designing Stage
        </h1>

        <h2 className='text-center text-4xl font-light mb-6 text-gray-300 italic'>
          (freelance Front-End Web-Development)
        </h2>

        <div className='flex flex-col items-center space-y-8'>
          <img
            src={picture}
            alt="Zara Case Study"
            className='w-full max-w-3xl rounded-lg shadow-lg mb-8'
          />

          <iframe
            className='w-full max-w-5xl h-96 rounded-lg shadow-lg border border-gray-700'
            src="https://embed.figma.com/design/hgFpZtKUFhgRbyaGghkrdP/Planning?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>

          <p className='text-lg text-gray-300 mt-8'>
          Currently working on developing responsive and visually engaging web applications. Collaborating with designers to implement Figma designs into interactive ReactJS components, while refining layouts and styles using Tailwind. Actively involved in optimizing user experience and ensuring cross-browser compatibility.          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Velli;
