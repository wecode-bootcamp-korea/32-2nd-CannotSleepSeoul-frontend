import React from 'react';
import styled from 'styled-components';

const HowToPayment = () => {
  return (
    <Wrapper>
      <label>
        <input type="radio" name="wayToPay" value="toss" checked="checked" />
        토스 <span className="tossBlueText">TOSS</span>
      </label>
      <label>
        <input type="radio" name="wayToPay" value="account" />
        무통장 입금
      </label>
    </Wrapper>
  );
};

export default HowToPayment;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0 50px 0;
  border-top: 1px solid ${props => props.theme.border};

  label {
    margin-bottom: 20px;

    .tossBlueText {
      color: blue;
      font-weight: 700;
    }
  }
`;
