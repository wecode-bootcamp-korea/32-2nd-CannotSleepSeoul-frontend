import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API, KAKAO_API } from '../../config';

const Social = () => {
  const [token, setToken] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const code = location.search.split('?code=')[1];

  useEffect(() => {
    fetch(`${KAKAO_API.TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_CLIENT_ID}&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`,
    })
      .then(res => {
        if (!res.ok) {
          alert('문제가 발생하여 로그인에 실패하였습니다.');
          navigate('/');
        } else {
          return res.json();
        }
      })
      .then(data => setToken(data.access_token));
  }, [code, navigate]);

  useEffect(() => {
    token &&
      fetch(`${API.USERS}/kakaosignin`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({}),
      })
        .then(res => {
          if (!res.ok) {
            alert('문제가 발생하여 로그인에 실패하였습니다.');
            navigate('/');
          } else {
            return res.json();
          }
        })
        .then(data => {
          localStorage.setItem('token', data.access_token);
          navigate('/');
        });
  }, [token, navigate]);

  return <Signing>로그인 중입니다...</Signing>;
};

export default Social;

const Signing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  padding: 48px;
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.47px;
  line-height: 1.29;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 20;
`;
