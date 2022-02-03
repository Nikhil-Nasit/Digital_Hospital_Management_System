import React from 'react';
import UserProfile from '../components/profile/user-profile';
import MainNavigation from "./MainNavigation";
const ProfilePage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <UserProfile />
    </React.Fragment>
  );
};

export default ProfilePage;
