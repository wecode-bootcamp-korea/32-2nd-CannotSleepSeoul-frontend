import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterCustomer from './FooterCustomer/FooterCustomer';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterTerms from './FooterTerms/FooterTerms';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapperTop>
        <FooterCustomer />
        <FooterInfo />
      </FooterWrapperTop>

      <FooterWrapperBottom>
        <FooterTerms />
        <FooterCopy>
          상호명 잠못자 서울 | 대표 김현수 | 개인정보보호책임자 김현수 |
          사업자등록번호 000-00-00000 <Link to="#">사업자정보확인</Link> |
          통신판매업신고번호 0000-경기성남-0000
          <br />
          주소 서울특별시 강남구 테헤란로 427, 위워크 선릉 2호점 10층(삼성동) |
          이메일 help@cannotsleepseoul.com | 마케팅/제휴 문의
          marketing@cannotsleepseoul.com
          <br />
          <br />
          자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있지 않습니다.
          잠못자 서울은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
        </FooterCopy>
      </FooterWrapperBottom>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const FooterWrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1060px;
  padding: 40px 0;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const FooterWrapperBottom = styled(FooterWrapperTop)`
  display: block;
  padding-top: 16px;
  border-bottom: none;
`;

const FooterCopy = styled.p`
  font-size: 12px;
  letter-spacing: -0.02px;
  line-height: 1.16;
  color: ${({ theme }) => theme.tertiary};

  a {
    font-weight: 500;
    color: inherit;
  }
`;
