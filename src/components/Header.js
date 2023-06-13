import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';


const HeaderWrapper = styled.header`
  background-color: green;
  margin: 1em;
  padding: 1em;
  border: 20px solid black;
`

export default function Header({currentPage, handlePageChange}) {
  return (
    <HeaderWrapper className="header">
      <div className="container">
        <h1>Jamie Nadel</h1>
      </div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

    </HeaderWrapper>
  );
}

