import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CardList from './common/CardList';
import ListSidebar from './common/ListSidebar';

const ProductList = () => {
  const [hotelData, setHotelData] = useState([]);
  const [view, setView] = useState(true);
  const [offset, setOffset] = useState(0);
  const [wonValue, setWonValue] = useState(840000);
  const [locationValue, setLocationValue] = useState(100);
  const [starValue, setStarValue] = useState(5);

  const location = useLocation();

  useEffect(() => {
    fetch(
      `http://10.58.6.244:8000/hotels/list?offset=${offset}&limit=${LIMIT}`

      // TODO
      // 'http://localhost:3000/data/card.json'
    )
      .then(res => res.json())
      .then(data =>
        setHotelData(hotelData => hotelData.concat(data.hotel_list))
      );
  }, [offset, location]);

  const [scrollRef, scrollInView] = useInView();
  const cardListRef = useRef(null);

  useEffect(() => {
    if (!scrollInView || hotelData.length === 0) return;
    setOffset(offset + 5);
  }, [scrollInView]);

  return (
    <Main>
      <ListSidebar
        hotelData={hotelData}
        setView={setView}
        wonValue={wonValue}
        setWonValue={setWonValue}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
        starValue={starValue}
        setStarValue={setStarValue}
      />
      <CardList
        hotelData={hotelData}
        cardListRef={cardListRef}
        scrollRef={scrollRef}
        view={view}
        wonValue={wonValue}
        locationValue={locationValue}
      />
    </Main>
  );
};

const LIMIT = 5;

const Main = styled.main`
  display: flex;
  margin: 0 auto 100px auto;
  max-width: 1060px;
`;

export default ProductList;
