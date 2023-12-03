import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import LoginImg from '../../assets/img/Icone-login.svg';
import EmailImg from '../../assets/img/Icone-email.svg';
import CadeadoImg from '../../assets/img/Icone-cadeado.svg';
import BrasilImg from '../../assets/img/Icone-brasil.svg';
import Button from '../Button/Button';
import Book from '../../assets/img/bookSignUp.svg';
import { Link } from 'react-router-dom';

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 55.875rem;
  padding: 4rem 0rem;

  &::before {
    content: '';
    position: absolute;
    top: 208px;
    left: -445px;
    transform: rotate(10deg);
    height: 480px;
    width: 535px;
    background-image: url(${Book});
  }
`;

const Title = styled.h2`
  font-family: MontSerrat, Arial;
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  max-width: 30ch;
`;

const StyleDiv = styled.div`
  box-sizing: border-box;
  max-width: 20rem;
  /* padding: 1rem 0rem; */
  display: flex;
  flex-direction: column;

  h2 {
  }

  p {
    font-family: Montserrat, Arial;
    font-size: 12px;
    font-weight: 500;
    max-width: 100%;
  }

  button {
  }

  .politics {
    color: #7452ff;
    margin: 0 0.14rem;
    cursor: pointer;
  }
`;

const Form = () => {
  return (
    <Container>
      <Title>
        Comece agora seu cadastro, e junte-se a nós para uma nova aventura!
      </Title>
      <StyleDiv>
        <Input
          type="text"
          id="name"
          placeholder="*Nome completo"
          link={LoginImg}
          height="50px"
          width="50px"
          alt="Icone usuário"
        />
        <Input
          type="email"
          id="email"
          placeholder="*Seu melhor @e-mail"
          link={EmailImg}
          height="50px"
          width="50px"
          alt="Icone email"
        />
        <Input
          type="password"
          id="password"
          placeholder="*Senha"
          link={CadeadoImg}
          height="50px"
          width="50px"
          alt="Icone Senha"
        />
        <Input
          type="tel"
          id="tel"
          placeholder="+55 (99) 99999-9999"
          link={BrasilImg}
          height="50px"
          width="50px"
          alt="Bandeira Brasil"
        />
        <Link to="http://127.0.0.1:5500/src/pages/ExternalPage/teste-aprendizado-master/index.html">
          <Button 
            width="100%"
            height="3rem"
            text="Criar minha conta grátis"
            background="#A4A4A4"
          />
        </Link>
        <p>
          Ao clicar em “Criar minha conta grátis ”, declaro que aceito as
          <span className="politics">Políticas de Privacidade</span> e os
          <span className="politics">Termos de Uso</span> da ASPECTA.
        </p>
        <p>
          Já tenho conta <span className="politics">Fazer login</span>
        </p>
      </StyleDiv>
    </Container>
  );
};

export default Form;
