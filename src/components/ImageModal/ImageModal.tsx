import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageModalProps {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
  selectedImage: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  handleCloseModal,
  selectedImage,
}) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <Modal
      className={s.Modal}
      overlayClassName={s.Overlay}
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Image Modal"
    >
      <div>
        <img className={s.image} src={selectedImage.urls.regular} alt="Selected" />
      </div>
    </Modal>
  );
};

export default ImageModal;
