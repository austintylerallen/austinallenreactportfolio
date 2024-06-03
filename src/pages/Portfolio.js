// src/pages/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <h2>Portfolio</h2>
    <p>This is the portfolio section.</p>
  </motion.div>
);

export default Portfolio;
