import React from "react";
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./PatientMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
const style1 = {
  color: "white",
  fontSize: 16,
};
// const style2 = {
//   color: "pink",
//   fontSize: 20,
// };
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
      <Navbar bg="p-3 bg-dark text-white" sticky="top" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/patient/home" style={style1}>
            Welcome Patient
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/detail"
              style={style1}
            >
              DETAILS
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/search-doctor"
              style={style1}
            >
              SEARCH DOCTOR
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/update-profile"
              style={style1}
            >
              UPDATE PROFILE
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/contact"
              style={style1}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/patient/about"
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

export default PatientMainNavigation;
