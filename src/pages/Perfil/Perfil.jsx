import React from 'react';
import ReactanglePerfil from '../../components/ReactanglePerfil/ReactanglePerfil';
import GridContent from '../../components/GridContent/GridContent';
import styled from 'styled-components';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import Upper from '../../components/Upper/Upper';
import Square from '../../components/Square/Square';
import kindpng from '../../assets/img/kindpng.svg';
import matematicas from '../../assets/img/matematicas.svg';
import literatura from '../../assets/img/literatura.svg';
import geografia from '../../assets/img/geografia.svg';
import Activity from '../../components/Activity/Activity';
import PerfilImg from '../../components/PerfilImg/PerfilImg';
import Progess from '../../components/Progress/Progess';
import AcessibilityMenu from '../../components/AcessibilityMenu/AcessibilityMenu';

const styledDiv = styled.div`
  font-family: Montserrat, Arial;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 1rem;
`;

const FlexPrincipal = styled.div`
  display: flex;
`;

const DivisaoFlex = styled.div`
  display: flex;
`;
const Esquerda = styled.div``;
const Direita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Perfil = () => {
  return (
    <GridContent>
      <AcessibilityMenu />
      <FlexPrincipal>
        <ReactanglePerfil />
        <styledDiv>
          <Upper />
          <DivisaoFlex>
            <Esquerda>
              <StyledFlex>
                <Square
                  text="Seu próprio jeito de estudar"
                  paragraph="Defina seu plano de estudo da melhor forma"
                  background="#7452FF"
                  height="120px"
                  width="420px"
                  link={kindpng}
                  color="white"
                />
                <Square
                  text="Matemática"
                  paragraph="16 hrs / 160 hrs"
                  background="#d8ccfc"
                  height="80px"
                  width="420px"
                  link={matematicas}
                />
                <Square
                  text="Literatura"
                  paragraph="5 hrs / 160 hrs"
                  background="#d8ccfc"
                  height="80px"
                  width="420px"
                  link={literatura}
                />
                <Square
                  text="Geografia"
                  paragraph="26 hrs / 160 hrs"
                  background="#d8ccfc"
                  height="80px"
                  width="420px"
                  link={geografia}
                />
              </StyledFlex>
              <Activity />
            </Esquerda>
            <Direita>
              <PerfilImg />
              <Progess />
            </Direita>
          </DivisaoFlex>
        </styledDiv>
      </FlexPrincipal>
    </GridContent>
  );
};

export default Perfil;
