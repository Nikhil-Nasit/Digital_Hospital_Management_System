import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AdminDeleteDoctorForm.module.css";

const AdminDeleteDoctorForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isNotExist , setIsNotExist] = useState(false);

  const [enteredDoctorId, setEnteredDoctorId] = useState("");
  const [enteredDoctorIdTouched, setEnteredDoctorIdTouched] = useState(false);

  const enteredDoctorIdIsValid = enteredDoctorId.trim() !== "";
  const doctorIdInputIsInValid =
    !enteredDoctorIdIsValid && enteredDoctorIdTouched;

  const doctorIdInputChangeHandler = (event) => {
    setEnteredDoctorId(event.target.value);
    setIsNotExist(false);
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
    // console.log("Doctor Deleted Successfully");

      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/doctor/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id : enteredDoctorId
          }),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (responseData.status === "200") {
          // authCtx.login(responseData.token);
          history.replace("/");
          console.log(responseData.message);
        } else {
          setIsNotExist(true);
          history.replace("/admin/delete-doctor");
          console.log(responseData.message);
        }
      }catch (err) {
        console.log({err});
      }
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
            {isLoading && (
                <RingLoader color="white" height={80} width={80}></RingLoader>
              )}
              {isNotExist && <h4>Doctor does not exist</h4>}
          </div>
        </div>
      </form>
    </section>
    </div>
    
  );
};

export default AdminDeleteDoctorForm;