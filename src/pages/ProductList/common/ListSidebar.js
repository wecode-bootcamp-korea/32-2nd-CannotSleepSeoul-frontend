import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWonSign,
  faLocationDot,
  faStar,
  faMap,
  faFilter,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import FlexibleBtn from '../components/FlexibleBtn';

const ListSidebar = ({ hotelData, setView }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState([]);
  const [wonValue, setWonValue] = useState(0);
  const [locationValue, setLocationValue] = useState(0);
  const [starValue, setStarValue] = useState(1);

  const icon = [faList, faMap, faFilter];

  useEffect(() => {
    hotelData.forEach(data => {
      setPrice(price => price.concat(data.price));
    });
  }, [hotelData]);

  const listView = () => {
    setView(true);
  };

  const mapView = () => {
    setView(false);
  };

  const filterView = () => {
    setShowFilter(!showFilter);
  };

  const seekbarController = e => {
    if (e.target.id === 'won') {
      setWonValue(e.target.valueAsNumber);
    } else if (e.target.id === 'location') {
      setLocationValue(e.target.valueAsNumber);
    } else if (e.target.id === 'star') {
      setStarValue(e.target.valueAsNumber);
    }
  };

  return (
    <Container>
      {icon.map(icon => {
        return (
          <FlexibleBtn
            listView={listView}
            mapView={mapView}
            filterView={filterView}
            icon={icon}
            key={icon.iconName}
          />
        );
      })}

      {showFilter && (
        <motion.ul initial="hidden" animate="visible" variants={List}>
          <motion.li variants={Item}>
            가격
            <span>
              <FontAwesomeIcon icon={faWonSign} /> {wonValue.toLocaleString()}원
              이하
            </span>
          </motion.li>
          <motion.li variants={Item}>
            <input
              id="won"
              type="range"
              onChange={seekbarController}
              min={0}
              max={Math.max(...price)}
              step={10000}
              value={wonValue}
            />
          </motion.li>
          <motion.li variants={Item}>
            거리
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> {locationValue}km 이하
            </span>
          </motion.li>
          <motion.li variants={Item}>
            <input
              id="location"
              type="range"
              onChange={seekbarController}
              min={0}
              max={100}
              step={1}
              value={locationValue}
            />
          </motion.li>
          <motion.li variants={Item}>
            평점
            <span>
              <FontAwesomeIcon icon={faStar} /> {starValue}점 이상
            </span>
          </motion.li>
          <motion.li variants={Item}>
            <input
              id="star"
              type="range"
              onChange={seekbarController}
              min={1}
              max={5}
              step={1}
              value={starValue}
            />
          </motion.li>
        </motion.ul>
      )}
    </Container>
  );
};

const Item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -50 },
};

const List = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const Container = styled.aside`
  position: sticky;
  top: 5vh;
  margin-right: 20px;
  padding: 1.5em 1.5em;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  width: 250px;
  height: fit-content;

  ul {
    li {
      padding-left: 20px;
      margin: 20px 0;
      font-size: 16px;
      font-weight: 600;
      color: #848c94;

      span {
        font-weight: normal;
        margin-left: 7px;
        font-size: 14px;
        word-spacing: 2px;
      }

      input {
        appearance: none;
        background-color: #dee2e6;
        border-radius: 50px;
        width: 150px;
        height: 30px;
        margin-bottom: 20px;
        padding: 0 10px;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #848c94;
          transition: all 0.3s ease-in-out;
          &::-webkit-slider-thumb {
            background-color: #dee2e6;
            &:active {
              transition: all 0.3s ease-in-out;
              box-shadow: 0 0 15px #dee2e6;
            }
          }
        }

        &::-webkit-slider-runnable-track {
          appearance: none;
        }

        &::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50px;
          background-color: #848c94;
          transition: box-shadow 0.3s ease-in-out;
        }
      }
    }
  }
`;

export default ListSidebar;
