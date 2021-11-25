import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";

import ProfileSection from "../sections/profileheader/profile-header.section";
import PortfolioList from "../sections/porfoliolist/portfolio-list.section";
import { NavBar, NavBarItem } from "../components/navbar.component";

// background-color: var(--text-color);
// color: var(--text-color);
const LineBreak = styled.hr`
  border-color: var(--text-color);
`;

const RightNavBarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const PortfolioScreen = ({ projects = [] }) => {
  console.log("Projects", projects);
  const hasProjects = projects.length !== 0;
  return (
    <>
      <NavBar>
        <NavBarItem text="Contact" link="https://atinagnihotri.com/contact/" />
        <NavBarItem text="Site" link="https://atinagnihotri.com/" />
        <RightNavBarItems>
          <NavBarItem
            icon={<FaGithub />}
            link="https://github.com/AtinAgnihotri"
          />
          <NavBarItem
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/atin-agnihotri/"
          />
          <NavBarItem
            icon={<FaTwitter />}
            link="https://twitter.com/AgnihotriAtin"
          />
          <NavBarItem
            icon={<AiOutlineMail />}
            link="mailto://atinagnihotri@gmail.com"
          />
        </RightNavBarItems>
      </NavBar>
      <ProfileSection />
      <LineBreak />
      {hasProjects && <PortfolioList projects={projects} />}
    </>
  );
};

export default PortfolioScreen;
