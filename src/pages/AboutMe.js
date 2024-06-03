// src/pages/AboutMe.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <Container>
      <h2 className="my-4">About Me</h2>
      <p>
        Hi, I'm Austin Allen, a passionate web developer with a strong background in creating dynamic and responsive web applications. I enjoy tackling challenging problems and continuously improving my skills.
      </p>
      <p>
        I have experience with various technologies, including JavaScript, React, Node.js, Express.js, and MongoDB. My goal is to create efficient and scalable applications that provide a great user experience.
      </p>
    </Container>
  </motion.div>
);

export default AboutMe;
