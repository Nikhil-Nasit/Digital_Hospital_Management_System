// import Slider from '../UI/Slider';
import React from "react";
import classes from "./AdminStarting.module.css";

const AdminStarting = () => {
  return (
    <React.Fragment>
      <div className={classes.image}>
      <section className={classes.starting}>
        <h1>Welcome</h1>
        {/* <Slider></Slider> */}
      </section>
      </div>
    </React.Fragment>
  );
};

export default AdminStarting;
