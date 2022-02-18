import React from "react";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./PatientMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
const PatientMainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    window.sessionStorage.removeItem("patientId");
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <header
        className={`${classes.header} ${classes.brown} ${classes.highlightTextOut}`}
      >
        <NavLink to="/patient/home">
          <div className={classes.logo}>Welcome Patient</div>
        </NavLink>
        <ul>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/patient/detail"
              alt="DETAILS"
            >
              DETAILS
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/patient/contact"
              alt="CONTACT"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/patient/about"
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

export default PatientMainNavigation;
