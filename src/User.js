import React from "react";
import "./User.css";

function User({ to, subject, message, id }) {
  return (
    <div className="user">
      <p className="to">
        {" "}
        <span>To:</span> {to}
      </p>
      <p className="subject">Subject: {subject}</p>
      <p className="message">Message: {message}</p>
    </div>
  );
}

export default User;
