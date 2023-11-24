import React from 'react';
import styled from 'styled-components';
import Links from '../Links/Links';

const NavLinks = styled.nav`
  display: flex;
  gap: 2.25rem;
`;

const MenuLinks = () => {
  return (
    <NavLinks>
      <Links link={'Home'} />
      <Links link={'Sobre'} />
      <Links link={'Preço'} />
      <Links link={'Contato'} />
      <Links link={'Login'} />
      <Links link={'Cadastre-se'} />
    </NavLinks>
  );
};

export default MenuLinks;
