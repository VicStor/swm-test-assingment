/**
*
* ImgFill
*
*/

// import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }) => (fit || 'fill')};
`;

export default Img;
