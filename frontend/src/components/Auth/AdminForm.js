import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AdminForm = () => {
  // const authCtx = useContext(AuthContext);
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

    console.log("working");
    history.push("/admin/home");
    // if (isLogin) {
    //   setIsLoading(true);

    //   try {
    //     const response = await fetch("http://localhost:5000/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email: enteredEmailLogin,
    //         password: enteredPasswordLogin,
    //       }),
    //     });

    //     const responseData = await response.json();
    //     setIsLoading(false);

    //     if (responseData.status === "201") {
    //       authCtx.login(responseData.token);
    //       history.replace("/");
    //       console.log(responseData.message);
    //     } else {
    //       setIsInValidCredentials(true);
    //       setEnteredEmailLogin("");
    //       setEnteredPasswordLogin("");

    //       setEnteredEmailLoginTouched(false);
    //       setEnteredPasswordLoginTouched(false);
    //       console.log(responseData.message);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // } else {
    //   try {
    //     setIsLoading(true);

    //     const response = await fetch("http://localhost:5000/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         firstName: enteredFirstName,
    //         lastName: enteredLastName,
    //         email: enteredEmail,
    //         mobileNumber: enteredMobileNumber,
    //         password: enteredPassword,
    //         confirmPassword: enteredConfirmPassword,
    //       }),
    //     });

    //     const responseData = await response.json();
    //     setIsLoading(false);

    //     if (
    //       responseData.status !== "422" &&
    //       enteredPassword === enteredConfirmPassword
    //     ) {
    //       authCtx.login(responseData.token);
    //       history.replace("/");
    //       console.log(responseData.message);
    //     } else if (enteredPassword !== enteredConfirmPassword) {
    //       setIsPasswordValid(true);
    //     } else {
    //       setIsExsistingUser(true);
    //       setEnteredEmail("");
    //       setEnteredFirstName("");
    //       setEnteredLastName("");
    //       setEnteredMobileNumber("");
    //       setEnteredPassword("");
    //       setEnteredConfirmPassword("");

    //       setEnteredConfirmPasswordTouched(false);
    //       setEnteredPasswordTouched(false);
    //       setEnteredEmailTouched(false);
    //       setEnteredFirstNameTouched(false);
    //       setEnteredLastNameTouched(false);
    //       setEnteredMobileNumberTouched(false);
    //       console.log(responseData.message);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };

  return (
    <React.Fragment>
      <section className={classes.auth}>
        <h1>Admin Login</h1>

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
                {emailInputIsInvalidLogin && <h4>Email must not be empty</h4>}
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
                  <h4>Password must not be empty</h4>
                )}
              </div>
            </div>
          )}

          <div className={classes.actions}>
            {!isLoading && <button disabled={!formIsValid}>Login</button>}
            {isLoading && (
              <RingLoader color="white" height={80} width={80}></RingLoader>
            )}
            {isLogin && isInValidCredentials && (
              <h4>Invalid credentials, could not log you in.</h4>
            )}
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AdminForm;
