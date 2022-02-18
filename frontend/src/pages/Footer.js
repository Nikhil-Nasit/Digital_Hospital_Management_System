import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <section className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Company Info</h5>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <hr />
                        <Link to="/" className="mx-2"> Home</Link>
                        <Link to="/about"className=" mx-2"> About Us </Link>
                        <Link to="/contact"className=" mx-2"> Contact US</Link>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <hr />
                        <div><p>xxalksdjfald, dfsdfsdfm bengaluru, India</p></div>
                        <div><p>8147755444</p></div>
                        <div><p>6362565488</p></div>
                        <div><p>demo@demo.com</p></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Footer;