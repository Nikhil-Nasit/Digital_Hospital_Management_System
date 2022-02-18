import React from "react";
import PatientStarting from "../../components/StartingPage/PatientStarting";
import PatientMainNavigation from "./PatientMainNavigation";

const PatientHomePage = () => {
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <PatientStarting></PatientStarting>
    </React.Fragment>
  );
};

export default PatientHomePage;
