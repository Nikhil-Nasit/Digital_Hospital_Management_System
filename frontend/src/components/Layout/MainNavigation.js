import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>Work in Progress</div>
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/admin/login">
                Admin
              </NavLink>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/patient/login">
                Patient Login
              </NavLink>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/doctor/login">
                Doctor Login
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/profile">
                Profile
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
