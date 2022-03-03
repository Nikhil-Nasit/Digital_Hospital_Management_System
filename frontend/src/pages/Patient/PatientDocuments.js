import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const PatientDocuments = (props) => {
  const [documents, setDocuments] = useState([]);

  const patientId = window.sessionStorage.getItem("patientId");

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/detail/${patientId}`
        );

        const responseData = await response.json();
        const patientDoc = {
          doc: responseData.patient.documents,
        };
        // console.log(responseData.patient);
        // const doc = responseData.patient.documents[0].patientDoc;
        // console.log(patientDoc.doc);
        setDocuments(patientDoc.doc);

        // console.log();
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  },);

  const displayPatientDoc = (e, index) => {
    console.log(index);
    fetch(`http://localhost:5000/documents/${patientId}/${index}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((res) => res.blob())
      .then((response) => {
        //Create a Blob from the PDF Stream
        console.log("Helloo");
        console.log(response);
        const file = new Blob([response], {
          type: "application/pdf",
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   console.log(patientId);
  //   const url = `documents/${patientId}`;
  //   console.log(url);
  return (
    <React.Fragment>
      {documents.map((doc, index) => (
        <NavLink
          to="/patient/document"
          onClick={(e) => displayPatientDoc(e, index)}
          key={doc.patientDoc}
        >
          <h1>{doc.patientDoc}</h1>
        </NavLink>
      ))}
      {/* <h1>{props.id}</h1> */}
      <h1>Welcome</h1>
    </React.Fragment>
  );
};
export default PatientDocuments;
