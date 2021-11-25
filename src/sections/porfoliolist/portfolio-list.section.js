import React, { useRef } from "react";
import camelize from "camelize";

import {
  PortfolioItem,
  ShortPortfolioItem,
  PortfolioListContainer,
} from "./portfolio-list.styles";

const PortfolioList = ({ projects }) => {
  const isLeft = useRef(false);
  return (
    <PortfolioListContainer>
      {projects.map((proj) => {
        isLeft.current = !isLeft.current;
        const project = camelize(proj);
        const { longItem, heading } = project;
        return longItem ? (
          <PortfolioItem
            project={project}
            key={heading}
            isLeft={isLeft.current}
          />
        ) : (
          <ShortPortfolioItem
            project={project}
            key={heading}
            isLeft={isLeft.current}
          />
        );
      })}
    </PortfolioListContainer>
  );
};

export default PortfolioList;
