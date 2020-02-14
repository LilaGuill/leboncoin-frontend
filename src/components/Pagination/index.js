import React from "react";
import "./pagination.css";

const Pagination = ({ setPage, count }) => {
  const pagination = [];
  let page = Math.ceil(count / 3);
  for (let i = 1; i <= page; i++) {
    pagination.push(
      <span
        className="page"
        key={i}
        onClick={() => {
          setPage(i);
        }}
      >
        {i}
      </span>
    );
  }

  return <div className="pagination">for Pagination : {pagination}</div>;
};

export default Pagination;
