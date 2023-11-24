import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 90rem;
  text-align: center;
  margin: 0 auto;
`;

const GridContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GridContent;
