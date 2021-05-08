import classes from "./StudyGroupItem.module.css";

const MealItemForm = (props) => {
  let showTheJoinButton = props.showJoin;

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCart(props.nameOfGroup);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {showTheJoinButton && <button>Join</button>}
    </form>
  );
};

export default MealItemForm;
