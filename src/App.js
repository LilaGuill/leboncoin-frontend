import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faPlusSquare,
  faSearch,
  faUser,
  faClock,
  faBell,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PublishOffer from "./components/PublishOffer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

library.add(
  faSearch,
  faPlusSquare,
  faUser,
  faClock,
  faBell,
  faEye,
  faChevronLeft,
  faChevronRight
);

function App() {
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const myToken = Cookies.get("token");
    setToken(myToken);
  }, []);

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signin">
          <Signin setToken={setToken} />
        </Route>
        <Route path="/signup">
          <Signup setToken={setToken} />
        </Route>
        <Route path="/publish">
          <PublishOffer token={token} />
        </Route>
        <Route path="/">
          <Offers page={page} setPage={setPage} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
