import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebar_row ${selected && "selected"}`}>
      <Icon className="sidebar_row_icon" />
      <h3 className="sidebar_row_title">{title}</h3>
    </div>
  );
}

export default SidebarRow;
