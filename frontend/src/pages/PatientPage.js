import React from "react";
import PatientForm from "../components/Auth/PatientForm";
import MainNavigation from "./MainNavigation";

const PatientPage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <PatientForm />
    </React.Fragment>
  );
};

export default PatientPage;
