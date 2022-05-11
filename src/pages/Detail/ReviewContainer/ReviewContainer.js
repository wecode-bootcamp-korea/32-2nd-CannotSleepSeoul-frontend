import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewFilter from '../ReviewFilter/ReviewFilter';
import ReviewList from '../ReviewList/ReviewList';

const ReviewContainer = ({ reviews }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortingOrder, setSortingOrder] = useState('recent');
  const [filteredReviews, setFilteredReview] = useState(reviews);

  const filterReviewsByRating = e => {
    setSelectedRating(parseInt(e.target.value));

    setFilteredReview(
      !parseInt(e.target.value)
        ? reviews
        : reviews.filter(({ rating }) => rating === parseInt(e.target.value))
    );
  };

  const sortReviews = order => {
    setSortingOrder(order);

    const reviewOrder = {
      recent: () => {
        setFilteredReview(prev =>
          [...prev].sort((x, y) => y.create_at - x.create_at)
        );
      },
      highRating: () => {
        setFilteredReview(prev =>
          [...prev].sort((x, y) => y.rating - x.rating)
        );
      },
      lowRating: () => {
        setFilteredReview(prev =>
          [...prev].sort((x, y) => x.rating - y.rating)
        );
      },
    };

    reviewOrder[order]();
  };

  useEffect(() => {
    sortReviews(sortingOrder);
  }, [sortingOrder, selectedRating]);

  return (
    <StyledReviewContainer>
      <ReviewFilter
        selectedRating={selectedRating}
        filterReviewsByRating={filterReviewsByRating}
        sortingOrder={sortingOrder}
        sortReviews={sortReviews}
      />

      <ReviewList filteredReviews={filteredReviews} />
    </StyledReviewContainer>
  );
};

export default ReviewContainer;

const StyledReviewContainer = styled.div``;
