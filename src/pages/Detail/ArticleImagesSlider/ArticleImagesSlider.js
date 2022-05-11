import React, { useState } from 'react';
import { Navigation, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

const ArticleImagesSlider = ({ list, initialSlide }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div>
      <SwiperWrapperTop>
        <Swiper
          navigation
          loopedSlides={4}
          modules={[Navigation, Pagination, Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          loop={true}
          initialSlide={initialSlide}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Cover>
                <img alt="title" src={`${item.imgUrl}`} />
              </Cover>
              <CoverIndex>{`${index + 1} / ${list.length}`}</CoverIndex>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapperTop>

      <SwiperWrapperBottom>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={6}
          loop={true}
          loopedSlides={4}
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {list.map(item => (
            <SwiperSlide key={item.id}>
              <Thumbnail image={item.imgUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapperBottom>
    </div>
  );
};

export default ArticleImagesSlider;

const SwiperWrapperTop = styled.div`
  width: 1156px;
  margin: 0 auto 16px;
  text-align: center;

  .swiper-button-prev,
  .swiper-button-next {
    width: 48px;
    height: 80px;
    border-radius: 4px;
    color: #fff;
    opacity: 0.5;
    transition: all 75ms;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
      opacity: 1;
    }
  }
`;

const SwiperWrapperBottom = styled.div`
  width: 705px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;

  .swiper-slide {
    opacity: 0.5;

    &.swiper-slide-active {
      opacity: 1;
    }
  }
`;

const Cover = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    max-height: 66vh;
    margin-bottom: 8px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    object-fit: cover;
  }
`;

const CoverIndex = styled.p`
  font-size: 16px;
  color: #fff;
`;

const Thumbnail = styled.div`
  width: 110px;
  height: 90px;
  margin: 0 auto;
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
`;
