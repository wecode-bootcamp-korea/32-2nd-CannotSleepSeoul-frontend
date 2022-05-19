import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LocationDropdown from './LocationDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { API } from '../../../config';

const NavSearchContainer = () => {
  const [isClicked, setIsCLicked] = useState(false);
  const [mockData, setmockData] = useState([]);
  const [ctnFilteredData, setCtnFilteredData] = useState([]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.HOTELS}/main`)
      .then(res => res.json())
      .then(data => {
        setmockData(data.hotel_info);
        setCtnFilteredData(data.hotel_info.slice(0, 10));
      });
  }, []);

  const filterData = e => {
    setCtnFilteredData(
      mockData
        .filter(
          data =>
            data.name.startsWith(e.target.value) ||
            data.gu.startsWith(e.target.value) ||
            data.detail.startsWith(e.target.value)
        )
        .slice(0, 10)
    );
  };

  const ctnHandleInput = e => {
    setUserInput(e.target.value);
    filterData(e);
  };

  //setCtnFilteredData는 다음페이지로 어떻게 전달되는걸까?
  const ctnSearchEnter = e => {
    if (e.key === 'Enter') {
      navigate(`/products?search=${userInput}`);
    }
  };

  const toggleHotelAddressDropDown = () => {
    setIsCLicked(prev => !prev);
  };

  return (
    <StyledNavSearchContainer>
      <NavSearchBox>
        <Inputs>
          <NavLocationBox>
            <NavIconGlass>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </NavIconGlass>

            <NavLocationInput
              mockData={ctnFilteredData}
              onChange={ctnHandleInput}
              onKeyUp={ctnSearchEnter}
              onClick={toggleHotelAddressDropDown}
              type="text"
              placeholder="신라스테이"
            />

            {isClicked && <LocationDropdown mockData={ctnFilteredData} />}
          </NavLocationBox>
          <NavCalendarBox>
            <NavIconCalendar>
              <FontAwesomeIcon icon={faCalendar} />
            </NavIconCalendar>
            <NavCalendarInput
              type="text"
              placeholder="5월9일(월)~5월20일(금)"
            />
          </NavCalendarBox>
        </Inputs>

        <NavBotton>검색</NavBotton>
      </NavSearchBox>
    </StyledNavSearchContainer>
  );
};

export default NavSearchContainer;

const StyledNavSearchContainer = styled.div`
  position: absolute;
  top: 230px;
  height: 95px;
  width: 1060px;
  padding: 13px 0px;
  border-radius: 8px;
  box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
  background-color: rgb(255, 255, 255);
  z-index: 110;
`;

const NavSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 10px;
  height: 48px;
  border-radius: 8px;
  color: rgb(52, 58, 64);
  background-color: rgb(255, 255, 255);
`;

const Inputs = styled.span`
  display: flex;
  justify-content: center;
  flex: 7;
  height: 100%;
`;

const NavLocationBox = styled.span`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: #f6f7f7;
`;

const NavLocationInput = styled.input`
  flex-grow: 1;
  height: 100%;
  width: 80%;
  padding: 0px 15px;
  border: none;
  margin-right: 0px;
  font-weight: 500;
  font-size: 16px;
  background-color: #f6f7f7;

  &:focus {
    border: none;
    outline: none;
  }
`;

const NavCalendarBox = styled(NavLocationBox)``;

const NavCalendarInput = styled(NavLocationInput)``;

const NavIconGlass = styled.span`
  margin-right: 10px;
`;

const NavIconCalendar = styled(NavIconGlass)``;

const NavBotton = styled.button`
  height: 100%;
  width: 135px;
  padding: 0px 32px;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background-color: ${({ theme }) => theme.blue};
  cursor: pointer;
`;
