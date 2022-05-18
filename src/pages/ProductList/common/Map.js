import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationCrosshairs,
  faPlus,
  faMinus,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

const { kakao } = window;

const Map = () => {
  const location = useLocation();
  const [_map, setMap] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const mapContainer = document.getElementById('mapContainer');
    let mapOptions = {
      center: new kakao.maps.LatLng(37.506316, 127.053658),
      level: 3,
      scrollwheel: false,
    };

    let map = new kakao.maps.Map(mapContainer, mapOptions);

    location.state.forEach(data => {
      const longitude = data.latitude;
      const langitude = data.longitude;
      const markerPosition = new kakao.maps.LatLng(langitude, longitude);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      const priceOverlayContent = `<div class="priceOverlay"><span class="price">${Math.round(
        data.price
      ).toLocaleString()}</span></div>`;

      const priceOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: priceOverlayContent,
        yAnchor: 2.5,
      });

      priceOverlay.setMap(map);

      const hotelOverlayContent = `<div class="hotelOverlay"><img alt="hotelImage" src="${
        data.image
      }"/><div class="detail"><p class="name">${
        data.name
      }</p><p class="address">${data.city}${data.gu}${
        data.ro
      }</p><span class="price">${Math.round(
        data.price
      ).toLocaleString()}</span></div></div>`;

      const hotelOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: hotelOverlayContent,
        yAnchor: 1.35,
      });

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        priceOverlay.setMap(null);
        hotelOverlay.setMap(map);
      });

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        priceOverlay.setMap(map);
        hotelOverlay.setMap(null);
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        navigate(`/products/${data.hotel_id}`);
      });

      setMap(map);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const setZoomCur = () => {
    navigator.geolocation.getCurrentPosition(position => {
      _map.setCenter(
        new kakao.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  };

  const setZoomIn = () => {
    _map.setLevel(_map.getLevel() - 1, { animate: true });
  };

  const setZoomOut = () => {
    _map.setLevel(_map.getLevel() + 1, { animate: true });
  };

  const goPrev = () => {
    navigate('/products');
  };

  return (
    <Container>
      <MapContainer id="mapContainer">
        <button className="backBtn" onClick={goPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="zoomCur" onClick={setZoomCur}>
          <FontAwesomeIcon icon={faLocationCrosshairs} />
        </button>
        <button className="zoomIn" onClick={setZoomIn}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="zoomOut">
          <FontAwesomeIcon icon={faMinus} onClick={setZoomOut} />
        </button>
      </MapContainer>
    </Container>
  );
};

const Container = styled.main`
  overflow: hidden;
  button {
    z-index: 4;
    position: absolute;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    margin-bottom: 50px;
    font-size: 16px;
    font-weight: 900;
    opacity: 70%;
    background-color: #51abf3;
    color: #dee2e6;

    :hover {
      opacity: 100%;
      cursor: pointer;
    }
  }
  .backBtn {
    top: 10px;
    left: 10px;
  }
  .zoomCur {
    bottom: 130px;
    right: 50px;
  }

  .zoomIn {
    bottom: 70px;
    right: 50px;
  }
  .zoomOut {
    bottom: 10px;
    right: 50px;
  }

  .priceOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 100px;
    height: 32px;
    overflow: hidden;
    background-color: #51abf3;
    color: #ffffff;
    font-weight: 700;
    border-radius: 4px;

    .price {
      &::before {
        content: '₩ ';
        font-size: 14px;
      }
    }
  }

  .hotelOverlay {
    display: flex;
    border: #dee2e6 1px solid;
    border-left: none;
    border-radius: 4px;
    background-color: #ffffff;
    width: 400px;
    height: 150px;
    overflow: hidden;

    img {
      width: 150px;
      height: 150px;
    }

    .detail {
      display: grid;
      grid-template-rows: repeat(3, 50px);
      align-items: center;
      padding-left: 20px;

      .name {
        font-size: 20px;
        font-weight: 700;
      }

      .address {
        font-size: 13px;
        color: #848c94;
      }

      .price {
        font-weight: 700;
        &::before {
          content: '₩ ';
          font-size: 14px;
        }
      }
    }
  }
`;

const MapContainer = styled.article`
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;

export default Map;
