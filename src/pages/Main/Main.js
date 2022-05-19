import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainHotelInfo from './components/MainHotelInfo';
import SaleBanner from './components/SaleBanner';
import HotelInfo from './components/HotelInfo';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { API } from '../../config';

const CITY_NAME = [
  { id: 1, city: '강남구' },
  { id: 2, city: '송파구' },
  { id: 3, city: '서초구' },
];

const BANNER = [
  {
    id: 1,
    img: '/images/img1.jpg',
  },
  {
    id: 2,
    img: '/images/img2.jpg',
  },
  {
    id: 3,
    img: '/images/img3.jpg',
  },
  {
    id: 4,
    img: '/images/img4.jpg',
  },
  { id: 5, img: '/images/img5.jpg' },
  { id: 6, img: '/images/img6.jpg' },
];

const Main = () => {
  const [hotelData, setHotelData] = useState([]);
  const [commonData, setCommonData] = useState([]);

  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    fetch(`${API.HOTELS}/main`)
      .then(res => res.json())
      .then(data => {
        setHotelData(data.hotel_info);
        const infos = [
          data.hotel_info.slice(0, 10),
          data.hotel_info.slice(10, 20),
          data.hotel_info.slice(20, 30),
        ];
        setCommonData(
          infos[0].map((info, index) => {
            info.withHotel = [infos[1][index], infos[2][index]];
            return info;
          })
        );
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
    commonData.length && (
      <MainWrapper>
        <RecentText>최근 본 숙소</RecentText>
        <SliderComponent settings={settings}>
          {commonData.map(data => (
            <MainHotelInfo
              id={data.id}
              hotels_id={data.hotels_id}
              price={data.price}
              gu={data.gu}
              image_url={data.image_url}
              name={data.name}
              key={data.id}
              withHotel={data.withHotel}
              goToDetail={goToDetail}
            />
          ))}
        </SliderComponent>
        <Sale>할인혜택</Sale>
        <SaleDiv>
          <SliderComponent isSale={true} settings={settingsSale}>
            {BANNER.map(data => (
              <SaleBanner key={data.id} img={data.img} />
            ))}
          </SliderComponent>
        </SaleDiv>
        {CITY_NAME.map(data => (
          <>
            <City key={data.id}>{data.city}</City>
            <SliderComponent settings={settingsIndividual}>
              {hotelData.length &&
                hotelData
                  .filter(item => item.gu === data.city)
                  .map(data => (
                    <HotelInfo
                      id={data.id}
                      gu={data.gu}
                      price={data.price}
                      image_url={data.image_url}
                      name={data.name}
                      key={data.id}
                      withHotel={data.withHotel}
                      goToDetail={goToDetail}
                    />
                  ))}
            </SliderComponent>
          </>
        ))}
      </MainWrapper>
    )
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
  color: ${props => props.theme.primary};
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
