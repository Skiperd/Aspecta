import React from 'react';
import styled from 'styled-components';
import AccessibilityIcon from '../AccessibilityIcon/AccessibilityIcon';
import Acessibilidade from '../../assets/img/Acessibilidade.svg';
import Acessibilidade2 from '../../assets/img/Acessibilidade2.svg';

const NavMenu = styled.nav`
  display: flex;
  gap: 2.25rem;
`;

const AcessibilityMenu = () => {
  return (
    <NavMenu>
      <AccessibilityIcon Icon={Acessibilidade} />
      <AccessibilityIcon Icon={Acessibilidade2} />
    </NavMenu>
  );
};

export default AcessibilityMenu;
