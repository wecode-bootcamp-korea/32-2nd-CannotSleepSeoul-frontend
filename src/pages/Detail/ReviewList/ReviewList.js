import React from 'react';
import styled from 'styled-components';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewList = ({ filteredReviews }) => {
  return (
    <StyledReviewList>
      {filteredReviews.length ? (
        filteredReviews.map(review => (
          <ReviewItem key={review.id}>
            <ReviewHeader>
              <ReviewHeaderTop>
                <ReviewStars>
                  <ReviewStarBlue>
                    {'★'.repeat(parseInt(review.rating))}
                  </ReviewStarBlue>
                  <ReviewStarGray>
                    {'★'.repeat(5 - parseInt(review.rating))}
                  </ReviewStarGray>
                </ReviewStars>
                <ReviewUser>{review.name}</ReviewUser>
              </ReviewHeaderTop>
              <ReviewCreateAt>
                {`${review.create_at.getFullYear()}. ${
                  review.create_at.getMonth() + 1
                }. ${review.create_at.getDate()}`}
              </ReviewCreateAt>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))
      ) : (
        <NoReviewItem>
          <FontAwesomeIcon icon={faCircleExclamation} />
          <NoReviewItemTitle>
            선택한 필터에 알맞는 후기가 없습니다.
          </NoReviewItemTitle>
          <NoReviewItemContent>
            다른 조건으로 다시 적용해보세요.
          </NoReviewItemContent>
          <NoReviewItemBtn>초기화</NoReviewItemBtn>
        </NoReviewItem>
      )}
    </StyledReviewList>
  );
};

export default ReviewList;

const StyledReviewList = styled.ul`
  margin-bottom: 120px;
`;

const ReviewItem = styled.li`
  padding: 24px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ReviewHeader = styled.div`
  margin-bottom: 8px;
`;

const ReviewHeaderTop = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewStars = styled.span`
  display: inline-block;
  margin-right: 6px;
  font-size: 14px;
  line-height: 14px;
`;

const ReviewUser = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
`;

const ReviewCreateAt = styled.span`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.tertiary};
`;

const ReviewContent = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

const NoReviewItem = styled(ReviewItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;
  margin: 40px 0px 24px;

  svg {
    height: 64px;
    margin-bottom: 32px;
    color: #ced4da;
  }
`;

const NoReviewItemTitle = styled.h4`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.4px;
  text-align: center;
`;

const NoReviewItemContent = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.tertiary};
  font-size: 14px;
  letter-spacing: -0.4px;
`;

const NoReviewItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0px 32px;
  border: 0px;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.2px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.blue};
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #2b96ed;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 3px 0px;
  }
`;

const ReviewStarBlue = styled.span`
  color: ${({ theme }) => theme.blue};
`;

const ReviewStarGray = styled(ReviewStarBlue)`
  color: ${({ theme }) => theme.tertiary};
`;
