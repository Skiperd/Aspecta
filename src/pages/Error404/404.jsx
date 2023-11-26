import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: red;
    text-align: center;
    font-size: 5rem;
  }
  p {
    text-align: center;
    font-size: 2rem;
  }
  .button {
  }
`;

const Error404 = () => {
  return (
    <Section>
      <h1>404</h1>
      <p>Desculpe, A Página que você está procurando não existe</p>
      <NavLink to="/">
        <Button
          className="button"
          text="Voltar para HOME"
          background="#7452ff"
          height="2rem"
          width="15rem"
        />
      </NavLink>
    </Section>
  );
};

export default Error404;
