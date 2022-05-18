import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
  const { city, gu, ro, detail, image, name, price, rating } = data;
  const [position, setPosition] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const degreesToRadians = degrees => {
    const radians = (degrees * Math.PI) / 180;
    return radians;
  };

  const computeDistance = (startCoords, destCoords) => {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.longitude);
    let destLongRads = degreesToRadians(destCoords.latitude);

    let distance =
      Math.acos(
        Math.sin(startLatRads) * Math.sin(destLatRads) +
          Math.cos(startLatRads) *
            Math.cos(destLatRads) *
            Math.cos(startLongRads - destLongRads)
      ) * RADIUS;

    return distance;
  };

  const distance = Math.round(computeDistance(position, data) * 1000);

  const toLocaleDistance = () => {
    if (distance > 1000) {
      return Math.round(distance / 1000) + ' km';
    } else {
      return distance + ' m';
    }
  };

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/products/${data.hotel_id}`);
  };

  return (
    <Container onClick={goToDetail}>
      <Image>
        <img alt="hotelImage" src={image} />
      </Image>
      <Detail>
        <Name>{name}</Name>
        <Info>
          <Icon>
            <FontAwesomeIcon icon={faStar} />
          </Icon>
          <p>{rating}4.5</p>
          <Sub>
            ・ {city} {gu} {ro} {detail}
          </Sub>
        </Info>
        <Distance>
          <Icon>
            <FontAwesomeIcon icon={faLocationDot} />{' '}
          </Icon>
          <Sub>{toLocaleDistance()}</Sub>
        </Distance>
        <Price>
          {Math.round(price).toLocaleString()}
          <Sub>원</Sub>
        </Price>
      </Detail>
    </Container>
  );
};

const Sub = styled.p``;

const Icon = styled.p`
  color: #51abf3;
`;

const Image = styled.div`
  img {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 256px;
    height: 200px;
    transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);
  }
`;

const Price = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 900;

  ${Sub} {
    display: inline-block;
    margin-left: 5px;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Distance = styled.span`
  display: flex;
  gap: 6px;
  margin-left: 1px;
  font-size: 15px;
  font-weight: 500;

  ${Sub} {
    margin-top: 1px;
    font-size: 13px;
  }
`;

const Info = styled.span`
  display: flex;
  gap: 3px;
  font-weight: 500;

  ${Sub} {
    color: #848c94;
    font-weight: normal;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Detail = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  padding: 24px;
  border: 1px solid #dee2e6;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  background-color: #ffffff;
  font-size: 14px;
  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);
  z-index: 3;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px;
  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: rgba(0, 10, 50, 0.2);
    width: 10px;
    transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);
    transform: translate3D(0, 0, 0);
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: rgb(235, 235, 240);
    width: 100%;
    height: 10px;
    z-index: -1;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translate3D(10px, 0, 0);
    }
  }

  &:active {
    &:before {
      transform: translate3D(0, 0, 0);
    }
  }

  &:hover,
  &:focus {
    img,
    ${Detail} {
      transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);
      transform: translate3D(0, -10px, 0);
      cursor: pointer;
    }
  }

  &:active {
    transform: translate3D(0, 0, 0);
  }
`;

const RADIUS = 6371;

export default Card;
