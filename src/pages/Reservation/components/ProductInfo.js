import React from 'react';
import styled from 'styled-components';

const ProductInfo = ({ commonData }) => {
  const {
    hotels_id,
    gu,
    img,
    name,
    rooms_type,
    rooms_price,
    date_start,
    date_end,
  } = commonData;

  return (
    <>
      <InfoFlexDiv {...hotels_id}>
        <div>
          <img src={img} alt="room" />
        </div>
        <div className="InfoText">
          <p className="hotelName">
            호텔 {name} {gu}
          </p>
          <p className="startDate">{date_start} ~</p>
          <p className="endDate">{date_end}</p>
        </div>
      </InfoFlexDiv>
      <SelectRoom>
        <p>{rooms_type}</p>
        <p>{parseInt(rooms_price).toLocaleString()}원</p>
      </SelectRoom>
      <TotalPrice>
        <p>총 상품 금액</p>
        <p className="finalPrice">{parseInt(rooms_price).toLocaleString()}원</p>
      </TotalPrice>
    </>
  );
};

export default ProductInfo;

const InfoFlexDiv = styled.div`
  display: flex;
  padding-top: 30px;
  border-top: 1px solid ${props => props.theme.border};

  img {
    width: 72px;
    height: 72px;
    border-radius: 3px;
  }
  .InfoText {
    margin-left: 15px;

    .hotelName {
      font-size: 18px;
      font-weight: 500;
    }

    .startDate,
    .endDate {
      font-size: 14px;
      color: ${props => props.theme.tertiary};
    }

    .startDate {
      margin: 7px 0px;
    }
  }
`;

const SelectRoom = styled.div`
  width: 680px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
  padding: 0px 20px;
  background-color: #f8f9fa;
  font-size: 14px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  color: ${props => props.theme.tertiary};
  font-size: 14px;
  .finalPrice {
    font-size: 17px;
    font-weight: 500;
    color: ${props => props.theme.primary};
  }
`;
