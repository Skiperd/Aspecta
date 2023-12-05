import React from 'react';
import styled from 'styled-components';
import Aspecta from '../../assets/img/Aspecta_white.svg';

const LogoIcon = styled.img`
  width: 16.937rem;
  height: 12.562rem;
`;

const LogoWhite = () => {
  return <LogoIcon src={Aspecta} alt="Logo com nome da Aspecta"></LogoIcon>;
};

export default LogoWhite;
