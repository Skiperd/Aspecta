import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import matematica from '../../assets/img/matematicas2.png';
import redirecionar from '../../assets/img/redirecionar.png';
import relogio from '../../assets/img/relogio.png';

const DivStyled = styled.div`
  margin-left: 2rem;
  background: #d8ccfc;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 12rem;
`;

const Section = styled.section`
  width: 300px;
  display: flex;
  border-radius: 10px;
  /* background-color: white; */
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h2`
  font-family: MontSerrat, Arial;
  font-size: 1rem;
  font-weight: 400;
`;
const Progess = () => {
  return (
    <DivStyled>
      <Text>Seu progesso</Text>
      <Section>
        <ImageComponent
          link={matematica}
          height="15px"
          width="15px"
          alt="matematica"
        />
        <Text>25/100</Text>
        <ImageComponent
          link={redirecionar}
          height="30px"
          width="30px"
          alt="Link"
        />
      </Section>
      <Section>
        <ImageComponent
          link={relogio}
          height="15px"
          width="15px"
          alt="matematica"
        />
        <Text>23H 45 Min</Text>
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
