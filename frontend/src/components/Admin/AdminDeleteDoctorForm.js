import { useState } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
// import AuthContext from "../../store/auth-context";
import classes from "./AdminDeleteDoctorForm.module.css";

const AdminDeleteDoctorForm = () => {
  // const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isNotExist, setIsNotExist] = useState(false);

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
          id: enteredDoctorId,
        }),
      });

      const responseData = await response.json();
      setIsLoading(false);

      if (responseData.status === "200") {
        // authCtx.login(responseData.token);
        history.replace("/admin/home");
        console.log(responseData.message);
      } else {
        setIsNotExist(true);
        history.replace("/admin/delete-doctor");
        console.log(responseData.message);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div className={classes.image}>
      <section className={classes.auth}>
        <h3>Delete Doctor</h3>
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
              {doctorIdInputIsInValid && (
                <div className="p-3">
                  <h6>Doctor ID must not be empty</h6>
                </div>
              )}
            </div>
            <div className={classes.actions}>
              <button disabled={!formIsValid}>Delete</button>
              {isLoading && (
                <RingLoader color="white" height={80} width={80}></RingLoader>
              )}
              {isNotExist && (
                <div className="p-3">
                  <h6>Doctor does not exist</h6>
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminDeleteDoctorForm;
