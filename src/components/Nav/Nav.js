import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from './NavComponent/TopBar';
import NavSearchContainer from './NavComponent/NavSearchContainer';
import backgroundIMG from '../../assets/nav_background-img.jpg';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const [toggleSwtich, setToggleSwitch] = useState(false);

  const toggleCloser = () => {
    setToggleSwitch(false);
  };

  const location = useLocation();
  if (location.pathname === '/map') return null;
  return (
    <Body toggleCloser={toggleCloser}>
      <NavAll>
        <TopBar toggleSwtich={toggleSwtich} />
        <NavTitle>어떤 숙소 찾으세요?</NavTitle>
        <NavSearchContainer />
      </NavAll>
    </Body>
  );
};

export default Nav;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 280px;
  border: 1px solid black;
  margin-bottom: 90px;
  background-image: url('${backgroundIMG}');
  background-size: cover;
  background-position: center center;
`;

const NavAll = styled.div`
  width: 1060px;
  background-color: transparent;
`;

const NavTitle = styled.div`
  margin: 23px 0px;
  height: 44px;
  font-size: 36px;
  font-weight: bold;
  color: white;
`;
