/* Testing App component */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Notifications } from "../Notifications/Notifications";
import { Header } from "../Header/Header";
import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";

describe("App Component", () => {
  it("App renders without crashing", () => {
    shallow(<App />);
  });

  it("Notifications renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("Header renders without crashing", () => {
    shallow(<Header />);
  });

  it("Login renders without crashing", () => {
    shallow(<Login />);
  });

  it("Footer renders without crashing", () => {
    shallow(<Footer />);
  });

  it("Does not render CourseList by default", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("CourseList").exists()).toBe(false);
  })
});

describe("When isLoggedIn is true", () => {
  it("Does not include Login", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find('Login').exists()).toBe(false);
  });

  it("Includes CourseList", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find('CourseList').exists()).toBe(true)
  })
})
