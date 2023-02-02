import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 32rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;
  margin: auto;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: ${(props) => props.size};
  border: 1px solid transparent;
  background-position: center center;
  background-repeat: no-repeat;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const ProjectName = styled.div`
  color: inherit;
  font-weight: 900;
  font-family: "Verdana", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const ProjectComponent = (props) => {
  const { name, description, tags, date, imgSrc, link, size } = props.blog;
  return (
    <Box target="_blank" to={{ pathname: link }}>
      <ProjectName>{name}</ProjectName>
      <Image img={imgSrc} size={size} />
      <Title>{description}</Title>
      <HashTags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </Box>
  );
};

export default ProjectComponent;
