import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 13.062rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  background-color: #7452ff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Button = () => {
  return <ButtonStyle>Explorar Recusos &#10132; </ButtonStyle>;
};

export default Button;
