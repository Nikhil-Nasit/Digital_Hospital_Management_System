import React from "react";
import { NavLink } from "react-router-dom";

const AdminHomePageForm = () => {
  return (
    <React.Fragment>
      <h1>Welcome Admin!!</h1>
      <ul>
        <li>
          <NavLink to="/admin/add-doctor">Add Doctor</NavLink>
        </li>
        <li>
          <NavLink to="/admin/add-staff">Add Staff</NavLink>
        </li>
        <li>
          <NavLink to="/admin/delete-doctor">Delete Doctor</NavLink>
        </li>
        <li>
          <NavLink to="/admin/delete-staff">Delete Staff</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default AdminHomePageForm;
