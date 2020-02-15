import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OfferDetail from "../components/OfferDetail";

const Offer = () => {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async id => {
    const response = await axios.get(`http://localhost:3000/offer/${id}`);

    setOffer(response.data.userOffer);
    setCount(response.data.countOffers);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <OfferDetail offer={offer} count={count}></OfferDetail>
      )}
    </div>
  );
};

export default Offer;
