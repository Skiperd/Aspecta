import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.margin};
`;

const ImageComponent = ({ link, width, height, alt, margin }) => {
  return (
    <ImgStyle src={link} width={width} height={height} margin={margin} alt={alt}></ImgStyle>
  );
};

export default ImageComponent;
