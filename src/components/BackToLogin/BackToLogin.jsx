import React from 'react';
import styled from 'styled-components';

const Section = styled.p`
  p {
    font-family: MontSerrat, Arial;
    font-weight: 600;
    font-size: 1.25rem;
    color: white;
    text-align: left;
    padding: 1.4rem;
    cursor: pointer;
  }
`;

const BackToLogin = () => {
  return (
    <Section>
      <p>VOLTAR PARA LOGIN</p>
    </Section>
  );
};

export default BackToLogin;
