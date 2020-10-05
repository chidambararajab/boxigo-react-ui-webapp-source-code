import React from "react";
import "./InventoryDetails.css";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

function InventoryDetails() {
  return (
    <div className="inventoryDetails">
      <div className="inventoryDetails_topDetails">
        <div>
          <h4>Inventory Details</h4>
        </div>
        <div className="inventoryDetails_buttonDiv">
          <button className="inventoryDetails_button">Edit Inventory</button>
        </div>
      </div>
      <div>
        <h4 className="inventoryDetails_subDetails">
          Living Room
          <div className="inventoryDetails_subDetails_count">
            <small>(9)</small>
          </div>
          <div>
            <ExpandLessRoundedIcon className="inventoryDetails_icon1" />
          </div>
        </h4>
      </div>
      <div>
        <h4 className="inventoryDetails_subDetails">
          Bed Room
          <div className="inventoryDetails_subDetails_count">
            <small>(6)</small>
          </div>
          <div>
            <ExpandLessRoundedIcon className="inventoryDetails_icon2" />
          </div>
        </h4>
      </div>
      <div>
        <h4 className="inventoryDetails_subDetails">
          Kitchen
          <div className="inventoryDetails_subDetails_count">
            <small>(7)</small>
          </div>
          <div>
            <ExpandLessRoundedIcon className="inventoryDetails_icon3" />
          </div>
        </h4>
      </div>
      <div>
        <h4 className="inventoryDetails_subDetails">
          Bathroom
          <div className="inventoryDetails_subDetails_count">
            <small>(4)</small>
          </div>
          <div>
            <ExpandLessRoundedIcon className="inventoryDetails_icon4" />
          </div>
        </h4>
      </div>
    </div>
  );
}

export default InventoryDetails;
