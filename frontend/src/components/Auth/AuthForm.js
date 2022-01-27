import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmPasswordTouched, setEnteredConfirmPasswordTouched] =
    useState(false);

  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredMobileNumberTouched, setEnteredMobileNumberTouched] =
    useState(false);

  const history = useHistory();

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const firstNameInputIsInValid =
    !enteredFirstNameIsValid && enteredFirstNameTouched;

  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const lastNameInputIsInValid =
    !enteredLastNameIsValid && enteredLastNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInValid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredConfirmPasswordIsValid = enteredConfirmPassword.trim() !== "";
  const ConfirmPasswordInputIsInValid =
    !enteredConfirmPasswordIsValid && enteredConfirmPasswordTouched;

  const enteredMobileNumberIsValid = enteredMobileNumber.trim() !== "";
  const mobileNumberInputIsInValid =
    !enteredMobileNumberIsValid && enteredMobileNumberTouched;

  // let formIsValid = false;

  // if (enteredFirstNameIsValid) {
  //   formIsValid = true;
  // }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const firstNameInputChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const firstNameInputBlurHandler = (event) => {
    setEnteredFirstNameTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameInputBlurHandler = (event) => {
    setEnteredLastNameTouched(true);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const confirmPasswordInputChangeHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const confirmPasswordInputBlurHandler = (event) => {
    setEnteredConfirmPasswordTouched(true);
  };

  const mobileNumberInputChangeHandler = (event) => {
    setEnteredMobileNumber(event.target.value);
  };

  const mobileNumberInputBlurHandler = (event) => {
    setEnteredMobileNumberTouched(true);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    setEnteredFirstNameTouched(true);
    setEnteredLastNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);
    setEnteredMobileNumberTouched(true);
    setEnteredConfirmPasswordTouched(true);

    if (isLogin) {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
        });

        const responseData = await response.json();

        if (
          responseData.email === enteredEmail &&
          responseData.password === enteredPassword
        ) {
          history.replace("/");
        } else {
          setEnteredEmail("");
          setEnteredPassword("");
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
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

        if (
          responseData.message === true &&
          enteredPassword === enteredConfirmPassword
        ) {
          history.replace("/");
        } else {
          console.log(responseData.message);
        }
      } catch (err) {
        console.log(err);
      }
    }

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredMobileNumber("");
    setEnteredConfirmPassword("");

    setEnteredFirstNameTouched(false);
    setEnteredLastNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
    setEnteredMobileNumberTouched(false);
    setEnteredConfirmPasswordTouched(false);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

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
              {firstNameInputIsInValid && <h4>First Name must not be empty</h4>}
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
              {lastNameInputIsInValid && <h4>Last Name must not be empty</h4>}
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
              {emailInputIsInValid && <h4>Email must not be empty</h4>}
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
                <h4>Mobile Number must not be empty</h4>
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
              {passwordInputIsInValid && <h4>Password must not be empty</h4>}
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
                <h4>Confirm Password must not be empty</h4>
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
                required
                onChange={emailInputChangeHandler}
                value={enteredEmail}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={passwordInputChangeHandler}
                value={enteredPassword}
              />
            </div>
          </div>
        )}

        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>

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
  );
};

export default AuthForm;
