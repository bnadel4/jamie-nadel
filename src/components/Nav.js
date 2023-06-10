import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  margin: 1em;

`

function Nav({ currentPage, handlePageChange }) {
  return (
    <NavWrapper>
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </NavWrapper>
  );
}

export default Nav;
