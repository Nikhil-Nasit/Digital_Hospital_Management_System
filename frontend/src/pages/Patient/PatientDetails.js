import React from "react";
import "./PatientDetails.css";
import PatientMainNavigation from "./PatientMainNavigation";
import IMG from "../../components/images/avatar.png";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

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
        };
        setPatient(patientDetail);
        // console.log(responseData.user);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [patientId]);
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      {/* <li className={classes.patient}>
        <h2>{patient.firstName}</h2>
        <h2>{patient.lastName}</h2>
        <h2>{patient.email}</h2>
        <h2>{patient.mobileNumber}</h2>
      </li> */}
      <div className="background1">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          <Card style={{ width: "40rem" }}>
            <Card.Img
              variant="top"
              className="center"
              style={{ maxHeight: "100px", maxWidth: "100px" }}
              src={IMG}
            />
            <Card.Body>
              <Card.Title className="text-center">
                <strong>Patient Information</strong>
              </Card.Title>
            </Card.Body>
            <ListGroup
              className="list-group-flush"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                First Name : {patient.firstName}
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                Last Name : {patient.lastName}
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                Email address : {patient.email}
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                Mobile Number : {patient.mobileNumber}
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                Address :{" "}
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>
                Age :{" "}
              </ListGroupItem>
            </ListGroup>
            <Button
              type="button"
              variant="btn btn-primary btn-sm w-10%"
              style={{
                width: "150px",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Update
            </Button>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PatientDetails;
