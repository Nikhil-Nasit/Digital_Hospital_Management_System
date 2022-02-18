import React from "react";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./DoctorMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";

const DoctorMainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    window.sessionStorage.removeItem("doctorId");
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <header
        className={`${classes.header} ${classes.brown} ${classes.highlightTextOut}`}
      >
        <NavLink to="/doctor/home">
          <div className={classes.logo}>Welcome Doctor</div>
        </NavLink>
        <ul>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/doctor/detail"
              alt="DETAILS"
            >
              DETAILS
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/doctor/contact"
              alt="CONTACT"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/doctor/about"
              alt="ABOUT US"
            >
              ABOUT US
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <Button
                variant="outline-info"
                onClick={logoutHandler}
                alt="LOGOUT"
              >
                LOGOUT
              </Button>
            </li>
          )}
        </ul>
      </header>
    </React.Fragment>
  );
};

export default DoctorMainNavigation;
