import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LocationDropdown from './LocationDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

const NavSearchContainer = () => {
  const [isClicked, setIsCLicked] = useState(false);
  const [mockData, setmockData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/data/NavMockData/NavMockData.json')
      .then(res => res.json())
      .then(data => {
        setmockData(data);
        setFilteredData(data);
      });
  }, []);

  const filterData = e => {
    setFilteredData(
      mockData.filter(
        data =>
          data.name.startsWith(e.target.value) ||
          data.gu.startsWith(e.target.value) ||
          data.detail.startsWith(e.target.value)
      )
    );
  };

  const openHotelAddressDropDown = () => {
    setIsCLicked(true);
  };

  const closeHotelAddressDropDown = () => {
    setIsCLicked(false);
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
              onClick={openHotelAddressDropDown}
              onBlur={closeHotelAddressDropDown}
              type="text"
              placeholder="신라스테이"
              onChange={filterData}
            />

            {isClicked && <LocationDropdown mockData={filteredData} />}
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
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
  z-index: 110;
`;

const NavSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  height: 48px;
  border-radius: 8px;
  color: rgb(52, 58, 64);
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
  margin-right: 10px;
  padding: 0px 20px;
  border-radius: 8px;
  background-color: #f6f7f7;
`;

const NavLocationInput = styled.input`
  flex-grow: 1;
  padding: 0px 15px;
  margin-right: 0px;
  height: 100%;
  width: 80%;
  font-weight: 500;
  font-size: 16px;
  background-color: #f6f7f7;
  border: none;

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
  padding: 0px 32px;
  height: 100%;
  width: 135px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.blue};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
