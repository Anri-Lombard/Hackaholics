import { useContext } from "react";

import StudyGroupItemForm from "./StudyGroupItemForm";
import classes from "./StudyGroupItem.module.css";
import CartContext from "../../../store/cart-context";

const StudyGroupItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      date: props.date,
    });
  };

  return (
    <li className={classes.studyGroup}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.date}>{props.date}</div>
      </div>
      <div>
        <StudyGroupItemForm
          showJoin={props.showJoin}
          nameOfGroup={props.name}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default StudyGroupItem;
