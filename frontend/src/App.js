import { Switch, Route } from "react-router-dom";
import React from "react";
import AdminPage from "./pages/AdminPage";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import AdminManageDoctorPage from "./pages/Admin/AdminManageDoctorPage";
import AdminDeleteDoctorPage from "./pages/Admin/AdminDeleteDoctorPage";
import AdminManageStaffPage from "./pages/Admin/AdminManageStaffPage";
import AdminDeleteStaffPage from "./pages/Admin/AdminDeleteStaffPage";
import DoctorHome from "./pages/Doctor/DoctorHomePage";
import DoctorContactUs from "./pages/Doctor/DoctorContactUs";
import DoctorAboutUs from "./pages/Doctor/DoctorAboutUs";
import DoctorDetails from "./pages/Doctor/DoctorDetails";
import PatientHome from "./pages/Patient/PatientHomePage";
import PatientContactUs from "./pages/Patient/PatientContactUs";
import PatientAboutUs from "./pages/Patient/PatientAboutUs";
import PatientDetails from "./pages/Patient/PatientDetails";
import HomeAboutUs from "./pages/HomeAboutUs";
import HomeContactUs from "./pages/HomeContactUs";
import StaffPage from "./pages/StaffPage";
import StaffHome from "./pages/Staff/StaffHomePage";
import UploadDocument from "./pages/Staff/UploadDocument";
import UploadPDFDocument from "./pages/Staff/UploadPDFDocument";
import PatientDocuments from "./pages/Patient/PatientDocuments";
import SearchDoctor from "./pages/Patient/SearchDoctor";
import Map from "./pages/Patient/Map";
import UpdateProfile from "./pages/Patient/UpdateProfile";
import UpdateDoctorProfile from "./pages/Doctor/UpdateDoctorProfile";
import UpdateStaffProfile from "./pages/Staff/UpdateStaffProfile";
import StaffDetail from "./pages/Staff/StaffDetail";
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/admin/login" exact>
          <AdminPage />
        </Route>

        <Route path="/payment" exact>
          <PaymentPage />
        </Route>

        <Route path="/patient/login" exact>
          <PatientPage />
        </Route>

        <Route path="/doctor/login" exact>
          <DoctorPage />
        </Route>

        <Route path="/staff/login" exact>
          <StaffPage />
        </Route>

        <Route path="/staff/home" exact>
          <StaffHome />
        </Route>

        <Route path="/staff/manage-patient-id" exact>
          <UploadDocument />
        </Route>

        <Route path="/staff/upload-patient-document" exact>
          <UploadPDFDocument />
        </Route>

        <Route path="/staff/update-profile" exact>
          <UpdateStaffProfile />
        </Route>

        <Route path="/staff/detail" exact>
          <StaffDetail />
        </Route>

        <Route path="/doctor/home" exact>
          <DoctorHome />
        </Route>

        <Route path="/doctor/detail" exact>
          <DoctorDetails />
        </Route>

        <Route path="/doctor/contact" exact>
          <DoctorContactUs />
        </Route>

        <Route path="/doctor/about" exact>
          <DoctorAboutUs />
        </Route>

        <Route path="/doctor/update-profile" exact>
          <UpdateDoctorProfile />
        </Route>

        <Route path="/patient/home" exact>
          <PatientHome />
        </Route>

        <Route path="/patient/detail" exact>
          <PatientDetails />
        </Route>

        <Route path="/patient/search-doctor" exact>
          <SearchDoctor />
        </Route>

        <Route path="/patient/contact" exact>
          <PatientContactUs />
        </Route>

        <Route path="/patient/about" exact>
          <PatientAboutUs />
        </Route>

        <Route path="/patient/document" exact>
          <PatientDocuments />
        </Route>

        <Route path="/patient/update-profile" exact>
          <UpdateProfile />
        </Route>

        <Route path="/map" exact>
          <Map />
        </Route>

        <Route path="/about" exact>
          <HomeAboutUs />
        </Route>

        <Route path="/contact" exact>
          <HomeContactUs />
        </Route>

        <Route path="/admin/home" exact>
          <AdminHomePage />
        </Route>

        <Route path="/admin/add-doctor" exact>
          <AdminManageDoctorPage />
        </Route>

        <Route path="/admin/delete-doctor" exact>
          <AdminDeleteDoctorPage />
        </Route>

        <Route path="/admin/add-staff" exact>
          <AdminManageStaffPage />
        </Route>

        <Route path="/admin/delete-staff" exact>
          <AdminDeleteStaffPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
