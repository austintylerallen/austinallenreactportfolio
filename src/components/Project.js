// src/components/Project.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Project = ({ title, description, imageUrl, deployedUrl, githubUrl }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={deployedUrl} target="_blank">View Project</Button>
      <Button variant="secondary" href={githubUrl} target="_blank" className="ml-2">GitHub</Button>
    </Card.Body>
  </Card>
);

export default Project;
