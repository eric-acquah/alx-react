import React from "react";
import { shallow } from "enzyme";
import { Notifications } from './Notifications'
import { NotificationItem } from "./NotificationItem";

const listNotifications = [
  {id:1, type: 'default', value: "New course available" },
  {id:2, type: 'urgent', value: "New resume available" },
  {id:3, type: 'urgent', value: "New resume available",  __html: '<strong>New data available</strong>'}
  
]

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
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ listNotifications } />);

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


it("Notifications renders properly if you pass an empty array", () => {
  shallow(<Notifications listNotifications={[]} />);
});



it("Renders properly when you pass a list of notifications", () => {
  const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

  const msg = wrapper.find("div").find("p");
  const ulist = wrapper.find("div").find("ul").find("NotificationItem");
  // const list = ulist.find("NotificationItem");

  expect(msg.text()).toEqual("Here is the list of notifications");
  expect(ulist.length).toBeGreaterThanOrEqual(1)
});

it("Renders the proper notification status when listNotifications is provided", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

  const divElement = wrapper.find('div');

  expect(divElement.find('p').text()).toEqual("Here is the list of notifications");
});

it("Renders the proper notification status when listNotifications is not provided", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);

  const ulist = wrapper.find('div');
  const list = ulist.find('ul');
  const item = list.find("NotificationItem");

  expect(item.prop("value")).toEqual("No new notification for now");
});
})