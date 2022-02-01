import React from 'react';
import {
  ContactContainer,
  FormContainer,
  StyledButton
} from './ContactElements.js';
import { BsInstagram } from 'react-icons/bs';

// const style = {
//   resize: "none",
// }

const Contact = () => {
  return (
    <ContactContainer>
      <FormContainer>
        <form>
          <label style={{fontSize:"30px", marginRight:"70px"}}>Ask us Anything!</label> <br/>
          <input
            style={
              {
                fontFamily: "Roboto",
                marginTop: "10px",
                fontSize:"25px",
                marginBottom:"10px"
              }
            }
            size="20"
            placeholder="Email"
          />
          <br/>
          <textarea
            style= {
              {
                resize:"none",
                marginTop: "10px",
                fontFamily: "Roboto",
                marginBottom: "20px",
                fontSize:"25px"
              }
            }
            rows="5"
            cols="22"
            placeholder="Message"
          />
          <br/>
          <StyledButton type="submit">Send</StyledButton>
        </form>
      </FormContainer>
      <BsInstagram size={60}/>
    </ContactContainer>
  )
}

export default Contact;