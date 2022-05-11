import React from 'react';
import styled from 'styled-components';

const REVIEW_RATING_NUMBERS = [5, 4, 3, 2, 1];

const ReviewSummary = ({ reviews }) => {
  const calculateReviewRate = num => {
    let count = 0;
    reviews.forEach(review => review.rating === num && count++);
    return count;
  };

  return (
    <StyledReviewSummary>
      <ReviewScore>
        <ReviewScoreRating>
          {(
            reviews.reduce((acc, cur) => acc.rating + cur.rating) /
            reviews.length
          ).toFixed(1)}
        </ReviewScoreRating>
        <ReviewScoreStars>★★★★★</ReviewScoreStars>
      </ReviewScore>

      <ReviewScoreDivider />

      <ReviewRatingList>
        {REVIEW_RATING_NUMBERS.map(num => (
          <ReviewRatingItem key={num}>
            <ReviewRatingStars>{'★'.repeat(num)}</ReviewRatingStars>
            <ReviewRatingBar>
              <ReviewRatingBarRate
                count={(calculateReviewRate(num) / reviews.length) * 100}
              />
            </ReviewRatingBar>
            <ReviewPersonCount>{calculateReviewRate(num)}명</ReviewPersonCount>
          </ReviewRatingItem>
        ))}
      </ReviewRatingList>
    </StyledReviewSummary>
  );
};

export default ReviewSummary;

const StyledReviewSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 56px;
  margin-bottom: 20px;
  background-color: #f8f9fa;
`;

const ReviewScore = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewScoreRating = styled.span`
  margin-bottom: 6px;
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.55px;
`;

const ReviewScoreStars = styled.span`
  color: ${({ theme }) => theme.blue};
`;

const ReviewScoreDivider = styled.span`
  display: block;
  width: 1px;
  height: 80px;
  background-color: #dee2e6;
`;

const ReviewRatingList = styled.ul``;

const ReviewRatingItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.tertiary};
  text-align: right;
`;

const ReviewRatingStars = styled.span`
  display: flex;
  align-items: center;
  height: 16px;
  margin-right: 16px;
  font-size: 10px;
`;

const ReviewRatingBar = styled.div`
  position: relative;
  width: 293px;
  height: 4px;
  border-radius: 4px;
  margin-right: 10px;
  background-color: #dee2e6;
`;

const ReviewRatingBarRate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ count }) => count}%;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.tertiary};
`;

const ReviewPersonCount = styled.span`
  font-size: 11px;
  line-height: 16px;
`;
