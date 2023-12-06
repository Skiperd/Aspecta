import React from 'react';
import ImageComponent from '../ImageComponent/ImageComponent';
import styled from 'styled-components';
import kindpng from '../../assets/img/kindpng.svg';

const StyleDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 25px;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.color};
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  h1 {
    font-family: Montserrat, Arial;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-family: Montserrat, Arial;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Square = ({
  background,
  link,
  text,
  paragraph,
  width,
  height,
  color,
  margin,
}) => {
  return (
    <StyleDiv
      background={background}
      height={height}
      width={width}
      color={color}
    >
      <FlexDiv>
        <h1>{text}</h1>
        <p>{paragraph}</p>
      </FlexDiv>
      <ImageComponent
        link={link}
        height="50px"
        width="50px"
        alt="grafico"
        margin={margin}
      />
    </StyleDiv>
  );
};

export default Square;
