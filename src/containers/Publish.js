import React from "react";
import PublishOffer from "../components/PublishOffer";

const Publish = ({ token }) => {
  return (
    <div>
      {token ? (
        <div>
          <PublishOffer token={token} />
        </div>
      ) : (
        <p>Veuillez vous connecter</p>
      )}
    </div>
  );
};

export default Publish;
