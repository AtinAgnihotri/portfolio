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
  flex-direction: row;
`;

const NavBarItemContainer = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-accent);
  color: var(--text-color);
  border-radius: var(--border-radius);
  margin: calc(var(--nav-size) * 0.1);
`;

const NavBarItemTouchable = styled.a`
  text-decoration: none;
`;

export const NavBarItem = ({ icon, text, link, onPress }) => {
  return (
    <NavBarItemContainer>
      <NavBarItemTouchable
        href={link}
        onClick={() => {
          if (onPress) {
            onPress();
          }
        }}
      >
        {icon}
        {text}
      </NavBarItemTouchable>
    </NavBarItemContainer>
  );
};

export const NavBar = ({ children }) => {
  return (
    <BaseNavBar>
      <NavBarList>{children}</NavBarList>
    </BaseNavBar>
  );
};
