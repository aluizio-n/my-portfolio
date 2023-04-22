import React from "react";
import styled from "styled-components";
import Image from "../Assets/home-image.svg";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

function Home() {
  return (
    <StyledHome>
      <main className="content-main">
        <div className="greetins">
          <p>Hello World,</p>
          <h1>I'm a</h1>
          <h1>Web Developer</h1>
          <p>Welcome to my portfolio web site</p>
          <button className="button-more-about">More about me</button>
          <div className="social">
            <GithubLogo size={32} />
            <InstagramLogo size={32} />
            <LinkedinLogo size={32} />
          </div>
        </div>
        <div className="main-image">
          <img src={Image} alt="adaad" />
        </div>
      </main>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: Inter, sans-serif;

  .content-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    width: 60rem;
  }

  .greetins {
    line-height: 1rem;
    gap: 10rem;
  }

  .main-image {
    width: 36rem;
  }
  .button-more-about {
    width: 50%;
    height: 3rem;
    margin-top: 3rem;
    border-radius: 2rem;
    font-size: 1rem;
    background-color: transparent;
    transition: 0.2s;
  }
  button:hover {
    background-color: #212529;
    color: white;
    cursor: pointer;
  }
  .social {
    margin-top: 1rem;
    margin-left: 3rem;
    cursor: pointer;
  }
`;
