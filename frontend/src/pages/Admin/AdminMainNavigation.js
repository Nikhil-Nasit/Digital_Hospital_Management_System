import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./AdminMainNavigation.module.css";
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
const AdminMainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  const isLoggedIn = authCtx.isLoggedIn;
  const style = {
    color: "white",
    fontSize: 16,
  };
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
          <Navbar.Brand as={NavLink} to="/admin/home">
            Welcome Admin
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/admin/add-doctor"
              style={style}
            >
              ADD DOCTOR
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/admin/add-staff"
              style={style}
            >
              ADD STAFF
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/admin/delete-doctor"
              style={style}
            >
              DELETE DOCTOR
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/admin/delete-staff"
              style={style}
            >
              DELETE STAFF
            </Nav.Link>
          </Nav>
          {isLoggedIn && (
            <li>
              <Button
                variant="outline-info"
                onClick={logoutHandler}
                alt="LOGOUT"
                style={style}
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

export default AdminMainNavigation;
