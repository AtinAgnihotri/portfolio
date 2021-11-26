import styled from "styled-components";
import camelize from "camelize";
import { v4 as uuidv4 } from "uuid";

export const PortfolioListContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const BasePortfolioItemContainer = styled.div`
  background-color: var(--bg-accent);
  border-radius: var(--border-radius);
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 2rem;
  padding: 2rem;
`;

const LongPorfolioItemContainer = styled(BasePortfolioItemContainer)`
  align-items: flex-start;
`;

const ShortPorfolioItemContainer = styled(BasePortfolioItemContainer)`
  align-items: center;
`;

const ProjectImage = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: cover;
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

// align-items: flex-start;
const TechTagContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

const TechTag = styled.p`
  background-color: var(--bg);
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: var(--border-radius);
  display: inline;
`;

const ShortPortfolioHeading = styled.h1`
  color: var(--text-color);
  margin: 2rem;
`;

export const TechTagsBox = ({ technologies }) => (
  <TechTagContainer>
    {technologies.map((tech) => (
      <TechTag key={uuidv4()}>{tech}</TechTag>
    ))}
  </TechTagContainer>
);

const Description = styled.p`
  text-align: left;
`;

const ItemDescription = ({ project, isLeft }) => {
  const {
    heading,
    description,
    technologies,
    githubLink,
    publicLink,
    publicLinkCallout,
    longItem,
  } = project;
  return (
    <PortfolioDescriptionContainer>
      {longItem && <h2>{heading}</h2>}
      <TechTagsBox technologies={technologies} />
      <br />
      <Description isLeft={isLeft}>{description}</Description>

      <Description>
        {publicLink && (
          <>
            {" Check it out on "}
            <a href={publicLink} target="_blank" rel="noreferrer">
              {publicLinkCallout}
            </a>
            {" and "}
          </>
        )}
        {publicLink ? "f" : "F"}
        ind the{" "}
        <a href={githubLink} target="_blank" rel="noreferrer">
          github repo
        </a>{" "}
        here.
      </Description>
    </PortfolioDescriptionContainer>
  );
};

export const PortfolioItem = ({ project, isLeft }) => {
  const formattedProject = camelize(project);
  const image = formattedProject.image;

  return (
    <LongPorfolioItemContainer>
      {isLeft && image && <ProjectImage src={image} />}
      <ItemDescription project={formattedProject} isLeft={isLeft} />
      {!isLeft && image && <ProjectImage src={image} />}
    </LongPorfolioItemContainer>
  );
};

export const ShortPortfolioItem = ({ project, isLeft }) => {
  const formattedProject = camelize(project);
  const heading = formattedProject.heading;

  return (
    <ShortPorfolioItemContainer>
      {isLeft && <ShortPortfolioHeading>{heading}</ShortPortfolioHeading>}
      <ItemDescription project={formattedProject} />
      {!isLeft && <ShortPortfolioHeading>{heading}</ShortPortfolioHeading>}
    </ShortPorfolioItemContainer>
  );
};
