import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../styles/theme';

export default function HotelInfo({ gu, img, name }) {
  return (
    <FirstHotelContainer>
      <img src={img} alt="hotel" />
      <FirstHotelInfo>
        <CategoryText>호텔 {gu}</CategoryText>
        <NameText>
          {gu}&nbsp;{name}
        </NameText>
        <Reputaion>
          <FontAwesomeIcon className="star" icon={faStar} /> 5.0
          <CommentCount>(16)</CommentCount>
        </Reputaion>
        <PriceText>100,000원</PriceText>
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
  color: ${theme.tertiary};
`;

const NameText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.primary};
`;

const Reputaion = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.primary};
  .star {
    color: ${theme.blue};
  }
`;

const CommentCount = styled.span`
  font-size: 14px;
  color: ${theme.tertiary};
`;

const PriceText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.primary};
`;
