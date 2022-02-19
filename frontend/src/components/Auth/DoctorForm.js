import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./DoctorForm.module.css";
import { Form, Group ,Card} from "react-bootstrap";
import DoctorImage from "../images/Geometric2.png";
const DoctorForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInValidCredentials, setIsInValidCredentials] = useState(false);

  const [enteredEmailLogin, setEnteredEmailLogin] = useState("");
  const [enteredEmailLoginTouched, setEnteredEmailLoginTouched] =
    useState(false);

  const [enteredPasswordLogin, setEnteredPasswordLogin] = useState("");
  const [enteredPasswordLoginTouched, setEnteredPasswordLoginTouched] =
    useState(false);

  const enteredEmailIsValidLogin = enteredEmailLogin.trim() !== "";
  const emailInputIsInvalidLogin =
    !enteredEmailIsValidLogin && enteredEmailLoginTouched;

  const enteredPasswordIsValidLogin = enteredPasswordLogin.trim() !== "";
  const passwordInputIsInvalidLogin =
    !enteredPasswordIsValidLogin && enteredPasswordLoginTouched;

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

  let formIsValid = false;
  if (enteredEmailIsValidLogin && enteredPasswordIsValidLogin) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5000/doctor/login", {
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
          window.sessionStorage.setItem("doctorId", responseData.doctorId);
          history.replace({
            pathname: "/doctor/detail",
            // doctorId : responseData.doctorDetail._id
          });
          // console.log(responseData.message);
          // console.log(responseData.doctorId);
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
    }
  };

  return (
    <React.Fragment>
      <Card.Img src={DoctorImage} alt="Card image" height={850}/>
      <Card.ImgOverlay>
    <section className={classes.auth}>
      <h3>DOCTOR LOGIN</h3>

      <form onSubmit={formSubmitHandler}>
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
              {passwordInputIsInvalidLogin && 
              <div className="p-3">
              <h6>Password must not be empty</h6>
              </div>}
            </div>
          </div>
        )}

        <div className={classes.actions}>
          {!isLoading && <button disabled={!formIsValid}>Login</button>}
          {isLoading && (
            <RingLoader color="white" height={80} width={80}></RingLoader>
          )}
          {isLogin && isInValidCredentials && (
            <div className="p-3">
              <h6>Invalid credentials, could not log you in.</h6>
            </div>
          )}
        </div>
      </form>
    </section>
    </Card.ImgOverlay>
    </React.Fragment>
  );
};

export default DoctorForm;