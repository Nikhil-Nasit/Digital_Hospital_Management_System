import React from "react";
import classes from "./DoctorStarting.module.css";
import Footer from "../../pages/Footer";
const DoctorStarting = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <div className={classes.welcomepatient} style={{ minHeight: "75vh" }}>
          <div>
            <h1 className="text-light" align="center">
              Our Vision and Mission Statements
            </h1>
            <br />
            <br />
            <p
              className="text-light container mt-5"
              style={{ fontSize: "20px" }}
            >
              The Mission of Lifescape Hospital is to provide compassionate,
              accessible, high quality, cost effective healthcare to the
              community; to promote health; to educate healthcare professionals;
              and to participate in appropriate clinical research.
            </p>
            <br />
            <p
              className="text-light container mt-5"
              style={{ fontSize: "20px" }}
            >
              Lifescape Hospital will be an innovative, leading regional health
              system dedicated to advancing the health and transforming the
              lives of the people we serve through excellent clinical quality;
              accessible, patient-centered, caring service; and unmatched
              physician and employee commitment.
            </p>
            <br />
            <br />
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    </React.Fragment>
  );
};

export default DoctorStarting;
