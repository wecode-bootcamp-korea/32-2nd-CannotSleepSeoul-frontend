import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlexibleBtn = ({ listView, mapView, filterView, icon }) => {
  return (
    <Container
      onClick={
        icon.iconName === 'list'
          ? listView
          : icon.iconName === 'map'
          ? mapView
          : filterView
      }
    >
      <span>
        <FontAwesomeIcon icon={icon} />{' '}
        {icon.iconName === 'list'
          ? '리스트'
          : icon.iconName === 'map'
          ? '지도'
          : '필터'}
      </span>
    </Container>
  );
};

const Container = styled.button`
  position: relative;
  padding: 0;
  border: none;
  width: 200px;
  height: 70px;
  font-size: 4vw;
  /* border: 1px solid #dee2e6; */
  margin-bottom: 20px;
  @media (min-width: 40em) {
    font-size: 1.5em;
  }
  user-select: none;
  border-radius: 4px;

  &:before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 10, 50, 0.2);
    width: 9px;
    transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);
    transform: translate3D(0, 0, 0);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(235, 235, 240);
    z-index: -1;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    &:before {
      transform: translate3D(10px, 0, 0);
    }
  }

  &:active {
    &:before {
      transform: translate3D(0, 0, 0);
    }
  }

  &:focus,
  &:active {
    outline: none;
  }

  &:hover,
  &:focus {
    span {
      transform: translate3D(0, -10px, 0);
    }
  }

  &:active span {
    transform: translate3D(0, 0, 0);
  }

  &:hover,
  &:focus {
    span {
      background-color: #848c94;
      color: #ffffff;
    }
  }

  span {
    border-radius: 4px;
    display: block;
    position: relative;
    padding: 0.7em 0 0.7em 0.9em;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    color: #848c94;
    text-align: left;
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);

    svg {
      padding-right: 0.5em;
    }
  }
`;
export default FlexibleBtn;
