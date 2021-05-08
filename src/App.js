import React, { useState } from "react";

import Header from "./components/Layout/Header";
import StudyGroupsAvailable from "./components/Pages/StudyGroupsAvailable";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import capeTownImage from "../src/assets/capeTown.jpeg";
import classes from "../src/components/Layout/Header.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Users from "./components/Pages/Users";
import Home from "./components/Pages/Home";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <React.Fragment>
        <Header onShowCart={showCartHandler} />
        <Router>
          <nav
            style={{ marginTop: "6rem" }}
            class="navbar navbar-expand-lg navbar-light bg-light"
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Why We Choose To Help YOU
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      Available Groups
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/users">
                      Your Groups
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={classes["main-image"]}>
            <img src={capeTownImage} alt="UCT's beautiful campus" />
          </div>
          <Switch>
            <Route path="/about">
              <StudyGroupsAvailable />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
