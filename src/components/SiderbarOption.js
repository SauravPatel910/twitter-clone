import React from "react";
import "./SiderbarOption.css";

function SiderbarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active ? "sidebarOption--active" : ""}`}>
      <span className="icon">
        <Icon />
      </span>
      <h2>{text}</h2>
    </div>
  );
}

export default SiderbarOption;
