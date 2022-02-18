import React from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import "./HomeContactUs.css";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
const HomeContactUs = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <div className="contact-body">
        <div class="contact-background">
          <div class="container2">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT US</span>
                  </div>
                  <div class="app-contact">CONTACT INFO : +91 9328893561</div>
                  <div class="col-10" style={{ color: "white" }}>
                    <BsInstagram class="mx-2" size={20}></BsInstagram>
                    <FiTwitter class="mx-3" size={20}></FiTwitter>
                    <AiOutlineFacebook size={25}></AiOutlineFacebook>
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NAME" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE" />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button mx-3">CANCEL</button>
                      <button class="app-form-button">SEND</button>
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

export default HomeContactUs;
