import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import capeTownImage from "../../assets/capeTown.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>UC-Me</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={capeTownImage} alt="UCT's beautiful campus" />
      </div>
    </Fragment>
  );
};

export default Header;
