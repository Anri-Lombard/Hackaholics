import React, { useState } from "react";

import Header from "./components/Layout/Header";
import StudyGroupsAvailable from "./components/Pages/StudyGroupsAvailable";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

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
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          </div>
        </Router>
      </React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
