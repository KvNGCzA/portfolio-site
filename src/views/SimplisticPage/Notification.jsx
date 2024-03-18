import checkCircle from "../../images/checkCircle.svg";
import React from "react";

const Notification = ({ right }) => {
  return (
    <div className="notification" style={{ right: right }}>
      <div className="edge" />
      <div className="content">
        <p>message sent</p>
        <img src={checkCircle} alt="check mark" />
      </div>
    </div>
  );
};

export default Notification;
