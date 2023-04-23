import React from 'react'
import styled from 'styled-components'

function Sumary() {
  return (
<StyledSumary>
    <section id="sumary" className="sumary-section">Sumary</section>
</StyledSumary>  )
}

export default Sumary

const StyledSumary = styled.div `
.sumary-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #212529;
    background-color: #ced4da;
}
`