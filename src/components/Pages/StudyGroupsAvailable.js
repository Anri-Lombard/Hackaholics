import { Fragment } from "react";

import StudyGroupsSummary from "../StudyGroup/StudyGroupSummary";
import AvailableStudyGroups from "../StudyGroup/AvailableStudyGroups";
// import MyJoinedGroups from "../JoinedGroups/MyJoinedGroups";

const StudyGroupsAvailable = () => {
  return (
    <Fragment>
      <StudyGroupsSummary />
      <AvailableStudyGroups />
      {/* <MyJoinedGroups /> */}
    </Fragment>
  );
};

export default StudyGroupsAvailable;
