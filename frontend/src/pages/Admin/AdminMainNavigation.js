import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AdminMainNavigation.module.css";

const AdminMainNavigation = () => {
  return (
    <React.Fragment>
      <header
        className={`${classes.header} ${classes.brown} ${classes.highlightTextOut}`}
      >
        <NavLink to="/admin/home">
          <div className={classes.logo}>Welcome Admin</div>
        </NavLink>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/admin/add-doctor" alt="ADD DOCTOR">
              ADD DOCTOR
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/admin/add-staff" alt="ADD STAFF">
              ADD STAFF
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/admin/delete-doctor" alt="DELETE DOCTOR">
              DELETE DOCTOR
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/admin/delete-staff" alt="DELETE STAFF">
              DELETE STAFF
            </NavLink>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
};

export default AdminMainNavigation;
