// src/pages/Resume.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #424242;
  color: #fafafa;
  border: none;
  margin-top: 2rem;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  background-color: transparent;
  color: #fafafa;
  border: none;
`;

const Resume = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <Container>
      <h2 className="my-4" style={{ color: '#FAFAFA' }}>Resume</h2>
      <p>
        <a href="/path/to/resume.pdf" download>Download my resume</a>
      </p>
      <h3 style={{ color: '#FAFAFA' }}>Proficiencies</h3>
      <StyledCard>
        <Card.Body>
          <ListGroup variant="flush">
            <StyledListGroupItem>JavaScript</StyledListGroupItem>
            <StyledListGroupItem>React</StyledListGroupItem>
            <StyledListGroupItem>Node.js</StyledListGroupItem>
            <StyledListGroupItem>Express.js</StyledListGroupItem>
            <StyledListGroupItem>MongoDB</StyledListGroupItem>
            {/* Add more proficiencies as needed */}
          </ListGroup>
        </Card.Body>
      </StyledCard>
    </Container>
  </motion.div>
);

export default Resume;
