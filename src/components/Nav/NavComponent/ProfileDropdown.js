import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const goToMyPage = () => {
    navigate('/mypage');
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const goToMain = () => {
    navigate('/');
  };

  const switchLogin = () => {
    clearLocalStorage();
    goToMain();
  };

  const navigate = useNavigate();
  return (
    <DropdownContent>
      <Button onClick={goToMyPage}>마이페이지</Button>
      <Button onClick={switchLogin}>로그아웃</Button>
    </DropdownContent>
  );
};

export default ProfileDropdown;

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 2px;
  background-color: white;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
`;
