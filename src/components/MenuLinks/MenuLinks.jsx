import React from 'react';
import styled from 'styled-components';
import Links from '../Links/Links';
import { NavLink } from 'react-router-dom';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.25rem;

  .LinkStyle {
    text-decoration: none;
  }
`;

const MenuLinks = () => {
  return (
    <Navigation>
      <NavLink className="LinkStyle" to="/">
        <Links
          link={'Home'}
          radius="1.562rem"
          padding="0.3125rem 1.25rem"
          fontSize="1.25rem"
          color="black"
          background="#b8a8ff"
        />
      </NavLink>
      <Links
        link={'Sobre'}
        radius="1.562rem"
        padding="0.3125rem 1.25rem"
        fontSize="1.25rem"
        color="black"
        background="#b8a8ff"
      />
      <Links
        link={'Preço'}
        radius="1.562rem"
        padding="0.3125rem 1.25rem"
        fontSize="1.25rem"
        color="black"
        background="#b8a8ff"
      />
      <Links
        link={'Contato'}
        radius="1.562rem"
        padding="0.3125rem 1.25rem"
        fontSize="1.25rem"
        color="black"
        background="#b8a8ff"
      />
      <NavLink className="LinkStyle" to="/SignIn">
        <Links
          link={'Login'}
          radius="1.562rem"
          padding="0.3125rem 1.25rem"
          fontSize="1.25rem"
          color="black"
          background="#b8a8ff"
        />
      </NavLink>
      <NavLink className="LinkStyle" to="/SignUp">
        <Links
          link={'Cadastre-se'}
          radius="1.562rem"
          padding="0.3125rem 1.25rem"
          fontSize="1.25rem"
          color="black"
          background="#b8a8ff"
        />
      </NavLink>
    </Navigation>
  );
};

export default MenuLinks;
