import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={`${classes.header} ${classes.brown} ${classes.highlightTextOut}`}>
      <NavLink to="/">
        <div className={classes.logo}>Work in Progress</div>
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} alt="ADMIN"to="/admin/login">
                ADMIN
              </NavLink>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} alt="PATIENT LOGIN"to="/patient/login">
                PATIENT LOGIN
              </NavLink>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} alt="DOCTOR LOGIN"to="/doctor/login">
                DOCTOR LOGIN
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} alt="PROFILE" to="/profile">
                PROFILE
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler} alt="LOGOUT">LOGOUT</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
