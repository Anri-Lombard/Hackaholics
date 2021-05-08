import { useRef, useState, useContext } from "react";
import cartContext from "../../store/cart-context";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNineChars = (value) => value.trim().length === 9;

const Checkout = (props) => {
  const cartCtx = useContext(cartContext);
  const [formInputValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid =
      !isEmpty(enteredName) && enteredName.trim().length === 10;
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isNineChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    cartCtx.clearCart();
  };

  const NameInvalidClass = `${classes.control} ${
    !formInputValidity.name && classes.invalid
  }`;
  const StreetInvalidClass = `${classes.control} ${
    !formInputValidity.street && classes.invalid
  }`;
  const PostalCodeInvalidClass = `${classes.control} ${
    !formInputValidity.postalCode && classes.invalid
  }`;
  const CityInvalidClass = `${classes.control} ${
    !formInputValidity.city && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={NameInvalidClass}>
        <label htmlFor="name">
          Your Cellphone Number{" "}
          <span style={{ color: "lightgray" }}>(So we could remind you)</span>
        </label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && (
          <p className={classes.invalid}>
            Please Enter A Valid South African Number
          </p>
        )}
      </div>
      <div className={StreetInvalidClass}>
        <label htmlFor="street">Faculty</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && (
          <p className={classes.invalid}>Please Enter A Valid Faculty</p>
        )}
      </div>
      <div className={PostalCodeInvalidClass}>
        <label htmlFor="postal">
          Your Student Number{" "}
          <span style={{ color: "lightgray" }}>(For vertification)</span>
        </label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p className={classes.invalid}>Please Enter A Valid Student Number</p>
        )}
      </div>
      <div className={CityInvalidClass}>
        <label htmlFor="city">Any comments?</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
