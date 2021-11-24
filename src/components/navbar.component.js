import React from "react";
import styled from "styled-components";

const BaseNavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--bg);
  height: var(--nav-size);
  padding: 0 1rem;
  border-bottom: var(--border);
`;

const NavBarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
`;

const NavBarItemContainer = styled.li`
  width: calc(var(--nav-size) * 0.8);
  height: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-accent);
  border-radius: 50%;
  margin: calc(var(--nav-size) * 0.1);
`;

export const NavBarItem = ({ icon }) => {
  return <NavBarItemContainer>{icon}</NavBarItemContainer>;
};

export const NavBar = ({ children }) => {
  return (
    <BaseNavBar>
      <NavBarList>{children}</NavBarList>
    </BaseNavBar>
  );
};
