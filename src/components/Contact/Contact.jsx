import React, { useState } from 'react';
import {
  ContactContainer,
  FormContainer,
  StyledImage,
  StyledButton
} from './ContactElements.js';
import breadImage from '../Images/bread.jpg';
import emailjs from '@emailjs/browser';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfon66p', 'template_cbzfwdn', e.target, 'user_CWvDaUwJyr3ZgRiAYPp2Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const sentModal = () => {
    setSent(!sent);
  }

  return (
    <ContactContainer onSubmit={sendEmail}>
      <StyledImage src={breadImage}/>
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
            name="from_name"
            size="20"
            placeholder="Email"
            type="email"
            required
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
            type="text"
            name="message"
            rows="5"
            cols="22"
            placeholder="Message"
            required
          />
          <br/>
          <StyledButton type="submit">Send</StyledButton>
        </form>
      </FormContainer>
    </ContactContainer>
  )
}

export default Contact;