import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import BackToLogin from '../BackToLogin/BackToLogin';
import Links from '../Links/Links';
import alerta from '../../assets/img/Parental1/alerta.svg';
import atualizaçoes from '../../assets/img/Parental1/atualizações.svg';
import contrato from '../../assets/img/Parental1/contrato.svg';
import dispositivo from '../../assets/img/Parental1/dispositivo.svg';
import sair from '../../assets/img/Parental1/sair.svg';
import suporte from '../../assets/img/Parental1/suporte.svg';
import pagamento from '../../assets/img/Parental1/pagamentos.svg';
import user from '../../assets/img/Parental1/user.png';
import UserImg from '../UserImg/UserImg';

const StyledRectangle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  /* align-items: left; */
  max-width: 28.5rem;
  height: 55.5rem;
  background-color: #7452ff;
  border-radius: 0 1.56rem 1.56rem 0;
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

const FlexDisplay = styled.div`
  display: flex;
  padding: 0.6rem;
`;

const LogoPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Reactangle = () => {
  return (
    <StyledRectangle>
      <LogoPosition>
        <Logo />
        <UserImg link={user} />
        <p style={{ color: 'white' }}>Nivaldo Ferreira</p>
      </LogoPosition>
      <FlexDisplay>
        <img src={pagamento} alt="Icone de Pagamento" />
        <Links
          link="Pagamentos"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={atualizaçoes} alt="Icone de atualizaçoes" />
        <Links
          link="Atualizações"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={contrato} alt="Icone de contrato" />
        <Links
          link="Contrato"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={dispositivo} alt="Icone de dispositivo" />
        <Links
          link="Meus Dispositivos"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={alerta} alt="Icone de alerta" />
        <Links
          link="Alertas"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={suporte} alt="Icone de suporte" />
        <Links
          link="Suporte"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={sair} alt="Icone de sair" />
        <Links
          link="Log Out"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
    </StyledRectangle>
  );
};

export default Reactangle;
