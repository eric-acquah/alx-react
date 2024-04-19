import React from "react";
import { shallow } from "enzyme";
import { CourseList } from "./CourseList";

describe("CourseList component", () => {
  it("Renders CourseList without crashing", () => {
    shallow(<CourseList />);
  });

  it("Renders all five table rows", () => {
    const wrapper = shallow(<CourseList />);

    const rows = wrapper.find("table").find('CourseListRow');

    expect(rows.length).toEqual(5);
  })
})