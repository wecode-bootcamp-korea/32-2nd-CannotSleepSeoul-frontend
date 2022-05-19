import React, { useState } from 'react';
import styled from 'styled-components';
import AddReserve from './AddReserve';

const INPUT_DATA = [
  {
    id: 1,
    title: '한글이름',
    value: localStorage.getItem('profile_name'),
    otherValue: '홍길동',
  },
  {
    id: 2,
    title: '이메일 주소',
    value: localStorage.getItem('profile_email'),
    otherValue: 'example@example.com',
  },
  {
    id: 3,
    title: '휴대전화 번호',
    value: localStorage.getItem('profile_phone'),
    otherValue: '01012345678',
  },
];
const AddReservation = () => {
  const [changeValue, setChangeValue] = useState(false);
  const isClick = () => {
    setChangeValue(!changeValue);
  };

  return (
    <>
      <TextWrapper>
        <div>
          <p className="firstUserText">대표 투숙자</p>
          <p className="firstUserInfo">
            원활한 예약 확인을 위해 정확하게 입력해주세요.
          </p>
        </div>
        <div>
          <input type="checkbox" onClick={isClick} />
          <span>다른 사람이 투숙해요</span>
        </div>
      </TextWrapper>
      {INPUT_DATA.map(data => (
        <AddReserve key={data.id} data={data} changeValue={changeValue} />
      ))}
    </>
  );
};

export default AddReservation;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0 20px 0;
  border-top: 1px solid ${props => props.theme.border};
  font-size: 14px;

  .firstUserText {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .firstUserInfo {
    color: ${props => props.theme.tertiary};
  }
`;
