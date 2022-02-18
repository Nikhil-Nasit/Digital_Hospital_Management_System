import { React, useState, useEffect, useRef } from "react";
import StaffMainNavigation from "./StaffMainNavigation";
import classes from "./UploadPDFDocument.module.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UploadPDFDocument = () => {
  const history = useHistory();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const patientId = localStorage.getItem("patientId");
  console.log(patientId);
  const [pdfFile, setPdfFile] = useState(null);

  const [pdfError, setPdfError] = useState("");

  const uploadHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", pdfFile);
    // console.log(pdfFile);

    try {
      const response = await fetch(
        `http://localhost:5000/upload/document/${patientId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("Hi");
      const responseData = await response.json();
      if (responseData.status === "201") {
        history.replace("/admin/home");
      }
    } catch (err) {
      console.log("err");
    }
  };
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
        setPdfFile("");
      }
    } else {
      console.log("Please select a PDF");
    }
  };

  return (
    <div>
      <Navbar bg="dark" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/staff/home">
            Welcome Staff
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              activeClassName={classes.active}
              to="/staff/upload-patient-document"
            >
              UPLOAD PATIENT DOCUMENT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container">
        <form className={classes.auth}>
          <label>
            <h5>Upload PDF</h5>
          </label>
          <br></br>

          <input
            type="file"
            className="form-control"
            onChange={handleFile}
          ></input>

          {pdfError && <span className="text-danger">{pdfError}</span>}
        </form>
        <div className={classes.center}>
          {!pdfFile && (
            <Button disabled variant="info">
              UPLOAD
            </Button>
          )}
          {pdfFile && (
            <Button onClick={uploadHandler} variant="info">
              UPLOAD
            </Button>
          )}
        </div>
        <h5>View PDF</h5>
        <div className="viewer">
          {pdfFile && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}
              ></Viewer>
            </Worker>
          )}

          {!pdfFile && <h5>No file is selected yet</h5>}
        </div>
      </div>
    </div>
  );
};

export default UploadPDFDocument;
