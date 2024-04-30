import React from "react";
import { shallow } from "enzyme";
import { CourseList } from "./CourseList";

describe("CourseList component", () => {
  it("Renders CourseList without crashing", () => {
    shallow(<CourseList />);
  });


  describe("CourseList component list rendering", () => {
    const listCourses = [
      {id:1, name:'ES6', credit:60},
      {id:2, name:'Webpack', credit:20},
      {id:3, name:'React', credit:40}
    ]
      // beforeEach(() => {

      // })

      it("Renders list rows correctly is not available", () => {
    const wrapper = shallow(<CourseList />);

    const rows = wrapper.find("table").find('CourseListRow');

    expect(rows.length).toEqual(3);
  })

  it("Renders list rows correctly when listCourses is available", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    const rows = wrapper.find("table").find('CourseListRow');

    expect(rows.length).toBeGreaterThanOrEqual(3);
  })
  })
})