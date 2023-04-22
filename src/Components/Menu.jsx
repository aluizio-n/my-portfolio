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
        <ul className="menu-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/technologies">Technologies</a>
          </li>
          <li>
            <a href="/sumary">Sumary</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </StyledMenu>
  );
}

export default Menu;

const StyledMenu = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: Inter;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60rem;
    color: #212529;
    ul {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
      list-style-type: none;
    }
    a {
      font-family: Inter;
      font-weight: 700;
      text-decoration: none;
      color: #212529;
      transition: 0.2s;
    }
    a:hover {
      color: #868e96;
    }
  }
  .menu-logo-name {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-weight: 700;
  }

  .menu-logo {
    width: 10%;
  }
`;
