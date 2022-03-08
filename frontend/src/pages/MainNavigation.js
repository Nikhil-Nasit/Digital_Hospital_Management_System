import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
const MainNavigation = () => {
  const style1 = {
    color: "white",
    fontSize: 16,
  };
  const style2 = {
    color: "white",
    fontSize: 20,
  };

  return (
    <React.Fragment>
      <Navbar bg="p-3 bg-dark text-white" sticky="top" variant="light">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            style={style2}
            activeClassName={classes.homeborder}
          >
            Digital Hospital
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
