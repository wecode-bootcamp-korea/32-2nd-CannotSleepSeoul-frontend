import React from 'react';
import styled from 'styled-components';

const PaymentInfo = ({ commonData, isModal, setIsModal, modalOnOff }) => {
  const { rooms_price } = commonData;
  return (
    <MainWrapper>
      <PayInfoText>결제 정보</PayInfoText>
      <OrderPriceWrapper>
        <p>주문 금액</p>
        <p>{parseInt(rooms_price).toLocaleString()}원</p>
      </OrderPriceWrapper>
      <TotalPriceWrapper>
        <p>총 결제 금액</p>
        <p>{parseInt(rooms_price).toLocaleString()}원</p>
      </TotalPriceWrapper>
      <TermsInfoText>약관 안내</TermsInfoText>
      <TermsInfoWrapper>
        <div className="TermsTitle">
          <p>여행자 약관 동의 (필수)</p>
          <p className="termsTitleCenter">개인정보 제공 동의 (필수)</p>
          <p>개인정보 수집 및 이용 동의 (필수)</p>
        </div>
        <div className="arrowBtn">
          <p>{'>'}</p>
          <p className="arrowBtnCenter">{'>'}</p>
          <p>{'>'}</p>
        </div>
      </TermsInfoWrapper>

      <TermsConfirmText>
        위 약관을 확인하였으며, 회원 본인은 약관 및 결제에 동의합니다.
      </TermsConfirmText>

      <PaymentBtn onClick={modalOnOff}>
        {parseInt(rooms_price).toLocaleString()}원 결제하기
      </PaymentBtn>
    </MainWrapper>
  );
};

export default PaymentInfo;

const MainWrapper = styled.div`
  width: 290px;
  margin: 30px auto;
  border-radius: 4px;
`;

const PayInfoText = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 22px;
`;

const OrderPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  color: ${props => props.theme.tertiary};
  font-size: 14px;
`;

const TotalPriceWrapper = styled.div`
  width: 328px;
  height: 72px;
  position: relative;
  right: 19px;
  margin-top: 25px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5fbff;
  color: ${props => props.theme.blue};
  font-size: 18px;
  font-weight: 700;
`;

const TermsInfoText = styled.div`
  margin-top: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 22px;
`;

const TermsInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 15px;
  border: 1px solid ${props => props.theme.border};

  .TermsTitle,
  .arrowBtn {
    padding: 15px 0;
    font-size: 14px;
  }

  .termsTitleCenter,
  .arrowBtnCenter {
    margin: 15px 0;
  }

  .arrowBtn {
    color: ${props => props.theme.tertiary};
  }
`;

const TermsConfirmText = styled.div`
  margin: 20px 0 50px 0;
  color: ${props => props.theme.tertiary};
  font-size: 12px;
`;

const PaymentBtn = styled.button`
  width: 290px;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.blue};
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
