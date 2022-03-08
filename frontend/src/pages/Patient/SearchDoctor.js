import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PatientMainNavigation from "./PatientMainNavigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DoctorImage from "../../components/images/enric.jpeg";
import "./SearchDoctor.css";
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
      <div className="search-doctor" style={{ minHeight: "91vh" }}>
        <div className="container">
          <h3
            className="mb-3 text-center mt-4 mx-5"
            style={{
              borderBottom: "4px solid rgb(13, 230, 230)",
              display: "inline-block",
              color: "white",
            }}
          >
            Search Doctors
          </h3>

          <div className="row mt-3">
            <div className="col-sm-12">
              <div className="col-sm-5">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                  placeholder="Search Doctors"
                  style={{ backgroundColor: "#ffffff", color: "black" }}
                />
              </div>
              <div className="col-sm-5 mt-3">
                <NavLink to="/map" exact>
                  <button type="button" className="btn btn-info btn-lg mx-2">
                    View On Map
                  </button>
                </NavLink>
              </div>
              <p>
                <div className="input-group mb-4 mt-5">
                  {record.map((doctor) => (
                    <ul key={doctor.firstName}>
                      <Card sx={{ width: 398 }} className="bg-dark">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            src={DoctorImage}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                borderBottom: "4px solid rgb(13, 230, 230)",
                                display: "inline-block",
                                color: "white",
                              }}
                            >
                              {doctor.firstName} {doctor.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <ul className="list-group list-group-flush">
                                <li
                                  className="list-group-item bg-dark"
                                  style={{ color: "white" }}
                                >
                                  <label style={{ color: "white" }}>
                                    Specialization :{" "}
                                  </label>
                                  {doctor.specialization}
                                </li>
                                <li
                                  className="list-group-item bg-dark"
                                  style={{ color: "white" }}
                                >
                                  <label style={{ color: "white" }}>
                                    Email :{" "}
                                  </label>
                                  {doctor.email}
                                </li>
                                <li
                                  className="list-group-item bg-dark"
                                  style={{ color: "white" }}
                                >
                                  <label style={{ color: "white" }}>
                                    Contact Number :{" "}
                                  </label>
                                  {doctor.mobileNumber}
                                </li>
                                <li
                                  className="list-group-item bg-dark"
                                  style={{ color: "white" }}
                                >
                                  <label style={{ color: "white" }}>
                                    Address :{" "}
                                  </label>
                                  {doctor.address}
                                </li>
                              </ul>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </ul>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDoctor;
