import React from "react";
import {shallow} from "enzyme";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it('Renders Footer without crashing', () => {
    shallow(<Footer />);
  })

  it('Renders the text `Copyright`', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('p').text()).toContain("Copyright")
  });
})