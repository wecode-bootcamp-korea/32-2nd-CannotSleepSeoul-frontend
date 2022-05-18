import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import CardList from './common/CardList';
import ListSidebar from './common/ListSidebar';

const ProductList = () => {
  const [hotelData, setHotelData] = useState([]);
  const [view, setView] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `http://10.58.4.3:8000/hotels/list?offset=${offset}&limit=${LIMIT}`
      // 'http://localhost:3000/data/card.json'
    )
      .then(res => res.json())
      .then(data =>
        setHotelData(hotelData => hotelData.concat(data.hotel_list))
      );
  }, [offset]);

  const [scrollRef, scrollInView] = useInView();
  const cardListRef = useRef(null);

  useEffect(() => {
    if (!scrollInView || hotelData.length === 0) return;
    setOffset(offset + 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollInView]);

  return (
    <Main>
      <ListSidebar hotelData={hotelData} setView={setView} />
      <CardList
        hotelData={hotelData}
        cardListRef={cardListRef}
        scrollRef={scrollRef}
        view={view}
      />
    </Main>
  );
};

const LIMIT = 10;

const Main = styled.main`
  display: flex;
  margin: 0 auto 100px auto;
  max-width: 1060px;
`;

export default ProductList;
