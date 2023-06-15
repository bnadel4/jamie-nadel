import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`

function Nav({ currentPage, handlePageChange }) {
  return (
    <NavWrapper>
    <ul>
      <li>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
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
      <li>
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </NavWrapper>
  );
}

export default Nav;
