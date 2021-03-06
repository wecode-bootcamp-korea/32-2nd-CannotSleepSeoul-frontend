import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function MainHotelInfo({
  id,
  gu,
  price,
  image_url,
  name,
  withHotel,
  goToDetail,
}) {
  return (
    <MainWrapper key={id}>
      <RecentHotelContainer onClick={() => goToDetail(id)}>
        <img src={image_url} alt="hotel" />
        <RecentHotelInfo>
          <CategoryText>호텔 {gu}</CategoryText>
          <NameText>
            {gu}&nbsp;{name}
          </NameText>
          <Reputaion>
            <FontAwesomeIcon className="star" icon={faStar} /> 5.0
            <CommentCount>(16)</CommentCount>
          </Reputaion>
          <PriceText>{parseInt(price).toLocaleString()}원</PriceText>
        </RecentHotelInfo>
      </RecentHotelContainer>

      <CenterText>여행자들이 함께 본 숙소</CenterText>

      {withHotel.map(hotel => (
        <WithHotelContainer onClick={() => goToDetail(hotel.id)} key={hotel.id}>
          <div>
            <img src={hotel.image_url} alt="hotel" />
          </div>
          <WithHotelInfo>
            <CategoryText>호텔 {hotel.gu}</CategoryText>
            <WithNameText>
              {hotel.gu}&nbsp;{hotel.name}
            </WithNameText>
            <WithReputaion>
              <FontAwesomeIcon className="star" icon={faStar} /> 5.0
              <CommentCount>(16)</CommentCount>
            </WithReputaion>
            <WithPriceText>
              {parseInt(hotel.price).toLocaleString()}원
            </WithPriceText>
          </WithHotelInfo>
        </WithHotelContainer>
      ))}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 314px;
`;

const RecentHotelContainer = styled.div`
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid ${props => props.theme.border};
  img {
    width: 80px;
    height: 80px;
    border-radius: 3px;
  }
`;

const RecentHotelInfo = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
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

const CenterText = styled.div`
  margin-top: 15px;
  font-size: 17px;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const WithHotelContainer = styled.div`
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid gainsboro;

  img {
    width: 138px;
    height: 138px;
    border-radius: 3px;
  }
`;

const WithNameText = styled.p`
  margin-top: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const WithReputaion = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.primary};
  .star {
    color: ${props => props.theme.blue};
  }
`;

const WithPriceText = styled.p`
  padding-top: 63px;
  font-weight: 500;
  color: ${props => props.theme.primary};
`;

const WithHotelInfo = styled.div`
  height: 138px;
  display: flex;
  flex-direction: column;
  margin-left: 7px;

  .withPrice {
    padding-top: 70px;
  }
`;
