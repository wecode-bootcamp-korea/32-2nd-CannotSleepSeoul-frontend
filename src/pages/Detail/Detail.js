import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailAside from './DetailAside/DetailAside';
import DetailContent from './DetailContent/DetailContent';
import { API } from '../../config';

const Detail = () => {
  const [hotelData, setHotelData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${API.HOTELS}/${params.id}`)
      .then(res => res.json())
      .then(data => setHotelData(data.hotel_detail));
  }, [params]);

  return (
    hotelData.id && (
      <Wrapper>
        <DetailContent hotelData={hotelData} setHotelData={setHotelData} />
        <DetailAside hotelData={hotelData} />
      </Wrapper>
    )
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  width: 1060px;
  margin: 0 auto;
`;
