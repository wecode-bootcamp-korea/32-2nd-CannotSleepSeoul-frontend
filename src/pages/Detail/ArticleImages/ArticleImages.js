import React, { useState } from 'react';
import styled from 'styled-components';
import Portal from '../../../components/Portal/Portal';
import Modal from '../../../components/Modal/Modal';
import ArticleImagesSlider from '../ArticleImagesSlider/ArticleImagesSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ArticleImages = ({ hotelData }) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const imageList = [{ id: 1, imgUrl: hotelData.image_url }];

  hotelData.room.forEach((room, index) => {
    imageList.push({ id: index + 2, imgUrl: room.image_url });
  });

  const clickImage = index => {
    setIsModalOn(true);
    setInitialSlide(index);
  };

  const closeModal = () => {
    setIsModalOn(false);
  };

  document.body.style.overflow = isModalOn ? 'hidden' : 'unset';

  return (
    <StyledArticleImages>
      <ul>
        {imageList.map((image, index) => {
          return index === 0 ? (
            <ImageItemBig
              key={image.id}
              onClick={() => {
                clickImage(index);
              }}
              imgUrl={image.imgUrl}
            />
          ) : (
            <ImageItemSmall
              key={image.id}
              onClick={() => {
                clickImage(index);
              }}
              imgUrl={image.imgUrl}
            />
          );
        })}
      </ul>

      <Portal>
        {isModalOn && (
          <Modal>
            <ModalButton onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </ModalButton>
            <ArticleImagesSlider initialSlide={initialSlide} list={imageList} />
          </Modal>
        )}
      </Portal>
    </StyledArticleImages>
  );
};

export default ArticleImages;

const StyledArticleImages = styled.section`
  margin-bottom: 24px;
`;

const ImageItemBig = styled.li`
  width: 100%;
  height: 467px;
  margin-bottom: 4px;
  overflow: hidden;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;

const ImageItemSmall = styled(ImageItemBig)`
  display: inline-block;
  width: calc(50% - 2px);
  height: 261px;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 4px;
  font-size: 48px;
  color: #fff;
  background-color: transparent;
  transition: all 75ms;
  opacity: 0.5;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
`;
