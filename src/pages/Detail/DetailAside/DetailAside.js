import React from 'react';
import styled from 'styled-components';

const DetailAside = ({ hotelData }) => {
  const goToReservationSection = () => {
    window.scroll({
      top: 1280,
      left: window.scrollX,
      behavior: 'smooth',
    });
  };

  const isRoomAvailable = !!hotelData.room[0].room_id;

  return (
    <StyledAside>
      {isRoomAvailable ? (
        <AsideInfo>
          <AsideNight>1박</AsideNight>
          <AsidePrice>
            {parseInt(hotelData.room[0].price).toLocaleString()}
          </AsidePrice>
          <AsideUnit>원~</AsideUnit>
        </AsideInfo>
      ) : (
        <AsideNoRoomInfo>
          <AsideNoRoomTitle>객실 예약 마감</AsideNoRoomTitle>
          <AsideNoRoomParagraph>
            선택한 날짜의 예약이 마감 되었습니다.
          </AsideNoRoomParagraph>
        </AsideNoRoomInfo>
      )}
      <AsideButton disabled={!isRoomAvailable} onClick={goToReservationSection}>
        객실 선택하기
      </AsideButton>
    </StyledAside>
  );
};

export default DetailAside;

const StyledAside = styled.aside`
  position: sticky;
  top: 80px;
  width: 320px;
  height: 100%;
  padding: 20px 24px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 2px;
  margin-left: 40px;
  color: ${({ theme }) => theme.primary};
`;

const AsideInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
`;

const AsideNight = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
`;

const AsidePrice = styled.strong`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 32px;
`;

const AsideNoRoomInfo = styled.div`
  color: #dd3c2a;
`;

const AsideNoRoomTitle = styled.h3`
  height: 24px;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 0.8;
`;

const AsideNoRoomParagraph = styled.p`
  height: 16px;
  margin-bottom: 24px;
  font-size: 12px;
`;

const AsideUnit = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const AsideButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 32px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.blue};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 46px;
  opacity: 1;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: unset;
  }
`;
