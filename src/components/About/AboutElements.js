import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image about";
  justify-contents: center;
  background-color: #F4E7D8;
  font-family: Roboto;
  @media screen and (max-width: 1025px) {
    display: block;
  }
`;

export const StyledImg = styled.img`
  height: 90vh;
`;

export const AboutSection = styled.div`
  margin-top: 100px;
`;

export const Header = styled.h1`
  font-size: 50px;
  margin-top: 120px;
  font-weight: bold;
`;

export const BioSection = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 25px;
  font-weight: 400;
`;

export const BioSection2 = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 18px;
  margin-top: 50px;
`;

export const Credentials = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  margin-top: 50px;
  margin-bottom: 50px;
`;