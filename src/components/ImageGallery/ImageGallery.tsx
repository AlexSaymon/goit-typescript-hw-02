import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  handleOpenModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, handleOpenModal }) => {
  return (
    <div>
      <ul className={s.imageList}>
        {images.map((image) => (
          <li className={s.imageItem} key={image.id}>
            <ImageCard handleOpenModal={handleOpenModal} image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
