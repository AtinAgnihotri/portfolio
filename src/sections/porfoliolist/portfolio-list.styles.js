import styled from "styled-components";

export const PortfolioListContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const PorfolioItemContainer = styled.div`
  background-color: var(--bg-accent);
  border-radius: var(--border-radius);
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 2rem;
  padding: 2rem;
`;

const ProjectImage = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: fill;
  border: var(--border);
  border-radius: var(--border-radius);
  margin: 2rem;
`;

const PortfolioDescriptionContainer = styled.div`
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  align-items: center;
  margin: 2rem;
`;

const TechTagContainer = styled.div`
  flex-direction: "row";
  flex-wrap: "wrap";
  flex: 1;
  align-items: "flex-start";
`;

const TechTag = styled.p`
  color: var(--bg);
`;

export const PortfolioItem = ({ project }) => {
  const { heading, image, description } = project;
  return (
    <PorfolioItemContainer>
      {image && <ProjectImage src={image} />}
      <PortfolioDescriptionContainer>
        <h2>{heading}</h2>
        <p>{description}</p>
        <br />
        <TechTagContainer></TechTagContainer>
        <p>Check out the github link</p>
      </PortfolioDescriptionContainer>
    </PorfolioItemContainer>
  );
};
