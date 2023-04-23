import React from "react";
import styled from "styled-components";
import DevIcon from "../Assets/development-icon.svg";

function Menu() {
  return (
    <StyledMenu>
      <nav className="menu">
        <div className="menu-logo-name">
        <img className="menu-logo" src={DevIcon} alt="" />
          <p>Aluizio Neto</p>
          
        </div>
        <div className="menu-list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#sumary">Sumary</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </StyledMenu>
  );
}

export default Menu;

const StyledMenu = styled.div`
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 1rem;
    position: fixed;

    gap: 4rem;
    background-color: #fff;
    color: #212529;

  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    list-style-type: none;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    color: #212529;
    transition: 0.5s;
  }

  a:hover {
    color: #868e96;
  }

  .menu-logo-name {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-weight: 700;
    gap: 1rem;
  }
  
  .menu-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
  }
`;
