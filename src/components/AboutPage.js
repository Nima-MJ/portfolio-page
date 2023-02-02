import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #858585;
    border-radius: 10px;
    transition: background-color 0.2s ease-out;
  }

  ::-webkit-scrollbar-track {
    background-color: #e9e9e9;
    border-radius: 10px;
  }
`;

const Text = styled.div`
  top: 0%;
`;

const Intorduction = styled.span`
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          <Text>
            <Intorduction>
              As a final-year{" "}
              <strong>Electrical and Software Engineering</strong> student at
              the University of Ottawa, I am set to graduate in April 2023.{" "}
              <br />
              <br />
            </Intorduction>
            <span >
              My passion lies in creating innovative technology by combining
              hardware and software. I am actively seeking an internship or
              full-time position, starting in May 2023, in the areas of{" "}
              <strong>
                Full-Stack Development, Cloud Development, and Embedded Systems.
              </strong>
              <br />
              <br />
            </span>
            <span >
              I possess a diverse range of skills and experience, and I am eager
              to apply my knowledge and contribute to the development of
              innovative and exciting products.
              <br />
            </span>
          </Text>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
