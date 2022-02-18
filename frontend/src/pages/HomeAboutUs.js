import React from "react";
//import PatientMainNavigation from "./PatientMainNavigation";
import "./HomeAboutUs.css";
import MainNavigation from "./MainNavigation";
import { Placeholder, Card, Button } from "react-bootstrap";
import Footer from "./Footer";
const HomeAboutUs = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <div className="section">
        <div className="container">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <div className="article">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                lacinia luctus ullamcorper. Mauris tincidunt ex sit amet leo
                eleifend, in venenatis elit efficitur. Ut at mi sit amet nunc
                ultrices mattis vel sed mi. Donec fermentum vulputate tellus
                imperdiet fringilla. Nam ac ligula tincidunt, egestas odio vel,
                vulputate dolor. Donec non nibh mollis, tincidunt ligula non,
                pulvinar ipsum. Nullam tempus dolor tellus, id consectetur nunc
                vulputate in. Donec venenatis, magna at eleifend eleifend,
                turpis libero malesuada dui, sed semper diam justo vitae ante.
                Phasellus euismod justo tortor, a tempus nunc faucibus
                imperdiet.
              </h4>
            </div>
          </div>
          <div className="image-section">
            <img src="https://st2.depositphotos.com/3591429/5997/i/600/depositphotos_59977559-stock-photo-hands-holding-word-about-us.jpg"></img>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-evenly">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
          />
          <Card.Body>
            <Card.Title>Robert Wire</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFIj1U11yXvvZ8PIIA97ptuOi2YIQ9KOGnfvWOTPa293UZDRQyZkOZeTnMMV1B54MMkw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Alisia Markina</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzv5AS_0mQGkY1nyw-PP_velSo36z0Fm1U83oBUN7Wv_Mk2VRbs9V0fiXE2ZgjpS4WF1o&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Andrew Magwire</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default HomeAboutUs;
