import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterLink = ({ children, bold }) => {
  return (
    <StyledFooterLink bold={bold} to="#">
      {children}
    </StyledFooterLink>
  );
};

export default FooterLink;

const StyledFooterLink = styled(Link)`
  display: inline-block;
  position: relative;
  left: -6px;
  padding: 6px;
  font-size: 14px;
  font-weight: ${({ bold }) => bold === 'true' && 700};
  line-height: 1;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.blue};
    background-color: #f5fbff;
  }
`;
