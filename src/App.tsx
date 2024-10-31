// src/App.tsx
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles, Image } from "./Services/api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";
import ErrorMesage from "./components/ErrorMessage/ErrorMesage";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setTotalPages(data.total_pages);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const query = (form.elements.namedItem("query") as HTMLInputElement).value;
    if (query.trim() === "") {
      toast.error("This field can't be empty");
      return;
    }
    setImages([]);
    setPage(1);
    setQuery(query);
    form.reset();
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    } else {
      toast.error("No more images to load");
    }
  };

  const handleOpenModal = (image: Image) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMesage />}
      {images.length > 0 ? <LoadMoreBtn handleLoadMore={handleLoadMore} /> : null}
      <ImageModal
        handleCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
        selectedImage={selectedImage}
      />
      <Toaster />
    </>
  );
}

export default App;
