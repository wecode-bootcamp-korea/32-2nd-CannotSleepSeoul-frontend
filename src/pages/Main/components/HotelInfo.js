import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function HotelInfo({
  id,
  gu,
  price,
  image_url,
  name,
  goToDetail,
}) {
  return (
    <FirstHotelContainer
      onClick={() => {
        goToDetail(id);
      }}
    >
      <img src={image_url} alt="hotel" />
      <FirstHotelInfo>
        <CategoryText>호텔 {gu}</CategoryText>
        <NameText>
          {gu}&nbsp;{name}
        </NameText>
        <Reputaion>
          <FontAwesomeIcon className="star" icon={faStar} /> 5.0
          <CommentCount>(16)</CommentCount>
        </Reputaion>
        <PriceText>{parseInt(price).toLocaleString()}원</PriceText>
      </FirstHotelInfo>
    </FirstHotelContainer>
  );
}

const FirstHotelContainer = styled.div`
  img {
    width: 138px;
    height: 138px;
    border-radius: 3px;
  }
`;

const FirstHotelInfo = styled.div`
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 7px;
`;

const CategoryText = styled.p`
  font-size: 12px;
  color: ${props => props.theme.tertiary};
`;

const NameText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const Reputaion = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.primary};
  .star {
    color: ${props => props.theme.blue};
  }
`;

const CommentCount = styled.span`
  font-size: 14px;
  color: ${props => props.theme.tertiary};
`;

const PriceText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;
