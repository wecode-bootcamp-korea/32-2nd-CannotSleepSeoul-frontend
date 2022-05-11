import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LocationDropdown = ({ mockData }) => {
  return (
    <StyledDropdown>
      <StyledUl>
        <StyledLi>
          {mockData.map(data => {
            return (
              <Link key={data.id} to={`/products/${data.id}`}>
                <DropdownContent>
                  <DropdownIcon>
                    <FontAwesomeIcon icon={faBed} />
                  </DropdownIcon>
                  <DropdownText>
                    <StyledName key={data.id}>{data.name} </StyledName>
                    <StyledAddress>
                      {`${data.city} ${data.gu} ${data.ro} ${data.detail}`}
                    </StyledAddress>
                  </DropdownText>
                </DropdownContent>
                <br />
              </Link>
            );
          })}
        </StyledLi>
      </StyledUl>
    </StyledDropdown>
  );
};

export default LocationDropdown;

const StyledDropdown = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 440px;
  padding: px 0px;
  font-size: 15px;
  font-weight: 600;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgb(33 37 41 / 30%) 0px 4px 8px 0px;
  z-index: 40;
`;

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

const DropdownContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 16px 6px 16px;
  width: 100%;
  height: 45px;
  cursor: pointer;
  /* border: 2px red solid; */
`;

const DropdownIcon = styled.span`
  color: ${({ theme }) => theme.blue};

  margin: 7px 15px 0px 0px;
`;
const DropdownText = styled.p`
  width: 300px;
`;

const StyledName = styled.li`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
  font-weight: 600;
`;

const StyledAddress = styled.li`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #848c94;
`;
