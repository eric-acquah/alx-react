import React from "react";
import { shallow } from "enzyme";
import { CourseListRow } from "./CourseListRow";

describe("CourseListRow component", () => {
  it("Renders if isHeader is true and textSecondCell does not exist", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="required" isHeader="true" />);
    const row = wrapper.find("tr");
    const cells = row.find("th");

    expect(cells.prop("colSpan")).toBe(2);
  });

  it("Renders if isHeader is true and textSecondCell exist", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="required" isHeader="true" textSecondCell="Hey there" />
    );
    const row = wrapper.find("tr");
    const cellCount = row.find("th");
    expect(cellCount.length).toEqual(2);
  });

  it("Renders when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow textSecondCell="Hey there" textFirstCell="Hello, world!" />
    );

    const row = wrapper.find("tr");
    const cells = row.children("td");
    expect(cells.length).toEqual(2);
  });
});
