import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import BackToLogin from '../BackToLogin/BackToLogin';

const StyledRectangle = styled.div`
  max-width: 28.5rem;
  height: 55.5rem;
  background-color: #7452ff;
  border-radius: 1.56rem 0 0 1.56rem;
  word-wrap: break-word;
  overflow: hidden;
  box-sizing: border-box;

  .paragraph {
    font-family: Montserrat, Arial;
    font-size: 2.5rem;
    color: white;
    font-weight: 700;
    text-align: left;
    padding: 1.4rem;
  }
`;

const RectangleLog = () => {
  return (
    <StyledRectangle>
      <Logo />
      <p className="paragraph">
        A plataforma para você aprender com os melhores tutores, para um melhor
        aprendizado
      </p>
      <BackToLogin />
    </StyledRectangle>
  );
};

export default RectangleLog;
