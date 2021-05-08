import { Fragment } from "react";

import MealsSummary from "../Meals/MealsSummary";
import AvailableMeals from "../Meals/AvailableMeals";
// import MyJoinedGroups from "../JoinedGroups/MyJoinedGroups";

const StudyGroupsAvailable = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      {/* <MyJoinedGroups /> */}
    </Fragment>
  );
};

export default StudyGroupsAvailable;
