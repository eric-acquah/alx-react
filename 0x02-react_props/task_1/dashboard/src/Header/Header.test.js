import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Header Component", () => {
  it('Renders the header component without crashing', () => {
    shallow(<Header />);
  });

  it('Renders img', () => {
    const wrapper = shallow(<Header />);
    
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('Renders h1', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').exists()).toBe(true);
  })
})