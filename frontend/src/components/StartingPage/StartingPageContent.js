// import Slider from '../UI/Slider';
// import classes from "./StartingPageContent.module.css";
import { Carousel } from "react-bootstrap";
import React from "react";
import Footer from "../../pages/Footer";
const StartingPageContent = () => {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/close-up-of-doctor-is-touching-digital-virtual-screen-for-analytics-picture-id1273886962?b=1&k=20&m=1273886962&s=170667a&w=0&h=f9FyAVFdXEwAv7qdEFWbdfLoqa7z87rwyKsd9iqrjBw="
            alt="First slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/over-the-shoulder-shot-of-senior-medical-scientist-working-with-ct-picture-id1050311748?b=1&k=20&m=1050311748&s=170667a&w=0&h=LBGjHzonYmWN1Qdb8Hd-YrC87gWHTPpjlfpyStl6Ajs="
            alt="Second slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            Specialization
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/an-employee-pulls-a-trolley-for-cleaning-offices-woman-cleaner-is-in-picture-id1316473356?b=1&k=20&m=1316473356&s=170667a&w=0&h=7nYl9IEj2K_MsU4Z0BMVRmhGygh9Nx6vkpVDIvGGHMA="
            alt="Third slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default StartingPageContent;