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
        <Links link={'Home'} />
      </NavLink>
      <Links link={'Sobre'} />
      <Links link={'Preço'} />
      <Links link={'Contato'} />
      <NavLink className="LinkStyle" to="/SignIn">
        <Links link={'Login'} />
      </NavLink>
      <NavLink className="LinkStyle" to="/SignUp">
        <Links link={'Cadastre-se'} />
      </NavLink>
    </Navigation>
  );
};

export default MenuLinks;
