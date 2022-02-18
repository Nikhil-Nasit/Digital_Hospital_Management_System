import React from "react";
import StaffForm from "../components/Auth/StaffForm";
import MainNavigation from "./MainNavigation";

const StaffPage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <StaffForm />
    </React.Fragment>
  );
};

export default StaffPage;
