import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent/ImageComponent';

const Section = styled.section`
  display: flex;
  /* margin-left: 3.6rem; */

  input {
    width: 20rem;
    height: 1.7rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #7452ff;
    margin: 1.2rem 0rem;
  }
`;

const Input = ({ type, id, placeholder, link }) => {
  return (
    <Section>
      <img src={link} />
      <input type={type} id={id} placeholder={placeholder}></input>
    </Section>
  );
};

export default Input;
