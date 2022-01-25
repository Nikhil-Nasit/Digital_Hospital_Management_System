import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  const firstNameInputRef = useRef();

  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const mobileNumberInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // const submit = (event) => {
  //   event.preventDefault();
  // };
  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

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
          console.log(responseData.message);
          history.replace("/auth");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      const enteredFirstName = firstNameInputRef.current.value;
      const enteredLastName = lastNameInputRef.current.value;
      const enteredMobileNumber = mobileNumberInputRef.current.value;
      const enteredConfirmPassword = confirmPasswordInputRef.current.value;

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
          // history.replace("/auth");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                required
                ref={firstNameInputRef}
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="text">Last Name</label>
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                required
                ref={lastNameInputRef}
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                required
                ref={emailInputRef}
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
                ref={mobileNumberInputRef}
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                minLength="6"
                ref={passwordInputRef}
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
                required
                minLength="6"
                ref={confirmPasswordInputRef}
              />
            </div>
          </div>
        )}

        {isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
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
