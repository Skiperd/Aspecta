import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ImageComponent = ({ link, width, height, alt }) => {
  return (
    <ImgStyle src={link} width={width} height={height} alt={alt}></ImgStyle>
  );
};

export default ImageComponent;
