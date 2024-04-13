import React from "react";
import { getLatestNotification } from '../utils/utils';
import { NotificationItem } from "./NotificationItem";
import close_icon from '../close-icon.png';
import './Notifications.css';

export function Notifications() {
  return (
    <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {/* <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li> */}
          <NotificationItem type="default" value="New course available"/>
          <NotificationItem type="urgent" value="New resume available"/>
          <NotificationItem html={getLatestNotification()} />
        </ul>
        <button style={{ float: "right", ariaLabel: "Close" }} onClick={()=> console.log("Close button has been clicked")}>
          <img src={close_icon} alt=""></img>
        </button>
    </div>
  )
}