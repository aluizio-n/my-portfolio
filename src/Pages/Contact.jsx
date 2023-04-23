import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <StyledContact>
        <section id="contact" className="contact-section">
          Contact
        </section>
    </StyledContact>
  );
}

export default Contact;

const StyledContact = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #212529;
`;
