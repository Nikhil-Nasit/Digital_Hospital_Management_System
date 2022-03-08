import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./AdminStarting.module.css";
import IMG1 from "../images/Admin1.jpg";
import IMG2 from "../images/Admin2.jpg";
import IMG3 from "../images/Admin3.jpg";
const AdminStarting = () => {
  return (
    <React.Fragment>
      <div>
        <section className={classes.starting}>
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={IMG1}
                alt="First slide"
                height={669}
                width={100}
              />
              <Carousel.Caption>
              <h3 style={{color:"white"}}>NOT JUST AN ADMIN!</h3>
                <p style={{color:"white"}}>DISCOVER THE RESPECT , VALUE AND POWER OF THE ADMINISTRATIVE PROFESSION</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={IMG3}
                alt="Second slide"
                height={669}
                width={100}
              />
              <Carousel.Caption>
              <h3 style={{color:"black"}}>ADMIN ARE...</h3>
                <p style={{color:"black"}}>PART SUPER , PART CRAZY , 100% THE GLUE OF THE SYSTEM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={IMG2}
                alt="Third slide"
                height={669}
                width={100}
              />
              <Carousel.Caption>
              <h3 style={{color:"#faf605"}}>-Paul Steinbrueck</h3>
                <p style={{color:"#faf605"}}>
                  THE MORE ENGAGED YOU ARE AS A WEBSITE ADMINISTRATOR , THE MORE ENGAGING YOUR WEBSITE WILL BE.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AdminStarting;
