import React, { useRef } from "react";
import { PortfolioItem, PortfolioListContainer } from "./portfolio-list.styles";

const PortfolioList = ({ projects }) => {
  const isLeft = useRef(false);
  return (
    <PortfolioListContainer>
      {projects.map((project) => {
        isLeft.current = !isLeft.current;
        return (
          <PortfolioItem
            project={project}
            key={project.name}
            isLeft={isLeft.current}
          />
        );
      })}
    </PortfolioListContainer>
  );
};

export default PortfolioList;
