import { Switch, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AdminPage from "./pages/AdminPage";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/Admin/AdminHomePage";
import Dummy from "./components/Layout/Dummy";
import AdminManageDoctorPage from "./pages/Admin/AdminManageDoctorPage";
import AdminDeleteDoctorPage from "./pages/Admin/AdminDeleteDoctorPage";
import AdminManageStaffPage from "./pages/Admin/AdminManageStaffPage";
import AdminDeleteStaffPage from "./pages/Admin/AdminDeleteStaffPage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/admin/login">
            <AdminPage />
          </Route>

          <Route path="/admin/home">
            <AdminHomePage />
          </Route>
          <Route path="/admin/add-doctor">
            <AdminManageDoctorPage />
          </Route>
          <Route path="/admin/delete-doctor">
            <AdminDeleteDoctorPage />
          </Route>
          <Route path="/admin/add-staff">
            <AdminManageStaffPage />
          </Route>
          <Route path="/admin/delete-staff">
            <AdminDeleteStaffPage />
          </Route>

          <Route path="/patient/login">
            <PatientPage />
          </Route>
          <Route path="/doctor/login">
            <DoctorPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        
      </Switch>
    </React.Fragment>
  );
}

export default App;
