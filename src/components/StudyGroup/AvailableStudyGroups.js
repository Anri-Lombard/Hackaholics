import Card from "../UI/Card";
import StudyMealItem from "./StudyGroupItem/StudyGroupItem";
import classes from "./AvailableStudyGroups.module.css";

import { useEffect, useState } from "react";

const AvailableStudyGroups = () => {
  // Update data when these changes
  const [studyGroup, setStudyGroup] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchStudyGroups = async () => {
      const response = await fetch(
        "https://react-http-7bd76-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedStudyGroups = [];

      for (const key in responseData) {
        loadedStudyGroups.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          date: responseData[key].date,
        });
      }
      setStudyGroup(loadedStudyGroups);
      setIsLoading(false);
    };
    // async function always throws a promise, so cannot catch
    fetchStudyGroups().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  const studyGroupList = studyGroup.map((studyGroup) => (
    <StudyMealItem
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
  } else if (studyGroupList.length === 0) {
    content = (
      <p className={classes.loadingMeals}>No Study Groups Were Found</p>
    );
  } else {
    content = <ul>{studyGroupList}</ul>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableStudyGroups;
