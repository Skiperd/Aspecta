import React, { useState } from 'react';
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
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');

  console.log(usuario);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tel: '',
  });
  console.log();
  const [buttonColor, setButtonColor] = useState('#A4A4A4');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== '',
    );

    setButtonColor(allFieldsFilled ? '#7452ff' : '#A4A4A4');
  };

  const handleCreateAccount = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('Dados salvos:', formData);
  };

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
          onChange={handleChange}
        />
        <Input
          type="email"
          id="email"
          placeholder="*Seu melhor @e-mail"
          link={EmailImg}
          height="50px"
          width="50px"
          alt="Icone email"
          onChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          placeholder="*Senha"
          link={CadeadoImg}
          height="50px"
          width="50px"
          alt="Icone Senha"
          onChange={handleChange}
        />
        <Input
          type="tel"
          id="tel"
          placeholder="(99)99999-9999"
          link={BrasilImg}
          height="50px"
          width="50px"
          alt="Bandeira Brasil"
          onChange={handleChange}
        />
        <Link to="/SignIn">
          <Button
            width="100%"
            height="3rem"
            text="Criar minha conta grátis"
            background={buttonColor}
            onClick={handleCreateAccount}
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
