import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import PatientImage from "../../components/images/PatientVector.jpg";
import PatientMainNavigation from "./PatientMainNavigation";
import { Form, Group, Card } from "react-bootstrap";
import classes from "../../components/Auth/PatientForm.module.css";
const UpdateProfile = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const patientId = window.sessionStorage.getItem("patientId");
  const [patient, setPatient] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isExsistingUser, setIsExsistingUser] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState(patient.firstName);

  const [enteredLastName, setEnteredLastName] = useState(patient.lastName);

  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredMobileNumber, setEnteredMobileNumber] = useState(patient.mobileNumber);

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    setIsExsistingUser(false);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    setIsExsistingUser(false);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsExsistingUser(false);
  };

  const mobileNumberInputChangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
    setIsExsistingUser(false);
  };

  

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
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [patientId]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:5000/update/${patientId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: enteredFirstName,
            lastName: enteredLastName,
            mobileNumber: enteredMobileNumber,
          }),
        }
      );

      const responseData = await response.json();
      setIsLoading(false);
        // console.lo
      if (responseData.status === "201") {
        // authCtx.login(responseData.token);
        //window.sessionStorage.setItem("userId", responseData.userId);
        // window.sessionStorage.setItem("patientId", responseData.patientId);
        history.replace("/patient/detail");
        console.log(responseData.message);
      } else {
        setIsExsistingUser(true);
        setEnteredEmail("");
        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredMobileNumber("");

        console.log(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>

      <div className={classes.container}>
        <div className={classes.imagebox}>
          <img
            src={PatientImage}
            className="img-fluid"
            alt="Phoneimage"
            style={{ width: "600px" }}
          />
        </div>
        <div className={classes.loginbox}>
          <Card.ImgOverlay>
            <section className={classes.auth}>
              <h3>UPDATE INFORMATION</h3>

              <form onSubmit={formSubmitHandler}>
                <div>
                  <div className={classes.control}>
                    <label htmlFor="text">First Name</label>
                    <input
                      type="text"
                      id="lname"
                      required
                      onChange={firstNameInputChangeHandler}
                      defaultValue={patient.firstName}
                    />
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="text">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      placeholder="Last Name"
                      required
                      onChange={lastNameInputChangeHandler}
                      defaultValue={patient.lastName}
                    />
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="abc@gmail.com"
                      id="email"
                      required
                      onChange={emailInputChangeHandler}
                      defaultValue={patient.email}
                    />
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="text">Mobile Number</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="10 digit mobile number"
                      pattern="[0-9]{10}"
                      required
                      onChange={mobileNumberInputChangeHandler}
                      defaultValue={patient.mobileNumber}
                    />
                  </div>
                </div>

                <div className={classes.actions}>
                  {!isLoading && <button>Update Profile</button>}
                  {isLoading && (
                    <RingLoader
                      color="white"
                      height={80}
                      width={80}
                    ></RingLoader>
                  )}

                  {isExsistingUser && (
                    <div className="p-3">
                      <h6>User exists already, please login instead.</h6>
                    </div>
                  )}
                </div>
              </form>
            </section>
          </Card.ImgOverlay>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
