import React from "react";
import PatientMainNavigation from "./PatientMainNavigation";
import Footer from "../Footer";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
const PatientContactUs = () => {
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <div className="contact-body">
        <div className="contact-background">
          <div className="container2">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT US</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : +91 9328893561
                  </div>
                  <div className="col-10" style={{ color: "white" }}>
                    <BsInstagram className="mx-2" size={20}></BsInstagram>
                    <FiTwitter className="mx-3" size={20}></FiTwitter>
                    <AiOutlineFacebook size={25}></AiOutlineFacebook>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button mx-3">CANCEL</button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
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

export default PatientContactUs;
