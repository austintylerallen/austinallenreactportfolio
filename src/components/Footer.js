// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background-color: #131313;
  padding: 1rem;
  margin-top: 4rem;
`;

const FooterText = styled.p`
  color: #fafafa;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
    <Container>
      <FooterText>
        <a href="https://github.com/austintylerallen" className="text-white mx-2">GitHub</a>
        <a href="https://linkedin.com/in/austintylerallen" className="text-white mx-2">LinkedIn</a>
        <a href="https://stackoverflow.com/users/austintylerallen" className="text-white mx-2">Stack Overflow</a>
      </FooterText>
    </Container>
  </FooterContainer>
);

export default Footer;
