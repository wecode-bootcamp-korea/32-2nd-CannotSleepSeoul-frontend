import React from 'react';
import styled from 'styled-components';

export default function SaleBanner({ img }) {
  return (
    <Img>
      <img src={img} alt="banner" />
    </Img>
  );
}

const Img = styled.div`
  img {
    width: 520px;
    height: 140px;
    border-radius: 3px;
    object-fit: cover;
  }
`;
