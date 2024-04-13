import React from "react";
import { shallow } from "enzyme";
import { Notifications } from './Notifications'
import { NotificationItem } from "./NotificationItem";

describe("Notifications component", () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications />)
  });

  it('Notifications renders NotificationItem component without crashing', () => {
      shallow(<NotificationItem />);
  });

  it('Verify first NotificationItem component renders correct html', () => {
      const wrapper = shallow(<NotificationItem value="New course available" />);

      expect(wrapper.find('li').text()).toContain("New course available");
  });

  it('Notifications renders the text `Here is the list of notifications`', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  })
})