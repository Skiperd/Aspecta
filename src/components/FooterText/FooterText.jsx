import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import Book from '../../assets/img/book.svg';
import Lego from '../../assets/img/lego.svg';
import Trofeu from '../../assets/img/trofeu.svg';
import MinhaImage from '../../assets/img/image-1.svg';
import MinhaImage2 from '../../assets/img/image-2.svg';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: -160px;
    left: -260px;
    transform: rotate(-14deg);
    height: 320px;
    width: 320px;
    /* background-color: red; */
    background-image: url(${MinhaImage});
  }

  &::after {
    content: '';
    position: absolute;
    top: -119px;
    left: 589px;
    transform: rotate(0deg);
    height: 320px;
    width: 320px;
    /* background-color: red; */
    background-image: url(${MinhaImage2});
  }
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const FooterItensFlex = styled.div`
  display: flex;
`;

const FooterItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  img {
    height: 70px;
    width: 70px;
  }

  p {
    font-family: MontSerrat, Arial;
    font-weight: 600;
    font-size: 12px;
    max-width: 25ch;
    color: white;
  }

  &:nth-child(1),
  &:nth-child(2) {
    border-right: 1px solid #fff;
  }
`;

const Paragraph = styled.p`
  font-family: Montserrat, Arial;
  font-weight: 400;
  font-size: 0.9rem;
  color: #ffffff;
  margin: 1.56rem 0 0 0;
`;

const H1 = styled.h1`
  font-family: Montserrat, Arial;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0;
`;

const FooterText = () => {
  return (
    <Container>
      <FooterFlex>
        <Paragraph>Sobre nós</Paragraph>
        <H1>Por que escolher nossa escola?</H1>
      </FooterFlex>
      <FooterItensFlex>
        <FooterItens>
          <ImageComponent link={Book} />
          <p>Individual</p>
          <p>
            O Programa visa facilitar o aprendizado, focando na forma que o
            aluno se desenpenha m elhor nas aulas.
          </p>
        </FooterItens>
        <FooterItens>
          <ImageComponent link={Lego} />
          <p>Forma lúdica</p>
          <p>
            Motivamos as crianças a estudar com varias formas didaticas, visando
            a melhor forma de ensino interativo.
          </p>
        </FooterItens>
        <FooterItens>
          <ImageComponent link={Trofeu} />
          <p>Sistema de Recompensa</p>
          <p>
            Motivamos as crianças a estudar com a ajuda do jogos. Criando um
            sistema que recompensa os alunos a baterem objetivos mensal
          </p>
        </FooterItens>
      </FooterItensFlex>
    </Container>
  );
};

export default FooterText;
