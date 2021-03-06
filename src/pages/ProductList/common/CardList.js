import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card';
import MiniMap from '../components/MiniMap';

const CardList = ({
  hotelData,
  cardListRef,
  scrollRef,
  view,
  wonValue,
  locationValue,
}) => {
  return (
    <Container ref={cardListRef}>
      {view ? (
        <>
          <Caption>검색된 숙소 {hotelData.length}개</Caption>

          {hotelData.map(hotelData => {
            return (
              <Card
                hotelData={hotelData}
                key={hotelData.hotel_id}
                wonValue={wonValue}
                locationValue={locationValue}
              />
            );
          })}

          <div ref={scrollRef} />
        </>
      ) : (
        <MiniMap view={view} hotelData={hotelData} />
      )}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-row-gap: 20px;
  width: 810px;
  transform-style: preserve-3d;
  transition: all 1s;
`;

const Caption = styled.p`
  padding-left: 10px;
  font-size: 16px;
`;

export default CardList;
