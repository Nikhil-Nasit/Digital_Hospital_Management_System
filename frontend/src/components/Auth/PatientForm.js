import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import PatientImage from "../images/Geometric1.png";
//import classes from "./AdminForm.module.css";
import classes from "./PatientForm.module.css";
import { Form, Group, Card } from "react-bootstrap";
const PatientForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInValidCredentials, setIsInValidCredentials] = useState(false);
  const [isExsistingUser, setIsExsistingUser] = useState(false);
  const [isPasswordInValid, setIsPasswordInValid] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredEmailLogin, setEnteredEmailLogin] = useState("");
  const [enteredEmailLoginTouched, setEnteredEmailLoginTouched] =
    useState(false);

  const [enteredPasswordLogin, setEnteredPasswordLogin] = useState("");
  const [enteredPasswordLoginTouched, setEnteredPasswordLoginTouched] =
    useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredMobileNumberTouched, setEnteredMobileNumberTouched] =
    useState(false);

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameInputIsInValid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const lastNameInputIsInValid =
    !enteredLastNameIsValid && enteredLastNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredEmailIsValidLogin = enteredEmailLogin.trim() !== "";
  const emailInputIsInvalidLogin =
    !enteredEmailIsValidLogin && enteredEmailLoginTouched;

  const enteredPasswordIsValidLogin = enteredPasswordLogin.trim() !== "";
  const passwordInputIsInvalidLogin =
    !enteredPasswordIsValidLogin && enteredPasswordLoginTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredConfirmPasswordIsValid = enteredConfirmPassword.trim() !== "";
  const ConfirmPasswordInputIsInValid =
    !enteredConfirmPasswordIsValid && enteredConfirmPasswordTouched;

  const enteredMobileNumberIsValid = enteredMobileNumber.trim() !== "";
  const mobileNumberInputIsInValid =
    !enteredMobileNumberIsValid && enteredMobileNumberTouched;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    setIsExsistingUser(false);
  };

  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    setIsExsistingUser(false);
  };

  const lastNameInputBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsExsistingUser(false);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const emailInputChangeHandlerLogin = (event) => {
    setEnteredEmailLogin(event.target.value);
    setIsInValidCredentials(false);
  };

  const emailInputBlurHandlerLogin = () => {
    setEnteredEmailLoginTouched(true);
  };

  const passwordInputChangeHandlerLogin = (event) => {
    setEnteredPasswordLogin(event.target.value);
    setIsInValidCredentials(false);
  };

  const passwordInputBlurHandlerLogin = () => {
    setEnteredPasswordLoginTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setIsExsistingUser(false);
    setIsPasswordInValid(false);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const confirmPasswordInputChangeHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
    setIsExsistingUser(false);
    setIsPasswordInValid(false);
  };

  const confirmPasswordInputBlurHandler = (event) => {
    setEnteredConfirmPasswordTouched(true);
  };

  const mobileNumberInputChangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
    setIsExsistingUser(false);
  };

  const mobileNumberInputBlurHandler = (event) => {
    setEnteredMobileNumberTouched(true);
  };

  let formIsValid = false;
  if (enteredEmailIsValidLogin && enteredPasswordIsValidLogin) {
    formIsValid = true;
  }
  if (
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid &&
    enteredMobileNumberIsValid
  ) {
    formIsValid = true;
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmailLogin,
            password: enteredPasswordLogin,
          }),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (responseData.status === "201") {
          authCtx.login(responseData.token);
          window.sessionStorage.setItem("patientId", responseData.patientId);
          history.replace("/patient/detail");
          console.log(responseData.message);
        } else {
          setIsInValidCredentials(true);
          setEnteredEmailLogin("");
          setEnteredPasswordLogin("");

          setEnteredEmailLoginTouched(false);
          setEnteredPasswordLoginTouched(false);
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            mobileNumber: enteredMobileNumber,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
          }),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (
          responseData.status !== "422" &&
          enteredPassword === enteredConfirmPassword
        ) {
          authCtx.login(responseData.token);
          window.sessionStorage.setItem("userId", responseData.userId);
          history.replace("/patient/home");
          console.log(responseData.message);
        } else if (enteredPassword !== enteredConfirmPassword) {
          setIsPasswordInValid(true);
          console.log(responseData.message);
        } else {
          setIsExsistingUser(true);
          setEnteredEmail("");
          setEnteredFirstName("");
          setEnteredLastName("");
          setEnteredMobileNumber("");
          setEnteredPassword("");
          setEnteredConfirmPassword("");

          setEnteredConfirmPasswordTouched(false);
          setEnteredPasswordTouched(false);
          setEnteredEmailTouched(false);
          setEnteredFirstNameTouched(false);
          setEnteredLastNameTouched(false);
          setEnteredMobileNumberTouched(false);
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <Card.Img src={PatientImage} alt="Card image" height={1050} />
      <Card.ImgOverlay>
        <section className={classes.auth}>
          <h3>{isLogin ? "PATIENT LOGIN" : "SIGN UP"}</h3>

          <form onSubmit={formSubmitHandler}>
            {!isLogin && (
              <div>
                <div className={classes.control}>
                  <label htmlFor="text">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    required
                    onChange={firstNameInputChangeHandler}
                    onBlur={firstNameInputBlurHandler}
                    value={enteredFirstName}
                  />
                  {firstNameInputIsInValid && (
                    <div className="p-3">
                      <h6>First Name must not be empty</h6>
                    </div>
                  )}
                </div>

                <div className={classes.control}>
                  <label htmlFor="text">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                    required
                    onChange={lastNameInputChangeHandler}
                    onBlur={lastNameInputBlurHandler}
                    value={enteredLastName}
                  />
                  {lastNameInputIsInValid && (
                    <div className="p-3">
                      <h6>Last Name must not be empty</h6>
                    </div>
                  )}
                </div>

                <div className={classes.control}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    id="email"
                    required
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                  />
                  {emailInputIsInValid && (
                    <div className="p-3">
                      <h6>Email must not be empty</h6>
                    </div>
                  )}
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
                    onBlur={mobileNumberInputBlurHandler}
                    value={enteredMobileNumber}
                  />
                  {mobileNumberInputIsInValid && (
                    <div className="p-3">
                      <h6>Mobile Number must not be empty</h6>
                    </div>
                  )}
                </div>

                <div className={classes.control}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    minLength="6"
                    onChange={passwordInputChangeHandler}
                    onBlur={passwordInputBlurHandler}
                    value={enteredPassword}
                  />
                  {passwordInputIsInValid && (
                    <div className="p-3">
                      <h6>Password must not be empty</h6>
                    </div>
                  )}
                </div>

                <div className={classes.control}>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="Confirm Password"
                    required
                    minLength="6"
                    onChange={confirmPasswordInputChangeHandler}
                    onBlur={confirmPasswordInputBlurHandler}
                    value={enteredConfirmPassword}
                  />
                  {ConfirmPasswordInputIsInValid && (
                    <div className="p-3">
                      <h6>Confirm Password must not be empty</h6>
                    </div>
                  )}
                </div>
              </div>
            )}

            {isLogin && (
              <div>
                <div className={classes.control}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="abc@gmail.com"
                    required
                    onChange={emailInputChangeHandlerLogin}
                    onBlur={emailInputBlurHandlerLogin}
                    value={enteredEmailLogin}
                  />
                  {emailInputIsInvalidLogin && (
                    <div className="p-3">
                      <h6>Email must not be empty</h6>
                    </div>
                  )}
                </div>
                <div className={classes.control}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={passwordInputChangeHandlerLogin}
                    onBlur={passwordInputBlurHandlerLogin}
                    value={enteredPasswordLogin}
                  />
                  {passwordInputIsInvalidLogin && (
                    <div className="p-3">
                      <h6>Password must not be empty</h6>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className={classes.actions}>
              {!isLoading && (
                <button disabled={!formIsValid}>
                  {isLogin ? "Login" : "Create Account"}
                </button>
              )}
              {isLoading && (
                <RingLoader color="white" height={80} width={80}></RingLoader>
              )}
              {isLogin && isInValidCredentials && (
                <div className="p-3">
                  <h6>Invalid credentials, could not log you in.</h6>
                </div>
              )}
              {!isLogin && isExsistingUser && (
                <div className="p-3">
                  <h6>User exists already, please login instead.</h6>
                </div>
              )}
              {!isLogin && isPasswordInValid && (
                <div className="p-3">
                  <h6>Password and Confirm Password must be same.</h6>
                </div>
              )}

              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      </Card.ImgOverlay>
    </React.Fragment>
  );
};

export default PatientForm;
