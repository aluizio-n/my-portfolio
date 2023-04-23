import React from "react";
import styled from "styled-components";
import Image from "../Assets/home-image.svg";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

function Home() {
  return (
    <StyledHome>
      <section id="home"className="home-section">
        <main className="content-main">
          <div className="greetings">
            <div className="text-greeting">
              <p>Hello World,</p>
              <h1>I'm a</h1>
              <h1>Web Developer</h1>
              <p>Welcome to my portfolio web site</p>
            </div>
            <button className="button-more-about">More about me</button>
            <div className="social">
              <a href="https://github.com/aluizio-n" target="_blank">
                <GithubLogo size={32} />
              </a>
              <a
                href="https://www.instagram.com/aluizio.neto_/"
                target="_blank"
              >
                <InstagramLogo size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/aluizio-neto-63138b214/"
                target="_blank"
              >
                <LinkedinLogo size={32} />
              </a>
            </div>
          </div>
          <div className="main-image">
            <img src={Image} alt="adaad" />
          </div>
        </main>
      </section>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`

  .home-section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-main {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    line-height: 3rem;
    margin-top: 6rem;
    padding-left: 3.4rem;
  }

  .greetings {
    margin-top: 7rem;
  }

  .text-greeting {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .main-image {
    margin-bottom: 4rem;
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
    transform: scale(1.1);
    transition: all 0.5s;
  }
  .social {
    margin-top: 1rem;
    margin-left: 3rem;
    cursor: pointer;
    a {
      color: #212529;
      text-decoration: none;
    }
  }
`;
