import React from 'react';
import styled from 'styled-components';
import GridContent from '../../components/GridContent/GridContent';

const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  background: #7452ff;
  border-radius: 25px;
`;

const perguntas = [
  {
    pergunta: 'Gosto de lidar com meus sentimentos',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p1',
  },
  {
    pergunta: 'Gosto de pensar sobre ideias',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p2',
  },
  {
    pergunta: 'Gosto de estar fazendo coisas?',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p3',
  },
  {
    pergunta: 'Gosto de observar e escutar',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p4',
  },
  {
    pergunta: 'Ouço e observo com atenção',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p5',
  },
  {
    pergunta: 'Me apoio em pensamentos lógicos',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p6',
  },
  {
    pergunta: 'Confio em meus palpites e impressões',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p7',
  },
  {
    pergunta: 'Tendo a buscar explicações para as coisas',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p8',
  },
  {
    pergunta: 'Sou responsável acerca das coisas',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p9',
  },
  {
    pergunta: 'Fico quieto e concentrado',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p10',
  },
  {
    pergunta: 'Tenho sentimentos e reações fortes',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p11',
  },
  {
    pergunta: 'Sentindo',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p12',
  },
  {
    pergunta: 'Fazendo',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p13',
  },
  {
    pergunta: 'Observando',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p13',
  },
  {
    pergunta: 'Pensando',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p14',
  },
  {
    pergunta: 'Me abro a novas experiências',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p13',
  },
  {
    pergunta: 'Examino todos os ângulos da questão',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p14',
  },
  {
    pergunta: 'Gosto de analisar as coisas, desdobra-las em partes',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p15',
  },
  {
    pergunta: 'Gosto de testar as coisas',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p16',
  },
  {
    pergunta: 'Sou uma pessoa observadora',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p17',
  },
  {
    pergunta: 'Sou uma pessoa ativa',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p18',
  },
  {
    pergunta: 'Sou uma pessoa intuitiva',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p19',
  },
  {
    pergunta: 'Sou uma pessoa lógica',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p20',
  },
  {
    pergunta: 'Observação',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p21',
  },
  {
    pergunta: 'Interações pessoais',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p22',
  },
  {
    pergunta: 'Teorias racionais',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p23',
  },
  {
    pergunta: 'Oportunidades para experimentar e praticar',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p24',
  },
  {
    pergunta: 'Gosto de ver os resultados do meu trabalho',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p25',
  },
  {
    pergunta: 'Gosto de ideias e teorias',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p26',
  },
  {
    pergunta: 'Penso antes de agir',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p27',
  },
  {
    pergunta: 'Sinto-me pessoalmente envolvido no assunto',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p28',
  },
  {
    pergunta: 'Me apoio em minhas observações',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p29',
  },
  {
    pergunta: 'Me apoio em minhas impressões',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p30',
  },
  {
    pergunta: 'Posso experimentar coisas por mim mesmo',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p31',
  },
  {
    pergunta: 'Me apoio em minhas ideias',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p32',
  },
  {
    pergunta: 'Sou uma pessoa compenetrada',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p33',
  },
  {
    pergunta: 'Sou uma pessoa flexível',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p34',
  },
  {
    pergunta: 'Sou uma pessoa responsável',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p35',
  },
  {
    pergunta: 'Sou uma pessoa racional',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p36',
  },
  {
    pergunta: 'Me envolvo todo',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p37',
  },
  {
    pergunta: 'gosto de observar',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p38',
  },
  {
    pergunta: 'Avalio as coisas',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p39',
  },
  {
    pergunta: 'Gosto de estar ativo',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p40',
  },
  {
    pergunta: 'Analiso as ideias',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p41',
  },
  {
    pergunta: 'Sou receptivo e de mente aberta',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p42',
  },
  {
    pergunta: 'Sou cuidadoso',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p43',
  },
  {
    pergunta: 'Sou prático',
    options: ['1', '2', '3', '4'],
    resposta: '',
    id: 'p44',
  },
];

const Quiz = () => {
  return (
    <GridContent>
      <Section>
        {perguntas.map(({ pergunta, index }) => (
          <p>{pergunta}</p>
        ))}
      </Section>
    </GridContent>
  );
};

export default Quiz;
