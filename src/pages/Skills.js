// src/pages/Skills.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  // Add more skills here
];

const SkillCard = styled(motion.div)`
  padding: 1rem;
  background-color: #424242;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.2s, background-color 0.2s;
`;

const Title = styled.h2`
  color: #fafafa;
  text-align: center;
  margin-bottom: 2rem;
`;

const Skills = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <Container className="my-5">
      <Title>Skills</Title>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} lg={4} key={index} className="my-3">
            <SkillCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </SkillCard>
          </Col>
        ))}
      </Row>
    </Container>
  </motion.div>
);

export default Skills;
