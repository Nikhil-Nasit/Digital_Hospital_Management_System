import React from "react";
import AdminForm from "../components/Auth/AdminForm";
import MainNavigation from "./MainNavigation";

const AdminPage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <AdminForm />
    </React.Fragment>
  );
};
export default AdminPage;
