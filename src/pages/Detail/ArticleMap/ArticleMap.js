import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const ArticleMap = ({ hotelData }) => {
  const { latitude, longitude, city, gu, ro, detail } = hotelData;
  const numLatitude = parseFloat(longitude);
  const numLongitude = parseFloat(latitude);

  const container = useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(numLatitude, numLongitude),
      level: 3,
    };

    const markerPosition = new kakao.maps.LatLng(numLatitude, numLongitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    const map = new kakao.maps.Map(container.current, options);

    marker.setMap(map);
  }, [numLatitude, numLongitude]);

  return (
    <StyledArticleMap>
      <MapTitle>지도</MapTitle>
      <MapContainer ref={container} />
      <MapInfo>
        <FontAwesomeIcon icon={faLocationPin} />
        <MapAddress>{`${city} ${gu} ${ro} ${detail}`}</MapAddress>
      </MapInfo>
    </StyledArticleMap>
  );
};

export default ArticleMap;

const StyledArticleMap = styled.section`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const MapTitle = styled.h3`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.4px;
`;

const MapContainer = styled.div`
  height: 150px;
  margin-bottom: 16px;
`;

const MapInfo = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  line-height: 1.5;
`;

const MapAddress = styled.address`
  display: inline-block;
  margin-left: 4px;
`;
