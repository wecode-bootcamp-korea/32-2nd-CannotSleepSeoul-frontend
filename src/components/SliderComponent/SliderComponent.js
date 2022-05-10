import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ settings, isSale, children }) => {
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const checkFirstSlide = index => {
    !index ? setIsFirstSlide(true) : setIsFirstSlide(false);
  };

  const setting = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: index => {
      checkFirstSlide(index);
    },
    ...settings,
  };

  return (
    <StyledSliderComponent isSale={isSale} isFirstSlide={isFirstSlide}>
      <Slider {...setting}>{children}</Slider>
    </StyledSliderComponent>
  );
};

export default SliderComponent;

const StyledSliderComponent = styled.div`
  position: relative;

  &::before,
  &::after {
    display: ${({ isSale }) => isSale && 'none'};
    content: '';
    position: absolute;
    top: 0px;
    width: 64px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    display: ${({ isSale, isFirstSlide }) =>
      isSale || isFirstSlide ? 'none' : 'block'};
    left: 0px;
    background: linear-gradient(
      to right,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    right: 0px;
    background: linear-gradient(
      to left,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const PrevArrow = styled.button`
  display: flex;
  position: absolute;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 100%;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 12px, rgb(0 0 0 / 5%) 0px 2px 6px,
    rgb(0 0 0 / 5%) 0px 0px 0px 1px;

  &.slick-disabled {
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    color: inherit;
    background: white;
  }

  &::before {
    content: '<';
    color: ${({ theme }) => theme.primary};
    font-size: 30px;
    pointer-events: none;
  }
`;

const NextArrow = styled(PrevArrow)`
  left: 98%;

  &::before {
    content: '>';
  }
`;
