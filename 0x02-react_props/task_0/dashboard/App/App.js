import React from "react";
import { Notifications } from "../Notifications/Notifications";
import { Login } from "../Login/Login";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
// import holberton_logo from "../src/assets/holberton_logo.jpg";
// import {getFullYear, getFooterCopy} from '../utils/utils'
import "./App.css";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
