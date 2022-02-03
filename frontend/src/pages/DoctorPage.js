import React from "react";
import DoctorForm from "../components/Auth/DoctorForm";
import MainNavigation from "./MainNavigation";

const DoctorPage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <DoctorForm />
    </React.Fragment>
  );
};

export default DoctorPage;
