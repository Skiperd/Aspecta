import React from 'react';
import styled from 'styled-components';
import Links from '../Links/Links';
import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import AcessibilityMenu from '../AcessibilityMenu/AcessibilityMenu';

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function Header() {
  return (
    <TagHeader>
      <Logo />
      <MenuLinks />
      <AcessibilityMenu />
    </TagHeader>
  );
}

export default Header;
