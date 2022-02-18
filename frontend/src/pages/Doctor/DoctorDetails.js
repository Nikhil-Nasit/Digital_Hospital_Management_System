import React from "react";
import classes from "./DoctorDetails.module.css";
import DoctorMainNavigation from "./DoctorMainNavigation";
import IMG from '../../components/images/avatar.png';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState("");
  const doctorId = window.sessionStorage.getItem("doctorId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/doctor/detail/${doctorId}`
        );

        const responseData = await response.json();
        const doctorDetail = {
          firstName: responseData.doctor.firstName,
          lastName: responseData.doctor.lastName,
          email: responseData.doctor.email,
          mobileNumber: responseData.doctor.mobileNumber,
          address: responseData.doctor.address,
          specialization: responseData.doctor.specialization,
        };
        setDoctor(doctorDetail);
        // console.log(responseData.message);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [doctorId]);

  return (
    <React.Fragment>
      <DoctorMainNavigation></DoctorMainNavigation>
      {/* <li className={classes.doctor}>
        <h2>{doctor.firstName}</h2>
        <h2>{doctor.lastName}</h2>
        <h2>{doctor.email}</h2>
        <h2>{doctor.mobileNumber}</h2>
        <h2>{doctor.address}</h2>
        <h2>{doctor.specialization}</h2>
      </li> */}
      <div className="background1">
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "90vh" }}>
          <Card style={{ width: '40rem' }} >
            <Card.Img variant="top" className="center" style={{ maxHeight: "100px", maxWidth: "100px" }} src={IMG} />
            <Card.Body>
              <Card.Title className="text-center"><strong>Doctor Information</strong></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{ marginLeft: "10px", marginRight: "10px" }}>
              <ListGroupItem style={{ fontFamily: "verdana" }}>First Name : {doctor.firstName}</ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>Last Name : {doctor.lastName}</ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>Email address : {doctor.email}</ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>Mobile Number : {doctor.mobileNumber}</ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>Address : </ListGroupItem>
              <ListGroupItem style={{ fontFamily: "verdana" }}>Age : </ListGroupItem>
            </ListGroup>
            <Button type="button" variant="btn btn-primary btn-sm w-10%" style={{ width: "150px", margin: "auto", marginTop: "20px", marginBottom: "20px" }}>Update</Button>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DoctorDetails;