import React from 'react';
import styled from 'styled-components';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleImages from '../ArticleImages/ArticleImages';
import ArticleReservation from '../ArticleReservation/ArticleReservation';
import ArticleDescription from '../ArticleDescription/ArticleDescription';
import ArticleMap from '../ArticleMap/ArticleMap';
import ArticleReview from '../ArticleReview/ArticleReview';

const DetailContent = ({ hotelData, setHotelData }) => {
  const { id } = hotelData;

  return (
    <StyledArticle>
      <ArticleHeader hotelData={hotelData} />
      <ArticleImages hotelData={hotelData} />
      <ArticleReservation hotelData={hotelData} setHotelData={setHotelData} />
      <ArticleDescription hotelData={hotelData} />
      <ArticleMap hotelData={hotelData} />
      <ArticleReview hotelId={id} />
    </StyledArticle>
  );
};

export default DetailContent;

const StyledArticle = styled.article`
  width: 700px;
  color: ${({ theme }) => theme.primary};
`;
