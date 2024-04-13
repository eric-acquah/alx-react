import React from "react";

export function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} >
      {value && value}
      {html && (<div dangerouslySetInnerHTML={{__html: html}}/>)}
      </li>
  )
}