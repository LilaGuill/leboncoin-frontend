import React from "react";

const Pagination = ({ pages }) => {
  const handlePage = i => {
    console.log(i);
  };

  const pagination = [];
  let page = Math.ceil(pages / 5);
  for (let i = 1; i <= page; i++) {
    pagination.push(
      <span
        key={i}
        onClick={() => {
          handlePage(i);
        }}
      >
        {i}
      </span>
    );
  }

  console.log(pages);
  return <div>for Pagination : {pagination}</div>;
};

export default Pagination;
