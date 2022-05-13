import React from 'react';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <>
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
            <ReservationBox>예약 확인</ReservationBox>
          </StyledAll>
        </MypageAll>
      </Body>
      ;햐
    </>
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
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 17px;
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
  margin-bottom: 20px;
  /* border: 2px solid red; */
  border-radius: 50%;
`;

const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 22px;
  width: 250px;
  height: 250px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 788px;
  height: 757px;
  border: 2px solid ${({ theme }) => theme.border};
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
