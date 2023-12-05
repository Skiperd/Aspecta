import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const OptionsHeader = styled.a`
  background-color: ${(props) => props.background};
  text-decoration: none;
  color: ${(props) => props.color};
  font-family: Montserrat, Arial;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  /* padding: 0.3125rem 1.25rem; */
  border-radius: ${(props) => props.radius};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Links = ({ background, color, radius, padding, fontSize, link }) => {
  return (
    <OptionsHeader
      padding={padding}
      fontSize={fontSize}
      radius={radius}
      color={color}
      background={background}
    >
      {link}
    </OptionsHeader>
  );
};

export default Links;
