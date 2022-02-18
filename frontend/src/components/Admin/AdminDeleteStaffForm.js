import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import AuthContext from "../../store/auth-context";
import classes from "./AdminDeleteStaffForm.module.css";

const AdminDeleteStaffForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [isNotExist, setIsNotExist] = useState(false);

  const [enteredStaffId, setEnteredStaffId] = useState("");
  const [enteredStaffIdTouched, setEnteredStaffIdTouched] = useState(false);

  const enteredStaffIdIsValid = enteredStaffId.trim() !== "";
  const staffIdInputIsInValid = !enteredStaffIdIsValid && enteredStaffIdTouched;

  const staffIdInputChangeHandler = (event) => {
    setEnteredStaffId(event.target.value);
    setIsNotExist(false);
  };

  const staffIdInputBlurHandler = (event) => {
    setEnteredStaffIdTouched(true);
  };

  let formIsValid = false;
  if (enteredStaffIdIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/staff/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: enteredStaffId,
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
        history.replace("/admin/delete-staff");
        console.log(responseData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.image}>
      <section className={classes.auth}>
        <h3>Delete Staff</h3>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className={classes.control}>
              <label htmlFor="text">Staff ID</label>
              <input
                type="text"
                id="id"
                placeholder="Enter Staff ID"
                required
                onChange={staffIdInputChangeHandler}
                onBlur={staffIdInputBlurHandler}
                value={enteredStaffId}
              />
              {staffIdInputIsInValid && (
                <div className="p-3">
                  <h6>Staff ID must not be empty</h6>
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
                  <h6>Staff does not exist</h6>
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminDeleteStaffForm;
