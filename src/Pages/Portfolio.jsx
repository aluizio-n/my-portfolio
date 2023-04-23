import React from 'react'
import styled from 'styled-components'

function Portfolio() {
  return (
    <StyledPortfolio>
        <section id="portfolio" className="portfolio-section">Portfolio</section>
    </StyledPortfolio>
    )
}

export default Portfolio

const StyledPortfolio = styled.div`
.portfolio-section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #212529;
}
`