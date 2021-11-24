import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: var(--bg);
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
`;

//border: var(--border);
//box-shadow: rgba(100, 100, 100, 0.5) 0px 2px 4px 4px;
// background-color: var(--bg-accent);
export const ProfileBlobContainer = styled.div`
  background-color: var(--bg);
  padding: 1rem;
  border-radius: 10px;
  color: var(--text-color);
  justify-content: center;
  text-align: center;
  width: 70%;
`;

// box-shadow: rgba(100, 100, 100, 0.5) 2px 4px 8px;
export const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  margin-top: 4rem;
  border: var(--border);
`;

// justify-content: left;
//  text-align: left;
export const ProfileBody = styled.p``;

export const ProfileHeading = styled.h1`
  padding: 0;
`;
