import { ModalItem } from 'components/Modal/Modal';
import { Image, GalleryImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({ listImage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <GalleryImage onClick={openModal}>
        <Image src={listImage.webformatURL} alt={listImage.tags} />
      </GalleryImage>
      <ModalItem
        listImage={listImage}
        isCloseModal={closeModal}
        isOpenModal={modalIsOpen}
      />
    </div>
  );
};
