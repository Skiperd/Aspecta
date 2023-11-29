import React from 'react';
import styled from 'styled-components';
import GridContent from '../../components/GridContent/GridContent';

const Text = styled.h1`
  margin: 0 5rem;
  padding: 2rem;
  text-align: left;
  font-family: Montserrat, Arial;
  font-size: 2rem;
  color: #ffffff;
  text-decoration: underline;
`;

const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  background: #7452ff;
  border-radius: 25px;

  p {
    font-family: Montserrat, Arial;
    padding: 2rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    width: 85%;
    height: 5px;
    background-color: white;
    left: 50px;
    bottom: 42px;
  }
  &::after {
    content: '';
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 35px solid white;
    transform: rotate(90deg);
    left: 1128px;
    bottom: 28px;
    cursor: pointer;
  }
`;

const Info = () => {
  return (
    <GridContent>
      <Section>
        <Text>Questionário de Aptidão</Text>
        <p>
          Você encontrará 12 perguntas, cada uma com quatro campos de resposta.
          Classifique cada campo de forma a retratar a maneira como você age ao
          ter que aprender algo. Procure recordar de algumas situações recentes
          que você teve que aprender algo novo.
        </p>
        <p>
          Classifique com 4 o complemento de perguntas que caracteriza como você
          aprende melhor, decrescendo até indicar 1 para o complemento da
          pergunta que caracteriza a maneira menos provável de como você aprende
          algo. Assegure-se de responder todas as perguntas
        </p>
      </Section>
    </GridContent>
  );
};

export default Info;
