import React, { useState } from 'react';
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const DatePicker = ({ dates, setDates, selection, setSelection }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { startDate, endDate } = selection;

  const dayTranslate = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };

  const togglePopUpVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const selectDate = date => {
    setDates([date.selection]);
  };

  const modifyDateSelection = () => {
    setSelection({ ...dates[0] });
    setIsVisible(false);
  };

  const buttonText = `${startDate.getMonth() + 1}월 ${startDate.getDate()}일 (${
    dayTranslate[startDate.getDay()]
  }) ~ ${endDate.getMonth() + 1}월 ${endDate.getDate()}일 (${
    dayTranslate[endDate.getDay()]
  })`;

  return (
    <DateRangeWrapper>
      <PopUpButton onClick={togglePopUpVisibility}>
        <FontAwesomeIcon icon={faCalendar} />
        {buttonText}
      </PopUpButton>

      <PopUpContainer isVisible={isVisible}>
        <DateRange
          editableDateInputs={true}
          onChange={date => selectDate(date)}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dates}
          minDate={new Date()}
          showDateDisplay={false}
          direction="horizontal"
        />
        <PopUpFooter>
          <CompleteBtn onClick={modifyDateSelection}>완료</CompleteBtn>
        </PopUpFooter>
      </PopUpContainer>
    </DateRangeWrapper>
  );
};

export default DatePicker;

const DateRangeWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  margin-right: 8px;

  .rdrMonthAndYearPickers {
    display: none;
  }

  .rdrCalendarWrapper {
    width: 100%;

    .rdrMonth {
      position: relative;
      width: 50%;

      .rdrMonthName {
        position: absolute;
        top: -52px;
        left: 50%;
        color: ${({ theme }) => theme.primary};
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        transform: translateX(-50%);
      }
    }
  }
`;

const PopUpButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 44px;
  padding-left: 48px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.3px;
  background-color: #fff;
  transition: border 200ms;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.secondary};
  }

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 12px;
    color: ${({ theme }) => theme.blue};
    transform: translateY(-50%);
  }
`;

const PopUpContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  left: 0;
  width: 652px;
  border-radius: 2px;
  background-color: #fff;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 5px 10px 0 rgb(0 0 0 / 12%);
`;

const PopUpFooter = styled.footer`
  padding: 8px 16px;
  text-align: right;
`;

const CompleteBtn = styled.button`
  height: 32px;
  padding: 0 24px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 4px;
  font-size: 13px;
  color: #fff;
  background-color: ${({ theme }) => theme.blue};
  transition: box-shadow 100ms ease-out, background-color 100ms ease-out,
    color 100ms ease-out, border-bottom 100ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: #2b96ed;
    border-color: #2b96ed;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 30%);
  }
`;
