import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Payment from "./containers/Payment";
import PublishOffer from "./components/PublishOffer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Success from "./containers/Success";
import "./App.css";

library.add(faSearch, faChevronLeft, faChevronRight, faShoppingCart);

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const myToken = Cookies.get("token");
    const myUsername = Cookies.get("username");
    setToken(myToken);
    setUsername(myUsername);
  }, []);

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        username={username}
        setUsername={setUsername}
      />
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
        <Route path="/payment">
          <Payment token={token} username={username} />
        </Route>
        <Route path="/success">
          <Success username={username} />
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
