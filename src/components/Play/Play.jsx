import React from 'react';
import styled from 'styled-components';
import PlayImg from '../../assets/img/PLAY-PNG.svg';

const PlayIcon = styled.img`
  width: 2.125rem;
  height: 2.125rem;
`;

const Play = () => {
  return <PlayIcon src={PlayImg} alt="Icone de Iniciar reprodução"></PlayIcon>;
};

export default Play;
