import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileDropdown from './ProfileDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
      mockData.filter(data => data.name.startsWith(e.target.value))
    );
  };

  const topSearchEnter = e => {
    navigate('/productList');
  };

  const navigate = useNavigate();

  const goToKakao = () => {
    navigate('/users/sign_in');
  };

  const openProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <StyledTopBar>
      <LogoNSearch>
        <TopLogo>로고</TopLogo>
        <TopSearch>
          <TopSearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </TopSearchIcon>
          <TopSearchInput
            mockData={filteredData}
            onChange={filterData}
            onKeyUp={topSearchEnter}
            type="text"
            placeholder="도시나 상품을 검색해보세요"
          />
        </TopSearch>
      </LogoNSearch>

      <TopRigthButton>
        {localStorage.getItem('token') ? (
          <StateLogin>
            <WelcomeMessage>
              {localStorage.getItem('profile_name')}님 환영합니다.
            </WelcomeMessage>
            <Profile
              src={localStorage.getItem('profile_img')}
              onClick={openProfileDropdown}
            />

            {isProfileOpen && <ProfileDropdown />}
          </StateLogin>
        ) : (
          <StateLogout>
            <LoginBotton onClick={goToKakao}>로그인</LoginBotton>
          </StateLogout>
        )}
      </TopRigthButton>
    </StyledTopBar>
  );
};

export default TopBar;

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin-bottom: 90px;
`;

const LogoNSearch = styled.div`
  display: flex;
  align-items: center;
`;

const TopLogo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 28px 0px 0px;
  width: 128px;
  height: 28px;
  border: solid 1px white;
  color: white;
`;

const TopSearch = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 110px 0px 0px;
  padding: 0px 0px 0px 20px;
  width: 326px;
  height: 48px;
  color: white;
  background-color: rgba(245, 246, 255, 0.15);
  border-radius: 8px;
  border: none;
`;
const TopSearchIcon = styled.p`
  margin: 0px 20px 0px 0px;
`;

const TopSearchInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: bolder;
  color: white;
  cursor: text;
`;
const TopRigthButton = styled.div`
  position: relative;
  width: 200px;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  font: white;
  cursor: pointer;
`;

const StateLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const WelcomeMessage = styled.span`
  color: white;
`;

const Profile = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const StateLogout = styled.button`
  display: flex;
  justify-content: right;
  padding: 0px;
  width: 200px;
  background-color: transparent;
`;

const LoginBotton = styled.button`
  width: 122px;
  height: 36px;
  background-color: transparent;
  border: white 1px solid;
  color: white;
  cursor: pointer;
`;
