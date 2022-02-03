import React from "react";
import StartingPageContent from "../components/StartingPage/StartingPageContent";
import MainNavigation from "./MainNavigation";
const HomePage = () => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <StartingPageContent />
    </React.Fragment>
  );
};

export default HomePage;
