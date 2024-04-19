import React from "react";
import { getLatestNotification } from "../utils/utils";
import { NotificationItem } from "./NotificationItem";
import close_icon from "../close-icon.png";
import "./Notifications.css";
import PropTypes from "prop-types";

const typeCheck = {
  displayDrawer: PropTypes.bool,
};

export function Notifications({ displayDrawer = false }) {
  let displayToggle;
  
  if (displayDrawer) {
      displayToggle = <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="default"
          html={{ __html: getLatestNotification() }}
        />
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

Notifications.propTypes = typeCheck;
