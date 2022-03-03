import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import PatientMainNavigation from "./PatientMainNavigation";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const SearchDoctor = () => {
  const [search, setSearch] = useState();
  const [record, setRecord] = useState([]);

  const loadDoctorDetail = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctor/detail");
      const responseData = await response.json();

      setRecord(responseData.doctor);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    search ? searchRecords() : loadDoctorDetail();
  }, [search]);

  const searchRecords = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/doctor/searchRecord/${search}`
      );
      const responseData = await response.json();
      //   console.log(responseData.doctor);
      setRecord(responseData.doctor);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <PatientMainNavigation></PatientMainNavigation>
      <NavLink to="/map">View On Map</NavLink>
    </section>
  );
};

export default SearchDoctor;
