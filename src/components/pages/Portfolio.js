import React from 'react';
import styled from 'styled-components';
import Project from '../Project';
import foodleImg from '../../assets/foodle-screenshotdesktop.png';
import onlyCheeseImg from '../../assets/homepage.png';

const projects = [
  {
    title: 'Only Cheese',
    photo: onlyCheeseImg,
    deployedLink: 'https://only-cheese.herokuapp.com/',
    githubLink: 'https://github.com/eileenmh/only-cheese'
  },
  {
    title: 'Foodle',
    photo: foodleImg,
    deployedLink: 'https://gpaul12.github.io/foodle/',
    githubLink: 'https://github.com/gpaul12/foodle'
  }
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <section>
        {
          projects.map(( item, index ) => (
            <Project
              key={`project-item-${index}`}
              project={item}
            >
            </Project>
          ))
        }
      </section>
    </div>
  );
}
