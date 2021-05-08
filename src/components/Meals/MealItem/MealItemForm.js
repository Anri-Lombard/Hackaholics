import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCart(props.nameOfGroup);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button>Join</button>
    </form>
  );
};

export default MealItemForm;
