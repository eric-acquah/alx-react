import React from "react";
import { NotificationItem } from "./NotificationItem";
import { NotificationItemShape } from "./NotificationItemShape";
import close_icon from "../close-icon.png";
import "./Notifications.css";
import PropTypes from "prop-types";

const typeCheck = {
  displayDrawer: PropTypes.bool,
};

export function Notifications({ displayDrawer = true, listNotifications = [] }) {
  let displayToggle;
  
  if (displayDrawer) {
      displayToggle = <div className="Notifications">
      {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
      <ul>
        {listNotifications.length === 0 && <NotificationItem type="default" value="No new notification for now" />}

        {listNotifications.length > 0 && listNotifications.map(value => {
          return <NotificationItem key={value.id} type={value.type} value={value.value} html={value.html} />
        })}
      </ul>
      <button
        style={{ float: "right", ariaLabel: "Close" }}
        onClick={() => console.log("Close button has been clicked")}
      >
        <img src={close_icon} alt=""></img>
      </button>
    </div>
  }

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayToggle}
    </>
  );
}

// Notifications.propTypes = typeCheck;
Notifications.propTypes = {
  ...typeCheck,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape))
}
