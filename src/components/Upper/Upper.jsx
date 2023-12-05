import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import Notificação from '../../assets/img/Notificaçao.svg';

const FlexDiv = styled.div`
  display: flex;
  gap: 169px;
  align-items: center;
  margin-left: 2rem;
  font-family: Montserrat, Arial;

  .span {
    font-family: Montserrat, Arial;
    background-color: #d8ccfc;
    border-radius: 10px;
    padding: 0rem 1rem;
  }
`;

const Upper = () => {
  return (
    <FlexDiv>
      <h1>Bem-vindo</h1>
      <span className="span">Mátricula : 01359856</span>
      <ImageComponent
        link={Notificação}
        height="30px"
        width="30px"
        alt="Notificacao"
      />
    </FlexDiv>
  );
};

export default Upper;
