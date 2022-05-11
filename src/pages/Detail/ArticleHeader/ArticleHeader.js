import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const ArticleHeader = ({ hotelData }) => {
  const { name, city, gu, ro, detail, using_time } = hotelData;

  return (
    <StyledArticleHeader>
      <ArticleTitle>
        <HotelTitle>{name}</HotelTitle>
        <HotelGrade>4성급</HotelGrade>
        <p>
          <HotelStars>{'★'.repeat(5)}</HotelStars>
          <HotelRating>4.9</HotelRating>
          <HotelReviewCount>(26)</HotelReviewCount>
        </p>
      </ArticleTitle>

      <ArticleSummary>
        <SummaryItem>
          <address>
            <FontAwesomeIcon icon={faLocationDot} />
            {`${city} ${gu} ${ro} ${detail}`}
          </address>
        </SummaryItem>
        <SummaryItem>
          <FontAwesomeIcon icon={faClock} />
          {using_time}
        </SummaryItem>
      </ArticleSummary>
    </StyledArticleHeader>
  );
};

export default ArticleHeader;

const StyledArticleHeader = styled.header`
  margin-bottom: 32px;
`;

const ArticleTitle = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const HotelTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.44px;
`;

const HotelGrade = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.tertiary};
  letter-spacing: -0.18px;
  line-height: 20px;
`;

const HotelStars = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.blue};
`;

const HotelRating = styled.span`
  margin-right: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

const HotelReviewCount = styled.span`
  color: ${({ theme }) => theme.tertiary};
  font-size: 14px;
  line-height: 18px;
`;

const ArticleSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.primary};

  svg {
    margin-right: 8px;
    font-size: 15px;
  }
`;
