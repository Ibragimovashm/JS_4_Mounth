import React from "react";
import BtnsPaginationCss from "./BtnsPagination.module.css";

const BtnsPagination = ({ setPage, page }) => {
  const handleNext = () => {
    setPage((page) => page + 10);
    // console.log(page);
  };
  const handlePrev = () => {
    if (page < 1) {
      return;
    }
    setPage(page - 10);
    //   console.log(page);
  };
  return (
    <div className={BtnsPaginationCss.parent_block_pagination}>
      <button onClick={handlePrev} className={BtnsPaginationCss.btnsPagination}>
        prev
      </button>
      <button onClick={handleNext} className={BtnsPaginationCss.btnsPagination}>
        next
      </button>
    </div>
  );
};
export default BtnsPagination;
