import React, { useState } from 'react';
import { send } from 'emailjs';
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
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(!sent);
  }

  const handleChange = (e) => {
    setToSend({...toSend,[e.target.name]: e.target.value});
  }

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
            name="from_name"
            size="20"
            placeholder="Email"
            defaultValue={toSend.from_name}
            onChange={handleChange}
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
            name="message"
            rows="5"
            cols="22"
            placeholder="Message"
            defaultValue={toSend.message}
            onChange={handleChange}
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