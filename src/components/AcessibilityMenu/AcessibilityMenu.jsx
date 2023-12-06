import React from 'react';
import styled from 'styled-components';
import AccessibilityIcon from '../AccessibilityIcon/AccessibilityIcon';
import Acessibilidade from '../../assets/img/Acessibilidade.svg';
import Acessibilidade2 from '../../assets/img/Acessibilidade2.svg';
import Acessibilidade4 from '../../assets/img/Acessibilidade4.svg';

const NavMenu = styled.nav`
  display: flex;
  /* gap: 2.25rem; */
`;

const AcessibilityMenu = () => {
  return (
    <NavMenu>
      <AccessibilityIcon Icon={Acessibilidade4} />
      <AccessibilityIcon Icon={Acessibilidade2} />
      <AccessibilityIcon Icon={Acessibilidade} />
    </NavMenu>
  );
};

export default AcessibilityMenu;
