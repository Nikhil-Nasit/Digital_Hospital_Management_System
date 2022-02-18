import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./StaffMainNavigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
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
    // <React.Fragment>
    //   <header
    //     className={`${classes.header} ${classes.brown} ${classes.highlightTextOut}`}
    //   >
    //     <NavLink to="/admin/home">
    //       <div className={classes.logo}>Welcome Admin</div>
    //     </NavLink>
    //     <ul>
    //       <li>
    //         <NavLink
    //           activeClassName={classes.active}
    //           to="/admin/add-doctor"
    //           alt="ADD DOCTOR"
    //         >
    //           ADD DOCTOR
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           activeClassName={classes.active}
    //           to="/admin/add-staff"
    //           alt="ADD STAFF"
    //         >
    //           ADD STAFF
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           activeClassName={classes.active}
    //           to="/admin/delete-doctor"
    //           alt="DELETE DOCTOR"
    //         >
    //           DELETE DOCTOR
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           activeClassName={classes.active}
    //           to="/admin/delete-staff"
    //           alt="DELETE STAFF"
    //         >
    //           DELETE STAFF
    //         </NavLink>
    //       </li>
    //       {isLoggedIn && (
    //         <li>
    //           <Button
    //             variant="outline-info"
    //             onClick={logoutHandler}
    //             alt="LOGOUT"
    //           >
    //             LOGOUT
    //           </Button>
    //         </li>
    //       )}
    //     </ul>
    //   </header>
    // </React.Fragment>

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
              to="/staff/manage-patient-id"
            >
              UPLOAD PATIENT DOCUMENT
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/delete-patient-document"
            >
              DELETE PATIENT DOCUMENT
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
