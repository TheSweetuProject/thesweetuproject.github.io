import React from 'react';
import {
  AboutContainer,
  StyledImg,
  AboutSection,
  Header,
  BioSection,
  BioSection2,
  Credentials } from './AboutElements.js';
import { BsInstagram } from 'react-icons/bs';
import dough from '../Images/dough.png';

const About = () => {
  return (
    <AboutContainer>
      <StyledImg src={dough} />
      <AboutSection>
        <Header>Hi! I'm Amy</Header>
        <BioSection>
          I am a former Pastry Baker from <i><b>The Slanted Door</b></i> and
          <i><b> Manresa Bread Bakery</b></i> who would love to offer her bakery
          services to those in the Los Angeles area.
        </BioSection>
        <BioSection2>
          I enjoy baking pastries that focus on sustainable ingredients and
          firmly believe in the philosiphy that foods should be be from farm to table.
        </BioSection2>
        <Credentials>
          B.S Nutrition Science <br/>
          Pastry Arts - Internation Culinary Center 2016
        </Credentials>
        <a href="https://www.instagram.com/thesweetuproject/?hl=en" target="_blank"><BsInstagram size={60}/></a>
      </AboutSection>
    </AboutContainer>
  )
}

export default About;