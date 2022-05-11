import React from 'react';
import styled from 'styled-components';
import DatePicker from '../../../components/DatePicker/DatePicker';

const ArticleSearch = ({
  dates,
  setDates,
  selection,
  setSelection,
  searchDates,
  hotelData,
  setHotelData,
}) => {
  return (
    <StyledArticleSearch>
      <DatePicker
        dates={dates}
        setDates={setDates}
        selection={selection}
        setSelection={setSelection}
      />
      <SearchButton onClick={searchDates}>재검색</SearchButton>
    </StyledArticleSearch>
  );
};

export default ArticleSearch;

const StyledArticleSearch = styled.section`
  display: flex;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

const SearchButton = styled.button`
  width: 84px;
  height: 44px;
  flex-grow: 0;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.blue};
  background-color: #e7f4fd;
  cursor: pointer;
`;
