import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={s.buttonWrap}>
      <button className={s.button} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
