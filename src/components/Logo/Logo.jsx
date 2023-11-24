import React from 'react';
import styled from 'styled-components';
import Aspecta from '../../assets/img/Aspecta.svg';

const LogoIcon = styled.img`
  width: 16.937rem;
  height: 12.562rem;
`;

const Logo = () => {
  return <LogoIcon src={Aspecta} alt="Logo com nome da Aspecta"></LogoIcon>;
};

export default Logo;
