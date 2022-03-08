import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr";
import PatientMainNavigation from "./PatientMainNavigation";
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
        setDocuments(patientDoc.doc);
      } catch (err) {
        console.log("error");
      }
    };
    sendRequest();
  }, []);

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

  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {documents.map((doc, index) => {
            return (
              <div className="col-10 col-md-3 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {doc.patientDoc.split("-")[1]}
                      </h4>{" "}
                      <br></br>
                      <span className="textLeft">
                        <GrDocumentPdf size={40}></GrDocumentPdf>
                      </span>
                      <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats"></div>
                    </div>
                  </div>
                </div>
                <NavLink
                  to="/patient/document"
                  onClick={(e) => displayPatientDoc(e, index)}
                  key={doc.patientDoc}
                >
                  <button
                    type="button"
                    href={doc.patientDoc}
                    className="btn btn-info btn-lg mx-2"
                  >
                    Open Document
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default PatientDocuments;
