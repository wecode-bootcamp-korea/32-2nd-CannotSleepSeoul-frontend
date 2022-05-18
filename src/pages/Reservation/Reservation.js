import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from './components/ProductInfo';
import UserInfo from './components/UserInfo';
import AddReservation from './components/AddReservation';
import HowToPayment from './components/HowToPayment';
import PaymentInfo from './components/PaymentInfo';
import PayModal from './components/PayModal';

const Reservation = () => {
  const [commonData, setCommonData] = useState({});
  const [isModal, setIsModal] = useState(false);

  const modalOnOff = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    setCommonData(JSON.parse(localStorage.getItem('reservationData')));
  }, []);

  return (
    <MainWrapper>
      <ReservationWrapper>
        <ReservationText>예약하기</ReservationText>

        <IndivisualInfoText>상품 정보</IndivisualInfoText>
        <ProductInfo commonData={commonData} />

        <IndivisualInfoText>예약자 정보</IndivisualInfoText>
        <UserInfo />

        <IndivisualInfoText>
          추가 예약 정보<span> (필수)</span>
        </IndivisualInfoText>
        <AddReservation />
        <IndivisualInfoText>결제 방법</IndivisualInfoText>
        <HowToPayment />
      </ReservationWrapper>
      <PaymentInfoWrapper>
        <PaymentInfo
          commonData={commonData}
          isModal={isModal}
          setIsModal={setIsModal}
          modalOnOff={modalOnOff}
        />
      </PaymentInfoWrapper>

      {isModal && (
        <PayModal
          isModal={isModal}
          setIsModal={setIsModal}
          modalOnOff={modalOnOff}
        />
      )}
    </MainWrapper>
  );
};

export default Reservation;

const MainWrapper = styled.div`
  display: flex;
  max-width: 1060px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 120px;
`;

const ReservationWrapper = styled.div`
  width: 680px;
  margin-right: 50px;
`;

const ReservationText = styled.div`
  font-size: 28px;
  font-weight: 500;
`;

const IndivisualInfoText = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin: 30px 0 15px 0;

  span {
    font-size: 14px;
  }
`;

const PaymentInfoWrapper = styled.div`
  width: 380px;
  height: 600px;
  border: 1px solid ${props => props.theme.border};
  position: sticky;
  top: 0px;
  transform: translateY(35px);
`;
