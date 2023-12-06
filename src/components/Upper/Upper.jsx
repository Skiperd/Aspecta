import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import Notificação from '../../assets/img/Notificaçao.svg';

const FlexDiv = styled.div`
  display: flex;
  gap: 269px;
  align-items: center;
  margin-left: 2rem;
  font-family: Montserrat, Arial;

  .span {
    font-family: Montserrat, Arial;
    background-color: #d8ccfc;
    border-radius: 10px;
    padding: 0.4rem 2rem;
  }
  h1 {
    margin-bottom: 100px;
    margin-top: 100px;
  }
`;

const Upper = () => {
  return (
    <FlexDiv>
      <h1>Bem-vindo, Fernando.</h1>
      <span className="span">
        Mátricula : <span style={{ color: '#7452FF' }}>01359856</span>
      </span>
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
