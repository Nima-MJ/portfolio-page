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
              👋 Hi there! I'm Nima, a recent graduate from the University of Ottawa with a Bachelor's degree in Electrical Engineering,
              specializing in Electronics with Minor in Computer Science. I'm passionate about leveraging software to create innovative technology.
              <br />
              <br />
            </Intorduction>
            <span >
              🎓 With my recent graduation, I'm eager to explore full-time opportunities in the exciting domains of Full-Stack Development and Cloud Development.
              I bring a diverse range of skills and experiences to the table, and I'm enthusiastic about applying my knowledge to develop innovative products.
              <br />
              <br />
            </span>
            <span>
              🌟 With a solid foundation of 16 months of professional experience in the tech industry across various roles,
              I've contributed as a Jr. Software Developer at field effect, served as a Software Engineer and Hardware Logistics intern at Relogix, and gained valuable insights during my work-term as a Spectrum Engineer at ISED Canada.
              My specialties include problem-solving and driving business growth.
              <br />
              <br />
            </span>
            <span >
              🏀 When I'm not knee-deep in code or engineering, you'll find me indulging in my passion for sports. I'm a huge fan of football (soccer) and basketball, and I can't resist watching or
              playing these games during my free time. My top picks are Real Madrid FC and the LA Lakers - I never miss a match!
              <br />
              <br />
            </span>
            <span>
              🚀 Let's connect and explore the endless possibilities in the world of technology,
              or chat about our favorite sports teams. Whether it's tech or sports, I'm all in!
            </span>
          </Text>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
