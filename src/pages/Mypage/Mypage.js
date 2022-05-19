import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../Reservation/components/ProductInfo';

const Mypage = () => {
  return (
    <Body>
      <MypageAll>
        <PageTitle>마이페이지</PageTitle>

        <StyledAll>
          <ProfileBox>
            <PictureBox>
              <Picture src={localStorage.getItem('profile_img')} />
              <UserName> {localStorage.getItem('profile_name')}</UserName>
            </PictureBox>

            <PrivacyInfo>
              {PRIVACYINFO_LIST.map(data => {
                return (
                  <InfoForCenter key={data.id}>
                    <Title>{data.infoTitle} </Title>
                    <Info>{localStorage.getItem(data.storageKey)}</Info>
                  </InfoForCenter>
                );
              })}
            </PrivacyInfo>
          </ProfileBox>
          {localStorage.getItem('reservationData') && (
            <ReservationBox>
              <ReservationTitle>예약하기</ReservationTitle>
              <ReservationInfo>
                <ProductInfo
                  commonData={JSON.parse(
                    localStorage.getItem('reservationData')
                  )}
                />
              </ReservationInfo>
            </ReservationBox>
          )}
        </StyledAll>
      </MypageAll>
    </Body>
  );
};

export default Mypage;

const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0 102px;
`;

const MypageAll = styled.div``;
const StyledAll = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  height: 1132px;
`;
const PageTitle = styled.div`
  margin-bottom: 17px;
  font-size: 24px;
  font-weight: 600;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 460px;
`;

const Picture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  padding-top: 22px;
  border: 2px solid ${({ theme }) => theme.border};
`;

const UserName = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 20px;
  font-weight: 500;
  font-size: 18px;
`;
const PrivacyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.border};
`;

const InfoForCenter = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Title = styled.span`
  display: flex;
  justify-content: left;
  width: 65px;
  font-weight: 500;
  font-size: 14px;
`;
const Info = styled.span`
  width: 150px;
  opacity: 1;
`;

const ReservationBox = styled.div`
  width: 788px;
  height: 460px;
  border: 2px solid ${({ theme }) => theme.border};
  padding: 20px 10px;
`;

const ReservationTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
`;

const ReservationInfo = styled.div`
  margin-top: 20px;

  /* border: 2px red solid; */
  padding: 10px;
`;

const PRIVACYINFO_LIST = [
  {
    id: 1,
    infoTitle: '이름',
    storageKey: 'profile_name',
  },
  {
    id: 2,
    infoTitle: '이메일',
    storageKey: 'profile_email',
  },
  {
    id: 3,
    infoTitle: '전화번호',
    storageKey: 'profile_phone',
  },
];
