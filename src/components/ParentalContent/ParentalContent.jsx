import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';
import child from '../../assets/img/Parental1/child.png';
import book from '../../assets/img/Parental1/image2.png';
import lapis from '../../assets/img/Parental1/image1.png';

const SectionStyle = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 800px;
  padding: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: -70px;
    transform: rotate(1deg);
    height: 320px;
    width: 320px;
    /* background-color: red; */
    background-image: url(${book});
  }
  &::after {
    content: '';
    position: absolute;
    top: 528px;
    right: 40px;
    transform: rotate(1deg);
    height: 212px;
    width: 189px;
    /* background-color: red; */
    background-image: url(${lapis});
  }
`;

const Paragraph = styled.p`
  font-family: MontSerrat, Arial;
  font-weight: 700;
  font-size: 1.3rem;
`;

const Text = styled.h1`
  /* text-align: center; */
  font-family: MontSerrat, Arial;
  font-weight: 700;
  font-size: 1.5rem;
`;

const ParentalContent = () => {
  console.log(child);
  return (
    <SectionStyle>
      <Paragraph>Bem vindo, Nivaldo!</Paragraph>
      <Text>
        Sabia que hoje é a comemoração da lei brasileira de inclusão da pessoa
        com deficiência.
      </Text>
      <ImageComponent link={child} width="388px" height="544px" alt="Criança" />
    </SectionStyle>
  );
};

export default ParentalContent;
