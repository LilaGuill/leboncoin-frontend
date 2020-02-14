import React from "react";
import "./pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ setPage, count, page }) => {
  const pagination = [];

  let pagesToDisplay = Math.ceil(count / 3);
  for (let i = 1; i <= pagesToDisplay; i++) {
    pagination.push(
      <div
        key={i}
        className={
          Number(page) === i ? "page-selected active" : "page-selected inactive"
        }
      >
        <span
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </span>
      </div>
    );
  }

  return (
    <div className="pagination">
      <FontAwesomeIcon
        icon="chevron-left"
        className="icon-grey"
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      />
      {pagination}
      <FontAwesomeIcon
        icon="chevron-right"
        className="icon-grey"
        onClick={() => {
          page < pagesToDisplay && setPage(page + 1);
        }}
      />
    </div>
  );
};

export default Pagination;
