import React from 'react';
import styled from 'styled-components';
import Links from '../../components/Links/Links';
import ImageComponent from '../ImageComponent/ImageComponent';
import trofeu from '../../assets/img/trofeuIcone.svg';
import notas from '../../assets/img/notas.svg';
import livros from '../../assets/img/livros.svg';

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

const FlexItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: black;
    text-align: left;
    font-weight: 700;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin-left: 1rem;
`;

const Activity = () => {
  return (
    <>
      <h3 style={{ textAlign: 'left', marginLeft: '1rem' }}>Atividades</h3>
      <Grid>
        <Flex>
          <Links
            link={'Geral'}
            radius="1rem"
            padding="0.3125rem 1.25rem"
            fontSize="1rem"
            color="black"
            background="#b8a8ff"
          />
          <Links
            link={'Tarefas pendentes'}
            radius="1.562rem"
            padding="0.3125rem 1.25rem"
            fontSize=".8rem"
            color="black"
            background="white"
          />
          <Links
            link={'Grupo Estudos'}
            radius="1.562rem"
            padding="0.3125rem 1.25rem"
            fontSize=".8rem"
            color="black"
            background="white"
          />
          <Links
            link={'Ver tudo'}
            radius="0"
            padding="0.3125rem 1.25rem"
            fontSize=".5rem"
            color="black"
            background="white"
          />
        </Flex>
        <FlexItens>
          <ImageComponent
            link={trofeu}
            width="30px"
            height="30px"
            alt="trofeu"
          />
          <p>Atribuir Pontos</p>
          <input type="checkbox" />
        </FlexItens>
        <FlexItens>
          <ImageComponent
            link={notas}
            width="30px"
            height="30px"
            alt="trofeu"
          />
          <p>Notas</p>
          <input type="checkbox" />
        </FlexItens>
        <FlexItens>
          <ImageComponent
            link={livros}
            width="30px"
            height="30px"
            alt="Livros"
          />
          <p>Livros de apoio</p>
          <input type="checkbox" />
        </FlexItens>
      </Grid>
    </>
  );
};

export default Activity;
