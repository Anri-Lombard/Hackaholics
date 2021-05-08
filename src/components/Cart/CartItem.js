import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const date = props.date;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div
          reduceSpacesAvailable={props.reduceSpacesAvailable}
          className={classes.summary}
        >
          <span className={classes.date}>{date}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
