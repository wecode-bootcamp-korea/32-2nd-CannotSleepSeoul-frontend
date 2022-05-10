import React from 'react';
import styled from 'styled-components';

const FooterCustomer = () => {
  return (
    <StyledFooterCustomer>
      <FooterCustomerTitle>고객지원실 운영안내</FooterCustomerTitle>
      <FooterCustomerList>
        <FooterCustomerItem>
          연중무휴 09:00-18:00 (점심시간 12:00-13:00)
        </FooterCustomerItem>
        <FooterCustomerItem>주말/공휴일 포함, 한국시간 기준</FooterCustomerItem>
        <FooterCustomerItem>
          ※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능
        </FooterCustomerItem>
        <FooterCustomerItem>유선상담 0000-0000</FooterCustomerItem>
      </FooterCustomerList>
      <FooterCustomerButton>1:1 채팅상담</FooterCustomerButton>
    </StyledFooterCustomer>
  );
};

export default FooterCustomer;

const StyledFooterCustomer = styled.div`
  width: 50%;
`;

const FooterCustomerTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`;

const FooterCustomerList = styled.ul`
  margin: 10px 0 16px;
`;

const FooterCustomerItem = styled.li`
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  letter-spacing: -0.2px;
  line-height: 1.5;
`;

const FooterCustomerButton = styled.button`
  width: 110px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background-color: transparent;
`;
