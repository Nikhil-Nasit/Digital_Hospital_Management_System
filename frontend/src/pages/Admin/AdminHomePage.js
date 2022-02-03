import React from "react";
import AdminStarting from "../../components/StartingPage/AdminStarting";
import AdminMainNavigation from "./AdminMainNavigation";

const AdminHomePage = () => {
  return (
    <React.Fragment>
      <AdminMainNavigation></AdminMainNavigation>
      <AdminStarting></AdminStarting>
    </React.Fragment>
  );
};

export default AdminHomePage;
