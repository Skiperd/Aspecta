import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import matematica from '../../assets/img/matematicas2.png';
import redirecionar from '../../assets/img/redirecionar.png';
import relogio from '../../assets/img/relogio.png';

const DivStyled = styled.div`
  margin-left: 2rem;
  width: 400px;
  height: 280px;
  background: #d8ccfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  margin-top: 12rem;
`;

const Section = styled.section`
  width: 360px;
  display: flex;
  border-radius: 10px;
  background-color: white;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h2`
  font-family: MontSerrat, Arial;
  font-size: 1rem;
  font-weight: 400;
`;

const Paragraph = styled.p`
  font-family: MontSerrat, Arial;
  font-weight: 400;
  font-size: 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Progess = () => {
  return (
    <DivStyled>
      <Text>Seu Progresso</Text>
      <Section>
        <StyledDiv>
          <StyledFlex>
            <ImageComponent
              link={matematica}
              height="15px"
              width="15px"
              alt="matematica"
            />
            <Text>25/100</Text>
          </StyledFlex>
          <Paragraph>Consulte suas tarefas concluídas</Paragraph>
        </StyledDiv>
        <ImageComponent
          link={redirecionar}
          height="30px"
          width="30px"
          alt="Link"
        />
      </Section>
      <Section>
        <StyledDiv>
          <StyledFlex>
            <ImageComponent
              link={relogio}
              height="15px"
              width="15px"
              alt="matematica"
            />
            <Text>23H 45 Min</Text>
          </StyledFlex>
          <Paragraph>Consulte suas tarefas concluídas</Paragraph>
        </StyledDiv>
        <ImageComponent
          link={redirecionar}
          height="30px"
          width="30px"
          alt="Link"
        />
      </Section>
    </DivStyled>
  );
};

export default Progess;
