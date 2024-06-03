// src/pages/Repositories.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const repositories = [
  { name: 'tech-blog', description: 'A tech blog platform built with MERN stack.', url: 'https://github.com/austintylerallen/tech-blog' },
  { name: 'syg-logo-maker', description: 'A logo maker tool.', url: 'https://github.com/austintylerallen/syg-logo-maker' },
  { name: 'noteworthy', description: 'A note-taking application.', url: 'https://github.com/austintylerallen/noteworthy' },
  { name: 'e-commerce-backend', description: 'Backend for an e-commerce platform.', url: 'https://github.com/austintylerallen/e-commerce-backend' },
  // Add more repositories here
];

const RepoCard = styled(motion(Card))`
  background-color: #424242;
  color: #fafafa;
  margin-bottom: 1rem;
`;

const RepoLink = styled(Card.Link)`
  color: #fafafa;
  text-decoration: none;

  &:hover {
    color: #686868;
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  color: #fafafa;
  text-align: center;
  margin-bottom: 2rem;
`;

const Repositories = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <Container className="my-5">
      <Title>GitHub Repositories</Title>
      <Row>
        {repositories.map((repo, index) => (
          <Col md={6} lg={4} key={index}>
            <RepoCard
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card.Body>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
                <RepoLink href={repo.url} target="_blank">View Repository</RepoLink>
              </Card.Body>
            </RepoCard>
          </Col>
        ))}
      </Row>
    </Container>
  </motion.div>
);

export default Repositories;
