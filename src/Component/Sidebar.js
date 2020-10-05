import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import LocalShippingSharpIcon from "@material-ui/icons/LocalShippingSharp";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import DonutSmallSharpIcon from "@material-ui/icons/DonutSmallSharp";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow selected Icon={LocalShippingSharpIcon} title="My Moves" />
      </Link>
      <Link to="/myprofile">
        <SidebarRow Icon={PersonSharpIcon} title="My Profile" />
      </Link>
      <Link to="/getquote">
        <SidebarRow Icon={AssignmentSharpIcon} title="Get Quote" />
      </Link>
      <Link to="/logout">
        <SidebarRow Icon={DonutSmallSharpIcon} title="Log Out" />
      </Link>
    </div>
  );
}

export default Sidebar;
