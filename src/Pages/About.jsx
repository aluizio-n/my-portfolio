import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <StyledAbout>
      <section id="about" className="about-section">About</section>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div `

.about-section{
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
`