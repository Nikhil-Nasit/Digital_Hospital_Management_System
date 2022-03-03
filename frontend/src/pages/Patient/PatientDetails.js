import React from "react";
import "./PatientDetails.css";
import PatientMainNavigation from "./PatientMainNavigation";
import IMG from "../../components/images/avatar.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ListGroupItem, Button } from "react-bootstrap";

const PatientDetails = () => {
  const [patient, setPatient] = useState("");
  const patientId = window.sessionStorage.getItem("patientId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/detail/${patientId}`
        );

        const responseData = await response.json();
        const patientDetail = {
          firstName: responseData.patient.firstName,
          lastName: responseData.patient.lastName,
          email: responseData.patient.email,
          mobileNumber: responseData.patient.mobileNumber,
          // doc:responseData.patient.documents,
        };
        setPatient(patientDetail);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [patientId]);

  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      ></link>
      <div className="patientdetail">
        <div className="main-content">
          <nav
            className="navbar navbar-top navbar-expand-md navbar-dark"
            id="navbar-main"
          >
            <div className="container-fluid">
              <h2 className="h6 mb-0 text-white text-uppercase d-none d-lg-inline-block">
                Patient profile
              </h2>
              <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"></form>
              <ul className="navbar-nav align-items-center d-none d-md-flex">
                <li className="nav-item dropdown">
                  <h2 className="text-white">
                    <div className="media align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img alt="ImagePlaceholder" src={IMG} />
                      </span>
                      <div className="media-body ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm  font-weight-bold">
                          {patient.firstName + " " + patient.lastName}
                        </span>
                      </div>
                    </div>
                  </h2>
                  <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right"></div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
            <span className="mask bg-gradient-default opacity-8"></span>
          </div>
          <div className="container-fluid mt--7">
            <div className="col-12">
              <div className="col-xl-8 order-xl-1">
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="mb-0">My account</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form>
                      <h6 className="heading-small text-muted mb-4">
                        Patient information
                      </h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First Name
                              </label>

                              <ListGroupItem
                                className="form-control form-control-alternative"
                                style={{ fontFamily: "verdana" }}
                              >
                                {patient.firstName}
                              </ListGroupItem>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last Name
                              </label>
                              <ListGroupItem
                                className="form-control form-control-alternative"
                                style={{ fontFamily: "verdana" }}
                              >
                                {patient.lastName}
                              </ListGroupItem>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email Address
                              </label>
                              <ListGroupItem
                                className="form-control form-control-alternative"
                                style={{ fontFamily: "verdana" }}
                              >
                                {patient.email}
                              </ListGroupItem>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-contact-number"
                              >
                                Contact Number
                              </label>
                              <ListGroupItem
                                className="form-control form-control-alternative"
                                style={{ fontFamily: "verdana" }}
                              >
                                {patient.mobileNumber}
                              </ListGroupItem>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <div className="pl-lg-4">
                        
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Country
                              </label>
                              <ListGroupItem
                                className="form-control form-control-alternative"
                                style={{ fontFamily: "verdana" }}
                              >
                                INDIA
                              </ListGroupItem>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Documents
                              </label>

                              <NavLink to="/patient/document" exact>
                                <Button className="mt-1">
                                  Click to get your Documents
                                </Button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pl-lg-4"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </React.Fragment>
  );
};

export default PatientDetails;
