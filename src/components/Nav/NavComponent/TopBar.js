import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileDropdown from './ProfileDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const topbarHandleUserInput = e => {
    setUserInput(e.target.value);
  };

  const topbarSearchEnter = e => {
    if (e.key === 'Enter') {
      navigate(`/products?search=${userInput}`);
    }
  };

  const goToKakao = () => {
    navigate('/users/sign_in');
  };

  const openProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <StyledTopBar>
      <LogoNSearch>
        <TopLogo>
          <Link to="/">
            <TopLogoImage alt="잠못자, 서울" src="/images/logo-white.png" />
          </Link>
        </TopLogo>
        <TopSearch>
          <TopSearchIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </TopSearchIcon>
          <TopSearchInput
            onChange={topbarHandleUserInput}
            onKeyUp={topbarSearchEnter}
            type="text"
            placeholder="도시나 상품을 검색해보세요"
          />
        </TopSearch>
      </LogoNSearch>
      7
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

const TopLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  /* height: 28px; */
  margin: 0px 28px 0px 0px;
  color: white;
`;

const TopLogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const TopSearch = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 326px;
  height: 48px;
  padding: 0px 0px 0px 20px;
  border-radius: 8px;
  border: none;
  margin: 0px 110px 0px 0px;
  color: white;
  background-color: rgba(245, 246, 255, 0.15);
`;
const TopSearchIcon = styled.span`
  display: block;
  margin: 0px 20px 0px 0px;
`;

const TopSearchInput = styled.input`
  border: none;
  color: #fff;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: bolder;
  background-color: transparent;
  cursor: text;

  ::placeholder {
    color: white;
  }
`;

const TopRigthButton = styled.div`
  position: relative;
  width: 200px;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
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
const StateLogout = styled.div`
  display: flex;
  justify-content: right;
  width: 200px;
  padding: 0px;
  border: none;
  background-color: transparent;
`;

const LoginBotton = styled.button`
  width: 122px;
  height: 36px;
  border: white 1px solid;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;
