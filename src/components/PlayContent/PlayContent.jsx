import React from 'react';
import styled from 'styled-components';
import Play from '../Play/Play';

const ContentPlay = styled.span`
  display: flex;
  align-items: center;
  gap: 0.43rem;
`;

const PlayContent = () => {
  return (
    <ContentPlay>
      <p>Assista aos videos</p>
      <Play />
    </ContentPlay>
  );
};

export default PlayContent;
