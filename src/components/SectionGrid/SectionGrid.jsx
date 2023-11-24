import React from 'react';
import styled from 'styled-components';

const GridSection = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1220px;
  margin: 0 auto;
`;

const SectionGrid = ({ children }) => {
  return <GridSection>{children}</GridSection>;
};

export default SectionGrid;
