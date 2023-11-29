import React from 'react';
import styled from 'styled-components';

const User = styled.img`
  height: 3.125rem;
  width: 3.125rem;
`;
const UserImg = ({ link }) => {
  return <User src={link}></User>;
};

export default UserImg;
