import React from "react";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";
import classes from "./MainNavigation.module.css";
// import AuthContext from "../store/auth-context";
import { Navbar, Nav, Container } from "react-bootstrap";
const MainNavigation = () => {
  // const history = useHistory();
  // const authCtx = useContext(AuthContext);

  // const logoutHandler = () => {
  //   authCtx.logout();
  //   history.replace("/");
  // };
  // const isLoggedIn = authCtx.isLoggedIn;
  const style1 = {
    color: "white",
    fontSize: 16,
  };
  // const style2 = {
  //   color: "pink",
  //   fontSize: 20,
  // };

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <header className={ `${classes.brown} ${classes.highlightTextOut}`}>
    //   <NavLink to="/">
    //     <div className={classes.logo}>Work in Progress</div>
    //   </NavLink>
    //   <nav>
    //     <ul>
    //       {!isLoggedIn && (
    //         <li>
    //           <NavLink activeClassName={classes.active} alt="ADMIN"to="/admin/login">
    //             ADMIN
    //           </NavLink>
    //         </li>
    //       )}

    //       {!isLoggedIn && (
    //         <li>
    //           <NavLink activeClassName={classes.active} alt="PATIENT LOGIN"to="/patient/login">
    //             PATIENT LOGIN
    //           </NavLink>
    //         </li>
    //       )}

    //       {!isLoggedIn && (
    //         <li>
    //           <NavLink activeClassName={classes.active} alt="DOCTOR LOGIN"to="/doctor/login">
    //             DOCTOR LOGIN
    //           </NavLink>
    //         </li>
    //       )}

    //       {isLoggedIn && (
    //         <li>
    //           <NavLink activeClassName={classes.active} alt="PROFILE" to="/profile">
    //             PROFILE
    //           </NavLink>
    //         </li>
    //       )}

    //       {isLoggedIn && (
    //         <li>
    //           <button className={classes.active} onClick={logoutHandler} alt="LOGOUT">LOGOUT</button>
    //         </li>
    //       )}
    //     </ul>
    //   </nav>
    // </header>
    // </nav>
    //

    <React.Fragment>
      <Navbar bg="p-3 bg-dark text-white" sticky="top" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/" style={style1}>
            Work in progress
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/admin/login"
              style={style1}
            >
              ADMIN
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/login"
              style={style1}
            >
              PATIENT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/doctor/login"
              style={style1}
            >
              DOCTOR
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/login"
              style={style1}
            >
              STAFF
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/about"
              style={style1}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/contact"
              style={style1}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default MainNavigation;
