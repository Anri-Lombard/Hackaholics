import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.firstPart}>
          <h1>UC-Me</h1>
        </div>
        <div classNME={classes.secondPart}>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
