import React from "react";
import s from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageCardProps {
  image: Image;
  handleOpenModal: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleOpenModal }) => {
  return (
    <div>
      <img
        className={s.image}
        onClick={() => handleOpenModal(image)}
        src={image.urls.small}
        alt="Images"
      />
    </div>
  );
};

export default ImageCard;
