import React from "react";
import { Notifications } from "../Notifications/Notifications";
import { Login } from "../Login/Login";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { CourseList } from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import "./App.css";

const typeCheck = {
  isLoggedIn: PropTypes.bool
}

const listCourses = [
  {id:1, name:'ES6', credit:60},
  {id:2, name:'Webpack', credit:20},
  {id:3, name:'React', credit:40}
]

const listNotifications = [
  {id:1, type: 'default', value: "New course available" },
  {id:2, type: 'urgent', value: "New resume available" },
  {id:3, type: 'default', html: { __html: getLatestNotification() }}
]

function App({ isLoggedIn = true }) {

  let bodyContent;

  if (isLoggedIn){
    bodyContent =  <div className="app-body" ><CourseList listCourses={listCourses} /></div>;
  } else {
    bodyContent = <div className="app-body" ><Login /></div>;
  }

  return (
    <>
      <Notifications listNotifications={listNotifications} />
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
