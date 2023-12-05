import React from 'react';
import ImageComponent from '../ImageComponent/ImageComponent';
import student from '../../assets/img/student.png';
import Button from '../Button/Button';
const PerfilImg = () => {
  return (
    <>
      <ImageComponent link={student} height="200px" width="200px" />
      <p>Aluno(a) Fernando Cardoso Henrique</p>
      <Button text="Teams" background="#7452FF" width="220px" height="30px" />
    </>
  );
};

export default PerfilImg;
