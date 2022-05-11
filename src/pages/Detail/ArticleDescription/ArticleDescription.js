import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBreadSlice,
  faBriefcase,
  faDumbbell,
  faSmokingBan,
  faSquareParking,
  faSwimmer,
  faUtensils,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

const iconTranslator = {
  레스토랑: <FontAwesomeIcon icon={faUtensils} />,
  비즈니스센터: <FontAwesomeIcon icon={faBriefcase} />,
  헬스장: <FontAwesomeIcon icon={faDumbbell} />,
  수영장: <FontAwesomeIcon icon={faSwimmer} />,
  금연: <FontAwesomeIcon icon={faSmokingBan} />,
  조식서비스: <FontAwesomeIcon icon={faBreadSlice} />,
  WIFI: <FontAwesomeIcon icon={faWifi} />,
  주차가능: <FontAwesomeIcon icon={faSquareParking} />,
};

const ArticleDescription = ({ hotelData }) => {
  const {
    introduction,
    using_time,
    facilities,
    service,
    information,
    refund_policy,
  } = hotelData;

  const [isPartLong, setIsPartLong] = useState({
    introduction: introduction.split('\n').length > 6,
    information: information.split('\n').length > 13,
  });

  const handleIntroductionBtn = () => {
    setIsPartLong(prev => {
      return { ...prev, introduction: !isPartLong.introduction };
    });
  };

  const handleInformationBtn = () => {
    setIsPartLong(prev => {
      return { ...prev, information: !isPartLong.information };
    });
  };

  return (
    <StyledArticleDescription>
      <DescriptionGroup>
        <DescriptionTitle>소개</DescriptionTitle>
        <DescriptionInfo>
          {isPartLong.introduction
            ? introduction.split('\n').slice(0, 6).join('\n')
            : introduction}
          <DescriptionInfoButton onClick={handleIntroductionBtn}>
            {isPartLong.introduction ? '더 보기 ▾' : '접기 ▴'}
          </DescriptionInfoButton>
        </DescriptionInfo>
      </DescriptionGroup>

      <DescriptionGroup>
        <DescriptionTitle>체크인/체크아웃</DescriptionTitle>
        <DescriptionInfo>{using_time}</DescriptionInfo>
      </DescriptionGroup>

      <DescriptionGroup>
        <DescriptionTitle>편의 시설</DescriptionTitle>
        <DescriptionInfo>
          <DescriptionInfoList>
            {facilities.split(',').map((item, index) => (
              <DescriptionInfoItem key={index}>
                {iconTranslator[item]}
                <p>{item}</p>
              </DescriptionInfoItem>
            ))}
          </DescriptionInfoList>
        </DescriptionInfo>
      </DescriptionGroup>

      <DescriptionGroup>
        <DescriptionTitle>서비스</DescriptionTitle>
        <DescriptionInfo>
          <DescriptionInfoList>
            {service.split(',').map((item, index) => (
              <DescriptionInfoItem key={index}>
                {iconTranslator[item]}
                <p>{item}</p>
              </DescriptionInfoItem>
            ))}
          </DescriptionInfoList>
        </DescriptionInfo>
      </DescriptionGroup>

      <DescriptionGroup>
        <DescriptionTitle>이용 안내</DescriptionTitle>
        <DescriptionInfo>
          {isPartLong.information
            ? information.split('\n').slice(0, 13).join('\n')
            : information}
          <DescriptionInfoButton onClick={handleInformationBtn}>
            {isPartLong.information ? '더 보기 ▾' : '접기 ▴'}
          </DescriptionInfoButton>
        </DescriptionInfo>
      </DescriptionGroup>

      <DescriptionGroup>
        <DescriptionTitle>취소 및 환불 규정</DescriptionTitle>
        <DescriptionInfo>{refund_policy}</DescriptionInfo>
      </DescriptionGroup>
    </StyledArticleDescription>
  );
};

export default ArticleDescription;

const StyledArticleDescription = styled.ul`
  color: ${({ theme }) => theme.primary};
`;

const DescriptionGroup = styled.li`
  display: flex;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
`;

const DescriptionTitle = styled.h4`
  width: 160px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const DescriptionInfo = styled.div`
  width: 540px;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-line;
`;

const DescriptionInfoList = styled.ul`
  display: flex;
`;

const DescriptionInfoItem = styled.li`
  width: 92px;
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  svg {
    font-size: 24px;
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }
`;

const DescriptionInfoButton = styled.button`
  display: block;
  padding: 0;
  margin-top: 16px;
  border: 0;
  color: #2b96ed;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
`;
