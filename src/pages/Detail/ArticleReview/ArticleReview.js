import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewSummary from '../ReviewSummary/ReviewSummary';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import { API } from '../../../config';

const ArticleReview = ({ hotelId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API.REVIEWS}/${hotelId}`)
      .then(res => res.json())
      .then(({ data }) => {
        setReviews(
          data.map(review => {
            review.create_at = new Date(review.create_at);
            review.rating = parseFloat(review.rating);

            return review;
          })
        );
      });
  }, [hotelId]);

  return (
    reviews.length && (
      <StyledArticleReview>
        <ReviewHeading>리뷰</ReviewHeading>
        <ReviewSummary reviews={reviews} />
        <ReviewContainer reviews={reviews} setReviews={setReviews} />
      </StyledArticleReview>
    )
  );
};

export default ArticleReview;

const StyledArticleReview = styled.section`
  padding: 16px 0;
  color: ${({ theme }) => theme.primary};
`;

const ReviewHeading = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.4px;
`;
