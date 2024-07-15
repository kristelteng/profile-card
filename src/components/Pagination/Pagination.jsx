import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../actions";

import nextBtn from "../../assets/next-arrow.png";
import backBtn from "../../assets/back-arrow.png";
import "./Pagination.css";

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  }

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="page-link"
      >
        <img className="nav-button" src={backBtn} alt="back button" />
      </button>
      <span className="page-number">{currentPage}</span>
      <button onClick={handleNextPage} className="page-link">
        <img className="nav-button" src={nextBtn} alt="next button" />
      </button>
    </div>
  );
};

export default Pagination;