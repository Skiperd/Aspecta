import React from 'react';
import styled from 'styled-components';
import SectionGrid from '../SectionGrid/SectionGrid';
import Button from '../Button/Button';
import PlayContent from '../PlayContent/PlayContent';

const ContentSection = styled.section`
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-family: Montserrat, Arial;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.65rem;
  max-width: 15ch;
  text-align: left;
  margin-top: 6.625rem;
  margin-left: 2rem;
`;

const P = styled.p`
  font-family: Montserrat, Arial;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.21rem;
  text-align: left;
`;

const SectionContent = () => {
  return (
    <ContentSection>
      <H1>Escola online interativa</H1>
      <P>Desenvolvendo e educando crianças de forma lúdica</P>
      <SectionGrid>
        <Button />
        <PlayContent />
      </SectionGrid>
    </ContentSection>
  );
};

export default SectionContent;
