import React from "react";
import { shallow } from "enzyme";
import { Notifications } from './Notifications'
import { NotificationItem } from "./NotificationItem";

describe("Notifications component", () => {
  it('Notifications renders without crashing', () => {
    shallow(<Notifications displayDrawer={true} />)
  });

  it('Notifications renders NotificationItem component without crashing', () => {
      shallow(<NotificationItem type="default" />);
  });

  it('Verify first NotificationItem component renders correct html', () => {
      const wrapper = shallow(<NotificationItem type="default" value="New course available" />);

      expect(wrapper.find('li').text()).toContain("New course available");
  });

  it('Notifications renders the text `Here is the list of notifications`', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  })

  it("Renders .menuItem when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it("div.Notifications is not rendered if displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("Notifications").exists()).toBe(false);
  });

  it("Renders .menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it("div.Notifications is rendered if displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });


})