import React from 'react';
import ImageComponent from '../ImageComponent/ImageComponent';
import student from '../../assets/img/student.png';
import Button from '../Button/Button';
import styled from 'styled-components';

const Text = styled.p`
  font-family: Montserrat, Arial;
  font-weight: 700;
`;

const PerfilImg = () => {
  return (
    <>
      <ImageComponent link={student} height="200px" width="200px" />
      <Text>Aluno(a) Fernando Cardoso Henrique</Text>
      <Button text="Teams" background="#7452FF" width="300px" height="35px" />
    </>
  );
};

export default PerfilImg;
