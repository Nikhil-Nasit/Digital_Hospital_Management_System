import React from "react";
import AdminManageDoctorForm from "../../components/Admin/AdminManageDoctorForm";
import AdminMainNavigation from "./AdminMainNavigation";

const AdminManageDoctorPage = () => {
  return (
    <React.Fragment>
      <AdminMainNavigation></AdminMainNavigation>
      <AdminManageDoctorForm></AdminManageDoctorForm>
    </React.Fragment>
  );;
};

export default AdminManageDoctorPage;
