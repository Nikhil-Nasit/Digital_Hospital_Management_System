import React from "react";
import StaffStarting from "../../components/StartingPage/StaffStarting";
import StaffMainNavigation from "./StaffMainNavigation";

const StaffHomePage = () => {
  return (
    <React.Fragment>
      <StaffMainNavigation></StaffMainNavigation>
      <StaffStarting></StaffStarting>
    </React.Fragment>
  );
};

export default StaffHomePage;
