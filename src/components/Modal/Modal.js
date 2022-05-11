import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(73, 80, 86, 0.95);
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  z-index: 2;
`;
