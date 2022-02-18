import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AdminManageStaffForm.module.css";

const AdminManageStaffForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isExsistingUser, setIsExsistingUser] = useState(false);
  const [isPasswordInValid, setIsPasswordInValid] = useState(false);

  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredAddressTouched, setEnteredAddressTouched] = useState(false);

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

  const enteredAddressIsValid = enteredAddress.trim() !== "";
  const addressInputIsInvalid = !enteredAddressIsValid && enteredAddressTouched;

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

  const addressInputChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const addressInputBlurHandler = () => {
    setEnteredAddressTouched(true);
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
  if (
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid &&
    enteredMobileNumberIsValid &&
    enteredAddressIsValid
  ) {
    formIsValid = true;
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // console.log("Staff Signed Up Successfully");

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:5000/staff/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: enteredFirstName,
          lastName: enteredLastName,
          email: enteredEmail,
          mobileNumber: enteredMobileNumber,
          address: enteredAddress,
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
        history.replace("/admin/home");
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
        setEnteredAddress("");

        setEnteredConfirmPasswordTouched(false);
        setEnteredPasswordTouched(false);
        setEnteredEmailTouched(false);
        setEnteredFirstNameTouched(false);
        setEnteredLastNameTouched(false);
        setEnteredMobileNumberTouched(false);
        setEnteredAddressTouched(false);
        console.log(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.image}>
      <section className={classes.auth}>
        <h3>Add New Staff</h3>

        <form onSubmit={formSubmitHandler}>
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
              <label htmlFor="text">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                required
                onChange={addressInputChangeHandler}
                onBlur={addressInputBlurHandler}
                value={enteredAddress}
              />
              {addressInputIsInvalid && (
                <div className="p-3">
                  <h6>Address must not be empty</h6>
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

          <div className={classes.actions}>
            {!isLoading && (
              <button disabled={!formIsValid}>Create Account</button>
            )}
            {isLoading && (
              <RingLoader color="white" height={80} width={80}></RingLoader>
            )}
            {isExsistingUser && (
              <div className="p-3">
                <h6>User exists already, please login instead.</h6>
              </div>
            )}
            {isPasswordInValid && (
              <div className="p-3">
                <h6>Password and Confirm Password must be same.</h6>
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminManageStaffForm;
