import React from 'react';
import styled from 'styled-components';
import Portfolio from './pages/Portfolio.js';

const ProjectImg = styled.img`
  width: 50%;
  margin: 1em auto;
  display: flex;
`;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 200px;
//   border: 1px solid #ccc;
//   margin: 10px;
// `;

export default function Project({ project }) {
  return (
    <div>
      <h1>Project Page</h1>
      <h2>{project.title}</h2>
      {/* <ImageContainer> */}
        <ProjectImg src={project.photo} />
      {/* </ImageContainer> */}
      <a href={project.deployedLink}>Deployed App</a>
      <a href={project.githubLink}>Github Repo</a>
    </div>
  );
}
