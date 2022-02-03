import React from "react";
import AdminDeleteStaffForm from "../../components/Admin/AdminDeleteStaffForm";
import AdminMainNavigation from "./AdminMainNavigation";

const AdminManageDoctorPage = () => {
  return (
    <React.Fragment>
      <AdminMainNavigation></AdminMainNavigation>
      <AdminDeleteStaffForm></AdminDeleteStaffForm>
    </React.Fragment>
  );
};

export default AdminManageDoctorPage;
