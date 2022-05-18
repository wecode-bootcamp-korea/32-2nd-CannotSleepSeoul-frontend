import React from 'react';
import styled from 'styled-components';

const UserInfo = () => {
  return (
    <InfoWrapper>
      <InfoCategory>
        <p>예약자 이름</p>
        <p className="centerMargin">이메일 주소</p>
        <p>휴대전화 번호</p>
      </InfoCategory>

      <InfoUser>
        <p>{localStorage.getItem('profile_name')}</p>
        <p className="centerMargin">{localStorage.getItem('profile_email')}</p>
        <p>+82 {localStorage.getItem('profile_phone')}</p>
      </InfoUser>

      <InfoChange>
        <button>정보변경</button>
      </InfoChange>
    </InfoWrapper>
  );
};

export default UserInfo;

const InfoWrapper = styled.div`
  display: flex;
  padding: 25px 0;
  border-top: 1px solid ${({ theme }) => theme.border};

  .centerMargin {
    margin: 10px 0;
  }
`;

const InfoCategory = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.tertiary};
  font-size: 14px;
`;

const InfoUser = styled.div`
  flex: 1;
  font-size: 14px;
`;

const InfoChange = styled.div`
  flex: 3;
  text-align: right;
  color: ${({ theme }) => theme.primary};
  button {
    width: 84px;
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #e9ecef;
    font-size: 14px;
    font-weight: 500;
  }
`;
