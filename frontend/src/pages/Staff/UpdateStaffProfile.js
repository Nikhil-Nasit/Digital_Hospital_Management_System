import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import PatientImage from "../../components/images/PatientVector.jpg";
import StaffMainNavigation from "./StaffMainNavigation";
import { Form, Group, Card } from "react-bootstrap";
import classes from "../../components/Auth/PatientForm.module.css";


const UpdateStaffProfile = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [staff, setStaff] = useState("");
  const staffId = window.sessionStorage.getItem("staffId");

  const [isLoading, setIsLoading] = useState(false);

  const [isExsistingUser, setIsExsistingUser] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState(staff.firstName);

  const [enteredLastName, setEnteredLastName] = useState(staff.lastName);

  const [enteredMobileNumber, setEnteredMobileNumber] = useState(
    staff.mobileNumber
  );

  const [enteredAddress, setEnteredAddress] = useState(staff.address);

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    setIsExsistingUser(false);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    setIsExsistingUser(false);
  };

  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
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
          `http://localhost:5000/staff/detail/${staffId}`
        );

        const responseData = await response.json();
        const staffDetail = {
          firstName: responseData.staff.firstName,
          lastName: responseData.staff.lastName,
          mobileNumber: responseData.staff.mobileNumber,
          address: responseData.staff.address,
        };
        setStaff(staffDetail);
        // console.log(responseData.message);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [staffId]);

  const formSubmitHandler = async (e) => {

    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await fetch(`http://localhost:5000/staff/update/${staffId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: enteredFirstName,
          lastName: enteredLastName,
          mobileNumber: enteredMobileNumber,
          address: enteredAddress,
        }),
      });

      const responseData = await response.json();
      setIsLoading(false);
    
      if (responseData.status === "201") {
        // authCtx.login(responseData.token);
        //window.sessionStorage.setItem("userId", responseData.userId);
        // window.sessionStorage.setItem("patientId", responseData.patientId);
        history.replace("/staff/detail");
        // console.log("Doctor");
        console.log(responseData.message);
      } else {
        setIsExsistingUser(true);
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
      <StaffMainNavigation></StaffMainNavigation>

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
                      defaultValue={staff.firstName}
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
                      defaultValue={staff.lastName}
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
                      defaultValue={staff.mobileNumber}
                    />
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="email">Address</label>
                    <input
                      type="text"
                      placeholder="address"
                      id="address"
                      required
                      onChange={addressInputChangeHandler}
                      defaultValue={staff.address}
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

export default UpdateStaffProfile;
