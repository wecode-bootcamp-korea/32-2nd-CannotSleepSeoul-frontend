import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KAKAO_API } from '../../config';

const USER_SIGN_CONTENT = {
  signIn: {
    title: 'Welcome!',
    linkTitle: '아직 회원이 아니신가요?',
    linkHref: '/users/sign_up',
    linkText: '회원가입',
  },
  signUp: {
    title: '반갑습니다!',
    linkTitle: '이미 아이디가 있으신가요?',
    linkHref: '/users/sign_in',
    linkText: '로그인',
  },
};

const UserSign = ({ page }) => {
  const { title, linkTitle, linkHref, linkText } = USER_SIGN_CONTENT[page];

  return (
    <UserSignWrapper>
      <Emoji>👋</Emoji>
      <UserSignTitle>{title}</UserSignTitle>
      <UserSignParagraph>여행의 모든 것, 잠못자 서울</UserSignParagraph>
      <KakaoLogin href={KAKAO_API.AUTHORIZE}>
        <img alt="카카오 로그인" src="/images/kakao_login_medium_wide.png" />
      </KakaoLogin>

      <UserSignLink>
        <span>{linkTitle}</span>
        <Link to={linkHref}>{linkText}</Link>
      </UserSignLink>
    </UserSignWrapper>
  );
};

export default UserSign;

const UserSignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  padding: 48px;
  border: 1px solid ${({ theme }) => theme.border};
  margin: 64px auto 240px;
  color: ${({ theme }) => theme.primary};
`;

const Emoji = styled.span`
  margin-bottom: 26px;
  font-size: 56px;
`;

const UserSignTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.47px;
  line-height: 1.29;
`;

const UserSignParagraph = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.secondary};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.27px;
`;

const KakaoLogin = styled.a`
  padding: 0;
  border: none;
  border-radius: 12px;
  margin-bottom: 40px;
  background-color: transparent;
`;

const UserSignLink = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-size: 14px;
  letter-spacing: -0.23px;

  span {
    margin-right: 8px;
  }

  a {
    color: ${({ theme }) => theme.tertiary};
    text-decoration: underline;
  }
`;
