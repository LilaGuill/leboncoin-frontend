import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import Pagination from "../components/Pagination";

const Offers = ({ page, setPage }) => {
  console.log(page);
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);

  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/?page=" + page);

    setOffers(response.data.offers);
    setCount(response.data.count);

    setIsloading(false);
  };
  console.log("data", offers);
  console.log("count", count);
  return (
    <>
      <SearchBar />
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div style={{ height: 800 }}>
          <List offers={offers} />
          <Pagination setPage={setPage} count={count} />
        </div>
      )}
    </>
  );
};

export default Offers;
