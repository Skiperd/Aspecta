import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100vw;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
`;

const GridContent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GridContent;
