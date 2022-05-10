import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainHotelInfo from './components/MainHotelInfo';
import SaleBanner from './components/SaleBanner';
import HotelInfo from './components/HotelInfo';
import SliderComponent from '../../components/SliderComponent/SliderComponent';

const CITY_NAME = [
  { id: 1, city: '강남' },
  { id: 2, city: '송파' },
  { id: 3, city: '서초' },
];

const Main = () => {
  const [commonData, setCommonData] = useState([]);

  useEffect(() => {
    fetch('/data/MainData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommonData(data);
      });
  }, []);
  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 3.3,
    slidesToScroll: 1,
  };

  const settingsSale = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: null,
    prevArrow: null,
  };

  const settingsIndividual = {
    infinite: false,
    speed: 400,
    slidesToShow: 7.2,
    slidesToScroll: 1,
  };
  return (
    <MainWrapper>
      <RecentText>최근 본 숙소</RecentText>
      <SliderComponent settings={settings}>
        {commonData.map(data => (
          <MainHotelInfo
            hotels_id={data.hotels_id}
            gu={data.gu}
            img={data.img}
            name={data.name}
            key={data.hotels_id}
          />
        ))}
      </SliderComponent>
      <Sale>할인혜택</Sale>
      <SaleDiv>
        <SliderComponent isSale={true} settings={settingsSale}>
          {commonData.map(index => (
            <SaleBanner key={index} />
          ))}
        </SliderComponent>
      </SaleDiv>
      {CITY_NAME.map(data => (
        <>
          <City key={data.id}>{data.city}</City>
          <SliderComponent settings={settingsIndividual}>
            {commonData.map(data => (
              <HotelInfo
                hotels_id={data.hotels_id}
                gu={data.gu}
                img={data.img}
                name={data.name}
                key={data.hotels_id}
              />
            ))}
          </SliderComponent>
        </>
      ))}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const RecentText = styled.div`
  margin: 10px auto;
  position: relative;
  z-index: 100;
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 500;
`;

const Sale = styled(RecentText)`
  margin: 50px 0 30px 0;
`;

const SaleDiv = styled.div`
  position: relative;
  z-index: 100;
`;

const City = styled(RecentText)`
  margin: 60px 0 20px 0;
`;

export default Main;
