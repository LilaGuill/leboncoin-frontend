import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const Offers = ({ page, setPage }) => {
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/?page=${page}`
      );
      setOffers(response.data.offers);
      setCount(response.data.count);
      setIsloading(false);
    };
    fetchData();
  }, [page]);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        setOffers={setOffers}
        setCount={setCount}
      />
      {isLoading ? (
        <Loading />
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
