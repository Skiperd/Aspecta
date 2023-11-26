import React from 'react';
import styled from 'styled-components';

const OptionsHeader = styled.a`
  background-color: #b8a8ff;
  font-family: Montserrat, Arial;
  font-size: 1.25rem;
  padding: 0.3125rem 1.25rem;
  border-radius: 1.562rem;
  cursor: pointer;

  &:hover {
    background-color: #7452ff;
  }
`;

const Links = ({ link }) => {
  return <OptionsHeader>{link}</OptionsHeader>;
};

export default Links;
