import React from 'react';
import styled from 'styled-components';
import FooterLink from '../FooterLink/FooterLink';

const FooterTerms = () => {
  return (
    <StyledFooterTerms>
      <FooterTermsItem>
        <FooterLink>이용 약관</FooterLink>
      </FooterTermsItem>
      <FooterTermsItem>
        <FooterLink bold="true">개인 정보 처리 방침</FooterLink>
      </FooterTermsItem>
      <FooterTermsItem>
        <FooterLink>취소 및 환불 정책</FooterLink>
      </FooterTermsItem>
    </StyledFooterTerms>
  );
};

export default FooterTerms;

const StyledFooterTerms = styled.ul`
  display: flex;
  margin-bottom: 16px;
`;

const FooterTermsItem = styled.li`
  margin-right: 20px;
`;
