import React from 'react';
import styled from 'styled-components';
import headshot from '../../assets/headshot.jpg';

const HeadshotImg = styled.img`
  width: 50%;
  margin: 1em auto;
  display: flex;
`;

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <HeadshotImg src={headshot} alt="jamie nadel headshot" />;
      <p>
      Currently learning full stack JavaScript. I'm always open to making 
      new connections, expanding and sharing my knowledge. 
      Experienced creative with a demonstrated history working as a 
      stagehand, photographer, film producer, and video editor. 
      Humble and driven professional with a Bachelor's Degree focused 
      in TV/Film Production from The Evergreen State College.
      </p>
    </div>
  );
}
