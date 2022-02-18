import React from "react";
import DoctorStarting from "../../components/StartingPage/DoctorStarting";
import DoctorMainNavigation from "./DoctorMainNavigation";

const DoctorHomePage = () => {
  return (
    <React.Fragment>
      <DoctorMainNavigation></DoctorMainNavigation>
      <DoctorStarting></DoctorStarting>
    </React.Fragment>
  );
};

export default DoctorHomePage;
