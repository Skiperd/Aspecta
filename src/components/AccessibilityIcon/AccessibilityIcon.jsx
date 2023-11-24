import React from 'react';
import styled from 'styled-components';

const Acessbility = styled.img`
  height: 3.125rem;
  width: 3.125rem;
  cursor: pointer;
`;

const AccessibilityIcon = ({ Icon }) => {
  return <Acessbility src={Icon} alt="Botão de Acessibilidade"></Acessbility>;
};

export default AccessibilityIcon;
