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

  const numberInputRef = useRef();
  const facultyInputRef = useRef();
  const studentNumberRef = useRef();
  const commentInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredNumber = numberInputRef.current.value;
    const enterredFaculty = facultyInputRef.current.value;
    const enteredStudentNumber = studentNumberRef.current.value;
    const enteredComment = commentInputRef.current.value;

    const enteredNumberIsValid =
      !isEmpty(enteredNumber) && enteredNumber.trim().length === 10;
    const enterredFacultyIsValid = !isEmpty(enterredFaculty);
    const enteredCommentIsValid = !isEmpty(enteredComment);
    const enteredStudentNumberIsValid = isNineChars(enteredStudentNumber);

    setFormInputsValidity({
      name: enteredNumberIsValid,
      street: enterredFacultyIsValid,
      city: enteredCommentIsValid,
      postalCode: enteredStudentNumberIsValid,
    });

    const formIsValid =
      enteredNumberIsValid &&
      enteredCommentIsValid &&
      enteredStudentNumberIsValid &&
      enterredFacultyIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredNumber,
      street: enterredFaculty,
      city: enteredComment,
      postalCode: enteredStudentNumber,
    });

    cartCtx.clearCart();
  };

  const NumberInvalidClass = `${classes.control} ${
    !formInputValidity.name && classes.invalid
  }`;
  const FacultyInvalidClass = `${classes.control} ${
    !formInputValidity.street && classes.invalid
  }`;
  const StudentInvalidClass = `${classes.control} ${
    !formInputValidity.postalCode && classes.invalid
  }`;
  const CommentInvalidClass = `${classes.control} ${
    !formInputValidity.city && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={NumberInvalidClass}>
        <label htmlFor="name">
          Your Cellphone Number{" "}
          <span style={{ color: "lightgray" }}>(So we could remind you)</span>
        </label>
        <input type="text" id="name" ref={numberInputRef} />
        {!formInputValidity.name && (
          <p className={classes.invalid}>
            Please Enter A Valid South African Number
          </p>
        )}
      </div>
      <div className={FacultyInvalidClass}>
        <label htmlFor="street">Faculty</label>
        <input type="text" id="street" ref={facultyInputRef} />
        {!formInputValidity.street && (
          <p className={classes.invalid}>Please Enter A Valid Faculty</p>
        )}
      </div>
      <div className={StudentInvalidClass}>
        <label htmlFor="postal">
          Your Student Number{" "}
          <span style={{ color: "lightgray" }}>(For vertification)</span>
        </label>
        <input type="text" id="postal" ref={studentNumberRef} />
        {!formInputValidity.postalCode && (
          <p className={classes.invalid}>Please Enter A Valid Student Number</p>
        )}
      </div>
      <div className={CommentInvalidClass}>
        <label htmlFor="city">Any comments?</label>
        <input type="text" id="city" ref={commentInputRef} />
        {!formInputValidity.city && (
          <p className={classes.invalid}>
            Please Let Us Know What You Think :-)
          </p>
        )}
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
