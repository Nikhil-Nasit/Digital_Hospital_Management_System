import { React, useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import StaffMainNavigation from "./StaffMainNavigation";
import "./UploadDocument.css";
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "react-bootstrap";
import StaffManagePatientId from "./StaffManagePatientId";
const UploadDocument = () => {
  //   const [file, setFile] = useState();
  //   const [previewUrl, setPreviewUrl] = useState();

  //   const filePickerRef = useRef();

  //   useEffect(() => {
  //     if (!file) {
  //       return;
  //     }
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       setPreviewUrl(fileReader.result);
  //     };
  //     fileReader.readAsDataURL(file);
  //   }, [file]);

  //   const pickedHandler = (event) => {
  //       console.log(event.target.files);
  //     let pickedFile;
  //     if (event.target.files && event.target.files.length === 1) {
  //       pickedFile = event.target.files[0];
  //       setFile(pickedFile);
  //     } else {
  //     }
  //   };

  //   const pickImageHandler = () => {
  //     filePickerRef.current.click();
  //   };

  //   return (
  //     <div>
  //       <StaffMainNavigation></StaffMainNavigation>
  //       <div className="form-control">
  //         <input
  //           ref={filePickerRef}
  //           style={{ display: "none" }}
  //           type="file"
  //           accept=".jpg,.png,.jpeg,.pdf"
  //           onChange={pickedHandler}
  //         />

  //         <div className="image-upload__preview">
  //           {previewUrl && <img src={previewUrl} alt="Preview" />}
  //           {!previewUrl && <p>Please pick an image.</p>}
  //         </div>
  //         <Button type="button" onClick={pickImageHandler}>
  //           PICK DOCUMENT
  //         </Button>
  //       </div>
  //     </div>

  return (
    <div>
      <StaffMainNavigation></StaffMainNavigation>
      <StaffManagePatientId></StaffManagePatientId>
    </div>
  );
};

export default UploadDocument;
