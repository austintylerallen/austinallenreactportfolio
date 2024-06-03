// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavItemStyled = styled(motion(NavLink))`
  font-size: 1rem;
  color: #fafafa !important;
  text-decoration: none !important;
  margin: 0 1rem;

  &:hover {
    color: #686868 !important;
  }
`;

const Navigation = () => (
  <Nav className="justify-content-center">
    <Nav.Item>
      <NavItemStyled to="/" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
        About Me
      </NavItemStyled>
    </Nav.Item>
    <Nav.Item>
      <NavItemStyled to="/portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
        Portfolio
      </NavItemStyled>
    </Nav.Item>
    <Nav.Item>
      <NavItemStyled to="/contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Contact
      </NavItemStyled>
    </Nav.Item>
    <Nav.Item>
      <NavItemStyled to="/resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
        Resume
      </NavItemStyled>
    </Nav.Item>
    <Nav.Item>
      <NavItemStyled to="/skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
        Skills
      </NavItemStyled>
    </Nav.Item>
    <Nav.Item>
      <NavItemStyled to="/repositories" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}>
        Repositories
      </NavItemStyled>
    </Nav.Item>
  </Nav>
);

export default Navigation;
