import React from "react";
import styled from "styled-components";

function Technologies() {
  return (
    <StyledTechnologies>
      <section id="technologies" className="technologies-section">
        Technologies
      </section>
    </StyledTechnologies>
  );
}

export default Technologies;

const StyledTechnologies = styled.div`
  .technologies-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9rem;
    text-transform: uppercase;
    font-weight: 700;
    background-color: #ced4da;
    color: #212529;
  }
`;
