import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10  flex flex-col items-center justify-start pt-20 lg:pt-32 px-8 lg:px-20 pb-32"
    >
      <motion.h1
        className="text-center text-4xl lg:text-5xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <div className="flex flex-col items-center">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaEnvelope className="text-3xl text-purple-700 mr-2" />
            <a href={`mailto:${CONTACT.email}`} className="text-white text-lg font-light hover:underline">
              {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center justify-center">
            <FaPhone className="text-3xl text-purple-700 mr-2" />
            <a href={`tel:${CONTACT.phoneNo}`} className="text-white text-lg font-light hover:underline">
              {CONTACT.phoneNo}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-white text-sm lg:text-base font-light">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
