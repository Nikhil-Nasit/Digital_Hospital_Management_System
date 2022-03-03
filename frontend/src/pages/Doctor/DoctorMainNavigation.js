import React from "react";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./DoctorMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";

import { Navbar, Nav, Container } from "react-bootstrap";
const style1 = {
  color: "white",
  fontSize: 16,
};
// const style2 = {
//   color: "pink",
//   fontSize: 20,
// };
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
      <Navbar bg="p-3 bg-dark text-white" sticky="top" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/doctor/home" style={style1}>
            Welcome Doctor
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/doctor/detail"
              style={style1}
            >
              DETAILS
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/doctor/contact"
              style={style1}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/doctor/update-profile"
              style={style1}
            >
              UPDATE PROFILE
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/doctor/about"
              style={style1}
            >
              ABOUT US
            </Nav.Link>
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
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default DoctorMainNavigation;
