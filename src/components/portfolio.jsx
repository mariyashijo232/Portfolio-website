import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  },
});

const Portfolio = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='min-h-screen bg-gradient-to-r from-black-900 via-purple-800 to-gray-900 flex items-center justify-center relative'>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={150}
        recycle={false}
      />
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className='w-full max-w-2xl bg-white bg-opacity-10 rounded-lg shadow-lg p-8 border border-gray-700'
      >
        <h1 className='text-center text-4xl font-bold text-white mb-4'>
          Your Already Here
        </h1>
        <p className='text-center text-lg text-gray-300'>
          Welcome to this page!
        </p>
      </motion.div>
    </section>
  );
};

export default Portfolio;
