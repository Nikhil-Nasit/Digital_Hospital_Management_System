import React, { useState, useEffect } from "react";
import PatientMainNavigation from "./Patient/PatientMainNavigation";
import classes from "./PaymentPage.module.css";
import { Card } from "react-bootstrap";
import PaymentImage from "../components/images/vectorPayment.png";
const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [patient, setPatient] = useState("");
  const patientId = window.sessionStorage.getItem("patientId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/detail/${patientId}`
        );

        const responseData = await response.json();
        console.log("Patient Details");
        const patientDetail = {
          firstName: responseData.patient.firstName,
          lastName: responseData.patient.lastName,
          email: responseData.patient.email,
          mobileNumber: responseData.patient.mobileNumber,
          // doc:responseData.patient.documents,
        };
        setPatient(patientDetail);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, [patientId]);

  const payNow = () => {
    let options = {
      key: "rzp_test_qjpt04Dd3peFII",
      amount: amount * 100,
      currency: "INR",
      name: "Hospital Payment",
      description: "Your payment will be secure!",

      handler: async () => {
        try {
          const response = await fetch("http://localhost:5000/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: 500,
            }),
          });

          const responseData = await response.json();
          console.log(responseData);
          setAmount("");
          alert("Payment Done Successfully!");
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        mobileNumber: patient.mobileNumber,
        email: patient.email,
      },
      theme: { color: "#3458eb" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  // createOrder(reduxStateCart.reduce((acc, curVal) => acc + (curVal.price * curVal.quantity), 0))
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <div className={classes.container}>
        <div className={classes.imagebox}>
          <img
            src={PaymentImage}
            className="img-fluid"
            alt="Phoneimage"
            style={{ width: "600px" }}
          />
        </div>
        <div className={classes.loginbox}>
          <Card.ImgOverlay>
            <section className={classes.auth}>
              <h3>PAYMENT</h3>

              <div>
                <div className={classes.control}>
                  <label htmlFor="text">Enter Amount</label>
                  <input
                    type="text"
                    id="lname"
                    required
                    onChange={amountChangeHandler}
                    value={amount}
                  />
                </div>
              </div>

              <div className={classes.actions}>
                <button onClick={payNow}>PAY</button>
              </div>
            </section>
          </Card.ImgOverlay>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentPage;
