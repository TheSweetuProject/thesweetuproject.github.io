import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-colums: 1fr 1fr;
  grid-template-areas: "image form"
  background-color: #F4E7D8;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const StyledImage = styled.div`
`;

export const FormContainer = styled.div`
  background-color: #7C8991;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  border-radius: 20px;
  margin-bottom: 100px;
`;

export const StyledButton = styled.button`
  background-color: #8A584C;
  padding: 13px 45px 13px 45px;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  border: none;
  cursor: pointer;
`;