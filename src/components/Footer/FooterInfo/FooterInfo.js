import React from 'react';
import styled from 'styled-components';
import FooterLink from '../FooterLink/FooterLink';

const FOOTER_INFO_DATA = [
  { id: 1, title: '소개', infoList: ['회사소개', '채용', '공고'] },
  {
    id: 2,
    title: '파트너',
    infoList: ['파트너 등록하기', 'Affiliate 프로그램', '리얼파트너'],
  },
  { id: 3, title: '지원', infoList: ['자주 묻는 질문', '최저가 보장제'] },
];

const FooterInfo = () => {
  return (
    <StyledFooterInfo>
      {FOOTER_INFO_DATA.map(({ id, title, infoList }) => (
        <FooterInfoGroup key={id}>
          <FooterInfoTitle>{title}</FooterInfoTitle>
          <FooterInfoList>
            {infoList.map((data, dataIndex) => (
              <li key={dataIndex}>
                <FooterLink to="#">{data}</FooterLink>
              </li>
            ))}
          </FooterInfoList>
        </FooterInfoGroup>
      ))}
    </StyledFooterInfo>
  );
};

export default FooterInfo;

const StyledFooterInfo = styled.div`
  display: flex;
  width: 50%;
`;

const FooterInfoGroup = styled.div`
  width: calc(100% / 3);
`;

const FooterInfoTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.6;
  color: ${({ theme }) => theme.primary};
`;

const FooterInfoList = styled.ul`
  margin: 10px 0;
  line-height: 2.29;
`;
