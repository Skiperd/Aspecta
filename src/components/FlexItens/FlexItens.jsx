import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.25rem;
`;

const FlexItens = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default FlexItens;
