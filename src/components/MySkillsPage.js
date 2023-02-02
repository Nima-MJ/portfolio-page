import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { SoftwareLogo, Develope, HardwareLogo } from "./AllSvg";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 68vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <SoftwareLogo width={40} height={40} /> Software
          </Title>
          <Description>
            <strong>Front-End</strong>
            <ul>
              <li>Languages: HTML, CSS, JavaScript, TypeScript</li>
              <li>Frameworks: Angular, React</li>
              <li>
                Libraries: JQuery, Moment.js, Bootstrap, styled components
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Back-End </strong>
            <ul>
              <li>Frameworks: ASP.NET (C#), NodeJS (JavaScript), Express.js</li>
              <li>Database: MySQL, MongoDB</li>
              <li>
                RESTful API, Microservices, HTTP methods, CI/CD, Agile
                development{" "}
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>Git, GitHub, Azure DevOps, Postman</ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <HardwareLogo width={40} height={40} /> Hardware/Electrical
          </Title>
          <Description>
            <strong>Languages/Tools</strong>
            <ul>
              C/C++, Python, Java, Assembly, MATLAB, Simulink, VHDL, VLSI, SPICE
            </ul>
          </Description>
          <Description>
            <strong>Microcontroller</strong>
            <ul>Raspberry Pi, Arduino</ul>
          </Description>
          <Description>
            <strong>Cloud Platform</strong>
            <ul>Microsoft Azure</ul>
          </Description>
          <Description>
            <strong>Technologies</strong>
            <ul>
              Electronics, Computer Architecture, Circuit design, Sensors,
              Wireless Communication/Signals, Signal Processing, Semiconductors,
              Control Systems
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
