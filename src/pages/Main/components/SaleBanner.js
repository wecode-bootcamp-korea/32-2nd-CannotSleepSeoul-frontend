import React from 'react';
import styled from 'styled-components';

export default function SaleBanner() {
  return (
    <Img>
      <img
        src="https://png.pngtree.com/thumb_back/fw800/background/20220130/pngtree-special-offer-30-percent-off-banner-image_985307.jpg"
        alt="banner"
      />
    </Img>
  );
}

const Img = styled.div`
  img {
    width: 520px;
    height: 140px;
    border-radius: 3px;
  }
`;
