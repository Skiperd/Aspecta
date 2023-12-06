import React from 'react';
import styled from 'styled-components';
import LogoWhite from '../Logo_white/Logo_white';
import BackToLogin from '../BackToLogin/BackToLogin';
import Links from '../Links/Links';
import Analitico from '../../assets/img/Analitico.svg';
import Horario from '../../assets/img/Calendarioicone.svg';
import Cursos from '../../assets/img/IconeCursos.svg';
import Videos from '../../assets/img/IconePlayer.svg';
import sair from '../../assets/img/Parental1/sair.svg';
import Configuraçao from '../../assets/img/settings.svg';
import BotaoHome from '../../assets/img/BotãoHome1.svg';
import Suporte from '../../assets/img/Suporte.svg';
import user from '../../assets/img/Parental1/user.png';
import UserImg from '../UserImg/UserImg';
import { NavLink } from 'react-router-dom';

const StyledRectangle = styled.section`
  font-family: Montserrat, Arial;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
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

const FlexDisplay1 = styled.div`
  display: flex;
  padding: 0.6rem;
  margin-left: -8px
`;

const LogoPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ReactanglePerfil = () => {
  return (
    <StyledRectangle>
      <LogoPosition>
        <LogoWhite />
      </LogoPosition>
      <FlexDisplay>
        <img src={BotaoHome} alt="Icone Home" />
        <Links
          link="Home"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={Horario} alt="Icone de Horário" />
        <Links
          link="Horário"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay1>
        <img src={Cursos} alt="Icone de Cursos"/>
        <Links
          link="Cursos"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay1>
      <FlexDisplay>
        <img src={Videos} alt="Icone de Videos" />
        <Links
          link="Videos"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={Analitico} alt="Icone de Analitics" />
        <Links
          link="Analitics"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={Configuraçao} alt="Icone de Configuração" />
        <Links
          link="Configuração"
          color="white"
          borderRadius="0"
          padding="1rem"
          fontSize="1.875rem"
          background="#7452FF"
        />
      </FlexDisplay>
      <FlexDisplay>
        <img src={Suporte} alt="Icone de Suporte" />
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

export default ReactanglePerfil;
