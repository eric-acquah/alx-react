import React from "react";
import PropTypes from "prop-types";

const typeCheck = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}

export function NotificationItem({ type = "default", html, value }) {
  return (
    <li data-notification-type={type} >
      {value && value}
      {html && (<div dangerouslySetInnerHTML={html}/>)}
      </li>
  )
}

NotificationItem.propTypes = typeCheck;