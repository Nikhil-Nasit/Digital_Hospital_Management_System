import React from "react";
import AdminManageStaffForm from "../../components/Admin/AdminManageStaffForm";
import AdminMainNavigation from "./AdminMainNavigation";

const AdminManageStaffPage = () => {
  return (
    <React.Fragment>
      <AdminMainNavigation></AdminMainNavigation>
      <AdminManageStaffForm></AdminManageStaffForm>
    </React.Fragment>
  );
};

export default AdminManageStaffPage;
