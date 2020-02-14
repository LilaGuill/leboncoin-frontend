import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import Pagination from "../components/Pagination";

const Offers = ({ page, setPage }) => {
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);

  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/?page=" + page);
      setOffers(response.data.offers);
      setCount(response.data.count);
      setIsloading(false);
    };
    fetchData();
  }, [page]);

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div className="main-offers">
          <List offers={offers} />
          <Pagination page={page} setPage={setPage} count={count} />
        </div>
      )}
    </>
  );
};

export default Offers;
