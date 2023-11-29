import React from 'react';
import styled from 'styled-components';
import GridContent from '../../components/GridContent/GridContent';
import ReactangleLog from '../../components/ReactangleLog/ReactangleLog';
import ParentalContent from '../../components/ParentalContent/ParentalContent';

const FlexDisplay = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Log = () => {
  return (
    <GridContent>
      <FlexDisplay>
        <ReactangleLog />
        <ParentalContent />
      </FlexDisplay>
    </GridContent>
  );
};

export default Log;
