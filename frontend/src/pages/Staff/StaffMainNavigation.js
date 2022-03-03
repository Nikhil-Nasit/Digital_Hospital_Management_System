import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./StaffMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const StaffMainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    window.sessionStorage.removeItem("staffId");
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <React.Fragment>
      <Navbar bg="dark" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/staff/home">
            Welcome Staff
          </Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/detail"
            >
              DETAILS
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/manage-patient-id"
            >
              UPLOAD PATIENT DOCUMENT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/update-profile"
            >
              UPDATE PROFILE
            </Nav.Link>
          </Nav>
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
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default StaffMainNavigation;
