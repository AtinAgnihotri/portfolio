import React from "react";
import { PortfolioItem, PortfolioListContainer } from "./portfolio-list.styles";

const PortfolioList = ({ projects }) => {
  return (
    <PortfolioListContainer>
      {projects.map((project) => {
        return <PortfolioItem project={project} key={project.name} />;
      })}
    </PortfolioListContainer>
  );
};

export default PortfolioList;
