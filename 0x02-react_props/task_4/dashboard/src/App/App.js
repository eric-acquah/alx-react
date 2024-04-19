import React from "react";
import { Notifications } from "../Notifications/Notifications";
import { Login } from "../Login/Login";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { CourseList } from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";

const typeCheck = {
  isLoggedIn: PropTypes.bool
}

function App({ isLoggedIn = false }) {

  let bodyContent;

  if (isLoggedIn){
    bodyContent =  <div className="app-body" ><CourseList /></div>;
  } else {
    bodyContent = <div className="app-body" ><Login /></div>;
  }

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {bodyContent}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = typeCheck;

export default App;
