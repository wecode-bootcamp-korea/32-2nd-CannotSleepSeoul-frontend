import React, { useState } from 'react';
import styled from 'styled-components';

const REVIEW_RATING_NUMBERS = [5, 4, 3, 2, 1];

const ReviewFilter = ({
  selectedRating,
  filterReviewsByRating,
  sortingOrder,
  sortReviews,
}) => {
  const [isFilterShow, setIsFilterShow] = useState(false);

  const toggleRatingFilterShow = () => {
    setIsFilterShow(prev => !prev);
  };

  return (
    <StyledReviewFilter>
      <FilterRating>
        <FilterRatingButton
          onClick={toggleRatingFilterShow}
          isFilterShow={isFilterShow}
          selectedRating={selectedRating}
        >
          ★ {selectedRating ? selectedRating + '점' : '평점'}
        </FilterRatingButton>

        {isFilterShow && (
          <RatingDropdownList>
            <RatingDropdownItem>
              <RatingDropdownInput
                type="radio"
                name="rating"
                value="0"
                id="0"
                checked={!selectedRating}
                onChange={filterReviewsByRating}
              />
              <label htmlFor="0">전체</label>
            </RatingDropdownItem>

            {REVIEW_RATING_NUMBERS.map(num => (
              <RatingDropdownItem key={num}>
                <RatingDropdownInput
                  type="radio"
                  name="rating"
                  value={num}
                  id={num}
                  checked={selectedRating === num}
                  onChange={filterReviewsByRating}
                />
                <RatingDropdownStar htmlFor={num}>
                  {'★'.repeat(num)}
                </RatingDropdownStar>
              </RatingDropdownItem>
            ))}
          </RatingDropdownList>
        )}
      </FilterRating>

      <FilterOrder>
        <li>
          <FilterOrderBtn
            sorting={sortingOrder === 'recent'}
            onClick={() => sortReviews('recent')}
          >
            최신순
          </FilterOrderBtn>
        </li>
        <li>
          <FilterOrderBtn
            sorting={sortingOrder === 'highRating'}
            onClick={() => sortReviews('highRating')}
          >
            높은 평점순
          </FilterOrderBtn>
        </li>
        <li>
          <FilterOrderBtn
            sorting={sortingOrder === 'lowRating'}
            onClick={() => sortReviews('lowRating')}
          >
            낮은 평점순
          </FilterOrderBtn>
        </li>
      </FilterOrder>
    </StyledReviewFilter>
  );
};

export default ReviewFilter;

const StyledReviewFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterRating = styled.div`
  position: relative;
`;

const FilterRatingButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border: 1px solid
    ${({ theme, selectedRating, isFilterShow }) =>
      selectedRating || isFilterShow ? theme.blue : theme.border};
  border-radius: 4px;
  color: ${({ theme, selectedRating, isFilterShow }) =>
    selectedRating || isFilterShow ? theme.blue : theme.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.14px;
  background-color: ${({ selectedRating, isFilterShow }) =>
    selectedRating || isFilterShow ? '#f5fbff' : '#fff'};
  cursor: pointer;
`;

const RatingDropdownList = styled.form`
  position: absolute;
  top: 48px;
  left: 0px;
  width: 260px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgba(33, 37, 41, 0.15),
    0 0 0 1px ${({ theme }) => theme.border}, 0 1px 4px 0 rgba(0, 0, 0, 0.15);
`;

const RatingDropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f5f6f7;
  }
`;

const RatingDropdownInput = styled.input`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.blue};
  margin-right: 10px;
`;

const RatingDropdownStar = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.blue};
  font-size: 20px;
  letter-spacing: 5px;
  cursor: pointer;
`;

const FilterOrder = styled.ul`
  display: flex;
`;

const FilterOrderBtn = styled.button`
  display: flex;
  padding: 8px 0px;
  margin-right: 10px;
  border: none;
  color: ${({ theme, sorting }) => (sorting ? theme.primary : theme.tertiary)};
  background-color: transparent;
  cursor: pointer;
`;
