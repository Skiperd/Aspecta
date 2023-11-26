import React from 'react';
import GridContent from '../../components/GridContent/GridContent';
import HeaderSignUp from '../../components/HeaderSignUp/HeaderSignUp';
import styled from 'styled-components';
import Reactangle from '../../components/Reactangle/Reactangle';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import FormSignIn from '../../components/FormSignIn/FormSignIn';

const Section = styled.section`
  display: flex;
  margin-top: 0.5rem;
  gap: 25rem;
  box-sizing: border-box;
`;

const SignIn = () => {
  return (
    <GridContent>
      <HeaderSignUp />
      <Section>
        <Reactangle />
        <FormSignIn />
      </Section>
    </GridContent>
  );
};

export default SignIn;
