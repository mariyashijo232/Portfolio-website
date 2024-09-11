import React from 'react';
import picture from "../assets/why.png";
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  },
});

const Zara = () => {
  return (
    <section className='min-h-screen bg-gradient-to-r from-black-900 via-purple-800 to-gray-900 flex items-center justify-center py-12'>
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className='w-full max-w-5xl bg-white bg-opacity-10 rounded-lg shadow-lg p-12 border border-gray-700'
      >
        <h1 className='text-center text-5xl font-bold text-white mb-8'>
          UX/UI Case Study: Zara
        </h1>

        <h2 className='text-center text-4xl font-light mb-6 text-gray-300 italic'>
          (in progress)
        </h2>

        <div className='flex flex-col items-center space-y-8'>
          <img
            src={picture}
            alt="Zara Case Study"
            className='w-full max-w-3xl rounded-lg shadow-lg mb-8'
          />

          <iframe
            className='w-full max-w-5xl h-96 rounded-lg shadow-lg border border-gray-700'
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FoTN3MX2JxSGEMgX7aoSJpD%2F1st%3Fnode-id%3D0-1%26t%3DEXBn1StyNyaHCTLJ-1"
            allowFullScreen
          ></iframe>

          <p className='text-lg text-gray-300 mt-8'>
            This case study is a detailed look at the UX/UI design process for Zara. It includes an analysis of the current design, proposed improvements, and interactive prototypes.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Zara;
