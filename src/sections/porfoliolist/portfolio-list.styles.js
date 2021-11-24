import styled from "styled-components";
import camelize from "camelize";

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

export const PortfolioItem = ({ project, isLeft }) => {
  const {
    heading,
    image,
    description,
    technologies,
    githubLink,
    publicLink,
    publicLinkCallout,
  } = camelize(project);

  const ItemImage = () => <ProjectImage src={image} />;
  return (
    <PorfolioItemContainer>
      {isLeft && image && <ProjectImage src={image} />}
      <PortfolioDescriptionContainer>
        <h2>{heading}</h2>
        <TechTagContainer>
          {technologies.map((tech) => (
            <TechTag>{tech}</TechTag>
          ))}
        </TechTagContainer>
        <br />
        <p>{description}</p>

        <p>
          {publicLink && (
            <>
              {" Check it out on "}
              <a href={publicLink} target="_blank" rel="noreferrer">
                {publicLinkCallout}
              </a>
              {" and "}
            </>
          )}
          {publicLink ? "c" : "C"}
          heck out the{" "}
          <a href={githubLink} target="_blank" rel="noreferrer">
            github repo
          </a>
          .
        </p>
      </PortfolioDescriptionContainer>
      {!isLeft && image && <ProjectImage src={image} />}
    </PorfolioItemContainer>
  );
};
