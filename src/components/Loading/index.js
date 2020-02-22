import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="container-loader">
      <Loader type="ThreeDots" color="#f56b2a" height={70} width={70} />
    </div>
  );
};

export default Loading;
