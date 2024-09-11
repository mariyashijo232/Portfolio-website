import React from 'react';
import { RiCss3Fill, RiJavaFill, RiReactjsFill, RiTailwindCssFill, RiNodejsFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <section className="relative z-10 border-b border-transparent flex flex-col items-center justify-center pt-12 lg:pt-16 px-4 lg:px-8 ">
      <h1 className="text-center text-3xl lg:text-4xl font-bold text-white mb-12">Technologies</h1>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="rounded-3xl border-4 border-white/50 p-8 bg-gray-800 flex justify-center items-center"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="rounded-3xl border-4 border-white/50 p-8 bg-gray-800 flex justify-center items-center"
        >
          <RiJavaFill className="text-7xl text-yellow-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="rounded-3xl border-4 border-white/50 p-8 bg-gray-800 flex justify-center items-center"
        >
          <RiCss3Fill className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="rounded-3xl border-4 border-white/50 p-8 bg-gray-800 flex justify-center items-center"
        >
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          className="rounded-3xl border-4 border-white/50 p-8 bg-gray-800 flex justify-center items-center"
        >
          <RiNodejsFill className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
