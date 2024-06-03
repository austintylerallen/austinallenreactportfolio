// src/components/Header.js
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: #131313;
  padding: 1rem 0;
`;

const Title = styled.h1`
  font-family: 'Cinzel', serif;
  color: #FAFAFA;
  text-align: left;
  margin: 0;
  font-size: 2rem;
`;

const NavContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem; /* Add some padding to push it to the right */
`;

const navLinkStyle = {
  fontSize: '1rem',
  color: '#FAFAFA',
  textDecoration: 'none',
  margin: '0 0.5rem',
  fontWeight: 300,
  transition: 'color 0.3s ease-in-out'
};

const navLinkHoverStyle = {
  color: '#686868'
};

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Container className="d-flex align-items-center justify-content-between">
          <Title>Austin Tyler Allen</Title>
          <NavContainer>
            <Nav.Link
              href="/"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/contact"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="/resume"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="/skills"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="/repositories"
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
              onMouseLeave={(e) => e.target.style.color = navLinkStyle.color}
            >
              Repositories
            </Nav.Link>
          </NavContainer>
        </Container>
      </HeaderContainer>
    );
  }
}

export default Header;
