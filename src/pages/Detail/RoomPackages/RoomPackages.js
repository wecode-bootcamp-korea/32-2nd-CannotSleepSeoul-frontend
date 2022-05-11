import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RoomPackages = ({ hotelData, room, dateStart, dateEnd }) => {
  const navigate = useNavigate();

  const { type, price } = room;

  const makeReservation = () => {
    const { id, image_url, name, gu } = hotelData;

    const selectedRoom = {
      hotels_id: id,
      gu: gu,
      img: image_url,
      name: name,
      rooms_type:
        type === 'standard' ? '스탠다드 객실 only' : '디럭스 객실 only',
      rooms_price: price,
      date_start: dateStart,
      date_end: dateEnd,
    };

    localStorage.setItem('reservationData', JSON.stringify(selectedRoom));

    const isLogin = localStorage.getItem('token');

    navigate(isLogin ? '/reservation' : '/users/sign_in');
  };

  return (
    <StyledRoomPackages>
      <PackageTop>
        <PackageNumber>01</PackageNumber>
        <PackageName>
          {type === 'standard' ? '스탠다드 객실 only' : '디럭스 객실 only'}
        </PackageName>
      </PackageTop>
      <PackageBottom>
        <div>
          <PackagePrice>{parseInt(price).toLocaleString()}</PackagePrice>
          <PriceUnit>원</PriceUnit>
        </div>
        <ReservationButton onClick={makeReservation}>예약</ReservationButton>
      </PackageBottom>
    </StyledRoomPackages>
  );
};

export default RoomPackages;

const StyledRoomPackages = styled.div`
  padding: 24px;
`;

const PackageTop = styled.h3`
  margin-bottom: 16px;
`;

const PackageNumber = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.blue};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.38px;
  line-height: 20px;
`;

const PackageName = styled(PackageNumber)`
  margin-right: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const PackageBottom = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PackagePrice = styled.strong`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const PriceUnit = styled.span`
  margin-left: 2px;
  color: ${({ theme }) => theme.primary};
  font-size: 13px;
  font-weight: 600;
`;

const ReservationButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.blue};
  transition: box-shadow 100ms ease-out, background-color 100ms ease-out,
    color 100ms ease-out, border-bottom 100ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #2b96ed;
    border-color: #2b96ed;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 30%);
  }
`;
