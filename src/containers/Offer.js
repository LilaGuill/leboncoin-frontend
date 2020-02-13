import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OfferDetail from "../components/OfferDetail";

const Offer = () => {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async id => {
    const response = await axios.get(`http://localhost:3000/offer/${id}`);
    setOffer(response.data);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? <p>Laodin</p> : <OfferDetail {...offer}></OfferDetail>}
    </div>
  );
};

export default Offer;
