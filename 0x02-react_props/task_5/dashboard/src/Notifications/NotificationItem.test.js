import React from "react";
import { shallow } from "enzyme";
import { NotificationItem } from "./NotificationItem";

describe("NotificationItem component", () => {
  it('Renders NotificationItem without crashing', () => {
    shallow(<NotificationItem type="default" />);
  });

  it('Renders with dummy `type` and `value` props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>);
    
    const item = wrapper.find('li');
    expect(wrapper.prop('data-notification-type')).toBe('default');
    expect(item.text()).toEqual('test');
  });

  it('Renders the correct html when passed a dummy `html` prop', () => {
    const html = '<u>test</u>';
    const wrapper = shallow(<NotificationItem type="default" value={"Something"} html={{__html: html}} />);

    expect(wrapper.find('div').html()).toBe(`<div>${html}</div>`);
  })
})