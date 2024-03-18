import React from "react";

const Tool = ({ title, icon, tools }) => (
  <div className="tool">
    <img className="tool--img" src={icon} alt={"frontend"} />
    <p className="tool--title">{title}</p>
    <p className="tool--description">{tools}</p>
  </div>
);

export default Tool;
