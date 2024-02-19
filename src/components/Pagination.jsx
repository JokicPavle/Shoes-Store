import React from "react";
import "../App.css";
export const Pagination = ({
  itemsPerPage,
  length,
  currentPage,
  paginate,
  previousPage,
  nextPage,
  pageNumber,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / itemsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="w-[250px] mb-10 xl:w-[300px] m-auto flex justify-between z-20">
      <button onClick={previousPage}>Prev</button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={
            currentPage === pageNumber
              ? "active"
              : "p-3 border border-orange-500"
          }
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};
