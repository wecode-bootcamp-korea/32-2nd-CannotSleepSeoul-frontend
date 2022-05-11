import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUser } from '@fortawesome/free-solid-svg-icons';

const RoomSummary = ({ room }) => {
  return (
    <StyledRoomSummary>
      <RoomImage image={room.image_url} />
      <div>
        <RoomTitle>
          {room.type === 'standard' ? '스탠다드' : '디럭스'}
        </RoomTitle>
        <RoomDescriptions>
          <RoomDesc>
            <FontAwesomeIcon icon={faUser} /> 기준 2인 / 최대 2인
          </RoomDesc>
          <RoomDesc>
            <FontAwesomeIcon icon={faBed} /> 더블 침대 1
          </RoomDesc>
        </RoomDescriptions>
        <RoomTag>
          <strong>욕실용품</strong>
        </RoomTag>
      </div>
    </StyledRoomSummary>
  );
};

export default RoomSummary;

const StyledRoomSummary = styled.header`
  display: flex;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const RoomImage = styled.div`
  width: 180px;
  height: 120px;
  border-radius: 4px;
  margin-right: 16px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
`;

const RoomTitle = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.primary};
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.19px;
  line-height: 22px;
`;

const RoomDescriptions = styled.div`
  margin-bottom: 8px;
`;

const RoomDesc = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.tertiary};
  font-size: 12px;
  letter-spacing: -0.4px;
  line-height: 18px;

  &:last-child {
    margin-bottom: 8px;
  }

  svg {
    width: 12px;
    margin-right: 8px;
  }
`;

const RoomTag = styled.p`
  display: inline-block;
  padding: 2px 6px;
  border: 1px solid #f1f3f5;
  border-radius: 4px;
  background-color: #f5f6f7;

  strong {
    color: ${({ theme }) => theme.tertiary};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 1.5;
  }
`;
