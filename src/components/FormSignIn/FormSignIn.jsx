import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import LoginImg from '../../assets/img/Icone-login.svg';
import EmailImg from '../../assets/img/Icone-email.svg';
import CadeadoImg from '../../assets/img/Icone-cadeado.svg';
import BrasilImg from '../../assets/img/Icone-brasil.svg';
import Button from '../Button/Button';
import Book from '../../assets/img/SignIn.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  max-width: 55.875rem;
  /* padding: 0rem 2rem; */

  &::before {
    content: '';
    position: absolute;
    top: 406px;
    left: -610px;
    transform: rotate(7deg);
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
  margin-bottom: 80px;
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
    margin-top: 50px;
  }

  .politics {
    color: #7452ff;
    margin: 0 0.14rem;
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0rem 1rem;
`;

const FormSignIn = () => {
  return (
    <Container>
      <Title>Já tem cadastro?</Title>
      <StyleDiv>
        <Input
          type="email"
          id="email"
          placeholder="Endereço de Email"
          link={EmailImg}
          height="50px"
          width="50px"
          alt="Icone email"
        />
        <Input
          type="password"
          id="password"
          placeholder="Senha"
          link={CadeadoImg}
          height="50px"
          width="50px"
          alt="Icone Senha"
        />
        <Link to="http://127.0.0.1:5500/src/pages/ExternalPage/teste-aprendizado-master/index.html">
          <Button width="100%" height="3rem" text="Entrar" background="#7452FF" />
        </Link>    
        <Text>
          <p>
            <span className="politics">Esqueci minha senha</span>
          </p>
          <p>Criar conta</p>
        </Text>
      </StyleDiv>
    </Container>
  );
};

export default FormSignIn;
