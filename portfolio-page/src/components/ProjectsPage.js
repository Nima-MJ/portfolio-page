import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Projects } from "../data/ProjectsData";
import ProjectComponent from "./ProjectComponent";
import AnchorComponent from "../subComponents/Anchor";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100vw;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(16rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const SectionBreak = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 5px solid #000;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 30px;
`;

const SectionName = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  font-size: 30px;
  padding-right: 20px;
`;

const ProjectsPage = () => {
  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Projects.map((blog, index) => {
              return (
                <>
                  {blog.id === 100 && (
                    <SectionBreak>
                      <SectionName>
                        {blog.id === 100
                          ? blog.name
                          : `Section ${index}`}
                      </SectionName>
                    </SectionBreak>
                  )}
                  {blog.id === 101 && <SectionName></SectionName>}
                  {blog.id !== 100 && blog.id !== 101 && <ProjectComponent key={blog.id} blog={blog} />}
                </>
              );
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default ProjectsPage;
