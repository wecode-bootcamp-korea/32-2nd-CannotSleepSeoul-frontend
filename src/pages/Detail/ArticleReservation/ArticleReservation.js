import React, { useState } from 'react';
import styled from 'styled-components';
import { addDays } from 'date-fns';
import ArticleSearch from '../ArticleSearch/ArticleSearch';
import ArticleSearchResult from '../ArticleSearchResult/ArticleSearchResult';
import { API } from '../../../config';

const ArticleReservation = ({ hotelData, setHotelData }) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      color: '#51abf3',
      key: 'selection',
    },
  ]);

  const [selection, setSelection] = useState({ ...dates[0] });

  const { startDate, endDate } = selection;

  const checkIn = `${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDate()}`;

  const checkOut = `${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDate()}`;

  const searchDates = () => {
    fetch(`${API.HOTELS}/list?check_in=${checkIn}&check_out=${checkOut}`)
      .then(res => res.json())
      .then(({ hotel_list }) => {
        const hotelBooking = hotel_list.find(
          ({ hotel_id }) => hotel_id === hotelData.id
        );

        setHotelData(prev => {
          const imageList = prev.room.map((room, index) => ({
            id: index + 2,
            image_url: room.image_url,
          }));

          return hotelBooking
            ? { ...prev, room: hotelBooking.room }
            : { ...prev, room: imageList };
        });
      });
  };

  return (
    <StyledArticleReservation>
      <ArticleSearch
        dates={dates}
        setDates={setDates}
        selection={selection}
        setSelection={setSelection}
        searchDates={searchDates}
        hotelData={hotelData}
        setHotelData={setHotelData}
      />
      <ArticleSearchResult
        hotelData={hotelData}
        dateStart={checkIn}
        dateEnd={checkOut}
      />
    </StyledArticleReservation>
  );
};

export default ArticleReservation;

const StyledArticleReservation = styled.section`
  margin-bottom: 32px;
`;
