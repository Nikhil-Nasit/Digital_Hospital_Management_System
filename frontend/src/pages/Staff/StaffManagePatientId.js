import { useState } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
// import AuthContext from "../../store/auth-context";
import classes from "./StaffManagePatientId.module.css";

const StaffManagePatientId = () => {
  // const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isNotExist, setIsNotExist] = useState(false);

  const [enteredPatientId, setEnteredPatientId] = useState("");
  const [enteredPatientIdTouched, setEnteredPatientIdTouched] = useState(false);

  const enteredPatientIdIsValid = enteredPatientId.trim() !== "";
  const patientIdInputIsInValid = !enteredPatientIdIsValid && enteredPatientIdTouched;

  const patientIdInputChangeHandler = (event) => {
    setEnteredPatientId(event.target.value);
    setIsNotExist(false);
  };

  const patientIdInputBlurHandler = (event) => {
    setEnteredPatientIdTouched(true);
  };

  let formIsValid = false;
  if (enteredPatientIdIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/find/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: enteredPatientId,
        }),
      });

      const responseData = await response.json();
      setIsLoading(false);

      if (responseData.status === "201") {
        // authCtx.login(responseData.token);
        history.replace("/staff/upload-patient-document");
        // console.log(responseData.message);

        // console.log(responseData.patientId);
        localStorage.setItem("patientId",responseData.patientId);
      } else {
        setIsNotExist(true);
        history.replace("/staff/manage-patient-id");
        console.log(responseData.message);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.image}>
      <section className={classes.auth}>
        <h3>Search Patient</h3>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className={classes.control}>
              <label htmlFor="text">Patient ID</label>
              <input
                type="text"
                id="id"
                placeholder="Enter patient ID"
                required
                onChange={patientIdInputChangeHandler}
                onBlur={patientIdInputBlurHandler}
                value={enteredPatientId}
              />
              {patientIdInputIsInValid && (
                <div className="p-3">
                  <h6>Patient ID must not be empty</h6>
                </div>
              )}
            </div>
            <div className={classes.actions}>
              <button disabled={!formIsValid}>Search</button>
              {isLoading && (
                <RingLoader color="white" height={80} width={80}></RingLoader>
              )}
              {isNotExist && (
                <div className="p-3">
                  <h6>Patient does not exist</h6>
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default StaffManagePatientId;
