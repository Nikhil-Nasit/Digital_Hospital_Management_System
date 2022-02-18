import React from "react";
import DoctorMainNavigation from "./DoctorMainNavigation";
import './DoctorAboutUs.css';

const DoctorAboutUs = () => {
  return (
    <React.Fragment>
      <DoctorMainNavigation></DoctorMainNavigation>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIbYwSngaAxYYAkE4JLe5rskDdmZol3wOvg&usqp=CAU"
              alt="Jane"
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO and Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIbYwSngaAxYYAkE4JLe5rskDdmZol3wOvg&usqp=CAU"
              alt="Mike"
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIbYwSngaAxYYAkE4JLe5rskDdmZol3wOvg&usqp=CAU"
              alt="John"
              className="centre"
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DoctorAboutUs;
