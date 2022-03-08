import React from "react";
import PatientMainNavigation from "./PatientMainNavigation";
import './PatientAboutUs.css';
import Footer from "../Footer";

const PatientAboutUs = () => {
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <div className="background2">
      <div className="section">
        <div className="container">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <div className="article">
              <h4 style={{color:"white" , fontFamily:"times-new-roman"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia luctus ullamcorper. Mauris tincidunt ex sit amet leo eleifend, in venenatis elit efficitur. Ut at mi sit amet nunc ultrices mattis vel sed mi. Donec fermentum vulputate tellus imperdiet fringilla. Nam ac ligula tincidunt, egestas odio vel, vulputate dolor. Donec non nibh mollis, tincidunt ligula non, pulvinar ipsum. Nullam tempus dolor tellus, id consectetur nunc vulputate in. Donec venenatis, magna at eleifend eleifend, turpis libero malesuada dui, sed semper diam justo vitae ante. Phasellus euismod justo tortor, a tempus nunc faucibus imperdiet.
              </h4>
            </div>
          </div>
          <div className="image-section">
            <img src="https://st2.depositphotos.com/3591429/5997/i/600/depositphotos_59977559-stock-photo-hands-holding-word-about-us.jpg"></img>
          </div>
        </div>
      </div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s">
              <h3 style={{color:"white" , fontFamily:"times-new-roman",borderBottom:"5px solid #c4d156", display:"inline-block"}}>Our Creative <span> Team</span></h3>
              <p style={{color:"white"}}>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-2 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s">
              <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              <div className="single_advisor_details_info">
                <h6>Samantha Sarah</h6>
                <p className="designation">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s">
              <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              <div className="single_advisor_details_info">
                <h6>Nazrul Islam</h6>
                <p className="designation">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s">
              <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              <div className="single_advisor_details_info">
                <h6>Riyadh Khan</h6>
                <p className="designation">Developer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-lg-3">
            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s">
              <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
              </div>
              <div className="single_advisor_details_info">
                <h6>Niloy Islam</h6>
                <p className="designation">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default PatientAboutUs;