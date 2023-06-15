import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: green;
  margin: 1em;
  padding: 1em;
  border: 20px solid black;
`

const Button = styled.a`
  display: inline-block;
  color: blue;
  background-color: cornsilk;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export default function Footer() {
  return (
    <FooterWrapper className="footer">
      <div className="container">
        <Button href="https://github.com/bnadel4">Github</Button>
        <span className="text-muted">© 2023 by <a href="https://www.linkedin.com/in/jamienadel">Jamie nadel</a></span>
      </div>
    </FooterWrapper>
  );
}

