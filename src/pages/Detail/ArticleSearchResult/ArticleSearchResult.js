import React from 'react';
import styled from 'styled-components';
import RoomPackages from '../RoomPackages/RoomPackages';
import RoomSummary from '../RoomSummary/RoomSummary';

const ArticleSearchResult = ({ hotelData, dateStart, dateEnd }) => {
  const { room } = hotelData;

  return (
    <section>
      {room[0].room_id ? (
        room.map(room => (
          <ResultRoom key={room.room_id}>
            <RoomSummary room={room} />
            <RoomPackages
              hotelData={hotelData}
              room={room}
              dateStart={dateStart}
              dateEnd={dateEnd}
            />
          </ResultRoom>
        ))
      ) : (
        <ResultNoRoom>
          <NoRoomTitle>
            선택하신 조건으로 예약할 수 있는 객실이 없습니다.
          </NoRoomTitle>
          <NoRoomParagraph>다른 조건으로 다시 시도해주세요.</NoRoomParagraph>
        </ResultNoRoom>
      )}
    </section>
  );
};

export default ArticleSearchResult;

const ResultRoom = styled.div`
  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%), 0 0 0 1px #e9ecef;
`;

const ResultNoRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

const NoRoomTitle = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`;

const NoRoomParagraph = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-size: 14px;
`;
