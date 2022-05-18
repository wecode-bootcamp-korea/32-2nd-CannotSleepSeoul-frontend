import React from 'react';
import styled from 'styled-components';

const showAccount = () => {
  alert(
    `         가상계좌: 652702-04-298772 국민 전형준 
    입금완료 후 마이페이지에서 결제완료를 확인해주세요!`
  );
};

const PayModal = ({ modalOnOff }) => {
  return (
    <>
      <Background onClick={modalOnOff} />
      <ModalWrapper>
        <ModalNav>
          <div>무통장 입금</div>
          <span onClick={modalOnOff}>X</span>
        </ModalNav>

        <PaymentGuideText>
          <p>결제를 진행할</p>
          <p>계좌를 입력해 주세요</p>
        </PaymentGuideText>

        <InputWrapper>
          <p>사용은행</p>
          <input type="text" />

          <p>계좌번호</p>
          <input type="text" />
        </InputWrapper>

        <InputAccountBtn onClick={showAccount}>
          가상계좌 안내받기
        </InputAccountBtn>
      </ModalWrapper>
    </>
  );
};

export default PayModal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;
  opacity: 0.4;
  top: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 30%;
  transform: translateX(50%);
  transform: translateY(-50%);
`;

const ModalNav = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  span {
    cursor: pointer;
  }
`;

const PaymentGuideText = styled.div`
  margin: 50px 0 30px 0;
  p {
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: 700;
  }
`;

const InputWrapper = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 15px;
  }
  input {
    width: 550px;
    height: 45px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.border};
    border: none;
    border-radius: 10px;
  }
`;

const InputAccountBtn = styled.button`
  width: 550px;
  height: 45px;
  margin-top: 20px;
  background-color: ${props => props.theme.blue};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
