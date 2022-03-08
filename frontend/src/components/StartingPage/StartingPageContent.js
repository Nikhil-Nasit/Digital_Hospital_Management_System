import { Carousel } from "react-bootstrap";
import React from "react";
import Footer from "../../pages/Footer";
import IMG1 from "../images/StartingHomePage1.jpg";
import IMG2 from "../images/StartingHomePage2.jpg";
import IMG3 from "../images/StartingHomePage3.jpg";

const StartingPageContent = () => {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG1}
            alt="First slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <p style={{color:"black"}}>
              Starting a digital health company comes with an obligation to
              positively impact the healthcare industry.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG2}
            alt="Second slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <p>
              We're seeing an interesting convergence of
              technollogy,medicine,social issues,and human progress.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={IMG3}
            alt="Third slide"
            height={550}
            width={100}
          />
          <Carousel.Caption>
            <p>
              Only digital health can bring healthcare into 21st century and
              make patients the point of care.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default StartingPageContent;
