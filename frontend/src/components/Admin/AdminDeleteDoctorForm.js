import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AdminDeleteDoctorForm.module.css";

const AdminDeleteDoctorForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInValidCredentials, setIsInValidCredentials] = useState(false);
  const [isExsistingUser, setIsExsistingUser] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [enteredDoctorId, setEnteredDoctorId] = useState("");
  const [enteredDoctorIdTouched, setEnteredDoctorIdTouched] = useState(false);

  const enteredDoctorIdIsValid = enteredDoctorId.trim() !== "";
  const doctorIdInputIsInValid =
    !enteredDoctorIdIsValid && enteredDoctorIdTouched;

  const doctorIdInputChangeHandler = (event) => {
    setEnteredDoctorId(event.target.value);
  };

  const doctorIdInputBlurHandler = (event) => {
    setEnteredDoctorIdTouched(true);
  };

  let formIsValid = false;
  if (enteredDoctorIdIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Doctor Deleted Successfully");
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
    <div className={classes.html}>
    <section className={classes.auth}>
      <h1>Delete Doctor</h1>

      <form onSubmit={formSubmitHandler}>
        <div>
          <div className={classes.control}>
            <label htmlFor="text">Doctor ID</label>
            <input
              type="text"
              id="id"
              placeholder="Enter Doctor ID"
              required
              onChange={doctorIdInputChangeHandler}
              onBlur={doctorIdInputBlurHandler}
              value={enteredDoctorId}
            />
            {doctorIdInputIsInValid && <h4>Doctor ID must not be empty</h4>}
          </div>
          <div className={classes.actions}>
            <button disabled={!formIsValid}>Delete</button>
          </div>
        </div>
      </form>
    </section>
    </div>
    
  );
};

export default AdminDeleteDoctorForm;