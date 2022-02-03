import React from "react";
import AdminDeleteDoctorForm from "../../components/Admin/AdminDeleteDoctorForm";
import AdminMainNavigation from "./AdminMainNavigation";

const AdminManageDoctorPage = () => {
  return (
    <React.Fragment>
      <AdminMainNavigation></AdminMainNavigation>
      <AdminDeleteDoctorForm></AdminDeleteDoctorForm>
    </React.Fragment>
  );
};

export default AdminManageDoctorPage;
