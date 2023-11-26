import React from 'react';
import styled from 'styled-components';
import Links from '../Links/Links';
import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import AcessibilityMenuSignUp from '../AcessibilityMenuSignUp/AcessibilityMenuSignUp';

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function Header() {
  return (
    <TagHeader>
      <AcessibilityMenuSignUp />
      <MenuLinks />
    </TagHeader>
  );
}

export default Header;
