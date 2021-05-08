import { Fragment } from "react";

import MealsSummary from "../StudyGroup/StudyGroupSummary";
import AvailableMeals from "../StudyGroup/AvailableStudyGroups";
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
