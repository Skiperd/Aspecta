import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* width: 13.062rem;
  height: 3.125rem; */
  border-radius: 3.125rem;
  background-color: ${(props) => props.background};
  color: white;
  border: none;
  cursor: pointer;
`;

const Button = ({ text, background, width, height }) => {
  return (
    <ButtonStyle background={background} width={width} height={height}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
