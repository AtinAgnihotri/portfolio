import React from "react";

import styled from "styled-components";

import ProfileSection from "../sections/profileheader/profile-header.section";
import PortfolioList from "../sections/porfoliolist/portfolio-list.section";
import { NavBar, NavBarItem } from "../components/navbar.component";

// background-color: var(--text-color);
// color: var(--text-color);
const LineBreak = styled.hr`
  border-color: var(--text-color);
`;

const PortfolioScreen = ({ projects = [] }) => {
  console.log("Projects", projects);
  const hasProjects = projects.length !== 0;
  return (
    <>
      <ProfileSection />
      <LineBreak />
      {hasProjects && <PortfolioList projects={projects} />}
    </>
  );
};

export default PortfolioScreen;
