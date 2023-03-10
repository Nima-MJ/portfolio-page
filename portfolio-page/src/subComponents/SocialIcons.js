import React from "react";
import { NavLink } from "react-router-dom";
import { Email, Github, LinkedIn, Resume } from "../components/AllSvg";
import styled from "styled-components";
import pdf from "../assets/Resume.pdf";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.7rem 0;
  }
`;

const Line = styled.span`
  width: 3px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(pdf, "_blank");
          }}
        >
          <Resume
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/Nima-MJ", "_blank");
          }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/nima-mehrjoo/", "_blank");
          }}
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:nmehrjoo1999@gmail.com";
            e.preventDefault();
          }}
        >
          <Email
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
