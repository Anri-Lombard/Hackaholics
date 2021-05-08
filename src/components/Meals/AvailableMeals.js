import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import { useEffect, useState } from "react";

const AvailableMeals = () => {
  // Update data when these changes
  const [studyGroup, setStudyGroup] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-7bd76-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          date: responseData[key].date,
        });
      }
      setStudyGroup(loadedMeals);
      setIsLoading(false);
    };
    // async function always throws a promise, so cannot catch
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  const mealsList = studyGroup.map((studyGroup) => (
    <MealItem
      showJoin="true"
      key={studyGroup.id}
      id={studyGroup.id}
      name={studyGroup.name}
      description={studyGroup.description}
      date={studyGroup.date}
    />
  ));

  let content;
  if (isLoading) {
    content = <p className={classes.loadingMeals}>Loading...</p>;
  } else if (hasError) {
    content = <p className={classes.mealsError}>{hasError}</p>;
  } else if (mealsList.length === 0) {
    content = <p className={classes.loadingMeals}>No groups were found</p>;
  } else {
    content = <ul>{mealsList}</ul>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
