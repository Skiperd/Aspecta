import React from 'react';
import styled from 'styled-components';
import FooterText from '../FooterText/FooterText';

const FooterStyle = styled.footer`
  background-color: #363636;
  width: 912px;
  height: 333px;
  border-radius: 50px;
`;

const FooterTextGrid = styled.section`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTextGrid>
        <FooterText />
      </FooterTextGrid>
    </FooterStyle>
  );
};

export default Footer;
