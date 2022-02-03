import { Switch, Route } from "react-router-dom";
import React from "react";
import UserProfile from "./components/Profile/UserProfile";
import AdminPage from "./pages/AdminPage";
import PatientPage from "./pages/PatientPage";
import DoctorPage from "./pages/DoctorPage";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/Admin/AdminHomePage";
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

        <Route path="/admin/login" exact>
          <AdminPage />
        </Route>

        <Route path="/patient/login" exact>
          <PatientPage />
        </Route>

        <Route path="/doctor/login" exact>
          <DoctorPage />
        </Route>

        <Route path="/profile" exact>
          <UserProfile />
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
