import React from "react";
import PublishOffer from "../components/PublishOffer";
import Redirect from "react-router-dom";

const Publish = ({ token }) => {
  return (
    <div>
      {token ? (
        <div>
          <PublishOffer token={token} />
        </div>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
};

export default Publish;
