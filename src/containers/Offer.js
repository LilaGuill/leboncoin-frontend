import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">hOME</Link>
      Offer
      <div>{id}</div>
    </div>
  );
};

export default Offer;
